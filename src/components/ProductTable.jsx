const ProductTable = ({ products }) => {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Tipo</th>
                        <th className="border p-2">Cantidad</th>
                        <th className="border p-2">Unidad</th>
                        <th className="border p-2">Categoría</th>
                        <th className="border p-2">Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td className="border p-2">{p.name}</td>
                            <td className="border p-2">{p.productType}</td>
                            <td className="border p-2">{p.quantityInStock}</td>
                            <td className="border p-2">{p.unit}</td>
                            <td className="border p-2">{p.categoryName}</td>
                            <td className="border p-2">{p.note || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
