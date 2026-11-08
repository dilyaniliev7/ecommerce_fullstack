import axios from "axios"
import { ACCESS_TOKEN_COOKIE_NAME, BACKEND_URL, REFRESH_TOKEN_COOKIE_NAME } from "./constants"
import { BACKEND_URL } from "./constants"
import Cookie from "js-cookie"
import { IsTokenExpired } from "./auth"

export const publicApiInstance = axios.create({
    baseURL: BACKEND_URL
})

const privateApiInstance = axios.create({
    baseURL: BACKEND_URL
})

privateApiInstance.interceptors.request.use(async (request)=>{
    const access = Cookie.get(ACCESS_TOKEN_COOKIE_NAME)
    const refresh = Cookie.get(REFRESH_TOKEN_COOKIE_NAME)

    if(IsTokenExpired(access) && IsTokenExpired(refresh)) return request
    if (IsTokenExpired(access){
        const {error, access} = await RefreshToken()
        if (access){
            request.headers.Authorization = `Bearer ${access}`
        }
    } else {
        request.headers.Authorization = `Bearer ${access}`
    }
    return request
})

export {privateApiInstance}