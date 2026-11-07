import Sidebar from "@/components/Sidebar"

export default function ProfileClient() {
	// Static user data (placeholders)
	const mockUser = {
		full_name: "John Doe",
		email: "john.doe@example.com",
		username: "johndoe",
		avatar: "/default-avatar.jpg",
	}

	return (
		<div className="w-full min-h-screen bg-white">
			<div className="max-w-7xl gap-2 sm:grid sm:grid-cols-[min(300px,50%)_1fr] p-4 w-full mx-auto">
				<Sidebar />
				<div className="max-w-7xl min-h-[40vh] w-full mx-auto p-10 flex flex-col items-center gap-4">
					<h1 className="text-5xl font-bold">Profile</h1>

					<form action="#" method="POST" className="flex flex-col justify-center items-center gap-6 my-4 w-full max-w-150">
						{/* Avatar */}
						<div className="flex flex-col w-full space-y-2 mb-3">
							<label htmlFor="avatar" className="mx-auto flex justify-center items-center flex-col gap-3">
								<img className="w-25 h-25 object-cover object-center rounded-full border-2 border-gray-200" src={mockUser.avatar} alt="Avatar" />
								<span className="custom-btn cursor-pointer flex h-fit justify-center items-center gap-3 bg-sky-600 text-white">Upload</span>
							</label>
							<input type="file" id="avatar" name="avatar" accept="image/*" className="hidden" />
						</div>

						{/* Full Name */}
						<div className="flex flex-col w-full space-y-2">
							<label htmlFor="full_name">Full Name</label>
							<input className="custom-input" type="text" id="full_name" name="full_name" placeholder="John Doe" defaultValue={mockUser.full_name} />
						</div>

						{/* Email */}
						<div className="flex flex-col w-full space-y-2">
							<label htmlFor="email">Email</label>
							<input className="custom-input" type="email" id="email" name="email" placeholder="example@gmail.com" defaultValue={mockUser.email} />
						</div>

						{/* Username */}
						<div className="flex flex-col w-full space-y-2">
							<label htmlFor="username">Username</label>
							<input className="custom-input" type="text" id="username" name="username" placeholder="Username" defaultValue={mockUser.username} />
						</div>

						{/* New Password */}
						<div className="flex flex-col w-full space-y-2">
							<label htmlFor="password">New Password</label>
							<input className="custom-input" type="password" id="password" name="password" placeholder="New Password" />
						</div>

						{/* Confirm New Password */}
						<div className="flex flex-col w-full space-y-2">
							<label htmlFor="password2">Confirm New Password</label>
							<input className="custom-input" type="password" id="password2" name="password2" placeholder="Confirm New Password" />
						</div>

						<button type="submit" className="w-[10ch] h-[5ch] mt-2 custom-btn bg-sky-500 hover:bg-sky-600 text-white font-bold tracking-wider text-nowrap whitespace-nowrap flex justify-center items-center">
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
