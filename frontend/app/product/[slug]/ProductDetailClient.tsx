"use client"
import { BsStar, BsStarFill } from "react-icons/bs"
import { BiMinus, BiPlus } from "react-icons/bi"
import { FaCartPlus } from "react-icons/fa"
import { TbHeartPlus } from "react-icons/tb"
import NotFound from "@/app/not-found"
import { getBackendAbsoluteUrl } from "@/lib/utils"
import { useRef } from "react"

export default function ProductDetailPage({ product }: { product: Record<string, any> | null }) {


    const thumbnailRef = useRef<HTMLImageElement>(null)

	// Static reviews
	const reviews = [
		{
			user: { full_name: "John Doe", username: "johndoe", avatar: "/default-avatar.jpg" },
			rating: 5,
			review: "Amazing quality! Very comfortable and stylish.",
		},
		{
			user: { full_name: "Jane Smith", username: "janesmith", avatar: "/default-avatar.jpg" },
			rating: 4,
			review: "Great product, fits perfectly.",
		},
	]

    if (!product) return <NotFound />

	return (
		<section className="body-font overflow-hidden text-gray-600 bg-white">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 flex flex-wrap mx-auto">
					{/* Product images */}
					<div className="lg:w-1/2 w-full">
						<img ref={thumbnailRef} alt={product.title} className="lg:h-auto object-cover object-center h-64 rounded" src={product.image} />
						<div className="flex flex-wrap w-full gap-3 mt-4">
							{[product.image, ...product.gallery.map((item:any) => item.image)].map((img, idx) => (
								<img onClick={()=> {
                                    if (thumbnailRef.current){
                                        thumbnailRef.current.src=getBackendAbsoluteUrl(img)
                                    }
                                } key={idx} alt="thumbnail" className="object-cover object-center w-20 rounded cursor-pointer" src={getBackendAbsoluteUrl(img)} />
							))}
						</div>
					</div>

					{/* Product info */}
					<div className="lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0 w-full mt-6">
						<h2 className="title-font text-sm tracking-widest text-gray-500">{product.brand}</h2>
						<h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{product.title}</h1>
						<div className="flex mb-4">
							<span className="flex items-center gap-0.5">
								{[...Array(5)].map((_, i) => (i < product.rating ? <BsStarFill key={i} className="text-sky-600" /> : <BsStar key={i} className="text-sky-600" />))}
								<span className="ml-3 text-gray-600">
									{product.rating}/5 ({product.rating_count} Rating
									{product.rating_count !== 1 && "s"})
								</span>
							</span>
						</div>
						<p className="leading-relaxed">{product.description}</p>
						<p className="leading-relaxed text-lg font-bold mt-1.5">
						    Price:
						    <span className="text-xs ml-2">RS</span>    {product.price}</p>

						{/* Specifications */}
						{product.specifications.length > 0 && (
							<div className="my-4 tracking-wider">
								<hr />
								<p className="mb-2 text-lg">Specifications:</p>
								<ul>
									{product.specifications.map((spec: Record<string,string>m i:number) => (
										<li key={i} className="mb-1 text-sm">
											<b>{spec.title}</b>: {spec.content}
										</li>
									))}
								</ul>
								<hr />
							</div>
						)}

						{/* Colors */}
						{product.colors.length > 0 && (
							<div className="mt-6">
								<p className="mb-3">
									Colors <b>({product.colors[0].name}):</b>
								</p>
								<div className="flex mr-6 mb-4 gap-0.5 items-center">
									{product.colors.map((color: Record<string,string>m i:number) => (
										<button key={i} className="focus:outline-none w-6 h-6 ease-in-out border-2 border-gray-300 rounded-full" style={{ background: color.color_code }}></button>
									))}
								</div>
							</div>
						)}

						{/* Variants */}
						{product.variants.length > 0 && (
							<div>
								<div className="flex gap-2 mr-6">
									{product.variants.map((variant: Record<string,string>m i:number) => (
										<button key={i} className="bg-neutral-600 hover:bg-neutral-600 custom-btn text-white">
											{variant.name}
										</button>
									))}
								</div>
								<p className="mt-2">
									Selected: <b>{product.variants[0].name}</b>
								</p>
							</div>
						)}

						{/* Quantity selector */}
						<div className="flex items-center justify-center w-40 gap-2 mt-3">
							<button type="button">
								<BiMinus />
							</button>
							<input type="number" className="hide-arrows w-10 text-center text-black" defaultValue="1" min="1" max={product.stock_quantity} />
							<button type="button">
								<BiPlus />
							</button>
						</div>

						{/* Total price */}
						<div className="flex flex-col gap-3 mt-4">
							<span className="title-font text-2xl font-medium text-gray-900">
							    Total:
							    <span className="text-xs ml-2">RS</span>{product.price}</span>
						</div>

						{/* Action buttons */}
						<div className="flex flex-col w-full mt-3 gap-3 [&_button]:w-full">
							<button className="custom-btn bg-sky-600 hover:bg-sky-700 gap-3 text-white">
								Add to Cart <FaCartPlus size={18} />
							</button>
							<button className="custom-btn bg-neutral-500 hover:bg-neutral-600 gap-3 text-white">
								Add to Wishlist <TbHeartPlus size={18} />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Reviews Section (static) */}
			<hr />
			<div className="container p-5 mx-auto min-h-[30vh]">
				{/* "Leave a review" form – inert */}
				<div className="border border-[#ddd] p-10 rounded flex flex-col justify-center items-center gap-6 my-4 w-full max-w-200 mx-auto">
					<h2 className="text-3xl text-center">Leave a Review</h2>
					<div className="flex flex-col w-full space-y-2">
						<label htmlFor="Rating">Rating</label>
						<div className="text-sky-600 flex gap-2 text-xl">
							{[...Array(5)].map((_, i) => (i < 4 ? <BsStarFill key={i} className="cursor-pointer" /> : <BsStar key={i} className="cursor-pointer" />))}
							<span className="ml-3 text-base">4/5</span>
						</div>
					</div>
					<div className="flex flex-col w-full space-y-2">
						<label htmlFor="Content">Review</label>
						<textarea className="custom-input min-h-30 field-sizing-content" placeholder="This is the best product..." defaultValue=""></textarea>
					</div>
					<button type="submit" className="w-[10ch] h-[5ch] mt-2 custom-btn text-white     bg-sky-500 font-bold tracking-wider text-nowrap whitespace-nowrap flex justify-center items-center">
						Submit
					</button>
				</div>

				{/* Existing reviews */}
				{reviews.length > 0 && (
					<div className="flex flex-col my-10">
						<h2 className="mt-6 text-3xl text-center">Existing Reviews</h2>
						<div className="flex flex-col items-center justify-center gap-4 px-4 py-10">
							{reviews.map((review, idx) => (
								<div key={idx} className="max-w-200 flex items-center justify-center relative w-full p-3 border border-[#ddd] rounded">
									<div className="p-4 mb-auto">
										<img className="aspect-square object-cover w-20 rounded-full" src={review.user.avatar} alt={review.user.full_name} />
									</div>
									<div className="flex flex-col w-full gap-1 ml-4 mr-auto">
										<div className="flex items-center justify-center gap-1 mr-auto">
											<p>
												{review.user.full_name} <span className="opacity-80 text-sm">(@{review.user.username})</span>
											</p>
										</div>
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (i < review.rating ? <BsStarFill key={i} /> : <BsStar key={i} />))}
											<span className="ml-1 text-base">{review.rating}/5</span>
										</div>
										<p className="mt-2">{review.review}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
