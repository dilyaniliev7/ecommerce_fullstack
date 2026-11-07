"use client"
import Link from "next/link"
import { Logout } from "@/lib/auth"
import { useEffect, useState } from "react"
import Loading from "../loading"
import { toast } from "sonner"

export default function LogoutClient() {
    const [loading, setLoading] = useState(true)
    useEffect (() => {
        Logout()
        setLoading(false)
        toast.info("You have been logged out successfully", {richColors:true})
    }, [])

    if (loading) return <Loading />

	return (
		<div className="w-full bg-white relative">
			{/* Background grid */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

			<div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
				<div className="max-w-md w-full text-center">
					<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-4">You've Been Logged Out</h1>
						<p className="text-gray-600 mb-6">You have successfully logged out. Thank you for visiting!</p>
						<Link href="/login" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-sky-700 hover:shadow-lg transition-all duration-200">
							Log in Again
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
