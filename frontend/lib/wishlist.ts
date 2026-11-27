import { privateApiInstance } from "./apiInstance"


export const fetchWishlist = async (): Promise<Record<string,any>> => {
    try {
        const res = await privateApiInstance.get("products/wishlist/")
        const {setStoreWishlist} = useWishlistStore.getState()
        setStoreWishlist(res.data.map(({product}: any) => product.id)

        return {error:null, ...res}

    } catch (error){
        return {error:error}
    }

}

export const addToWishlist = async (product_id: number | string): Promise<Record<string,any>> => {
    try {
        const res = await privateApiInstance.post("products/wishlist/", {product_id})
        const {addToStoreWishlist} = useWishlistStore.getState()
        addToStoreWishlist(product_id)
        toast.success("Added to Wishlist.")

        return {error:null, ...res}

    } catch (error){
        return {error:error}
    }

}

export const RemoveFromWishlist = async (product_id: number | string): Promise<Record<string,any>> => {
    try {
        const res = await privateApiInstance.delete(`products/wishlist/${product_id}/`)
        const {removeFromStoreWishlist} = useWishlistStore.getState()
        removeFromStoreWishlist(product_id)
        return {error:null, ...res}
        toast.success("Remove from Wishlist.")

    } catch (error){
        return {error:error}
    }

}