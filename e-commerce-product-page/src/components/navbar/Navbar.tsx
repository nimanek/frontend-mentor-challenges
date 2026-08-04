import { useState, type Dispatch, type SetStateAction } from "react";
import Cart from "./Cart";

export type NavbarProps = {
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
};

const Navbar = ({
    isCartOpen,
    setIsCartOpen,
    count,
    setCount,
}: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navs = [
        { id: 1, name: "Collections" },
        { id: 2, name: "Men" },
        { id: 3, name: "Women" },
        { id: 4, name: "About" },
        { id: 5, name: "Contact" },
    ];

    return (
        <div className="">
            <main className="flex items-center justify-between border-b p-3 md:p-0 border-b-gray-300">
                <div className="flex items-center justify-start gap-5 h-16 md:h-28">
                    {/* hamburgur menu for smaller screens */}
                    <img
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden"
                        src="./icon-menu.svg"
                        alt="menu"
                    />

                    {isMenuOpen && (
                        <div onClick={()=>setIsMenuOpen(false)} className="bg-black/50 inset-0 z-50 w-full fixed md:hidden">
                            <div onClick={(e)=>e.stopPropagation()} className="bg-white w-50 fixed inset-0 z-40 p-6 md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-400 mb-8"
                                >
                                    <svg
                                        width="14"
                                        height="15"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <ul>
                                    {navs.map((nav) => (
                                        <li
                                            key={nav.id}
                                            className="cursor-pointer mb-4 font-bold text-lg text-gray-700 hover:text-black"
                                        >
                                            {nav.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    <img className="mr-8" src="./logo.svg" alt="logo" />

                    {/* menu for desktop screens */}
                    <ul className="hidden md:flex items-center justify-center gap-4">
                        {navs.map((nav) => (
                            <li
                                key={nav.id}
                                className="cursor-pointer text-gray-700 hover:text-black"
                            >
                                {nav.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-center gap-2 md:gap-8">
                    <Cart
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}
                        count={count}
                        setCount={setCount}
                    />
                    <img
                        className="h-10"
                        src="./image-avatar.png"
                        alt="profile"
                    />
                </div>
            </main>
        </div>
    );
};

export default Navbar;
