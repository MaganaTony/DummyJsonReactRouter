import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useProduct } from "../hooks";


export default function ProductDetail() {
    const { id } = useParams();
    const {product} = useProduct(id);

    return (
        <main className="flex flex-col gap-4 p-4 justify-center items-center">
            <header className="text-left w-full">
                <Link className="cursor-pointer hover:text-cyan-500"
                to={`/products/#product-${id}`}
                >👈 Regresar</Link>
            </header>
                <h1 className="text-2xl font-bold text-center">{product.title}</h1>
                <img src={product.thumbnail} alt={product.title} 
                className="size-48"
                />
                <p className="text-cyan-800 text-xl">$ {product.price}</p>
                <p className="max-w-prose">{product.description}</p>
        </main>

    )
}