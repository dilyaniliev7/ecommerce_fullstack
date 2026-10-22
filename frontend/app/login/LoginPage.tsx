import Link from "next/link"

export default function LoginClient() {
	return (
		<div className="w-full  bg-white relative">
			{/* Background grid */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

			<div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
				<div className="max-w-md w-full">
					<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
						<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h1>

						<form action="#" method="POST" className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input type="email" id="email" name="email" placeholder="example@gmail.com" className="custom-input" />
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
									Password
								</label>
								<input type="password" id="password" name="password" placeholder="Password" className="custom-input" />
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
