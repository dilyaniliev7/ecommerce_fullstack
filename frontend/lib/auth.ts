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