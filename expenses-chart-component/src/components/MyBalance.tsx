const MyBalance = () => {
    return (
        <>
            <div className="bg-[#ED765E] flex items-center justify-between rounded-xl p-4 w-full h-22 text-white">
                <div className="flex flex-col">
                    <span className="text-sm">My balance</span>
                    <p className="font-bold text-xl">$932.29</p>
                </div>
                <img src="./logo.svg" alt="logo" />
            </div>
        </>
    );
};

export default MyBalance;
