import { useContext } from "react";
import { ShoppingCartContext, type IData } from "../context/useShoppingCart";
import { FormatPrice } from "../utils/FormatPrice";
import AddToCartBtn from "./AddToCartBtn";

type ProductCardType = {
    dessert: IData;
};

const ProductCard = ({ dessert }: ProductCardType) => {
    const { cart } = useContext(ShoppingCartContext);
    const currentItem = cart.find((c: any) => c.item === dessert.name);

    return (
        <>
            <div className="">
                <div className="relative w-fit h-65">
                    <img
                        className={`h-fit w-full rounded-md ${currentItem?.qty > 0 ? "border-2 border-orange-700" : ""}`}
                        src={dessert.image.desktop}
                    />
                    <AddToCartBtn dessert={dessert} />
                </div>

                <div className="flex flex-col mt-2 p-1">
                    <p className="text-sm text-gray-500">{dessert.category}</p>
                    <p>{dessert.name}</p>
                    <span className="text-red-600 font-semibold">
                        ${FormatPrice(dessert.price)}
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
