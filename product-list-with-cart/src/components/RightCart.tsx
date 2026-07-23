import { useContext } from "react";
import { ShoppingCartContext, type IData } from "../context/useShoppingCart";
import { FormatPrice } from "../utils/FormatPrice";

export type RightCartType = {
    desserts: IData[];
};

const RightCart = ({ desserts }: RightCartType) => {
    const { cart,handleRemove, setOrderModal } = useContext(ShoppingCartContext);

    // functions for getting order total price
    const grandTotal = cart.reduce((total: any, cartItem: any) => {
        const product = desserts.find((d) => d.name === cartItem.item);
        return total + (product ? product.price * cartItem.qty : 0);
    }, 0);


    // functions for getting cart items qty(all qty of products that added to cart)
    const eachQtyArr = cart.map((c:any)=>c.qty);
    const AllCartQty = eachQtyArr.reduce((total: any,currentPrice: any)=>{return total + currentPrice},0)


    return (
        <div className="">
            {cart[0] ? (
                <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="text-xl font-bold text-red-700">
                        Your Cart (<span>{AllCartQty}</span>)
                    </h3>
                    {cart.map((cartItem: any) => {
                        const product = desserts.find(
                            (d) => d.name === cartItem.item,
                        );
                        if (!product) return null;

                        const unitPrice = product.price;
                        const itemTotal = product.price * cartItem.qty;

                        return (
                            <div key={product.name}>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex flex-col">
                                        <h5 className="font-medium">
                                            {product.name}
                                        </h5>
                                        <div className="flex items-center justify-start">
                                            <span className="mr-2 text-red-700">
                                                {cartItem.qty}x
                                            </span>
                                            <span className="text-taupe-500 text-xs">
                                                @
                                            </span>
                                            <span className="text-taupe-500 font-light text-sm mr-2">
                                                ${FormatPrice(unitPrice)}
                                            </span>
                                            <span className="font-semibold text-sm text-taupe-600">
                                                ${FormatPrice(itemTotal)}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Remove btn */}
                                    <button onClick={()=>handleRemove(cartItem.item)} className="border rounded-full h-6 w-6 flex items-center justify-center text-xl cursor-pointer p-1 text-neutral-400 hover:text-neutral-800">x</button>
                                </div>
                                <hr className="text-gray-200 mt-2" />
                            </div>
                        );
                    })}
                    {/* Total order Price */}
                    <div className="flex items-center justify-between my-4">
                        <p className="text-neutral-600 text-sm">Order Total</p>
                        <p className="font-bold">${FormatPrice(grandTotal)}</p>
                    </div>
                    {/* Carbon blabla */}
                    <div className="flex items-center justify-center bg-orange-50 py-4 rounded-lg gap-2">
                        <img src="./icon-carbon-neutral.svg" />
                        <p className="text-xs">This is a <span className="font-bold">carbon-neutral</span> delivery</p>
                    </div>
                    {/* Confirm order btn */}
                    <button onClick={()=>setOrderModal(true)} className="bg-orange-700 text-center text-neutral-100 rounded-full w-full p-4 font-semibold mt-4 cursor-pointer shadow-sm hover:bg-orange-800">
                        Confirm Order
                    </button>
                </div>
            ) : (
                <div className="bg-white p-4 rounded-md shadow-sm ">
                    <h3 className="text-xl font-bold text-red-600">
                        Your Cart (<span>0</span>)
                    </h3>
                    <div className="flex flex-col items-center justify-center p-4">
                        <img src="./illustration-empty-cart.svg" />
                        <p>Your added items will appear here</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightCart;
