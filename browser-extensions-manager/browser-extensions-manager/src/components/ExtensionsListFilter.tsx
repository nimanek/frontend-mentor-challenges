const ExtensionsListFilter = ({ currentFilter, setCurrentFilter }: any) => {
    return (
        <div className="md:mt-18 mt-4 font-[NotoSans]">
            <main className="flex flex-col md:flex-row justify-between items-center p-2">
                <div>
                    <p className="font-bold text-2xl dark:text-white">
                        Extention List
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setCurrentFilter("all")}
                        className={`${currentFilter === "all" ? "bg-red-600 text-white dark:bg-red-500 dark:text-neutral-800" : ""}  dark:bg-neutral-600 dark:text-neutral-200 shadow cursor-pointer px-3 py-1 rounded-full`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setCurrentFilter("active")}
                        className={`${currentFilter === "active" ? "bg-red-600 text-white dark:bg-red-500 dark:text-neutral-800" : ""} dark:bg-neutral-600 dark:text-neutral-200 shadow px-3 py-1 rounded-full cursor-pointer`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setCurrentFilter("inactive")}
                        className={`${currentFilter === "inactive" ? "bg-red-600 text-white dark:bg-red-500 dark:text-neutral-800" : ""} dark:bg-neutral-600 dark:text-neutral-200 shadow px-3 py-1 rounded-full cursor-pointer`}
                    >
                        Inactive
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ExtensionsListFilter;
