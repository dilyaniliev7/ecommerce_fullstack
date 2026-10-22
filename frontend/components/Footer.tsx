import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
	return (
		<footer className="w-full border-t border-[#ccc] bg-white mt-auto">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					{/* Copyright */}
					<div className="text-sm text-gray-600 text-center md:text-left">&copy; {new Date().getFullYear()} Jamil Codes. All Rights Reserved.</div>

					{/* Footer Links */}
					<div className="flex gap-6">
						<Link href="/privacy" className="text-sm text-gray-600 hover:text-sky-600 transition">
							Privacy Policy
						</Link>
						<Link href="/terms" className="text-sm text-gray-600 hover:text-sky-600 transition">
							Terms of Service
						</Link>
						<Link href="/contact" className="text-sm text-gray-600 hover:text-sky-600 transition">
							Contact
						</Link>
					</div>

					{/* Social Icons */}
					<div className="flex gap-4">
						<a href="#" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600 transition" aria-label="Facebook">
							<FaFacebook size={18} />
						</a>
						<a href="#" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600 transition" aria-label="Twitter">
							<FaTwitter size={18} />
						</a>
						<a href="#" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-600 transition" aria-label="Instagram">
							<FaInstagram size={18} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
