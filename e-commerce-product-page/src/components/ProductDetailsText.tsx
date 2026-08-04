import type { Dispatch, SetStateAction } from "react";
import AddToCart from "./AddToCart";

export type ProductDetailsTextProps={
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductDetailsText = ({count, setCount, setIsCartOpen}:ProductDetailsTextProps) => {
    return (
        <>
            <div className="flex flex-col gap-2 w-full md:w-120 p-6 md:p-0 md:mt-12">
                <p className="text-gray-500 text-xs font-semibold tracking-widest">SNEAKER COMPANY</p>
                <p className="font-bold text-4xl">Fall Limited Edition Sneakers</p>
                <p className="text-gray-600 md:mt-6">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                
                <div className="flex items-center justify-between md:flex-col md:items-start">
                    <span className="font-semibold text-2xl flex items-center">$125.00 
                    <span className="bg-black text-white py-1 px-2 text-center rounded-md text-sm ml-4">50%</span>
                </span>
                <span className="text-gray-500 font-bold line-through">$250.00</span>
                </div>


                {/* add to cart */}
               <AddToCart setIsCartOpen={setIsCartOpen} count={count} setCount={setCount}/>

            </div>
        </>
    );
};

export default ProductDetailsText;
