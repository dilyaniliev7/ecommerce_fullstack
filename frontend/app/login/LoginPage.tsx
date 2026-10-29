"use client"
import Link from "next/link"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import { Login, Register } from "@/lib/auth"
import { redirect } from "next/navigation"
import { SubmitEventHandler, useEffect, useState } from "react"


export default function LoginClient() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<Record<string,Array<string>>>({})
    const [showPassword, setShowPassword] = useState(false)


    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        const loginRes = awaitLogin({email, password})
        if(loginRes.error){
            setErrors(loginRes.error)
        }else{
            setEmail("")
            setPassword("")
            redirect("/")
        }
    }

	return (
		<div className="w-full  bg-white relative">
			{/* Background grid */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

			<div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
				<div className="max-w-md w-full">
					<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
						<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h1>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@gmail.com" className="custom-input" />
								{errors?.email && <p className="text-sm text-red-600 m-2">{errors?.email}</p>}
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
									Password
								</label>
								<div className="relative">
								    <input type={showPassword ? "text": "password"} id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="custom-input" />
								    <div className="absolute top-1/4 right-3 text-2xl cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                                        {showPassword?
                                            <FaRegEyeSlash />
                                            :
                                             <FaRegEye />}
								    </div>
								</div>
								{errors?.password && <p className="text-sm text-red-600 m-2">{errors?.password}</p>}
							</div>

							<div className="text-center text-sm">
								<p>
									Don't have an account?{" "}
									<Link href="/register" className="text-sky-600 hover:underline">
										Register
									</Link>
								</p>
							</div>

							<button type="submit" className="custom-btn w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
