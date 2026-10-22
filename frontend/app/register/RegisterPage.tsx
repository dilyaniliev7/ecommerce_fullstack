import Link from "next/link"

export default function RegisterClient() {
	return (
		<div className="w-full min-h-screen bg-white relative">
			{/* Background grid */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

			<div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
				<div className="max-w-md w-full">
					<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
						<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Register</h1>

						<form action="#" method="POST" className="space-y-5">
							{/* Avatar Upload – static placeholder */}
							<div className="flex flex-col items-center space-y-2">
								<label htmlFor="avatar" className="cursor-pointer">
									<img src="/default-avatar.jpg" alt="Avatar" className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 hover:border-sky-600 transition-colors" />
								</label>
								<input type="file" id="avatar" name="avatar" accept="image/*" className="hidden" />
								<label htmlFor="avatar" className="custom-btn bg-sky-600 hover:bg-sky-700 text-white text-sm py-1 px-3 cursor-pointer">
									Upload Avatar
								</label>
							</div>

							{/* Full Name */}
							<div>
								<label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
									Full Name
								</label>
								<input type="text" id="full_name" name="full_name" placeholder="John Doe" className="custom-input" />
							</div>

							{/* Email */}
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input type="email" id="email" name="email" placeholder="example@gmail.com" className="custom-input" />
							</div>

							{/* Username */}
							<div>
								<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
									Username
								</label>
								<input type="text" id="username" name="username" placeholder="Username" className="custom-input" />
							</div>

							{/* Password */}
							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
									Password
								</label>
								<input type="password" id="password" name="password" placeholder="Password" className="custom-input" />
							</div>

							{/* Confirm Password */}
							<div>
								<label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-1">
									Confirm Password
								</label>
								<input type="password" id="password2" name="password2" placeholder="Confirm Password" className="custom-input" />
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
							<button type="submit" className="custom-btn w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2">
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
