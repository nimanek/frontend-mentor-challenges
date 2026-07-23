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
                <div className="relative w-fit md:h-65 h-60">
                    <picture>
                        <source  media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
                        <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
                        <img
                        className={`h-fit w-full rounded-md ${currentItem?.qty > 0 ? "border-2 border-orange-700" : ""}`}
                        src={dessert.image.mobile}
                        alt={dessert.name}
                        title={dessert.category}
                    />
                    </picture>
                    <AddToCartBtn dessert={dessert} />
                </div>

                <div className="flex flex-col mt-4 p-1">
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
