"use client"
import Loading from "@/app/loading"
import { ReactNode, useEffect } from 'react'
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation"

export default function PrivateRouteWrapper({children}:{children:ReactNode}){
    const {isAuthenticated} = useAuthStore()
    const router = useRouter()
    useEffect(() => {
        if (!loading && !isAuthenticated){
                router.push("./login")
        }
    }, [loading, isAuthenticated])

    if(loading) return <Loading />
    return children
}