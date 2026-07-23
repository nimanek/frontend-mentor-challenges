import { useContext } from "react";
import { ShoppingCartContext, type IData } from "../context/useShoppingCart";

type AddToCartBtnType = {
    dessert: IData;
};

const AddToCartBtn = ({ dessert }: AddToCartBtnType) => {
    const { handleAdd, handleDec, cart } = useContext(ShoppingCartContext);

    const currentItem = cart.find((c: any) => c.item === dessert.name);
    const count = currentItem ? currentItem.qty : 0;

    return (
        <div>
            {count === 0 ? (
                <button
                    onClick={() => handleAdd(dessert.name)}
                    className="flex items-center justify-center gap-2 border border-gray-500 shadow-md absolute bottom-0 left-12 bg-white px-6 py-2 rounded-full cursor-pointer hover:bg-rose-50"
                >
                    <img src="./icon-add-to-cart.svg" /> Add to Cart
                </button>
            ) : (
                <div className="flex items-center justify-between gap-2 w-41 border border-gray-500 shadow-md absolute bottom-0 left-12 bg-orange-700 px-6 py-2 rounded-full text-white">
                    {/* Decrease btn */}
                    <button
                        onClick={() => handleDec(dessert.name)}
                        className="cursor-pointer border border-white rounded-full px-1 py-2 hover:bg-orange-400"
                    >
                        <img src="./icon-decrement-quantity.svg" />
                    </button>
                    <span>{count}</span>
                    {/* Increase btn */}
                    <button
                        onClick={() => handleAdd(dessert.name)}
                        className="cursor-pointer border border-white rounded-full px-1 py-1 hover:bg-orange-400"
                    >
                        <img src="./icon-increment-quantity.svg" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddToCartBtn;
