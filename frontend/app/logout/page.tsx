import { Metadata } from "next"
import LogoutClient from "./LogoutClient"

export const metadata: Metadata = {
    title: "Logout",
}

export default async function LogoutPage(){
    return <LogutClient />
}