import Link from "next/link"
import Sidebar from "./Sidebar"

export default function Sidebar() {
	const mockUser = {
		full_name: "John Doe",
		username: "johndoe",
		avatar: "/default-avatar.jpg",
	}

	return (
		<aside className="border rounded border-[#ccc] flex flex-col items-center py-4">
			{/* User info */}
			<div className="flex flex-col py-2 justify-center items-center">
				<img className="w-30 h-30 mb-3 aspect-square object-cover object-center rounded-full" src={mockUser.avatar} alt={mockUser.full_name} />
				<p>{mockUser.full_name}</p>
				<p className="opacity-80">@{mockUser.username}</p>
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
	)
}
