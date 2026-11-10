"use client"
import Sidebar from "@/components/Sidebar"
import { ChangeEvent, useState } from "react"
import { getFilePreview } from "@/lib/utils"
import { toast } from "sonner"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc"

export type ProfileFormDataType = {
    full_name: string,
    email: string
    username:string
    avatar:{
        file:Blob,
        preview:string
    } | null
    password:string
    password2:string
}

const DefaultProfileFormData = {
    full_name: "",
    email: "",
    username:"",
    avatar:null,
    password:"",
    password2:""
}

export default function ProfileClient() {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string,Array<string>>>({})
    const [showPassword, setShowPassword] = useState(false)
    const [profileFormData, setProfileFormData] = useState<RegisterFormDataType>(DefaultRegisterFormDataType)
    const fetchProfileDataToProfileFormData = async () => {
        try {
            const res = await privateApiInstance.get("authentication/profile/")
            setProfileFormData({...DefaultProfileFormData, ...res.data, avatar:null })
        }  catch (error) {
            setProfileFormData(DefaultRegisterFormData)
        }
    }

    useEffect(() => {
        fetchProfileDataToProfileFormData()
    }, [])

    const handleOnChange = async (e:ChangeEvent<any>, isAvatar:boolean = false) => {
            setLoading(true)
            if(isAvatar){
                const file = e.target.files?.[0] || null
                if(file){
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
        setLoading(true)
        e.preventDefault()
        const formData = new FormData()
        formData.set("full_name", registerFormData.full_name)
        formData.set("username", registerFormData.username)
        formData.set("password", registerFormData.password)
        if (registerFormData.avatar) formData.set("avatar", registerFormData.avatar.file)

        const res = await UpdateProfile(formData)
        if(res.error){
            setErrors(res.error)
            toast.error(gisterRes.error.detail || "Account could not be updated")
        }else{
            setErrors({})
            toast.success("Account has been updated successfully!", {richColors:true})
            RefreshUserData()
            fetchProfileDataToProfileFormData()
        }
        setLoading(false)
    }

	return (
		<div className="w-full min-h-screen bg-white">
			<div className="max-w-7xl gap-2 sm:grid sm:grid-cols-[min(300px,50%)_1fr] p-4 w-full mx-auto">
				<Sidebar />
				<div className="max-w-7xl min-h-[40vh] w-full mx-auto p-10 flex flex-col items-center gap-4">
					<h1 className="text-5xl font-bold">Profile</h1>

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

							</div>

							{/* Full Name */}
							<div>
								<label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
									Full Name *
								</label>
								<input type="text" id="full_name" name="full_name" value={registerFormData.full_name} onChange={()=> 1 } readOnly placeholder="John Doe" className="custom-input" />
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
									Username *
								</label>
								<input type="text" id="username" name="username" value={registerFormData.username} onChange={handleOnChange} placeholder="Username" className="custom-input" />
								{errors?.username && <p className="text-sm text-red-600 m-2">{errors?.username}</p>}
							</div>
                            <div>
                                <label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-1">
                                        New Password
                                </label>
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
									Confirm New Password
								</label>
								<input type={showPassword ? "text": "password"} id="password2" name="password2" value={registerFormData.password2} onChange={handleOnChange} placeholder="Confirm Password" className="custom-input" />
								{errors?.password2 && <p className="text-sm text-red-600 m-2">{errors?.password2}</p>}
							</div>

							{/* Submit button */}
							<button inert={loading} type="submit" className="custom-btn w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 gap-2">

								{loading ?
                                        <>
                                            Updating <VscLoading className="animate-spin"/>

                                        </>
                                    : "Update"}
							</button>
						</form>
				</div>
			</div>
		</div>
	)
}
