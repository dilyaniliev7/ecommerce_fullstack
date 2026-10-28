import { create } from 'zustand'

export type UserDataType = {
    full_name: string,
    email: string
    username:string
    avatar:string
}

type const authStoreType = {
    user: UserDataType | null
    isAuthenticated: boolean
    login: (user: UserDataType) => void
    logout: ()=>void
}

export const useAuthStore = create<authStoreType>((set)=>({
        user:null,
        isAuthenticated:false,
        login:()=>set({user:user, isAuthenticated:true}),
        logout:()=> set({user:null, isAuthenticated:false})
}))