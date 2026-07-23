import { useContext, useEffect, useRef } from "react";
import { ShoppingCartContext } from "../context/useShoppingCart";
import { FormatPrice } from "../utils/FormatPrice";

const OrderConfirmedModal = ({ desserts }: any) => {
    const { cart, setOrderModal,setCart } = useContext(ShoppingCartContext);

    const modalRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{

        const handleClickOutside = (event: MouseEvent)=>{
            if(modalRef.current && !modalRef.current.contains(event.target as Node)){
                setOrderModal(false)
                setCart([])
            }
        }

        window.addEventListener("mousedown", handleClickOutside);

        return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
    },[setOrderModal])

    const grandTotal = cart.reduce((total: any, cartItem: any) => {
        const product = desserts.find((d:any) => d.name === cartItem.item);
        return total + (product ? product.price * cartItem.qty : 0);
    }, 0);


    return (
        <div className="bg-black/50 flex justify-center items-center inset-0 z-50 fixed">

            <div ref={modalRef} className="bg-white p-6 rounded-md flex flex-col w-120 items-start gap-2">
                <div>
                    <img
                        src="../../public/icon-order-confirmed.svg"
                        alt="confirmed"
                    />
                </div>

                <div>
                    <p className="font-bold text-3xl">Order Confirmed</p>
                </div>

                <div>
                    <p className="text-neutral-600 font-extralight text-sm mb-6">
                        We hope you enjoy your food!
                    </p>
                </div>

                <div className="bg-orange-100 w-full p-4 rounded-sm h-80 overflow-x-hidden overflow-auto scrollbar-thin scrollbar-thumb-orange-200">
                    {cart.map((cartItem: any) => {
                        const product = desserts.find(
                            (d:any) => d.name === cartItem.item,
                        );
                        if (!product) return null;
                        const unitPrice = product.price;
                        const itemTotal = product.price * cartItem.qty;

                        return (
                            <div key={product.name}>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex justify-center items-center gap-4">
                                        <img className="h-16" src={product.image.thumbnail} />
                                        <div className="flex flex-col">
                                            <h5 className="font-medium">
                                                {product.name}
                                            </h5>

                                            <div className="flex items-center justify-start">
                                                <span className="mr-2 text-red-700 text-sm">
                                                    {cartItem.qty}x
                                                </span>

                                                <span className="text-taupe-500 text-xs">
                                                    @
                                                </span>

                                                <span className="text-taupe-500 font-light text-sm mr-2">
                                                    ${FormatPrice(unitPrice)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-sm text-taupe-600">
                                        ${FormatPrice(itemTotal)}
                                    </span>
                                </div>
                                <hr className="text-gray-200 mt-2" />
                            </div>
                        );
                    })}
                    <div className="flex justify-between w-full items-center mt-6">
                        <p className="text-neutral-600">Order Total</p>
                        <p className="font-bold">${FormatPrice(grandTotal)}</p>
                    </div>
                </div>

                <button
                    onClick={() => {setOrderModal(false);setCart([])}}
                    className="bg-orange-700 text-white w-full py-2 rounded-full cursor-pointer hover:bg-orange-800"
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmedModal;
