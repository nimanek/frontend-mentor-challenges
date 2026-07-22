import { useState } from "react";

const AddToCartBtn = () => {

    const [isAdded, setIsAdded] = useState(false);
    const [count, setCount] = useState(1)

    const handleDec = ()=>{
        if(count === 0){
            setIsAdded(!isAdded)
        }else{
            setCount(count - 1)
        }
    }

    const handleAdd = ()=>{
        setIsAdded(true)
        if(count === 0){
        setIsAdded(false)
        }
    }

    
    return (
        <div className="">
            {isAdded ? (
                 <div className="flex items-center justify-between gap-2 w-41 border border-gray-500 shadow-md absolute bottom-0 left-12 bg-orange-700 px-6 py-2 rounded-full">
                <button onClick={()=>handleDec()} className="cursor-pointer">-</button>
                {count}
                <button onClick={()=>setCount(count + 1)} className="cursor-pointer">+</button>
            </div>
            ) : (
                 <button onClick={handleAdd} className="flex items-center justify-center gap-2 border border-gray-500 shadow-md absolute bottom-0 left-12 bg-white px-6 py-2 rounded-full cursor-pointer hover:bg-rose-50">
                <img src="../../public/icon-add-to-cart.svg" /> Add to Cart
            </button>
            ) }
           

           
        </div>
    );
};

export default AddToCartBtn;
