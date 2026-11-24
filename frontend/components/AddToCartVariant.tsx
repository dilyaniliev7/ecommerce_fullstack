"use client"
import { useState, useRef } from "react"
import { BsCartPlus } from "react-icons/bs";
import { TbHeartMinus } from "react-icons/tb";


export default function AddToCartVariant({product}: {product: Record<string, any>}){
    const addToCartDivRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [color, setColor] = useState<Record<string, string>>(product?.colors?.[0] || null)
    const [variant, setVariant] = useState<Record<string, string>>(product?.variants?.[0] || null)

    useEffect(() => {
        const setOnBlur = (e:any)=>{
            if (addToCartDivRef.current && addToCartDivRef.current.contains(e.target)){
                setIsOpen(false)
            }
        }

        window.addEventListener("click", setOnBlur)

        return ()=>{
            window.removeEventListener("click", setOnBlur)
        }
    }, [])

    return (
        <div ref={addToCartDivRef}  className="flex items-center gap-2">
            <div className="relative group">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-full transition-colors">
                    <BsCartPlus size={20} />
                </button>
                <div className={`absolute right-0 bottom-full mb-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-3 ${isOpen ? "block" : "hidden"} z-10`}>
                    <div className="space-y-3">
                    {product.variants.length > 0 && (
                        <>
                            <p className="text-sm font-medium">Select variant:</p>
                            <div className="flex gap-2">
                                {product.variants.map((v: Record<string, string>, i: number)=> (
                                    <button key={i} onClick={() => setVariant(v)} className={`${variant === v ? "bg-blue-600 hover:bg-blue-600" : "bg-neutral-600 hover:bg-neutral-600"}  text-white text-xs rounded-full px-2 py-1`}>{v.name}</button>
                                ))}
                            </div>
                        </>
                        )}
                        {product?.colors?.length > 0 && (
							<div className="mt-6">

								<div className="flex mr-6 mb-4 gap-0.5 items-center">
									{product.colors.map((c: Record<string,string>m i:number) => (
										<button onClick={()=> setColor(c)} key={i} className={`focus:outline-none w-6 h-6 ease-in-out border-2 ${color === c ? "border-blue-600" : "border-gray-300"} rounded-full`}style={{ background: c.color_code }}></button>
									))}
								</div>
							</div>
						)}
                        <div className="flex gap-2">
                            <div className="w-6 h-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-sky-500" />
                            <div className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-sky-500" />
                        </div>
                        <button className="w-full bg-sky-600 text-white py-1 rounded-md text-sm hover:bg-sky-700">Add to Cart</button>
                </div>
            </div>
            <button className="bg-gray-100 hover:bg-rose-100 text-gray-700 hover:text-rose-600 p-2 rounded-full transition-colors">
               <TbHeartMinus size={20} />
            </button>
        </div>
    )
}

    )

}