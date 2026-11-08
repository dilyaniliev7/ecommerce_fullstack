"use client"
import Link from "next/link"
import PrivateRouteWrapper from "./PrivateRouteWrapper"
import { useAuthStore } from "@/store/useAuthStore"

export default function Sidebar() {
	const {user} = useAuthStore()

	return (
        <PrivateRouteWrapper>
            <aside className="border rounded border-[#ccc] flex flex-col items-center py-4">
                {/* User info */}
                <div className="flex flex-col py-2 justify-center items-center">
                    <img className="w-30 h-30 mb-3 aspect-square object-cover object-center rounded-full" src={getBackendAbsoluteUrl(user?.avatar || "/media/default-avatar.jpg")} alt={user?.full_name} />
                    <p>{user?.full_name}</p>
                    <p className="opacity-80">@{user?.username}</p>
                </div>
                <hr />
                {/* Navigation */}
                <nav className="w-full px-4">
                    <ul className="w-full flex flex-col gap-2">
                        <Link href="/profile">
                            <li className="custom-btn text-black w-full">Profile</li>
                        </Link>
                        <Link href="/wishlist">
                            <li className="custom-btn text-black w-full relative">
                                Wishlist
                                <span className="mx-3 right-3 font-black">3</span>
                            </li>
                        </Link>
                        <Link href="/orders">
                            <li className="custom-btn text-black w-full">Orders</li>
                        </Link>
                    </ul>
                </nav>
            </aside>
        </PrivateRouteWrapper>
	)
}
