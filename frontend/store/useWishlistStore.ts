import { create } from "zustand"
import { persist } from "zustand/middleware"
import { PersistOptions } from "zustand/middleware"


type WishlistStore = {
    wishlist: Set<number | string>,
    addToStoreWishlist: (product_id: number | string)=>void,
    removeFromStoreWishlist: (product_id: number | string)=>void,
    setStoreWishlist: (items: Array<number | string>)=>void,
}

const stateCreatorFn: StateCreator<WishlistStore, [["zustand/persist", unknown]], []> = (set) => ({
        wishlist: new Set(),
        addToStoreWishlist: (product_id: number | string)=>set((state)=> {
            const newState = new Set(state.wishlist)
            if (!newState.has(product_id)) newState.add(product_id)
                return {wishlist: newState}
        }),
        removeFromStoreWishlist: (product_id: number | string)=>{
            const newState = new Set(state.wishlist)
            if (newState.has(product_id)) newState.delete(product_id)
                return {wishlist: newState}
        },
        setStoreWishlist: (items: Array<number | string>)=>{
            const newState = new Set()
            for (const i in items){
                newState.add(i)
            }
            return {wishlist: newState}
        },
)}

const persistOptions: PersistOptions<WishlistStore, void, unknown> = {
    name:"wishlist-items",
    storage: createJSONStorage(() => localStorage),
    partialize:(state) => ({wishlist: Array.from(state.wishlist)}),
    onRehydrateStorage: ()=> (state)=> {
        if (state){
            state.wishlist = new Set(state.wishlist)
        }
    }

}

const nextStateCreatorFn = persist(stateCreatorFn, persistOptions)


export const useWishlistStore = create<WishlistStore>()(nextStateCreatorFn)