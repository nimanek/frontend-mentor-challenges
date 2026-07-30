const MyBalance = () => {
    return (
        <>
            <div className="bg-[#ED765E] flex items-center justify-between rounded-xl p-4 w-full h-22 text-white">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-50">My balance</span>
                    <p className="font-bold text-2xl">$921.48</p>
                </div>
                <img src="./logo.svg" alt="logo" />
            </div>
        </>
    );
};

export default MyBalance;
