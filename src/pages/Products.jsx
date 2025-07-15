"use client"

import { useEffect, useState } from "react"
import { getAllProducts } from "../services/productService"
import ProductTable from "../components/ProductTable"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
            .catch(() => {
                alert("No se pudieron cargar los productos")
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            height: "32px",
                            backgroundColor: "#e5e7eb",
                            borderRadius: "4px",
                            width: "300px",
                            margin: "0 auto 16px auto",
                        }}
                    ></div>
                    <div
                        style={{
                            height: "200px",
                            backgroundColor: "#e5e7eb",
                            borderRadius: "4px",
                        }}
                    ></div>
                </div>
            </div>
        )
    }

    const totalProducts = products.length
    const lowStockProducts = products.filter((p) => p.quantityInStock < 10).length
    const categories = [...new Set(products.map((p) => p.categoryName))].length

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#2563eb", marginBottom: "8px" }}>
                    Poliméricos Dial de Medellín
                </h1>
                <p style={{ color: "#6b7280", fontSize: "18px" }}>Sistema de Inventario - Pinturas y Pigmentos</p>
                <div style={{ borderBottom: "1px solid #e5e7eb", margin: "16px 0" }}></div>
            </div>

            {/* Stats Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "16px",
                    marginBottom: "32px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", padding: "24px" }}>
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#dbeafe",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "16px",
                            }}
                        >
                            📦
                        </div>
                        <div>
                            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>{totalProducts}</p>
                            <p style={{ color: "#6b7280", margin: "0" }}>Total Productos</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", padding: "24px" }}>
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#dbeafe",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "16px",
                            }}
                        >
                            🎨
                        </div>
                        <div>
                            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>{categories}</p>
                            <p style={{ color: "#6b7280", margin: "0" }}>Categorías</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", padding: "24px" }}>
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#fee2e2",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "16px",
                            }}
                        >
                            ⚠️
                        </div>
                        <div>
                            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#ef4444", margin: "0" }}>{lowStockProducts}</p>
                            <p style={{ color: "#6b7280", margin: "0" }}>Stock Bajo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <ProductTable products={products} />
        </div>
    )
}

export default Products
