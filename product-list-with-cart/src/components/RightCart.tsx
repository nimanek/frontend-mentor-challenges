const RightCart = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-red-600">Your Cart (<span>0</span>)</h3>
                <div className="flex flex-col items-center justify-center p-4">
                    <img src="../../public/illustration-empty-cart.svg" />
                    <p>Your added items will appear here</p>
                </div>
            </div>
        </>
    );
};

export default RightCart;
