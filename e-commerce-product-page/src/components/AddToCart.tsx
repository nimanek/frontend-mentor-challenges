const AddToCart = () => {
    return (
        <div>
            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center justify-around w-60 py-2 rounded-sm bg-gray-100">
                    <button className="font-bold text-2xl text-orange-500 cursor-pointer">
                        -
                    </button>
                    <span>0</span>
                    <button className="font-bold text-2xl text-orange-500 cursor-pointer">
                        +
                    </button>
                </div>

                <button className="bg-orange-500 flex items-center justify-center py-3 w-full rounded-sm gap-4">
                    <img src="./icon-cart.svg" alt="cart" />
                    <p className="font-semibold">Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default AddToCart;
