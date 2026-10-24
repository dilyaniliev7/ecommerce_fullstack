import { Metadata } from "next"
import LoginClient from "./LoginClient";
import { Login } from "@/lib/auth"

export const metadata:Metadata = {
    title: "Login"
}

export default async function LoginPage(){
    await Login({email:"dilyaniliev@abv.bg", password:"includee7"})
    return <LoginClient />
}