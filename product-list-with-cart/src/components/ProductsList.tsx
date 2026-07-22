import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ShoppingCartContext, type IData } from "../context/useShoppingCart";

const ProductsList = () => {
    const { desserts } = useContext(ShoppingCartContext);

    return (
        <>
            <p className="font-bold text-3xl mb-6">Desserts</p>
            <div className="grid gap-6 grid-cols-3">
                {desserts.map((dessert: IData) => (
                    <ul key={dessert.name}>
                        <li>
                            <ProductCard dessert={dessert} />
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default ProductsList;
