"use client"
import Link from "next/link"
import { BsCartPlus, BsStar, BsStarFill } from "react-icons/bs"
import { TbHeartMinus } from "react-icons/tb"
import { useEffect, useState } from 'react'
import { publicApiInstance } from "@/lib/apiInstance"

export default function ProductsClient({products, category}) {
    const [products, setProducts] = useState<Record<string, any>[]; category: string | null>([])
    const fetchProducts = async () => {
        try {
        const res = await publicApiInstance.get("products/>featured=true")
        setProducts(res.data)
        } catch (error) {
                console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
	// Helper to render fixed 4-star rating (no half stars)
	const renderStars = () => {
		const fullStars = 4
		const emptyStars = 5 - fullStars
		return (
			<div className="flex text-sky-500">
				{[...Array(fullStars)].map((_, i) => (
					<BsStarFill key={i} size={14} />
				))}
				{[...Array(emptyStars)].map((_, i) => (
					<BsStar key={i} size={14} />
				))}
			</div>
		)
	}

	return (
		<div className="w-full min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white py-16">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{category? `Products ( ${category} )` : "All Products"}</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our complete collection of streetwear essentials.</p>
				</div>
			</section>

			{/* Category Filter */}
			<div className="border-b border-gray-200">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-wrap justify-center gap-3">
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium bg-sky-600 text-white">
							All
						</Link>
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
							T-Shirts
						</Link>
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
							Hoodies
						</Link>
						<Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
							Accessories
						</Link>
					</div>
				</div>
			</div>

			{/* Products Grid */}
			<section className="py-12 md:py-16">
				<div className="container mx-auto px-4">
				     {!products || products.length < 1 && <p className="text-center text-gray-500">No Products</p>}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products?.map((product) => (
                            <ProductCard product={product} key={i} />
                        ))}
				</div>
			</section>
		</div>
	)
}
