"use client"

const ProductTable = ({ products }) => {
    // Agrupar productos por categoría
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.categoryName
        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push(product)
        return acc
    }, {})

    const getStockStatus = (quantity) => {
        if (quantity < 10) return { color: "#ef4444", bgColor: "#fee2e2", text: "Bajo" }
        if (quantity < 50) return { color: "#f59e0b", bgColor: "#fef3c7", text: "Medio" }
        return { color: "#10b981", bgColor: "#d1fae5", text: "Alto" }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                <div
                    key={category}
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Header de la categoría */}
                    <div
                        style={{
                            padding: "16px 24px",
                            borderBottom: "1px solid #e5e7eb",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#1f2937",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            🎨 {category}
                        </h3>
                        <span
                            style={{
                                backgroundColor: "#f3f4f6",
                                color: "#374151",
                                padding: "4px 12px",
                                borderRadius: "16px",
                                fontSize: "12px",
                                fontWeight: "500",
                            }}
                        >
                            {categoryProducts.length} productos
                        </span>
                    </div>

                    {/* Tabla */}
                    <div style={{ padding: "0 24px 24px 24px" }}>
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                                        <th style={{ textAlign: "left", padding: "12px", fontWeight: "500", color: "#1f2937" }}>Nombre</th>
                                        <th style={{ textAlign: "left", padding: "12px", fontWeight: "500", color: "#1f2937" }}>Tipo</th>
                                        <th style={{ textAlign: "left", padding: "12px", fontWeight: "500", color: "#1f2937" }}>
                                            Cantidad
                                        </th>
                                        <th style={{ textAlign: "left", padding: "12px", fontWeight: "500", color: "#1f2937" }}>Unidad</th>
                                        <th style={{ textAlign: "left", padding: "12px", fontWeight: "500", color: "#1f2937" }}>Stock</th>
                                        <th style={{ textAlign: "left", padding: "12px", fontWeight: "500", color: "#1f2937" }}>Nota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categoryProducts.map((product, index) => {
                                        const stockStatus = getStockStatus(product.quantityInStock)
                                        return (
                                            <tr
                                                key={product.id}
                                                style={{
                                                    borderBottom: "1px solid #e5e7eb",
                                                    backgroundColor: index % 2 === 0 ? "white" : "#f9fafb",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.parentElement.style.backgroundColor = "#f3f4f6"
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.parentElement.style.backgroundColor = index % 2 === 0 ? "white" : "#f9fafb"
                                                }}
                                            >
                                                <td style={{ padding: "12px", fontWeight: "500", color: "#1f2937" }}>{product.name}</td>
                                                <td style={{ padding: "12px", color: "#6b7280" }}>{product.productType  || "Desconocido"}</td>
                                                <td style={{ padding: "12px", fontFamily: "monospace", color: "#1f2937" }}>
                                                    {product.quantityInStock}
                                                </td>
                                                <td style={{ padding: "12px", color: "#6b7280" }}>
                                                    {product.unit === "grams" ? "gramos" : product.unit === "liters" ? "litros" : product.unit === "units" ? "unidades" : product.unit}
                                                </td>
                                                <td style={{ padding: "12px" }}>
                                                    <span
                                                        style={{
                                                            backgroundColor: stockStatus.bgColor,
                                                            color: stockStatus.color,
                                                            padding: "4px 8px",
                                                            borderRadius: "12px",
                                                            fontSize: "11px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {stockStatus.text}
                                                    </span>
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "12px",
                                                        fontSize: "14px",
                                                        color: "#6b7280",
                                                        maxWidth: "200px",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {product.note || "-"}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductTable
