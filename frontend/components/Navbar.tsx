import Link from "next/link"
import { BsCart2 } from "react-icons/bs"

export default function Navbar() {
	return (
		<header className="w-full border-b border-[#ddd] py-1 relative bg-white">
			<div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
				{/* Logo */}
				<Link href={"/"}>
					<div className="brand max-w-36">
						<img src="/logo.svg" className="object-contain object-center w-full" alt="Logo" />
					</div>
				</Link>

				{/* Right side: Cart + Hamburger (visible on mobile) */}
				<div className="flex items-center gap-3 md:hidden!">
					{/* Cart icon - always visible */}
					<Link href={"/cart"} className="relative">
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
						<BsCart2 size={22} />
					</Link>

					{/* Hamburger button (only visible on mobile) */}
					<label htmlFor="menu-toggle" className="cursor-pointer p-1">
						<div className="w-6 h-5 flex flex-col justify-between">
							<span className="w-full h-0.5 bg-gray-800 block"></span>
							<span className="w-full h-0.5 bg-gray-800 block"></span>
							<span className="w-full h-0.5 bg-gray-800 block"></span>
						</div>
					</label>
				</div>

				{/* Hidden checkbox for toggling mobile menu (CSS-only) */}
				<input type="checkbox" id="menu-toggle" className="hidden peer" />

				{/* Desktop navigation menu (visible on md+) */}
				<nav className="hidden md:flex items-center gap-8">
					<ul className="flex items-center gap-6">
						<li>
							<Link href={"/"} className="hover:text-blue-600 transition">
								Home
							</Link>
						</li>
						<li>
							<Link href={"/products"} className="hover:text-blue-600 transition">
								Products
							</Link>
						</li>
						<li>
							<Link href={"/contact"} className="hover:text-blue-600 transition">
								Contact
							</Link>
						</li>
					</ul>

					<div className="profile flex items-center gap-4">
						{/* Authenticated block */}
						<div className="flex items-center gap-3">
							<Link href={"/profile"}>
								<img src={"/placeholder.jpg"} className="w-10 h-10 rounded-full object-cover border border-[#ddd]" alt="avatar" />
							</Link>
							<Link href={"/logout"}>
								<button className="custom-btn bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md transition">Logout</button>
							</Link>
						</div>

						{/* Non-authenticated block */}
						<div className="flex items-center gap-3">
							<Link href={"/login"}>
								<button className="custom-btn bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition">Login</button>
							</Link>
							<Link href={"/register"}>
								<button className="custom-btn bg-neutral-200 hover:bg-neutral-300 text-black px-4 py-2 rounded-md transition">Register</button>
							</Link>
						</div>
					</div>

					{/* Cart icon for desktop */}
					<Link href={"/cart"} className="relative ml-2">
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
						<BsCart2 size={22} />
					</Link>
				</nav>

				{/* Mobile menu (toggled via checkbox, hidden on md+) */}
				<nav className="absolute top-full left-0 w-full bg-white border-t border-[#ddd] shadow-lg p-5 z-50 hidden peer-checked:flex flex-col justify-center items-center *:flex *:justify-center *:items-center gap-5 md:hidden!">
					<ul className="flex flex-col gap-4">
						<li>
							<Link href={"/"} className="block py-1 hover:text-blue-600 transition">
								Home
							</Link>
						</li>
						<li>
							<Link href={"/products"} className="block py-1 hover:text-blue-600 transition">
								Products
							</Link>
						</li>
						<li>
							<Link href={"/contact"} className="block py-1 hover:text-blue-600 transition">
								Contact
							</Link>
						</li>
					</ul>

					<div className="profile flex flex-col gap-4">
						{/* Authenticated block */}
						<div className="flex items-center gap-3">
							<Link href={"/profile"}>
								<img src={"/placeholder.jpg"} className="w-10 h-10 rounded-full object-cover border border-[#ddd]" alt="avatar" />
							</Link>
							<Link href={"/logout"}>
								<button className="custom-btn bg-rose-500 hover:bg-rose-600 text-white w-full text-center py-2 rounded-md transition">Logout</button>
							</Link>
						</div>

						{/* Non-authenticated block */}
						<div className="flex flex-col gap-3">
							<Link href={"/login"}>
								<button className="custom-btn bg-sky-500 hover:bg-sky-600 text-white w-full text-center py-2 rounded-md transition">Login</button>
							</Link>
							<Link href={"/register"}>
								<button className="custom-btn bg-neutral-200 hover:bg-neutral-300 text-black! w-full text-center py-2 rounded-md transition">Register</button>
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}
