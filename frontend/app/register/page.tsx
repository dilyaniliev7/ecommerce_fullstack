import { Metadata } from "next"
import LoginClient from "./RegisterClient";

export const metadata:Metadata = {
    title: "Register"
}

export default function RegisterPage(){
    return <RegisterClient />
}