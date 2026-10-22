
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Privacy Policy",
}

export default function PrivacyPolicy() {
	return (
		<div className="w-full min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white py-16">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Privacy Policy</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">Your privacy matters. Learn how we collect, use, and protect your information.</p>
					<p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
				</div>
			</section>

			{/* Privacy Content */}
			<section className="py-12 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
						<div className="prose prose-gray max-w-none">
							<p className="text-gray-600 leading-relaxed mb-6">At Urban Thread Co., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We may collect personal information that you voluntarily provide to us when you register on the site, place an order, subscribe to a newsletter, or contact us. This may include:</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
								<li>Name, email address, phone number, and shipping/billing address</li>
								<li>Payment information (processed securely through third-party payment gateways)</li>
								<li>Order history and preferences</li>
								<li>Any communications you send us</li>
							</ul>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
								<li>Process and fulfill your orders</li>
								<li>Communicate with you about your orders, account, or inquiries</li>
								<li>Improve our website, products, and customer service</li>
								<li>Send promotional emails (you may opt out at any time)</li>
								<li>Comply with legal obligations</li>
							</ul>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Sharing Your Information</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
								<li>Service providers (e.g., payment processors, shipping carriers) who assist in operating our business</li>
								<li>Law enforcement or regulatory authorities if required by law</li>
								<li>With your consent or as otherwise disclosed at the time of collection</li>
							</ul>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Cookies and Tracking Technologies</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can set your browser to refuse cookies, but some parts of the site may not function properly.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Data Security</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Your Rights</h2>
							<p className="text-gray-600 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
								<li>Access the personal information we hold about you</li>
								<li>Request correction or deletion of your data</li>
								<li>Object to or restrict certain processing</li>
								<li>Withdraw consent where applicable</li>
							</ul>
							<p className="text-gray-600 leading-relaxed mb-4">To exercise these rights, please contact us using the information below.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Third-Party Links</h2>
							<p className="text-gray-600 leading-relaxed mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Children's Privacy</h2>
							<p className="text-gray-600 leading-relaxed mb-4">Our site is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will delete it.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Changes to This Policy</h2>
							<p className="text-gray-600 leading-relaxed mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.</p>

							<h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Contact Us</h2>
							<p className="text-gray-600 leading-relaxed mb-4">
								If you have any questions or concerns about this Privacy Policy, please contact us at:
								<br />
								<strong className="text-gray-900">Email:</strong> privacy@urbanthreadco.com
								<br />
								<strong className="text-gray-900">Address:</strong> Plot 45, Block 6, PECHS, Karachi, 75400, Pakistan
							</p>

							<hr className="my-8" />

							<p className="text-sm text-gray-500 italic">This Privacy Policy was last updated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
