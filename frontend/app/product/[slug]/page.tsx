import ProductDetailClient from "./ProductDetailClient"
import { publicApiInstance } from "@/lib/apiInstance"
export default async function page({params}:{params:Promise<{slug:string}> }){
{
    const {slug} = await params
    const product = (await publicApiInstance.get(`product/${slug}/`)).data || null
    return <ProductDetailClient products={product}/>

}