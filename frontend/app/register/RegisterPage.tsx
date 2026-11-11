"use client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc"
import { toast } from "sonner"
import { ChangeEvent, useState } from "react"
import { getFilePreview } from "@/lib/utils"
import { Register } from "@/lib/auth"



const DefaultRegisterFormDataType = {
    full_name: "",
    email: "",
    username:"",
    avatar:null,
    password:"",
    password2:""
}


export default function RegisterClient() {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string,Array<string>>>({})
    const [showPassword, setShowPassword] = useState(false)
    const [registerFormData, setRegisterFormData] = useState<RegisterFormDataType>(DefaultRegisterFormDataType)

    const handleOnChange = async (e:ChangeEvent<any>, isAvatar:boolean = false) => {
            setLoading(true)
            if(isAvatar){
                const file = e.target.files?.[0] || null
                if(file){
                    const result = avatar.safeParse(file)
                    if (!result.success){
                        setErrors(prev: =>({...prev, avatar: result.error.issues.map(e:=>e.message)}))
                        setLoading(false)
                        return
                    }
                    const preview = await getFilePreview(file)
                    setRegisterFormData(prev:RegisterFormDataType => ({...prev, avatar: {file:file, preview:preview}))
                } else{
                    setRegisterFormData(prev:RegisterFormDataType => ({...prev, avatar:null}))
                }
            } else{
                setRegisterFormData(prev:RegisterFormDataType => ({...prev, [e.target.name]: e.target.value}))
            }
            setLoading(false)
    }
    const handleSubmit = async (e:any) =>{
        e.preventDefault()

        const result = RegisterFormSchema.safeParse(registerFormData)
        if (!result.success){
            const formattedErrors = z.flattenError(result.error)
            setErrors(formattedErrors.fieldErrors)
            return
        }

        setLoading(true)
        const formData = new FormData()
        formData.set("full_name", registerFormData.full_name)
        formDatas.set("email", registerFormData.email)
        formData.set("username", registerFormData.username)
        formData.set("password", registerFormData.password)
        if (registerFormData.avatar) formData.set("avatar", registerFormData.avatar.file)

        const registerRes = await Register(formData)
        if(registerRes.error){
            setErrors(registerRes.error)
            toast.error(gisterRes.error.detail || "Account could not be created")
        }else{
            setRegisterFormData(DefaultRegisterFormDataType)
            toast.success("Account has created successfully!", {richColors:true})
            redirect("/")
        }
        setLoading(false)
    }

	return (
		<div className="w-full min-h-screen bg-white relative">
			{/* Background grid */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

			<div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
				<div className="max-w-md w-full">
					<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
						<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Register</h1>

						<form onSubmit={handleSubmit} className="space-y-5 w-full">
							{/* Avatar Upload – static placeholder */}
							<div className="flex flex-col items-center space-y-2">
								<label htmlFor="avatar" className="cursor-pointer">
									<img src={registerFormData.avatar?.preview || "/default-avatar.png"} alt="Avatar" className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 hover:border-sky-600 transition-colors" />
								</label>
								<input type="file" id="avatar" name="avatar" accept="image/*" onChange={(e)=>handleOnChange(e,true)} className="hidden" />
								<label htmlFor="avatar" className="custom-btn bg-sky-600 hover:bg-sky-700 text-white text-sm py-1 px-3 cursor-pointer">
									Upload Avatar
								</label>
								{errors?.avatar && errors.avatar.map(e: i=> <p key={i} className="text-sm text-red-600 m-1">{e}</p>)}

							</div>

							{/* Full Name */}
							<div>
								<label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
									Full Name
								</label>
								<input type="text" id="full_name" name="full_name" value={registerFormData.full_name} onChange={handleOnChange} placeholder="John Doe" className="custom-input" />
								{errors?.full_name && <p className="text-sm text-red-600 m-2">{errors?.full_name}</p>}
							</div>

							{/* Email */}
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input type="email" id="email" name="email" value={registerFormData.email} onChange={handleOnChange} placeholder="example@gmail.com" className="custom-input" />
								{errors?.email && <p className="text-sm text-red-600 m-2">{errors?.email}</p>}
							</div>

							{/* Username */}
							<div>
								<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
									Username
								</label>
								<input type="text" id="username" name="username" value={registerFormData.username} onChange={handleOnChange} placeholder="Username" className="custom-input" />
								{errors?.username && <p className="text-sm text-red-600 m-2">{errors?.username}</p>}
							</div>

							{/* Password */}
							<div className="relative">
								    <input type={showPassword ? "text": "password"} id="password" name="password" value={registerFormData.password} onChange={handleOnChange} placeholder="Password" className="custom-input" />
								    <div className="absolute top-1/4 right-3 text-2xl cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                                        {showPassword?
                                            <FaRegEyeSlash />
                                            :
                                             <FaRegEye />}
								    </div>
								</div>
								{errors?.password && <p className="text-sm text-red-600 m-2">{errors?.password}</p>}
							</div>

							{/* Confirm Password */}
							<div>
								<label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-1">
									Confirm Password
								</label>
								<input type={showPassword ? "text": "password"} id="password2" name="password2" value={registerFormData.password2} onChange={handleOnChange} placeholder="Confirm Password" className="custom-input" />
								{errors?.password2 && <p className="text-sm text-red-600 m-2">{errors?.password2}</p>}
							</div>

							{/* Link to login */}
							<div className="text-center text-sm">
								<p>
									Already have an account?{" "}
									<Link href="/login" className="text-sky-600 hover:underline">
										Login
									</Link>
								</p>
							</div>

							{/* Submit button */}
							<button inert={loading} type="submit" className="custom-btn w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 gap-2">

								{loading ?
                                        <>
                                            Registering <VscLoading className="animate-spin"/>

                                        </>
                                    : "Register"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
