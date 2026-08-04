import type { ProductDetailsTextProps } from "./ProductDetailsText";

const AddToCart = ({count, setCount,setIsCartOpen}:ProductDetailsTextProps) => {


    const handleAdd = ()=>{
        setCount(prev => prev + 1)
    }
    
    const handleDec = ()=>{
        setCount(prev => prev - 1)
    }

    const handleAddToCart = ()=>{
        setCount(prev => prev + 1)
        setIsCartOpen(true)
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                <div className="flex items-center justify-around w-full md:w-60 py-2 rounded-sm bg-gray-100">
                    <button onClick={handleDec} className="font-bold text-2xl text-orange-500 cursor-pointer hover:text-orange-400 disabled:text-orange-200 disabled:cursor-not-allowed" disabled={count=== 0}>
                        -
                    </button>
                    <span className="font-bold">{count}</span>
                    <button onClick={handleAdd} className="font-bold text-2xl text-orange-500 cursor-pointer hover:text-orange-400">
                        +
                    </button>
                </div>

                <button onClick={handleAddToCart} className="bg-orange-500 flex items-center justify-center py-3 w-full rounded-sm gap-4 hover:bg-orange-300 cursor-pointer shadow-lg shadow-rose-300">
                    <img src="./icon-cart.svg" alt="cart" />
                    <p className="font-semibold">Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default AddToCart;
