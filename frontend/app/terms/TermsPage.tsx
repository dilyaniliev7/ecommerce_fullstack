import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
    title: "Terms of services",
}

export default function TermsPage() {
	return (
		<div className="w-full min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white py-16">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Terms & Conditions</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">Please read these terms carefully before using our website.</p>
					<p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
				</div>
			</section>

			{/* Terms Content */}
			<section className="py-12 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
						<div className="prose prose-gray max-w-none">
							{/* Introduction */}
							<p className="text-gray-600 leading-relaxed mb-6">Welcome to Urban Thread Co. These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
							<p className="text-gray-600 leading-relaxed mb-4">By using this website, you confirm that you accept these terms and agree to comply with them. If you do not agree to these terms, you must not use our website.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Use of Our Site</h2>
							<p className="text-gray-600 leading-relaxed mb-4">You may use our site only for lawful purposes. You must not use our site in any way that breaches any applicable local, national, or international law or regulation.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Intellectual Property</h2>
							<p className="text-gray-600 leading-relaxed mb-4">All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, hyperlinks, and designs, are the property of Urban Thread Co. and are protected by intellectual property laws.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. User Accounts</h2>
							<p className="text-gray-600 leading-relaxed mb-4">When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your password and for any activities under your account.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Orders and Payments</h2>
							<p className="text-gray-600 leading-relaxed mb-4">By placing an order, you agree to pay the specified price. We reserve the right to refuse or cancel orders at any time for any reason, including but not limited to product availability, errors in pricing, or suspected fraud.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Shipping and Delivery</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We strive to process and ship orders promptly. Delivery times are estimates and not guaranteed. We are not liable for delays caused by shipping carriers.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Returns and Refunds</h2>
							<p className="text-gray-600 leading-relaxed mb-4">If you are not satisfied with your purchase, you may return eligible items within 14 days of receipt. Items must be unused and in original packaging. Refunds will be processed after inspection.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Limitation of Liability</h2>
							<p className="text-gray-600 leading-relaxed mb-4">To the fullest extent permitted by law, Urban Thread Co. shall not be liable for any indirect, incidental, or consequential damages arising from your use of our site or products.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Privacy</h2>
							<p className="text-gray-600 leading-relaxed mb-4">
								Your use of our site is also governed by our{" "}
								<Link href="/privacy" className="text-sky-600 hover:underline">
									Privacy Policy
								</Link>
								. Please review our Privacy Policy to understand our practices.
							</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Changes to Terms</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We may revise these terms from time to time. The revised version will be effective from the date of posting on this page. Your continued use of the site after changes constitutes acceptance.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">11. Contact Us</h2>
							<p className="text-gray-600 leading-relaxed mb-4">
								If you have any questions about these Terms, please contact us at:
								<br />
								<strong className="text-gray-900">Email:</strong> legal@urbanthreadco.com
								<br />
								<strong className="text-gray-900">Address:</strong> Plot 45, Block 6, PECHS, Karachi, 75400, Pakistan
							</p>

							<hr className="my-8" />

							<p className="text-sm text-gray-500 italic">These Terms & Conditions were last updated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
