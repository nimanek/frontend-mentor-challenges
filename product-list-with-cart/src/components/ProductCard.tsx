import AddToCartBtn from "./AddToCartBtn";

const ProductCard = () => {
    return (
        <>
            <div className="">
                <div className="relative w-fit h-65">
                    <img className="h-fit w-full rounded-xl" src="../../public/image-macaron-desktop.jpg"/>
                    <AddToCartBtn />
                </div>
                
                <div className="flex flex-col mt-2 p-1">
                    <p className="text-sm text-gray-500">waffle</p>
                    <p>waffle with berries</p>
                    <span className="text-red-600 font-semibold">$6.50</span>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
