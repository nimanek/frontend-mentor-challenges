import type { NavbarProps } from "./Navbar";
import swal from "sweetalert";

const Cart = ({ isCartOpen, setIsCartOpen, count, setCount }: NavbarProps) => {
    // func for making numbers look like price.00
    const formatPrice = (price: number) => {
        return price.toFixed(2);
    };

    // item price
    const itemPrice = 125;

    // total price
    const finalPrice = count * itemPrice;

    // fucn for removing item form cart
    const handleRemoveItemFromCart = () => {
        setCount(0);
    };

    // after clicking checkout do (alert, reset cart number, close cart)
    const handleCheckout=()=>{
        swal('Good Luck ;D');
        setCount(0);
        setIsCartOpen(false);
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
            >
                <img src="./icon-cart.svg" alt="cart" />
                <span className={`absolute bg-orange-500 text-white rounded-4xl w-4 h-4 text-xs top-0 ${count === 0 ? 'hidden' : ''}`}>
                    {count}
                </span>
            </button>

            {isCartOpen && (
                <div className="absolute bg-white z-40 shadow-2xl rounded-xl md:w-90 w-72 top-18 -right-18 md:top-16 md:-right-35 h-56">
                    <p className="p-4 text-lg font-semibold">Cart</p>
                    <hr className="text-gray-200" />
                    {count === 0 ? (
                        <p className="h-20 text-gray-500 flex items-end justify-center">
                            {" "}
                            Your cart is empty.
                        </p>
                    ) : (
                        <>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="text-gray-500 flex items-center justify-between gap-4 md:gap-0">
                                    <img
                                        className="h-12 md:h-14 rounded-md"
                                        src="./image-product-1-thumbnail.jpg"
                                    />

                                    <div className="flex flex-col items-start">
                                        <p className="text-xs md:text-base">Fall Limited Edition Sneakers</p>
                                        <span className="flex items-center justify-center gap-2">
                                            ${formatPrice(itemPrice)} x {count}{" "}
                                            <span className="font-bold text-black">
                                                ${formatPrice(finalPrice)}
                                            </span>
                                        </span>
                                    </div>

                                    <button
                                        className="cursor-pointer"
                                        onClick={handleRemoveItemFromCart}
                                    >
                                        <img src="./icon-delete.svg" alt="Delete icon" />
                                    </button>
                                </div>
                                <button onClick={handleCheckout} className="bg-orange-500 p-3 rounded-lg font-bold cursor-pointer hover:bg-orange-300">Checkout</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
