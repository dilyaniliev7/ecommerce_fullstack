import { Metadata } from "next"
import LoginClient from "./PrivacyPolicy";

export const metadata:Metadata = {
    title: "Privacy"
}

export default function Login(){
    return <PrivacyPolicy />
}