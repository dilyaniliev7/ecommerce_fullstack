import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const robotoSans = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: {
		template: "%s | Urban Threads Co.",
		default: "Urban Threads Co.",
	},
	description: `Urban Thread Co. is a modern streetwear brand focused on clean design, comfort, and everyday style.
We create versatile pieces that fit seamlessly into your daily life — whether you're out with friends or building your future.`,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${robotoSans.variable} h-full antialiased`}>
			<body className="min-h-screen flex flex-col">
			    <Navbar />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
