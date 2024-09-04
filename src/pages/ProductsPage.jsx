import { useEffect, useRef } from "react"
import { getAllProducts } from "../api"
import { useState } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { useProducts } from "../hooks"

export default function ProductsPage() {
    const { products } = useProducts();        

    return (
        <main className="p-4 flex flex-col gap-8">
            <h1 className="text-3xl font-bold text-center">Products</h1>
            <section className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
                {products.map((product, idx) => {
                    return (
                        <ProductCard
                        key={`product-${idx}`}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        thumbnail={product.thumbnail}
                        />
                    )
                })
                }
            </section>
        </main>

    )
}