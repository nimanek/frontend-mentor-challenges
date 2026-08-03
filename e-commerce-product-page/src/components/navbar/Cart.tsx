import type { NavbarProps } from "./Navbar";

const Cart = ({ isCartOpen, setIsCartOpen, count, setCount }: NavbarProps) => {



    console.log(count)
    return (
        <div className="relative">
            <button onClick={()=>setIsCartOpen(!isCartOpen)} className="cursor-pointer hover:bg-gray-100 p-2 rounded-full">
                <img src="./icon-cart.svg" alt="cart" />
            </button>

            {isCartOpen && (
                <div className="absolute bg-white shadow-2xl rounded-xl w-90 top-16 -right-35 h-50">
                    <p className="p-4 text-lg font-semibold">Cart</p>
                    <hr className="text-gray-200"/>
                    {count === 0 ? (
                        <p className="h-20 text-gray-500 flex items-end justify-center"> Your cart is empty.</p>
                    ) : (
                        <>
                            <p>123</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
