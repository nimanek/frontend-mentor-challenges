import type { IData } from "../context/useShoppingCart";
import AddToCartBtn from "./AddToCartBtn";

type ProductCardType={
    dessert: IData
}

const ProductCard = ({dessert}:ProductCardType) => {
    return (
        <>
            <div className="">
                <div className="relative w-fit h-65">
                    <img className="h-fit w-full rounded-md" src={dessert.image.desktop}/>
                    <AddToCartBtn />
                </div>
                
                <div className="flex flex-col mt-2 p-1">
                    <p className="text-sm text-gray-500">{dessert.category}</p>
                    <p>{dessert.name}</p>
                    <span className="text-red-600 font-semibold">${dessert.price}</span>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
