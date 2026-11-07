import {Metadata} from "next"
import ProfileClient from "./ProfileClient"

export const metaData: Metadata = {
    title: "Profile",
}

export default function page(){
    return <ProfileClient />
}