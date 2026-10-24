import Cookie from "js-cookie"
import { jwtDecode } from "jwt-decode"

export const Login = async (data:{email:string, password:string}) : Promise<{error:any | null}>=> {
    try {
        const res = await axios.post("authentication/token/", data)
        const {access, refresh} = res.data


        return {error:null}
    } catch (error:any){
        return {error: error.response?.data || {}
    }

}