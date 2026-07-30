import Charts from "./Charts";
import TotalThisMonth from "./TotalThisMonth";

const Last7Days = () => {
    return (
        <div className="bg-white w-full p-4 flex flex-col justify-center rounded-xl">

            <div>
                <p className="text-xl font-bold">Spending - Last 7 days</p>
            </div>

            <div>
              <Charts />
            </div>

            <hr className="text-gray-300" />

            <div>
              <TotalThisMonth />
            </div>
        </div>
    );
};

export default Last7Days;
