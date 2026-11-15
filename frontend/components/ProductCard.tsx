import Link from "next/Link";
import { BsCartPlus, BsStar, BsStarFill } from 'react-icons/bs';
import { TbHeartMinus } from "react-icons/tb";

export default function ProductCard(){
    return (
							<div  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
								<Link href="/product/slug" className="block relative aspect-square overflow-hidden">
									<img src="/placeholder.jpg" alt="Product" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
								</Link>
								<div className="p-4">
									<span className="text-xs text-gray-500 uppercase tracking-wider">Category</span>
									<h3 className="text-lg font-semibold text-gray-900 mt-1">Product Title</h3>

									{/* Rating */}
									<div className="flex items-center mt-2">
										<div className="flex text-sky-500">{[...Array(5)].map((_, idx) => (idx < 3 ? <BsStarFill key={idx} size={14} /> : <BsStar key={idx} size={14} />))}</div>
										<span className="text-xs text-gray-500 ml-2">(3/5, 4 ratings)</span>
									</div>

									<div className="mt-3 flex items-center justify-between">
										<span className="text-xl font-bold text-gray-900">$38</span>

										<div className="flex items-center gap-2">
											<div className="relative group">
												<button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-full transition-colors">
													<BsCartPlus size={20} />
												</button>
												<div className="absolute right-0 bottom-full mb-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-3 hidden group-hover:block z-10">
													<div className="space-y-3">
														<p className="text-sm font-medium">Select variant:</p>
														<div className="flex gap-2">
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">S</button>
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">M</button>
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">L</button>
															<button className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-sky-100">XL</button>
														</div>
														<div className="flex gap-2">
															<div className="w-6 h-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-sky-500" />
															<div className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-sky-500" />
														</div>
														<button className="w-full bg-sky-600 text-white py-1 rounded-md text-sm hover:bg-sky-700">Add to Cart</button>
													</div>
												</div>
											</div>
											<button className="bg-gray-100 hover:bg-rose-100 text-gray-700 hover:text-rose-600 p-2 rounded-full transition-colors">
												<TbHeartMinus size={20} />
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
    )

}