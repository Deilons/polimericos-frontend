import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import ProductTable from "../components/ProductTable";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch(() => alert("No se pudieron cargar los productos"));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-2xl font-bold mt-4 mb-2 text-center">Inventario</h1>
            <ProductTable products={products} />
        </div>
    );
};

export default Products;
