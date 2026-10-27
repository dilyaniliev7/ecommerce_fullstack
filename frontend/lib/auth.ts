"use client"

import Cookie from "js-cookie"
import { jwtDecode } from "jwt-decode"
import { publicApiInstance } from "./apiInstance"
import {ACCESS_TOKEN_COOKIE_NAME, COOKIE_OPTIONS, REFRESH_TOKEN_COOKIE_NAME} from "./constants"

const SaveAuthTokens = (data:{access:string, refresh:string}) => {
    cookie.set(ACCESS_TOKEN_COOKIE_NAME, data.access, {...COOKIE_OPTIONS, expires:1})
    cookie.set(REFRESH_TOKEN_COOKIE_NAME, data.refresh, {...COOKIE_OPTIONS, expires:30})
}

export const Login = async (data:{email:string, password:string}) : Promise<{error:any | null}>=> {
    try {
        const res = await axios.post("authentication/token/", data)
        const {access, refresh} = res.data
        SaveAuthTokens({access, refresh})

        return {error:null}
    } catch (error:any){
        return {error: error.response?.data || {}
    }

}

export const Register = async (data: FormData) : Promise<{error:any | null}>=> {
    try {
        const email = data.get("email") as string
        const password = data.get("password") as string
        await publicApiInstance.post("authentication/register/", data)
        const loginRes = await Login({ email:email, password:password })
        if(loginRes.error){
            return {error:loginRes.error}
        }
        return {error:null}
    } catch (error:any){
        return {error: error.response?.data || {}
    }

}

export const Logout = () => {
    Cookie.remove(ACCESS_TOKEN_COOKIE_NAME)
    Cookie.remove(REFRESH_TOKEN_COOKIE_NAME)
}

let isRefreshing = false
type RefreshQueueCallbackType = (res:{access:string, refresh:string, error:boolean})=>any
let refreshQueue: RefreshQueueCallbackType[]= []
const subscribe = (cb:RefreshQueueCallbackType)=>{
    refreshQueue.push(cb)
}
const notify: RefreshQueueCallbackType = (res)=>{
    refreshQueue.forEach(cb: RefreshQueueCallbackType=>{
        cb(res)
    })
    refreshQueue = []
}

export const RefreshToken = async(): Promise<{ error: boolean}> =>{
    try {
        if (isRefreshing){
            const res = await new Promise<{ access:string, refresh:string, error:boolean}(resolve=>{
                    subscribe((res: {access:string, refresh:string, error:boolean }) => {
                        resolve(res)
                    })
            })
            if(res.error){
                Logout()
                return {error:true}
            } else{
                SaveAuthTokens({access:res.access, refresh:res.refresh})
                return {error:false}
            }

        } else{
            const refresh_token = Cookie.get(REFRESH_TOKEN_COOKIE_NAME)
            isRefreshing = true
            const res = await publicApiInstance.post("authentication/token/refresh", {
                refresh:refresh_token
            })
            SaveAuthTokens({access:res.data.access, refresh:res.data.refresh})
            notify(res.data)
            isRefreshing = false
            return {error:false}
        }

    } catch(error){
        notify({access:"", refresh:"", error:true})
        isRefreshing=false
        Logout()
        return {error:true}
    }
}

export const IsTokenExpired = (token:string|undefined|null) boolean=>{
    if (!token) return true
    try {
        const {exp} = jwtDecode(token)
        if (!exp) return true
        return Date.now() / 1000 > exp
    } catch (error){
        return true
    }
}