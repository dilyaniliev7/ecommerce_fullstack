import React from 'react'
import ProductsClient from "./ProductsClient"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Products",

}

export default function page(){
    return <ProductsClient />

}