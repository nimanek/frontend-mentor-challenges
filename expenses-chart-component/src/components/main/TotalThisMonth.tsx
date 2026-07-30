const TotalThisMonth = () => {
    return (
        <>
            <div className="flex items-center justify-between mt-4 gap-4">

              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-gray-400 text-sm">Total this month</p>
                <span className="font-bold text-3xl">$478.33</span>
              </div>


              <div className="flex flex-col items-end justify-center">
                <span className="font-semibold">+2.4%</span>
                <p className="text-gray-400 text-sm">from last month</p>
              </div>

            </div>
        </>
    );
};

export default TotalThisMonth;
