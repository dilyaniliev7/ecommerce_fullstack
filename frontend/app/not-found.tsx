import Link from "next/link"

export default function NotFound() {
	return (
		<div className="w-full py-24 bg-white flex items-center justify-center">
			{/* Background grid */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

			<div className="container mx-auto px-4 text-center">
				{/* Large 404 */}
				<h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">404</h1>

				{/* Message */}
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
				<p className="text-lg text-gray-600 max-w-md mx-auto mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p>

				{/* Button to home */}
				<Link href="/" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-sky-700 hover:shadow-lg transition-all duration-200">
					Back to Home
				</Link>
			</div>
		</div>
	)
}
