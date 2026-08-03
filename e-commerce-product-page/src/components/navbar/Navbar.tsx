import type { Dispatch, SetStateAction } from "react";
import Cart from "./Cart";

 export type NavbarProps={
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}


const Navbar = ({isCartOpen,setIsCartOpen, count, setCount}:NavbarProps) => {
    const navs = [
        { id: 1, name: "Collections" },
        { id: 2, name: "Men" },
        { id: 3, name: "Women" },
        { id: 4, name: "About" },
        { id: 5, name: "Contact" },
    ];

    return (
        <div className="">
            <main className="flex items-center justify-between border-b border-b-gray-300">
                <div className="flex items-center justify-start gap-5 h-28">
                    <img
                        className="mr-8"
                        src="./logo.svg"
                        alt="logo"
                    />

                    {navs.map((nav) => (
                        <ul key={nav.id}>
                            <li className="cursor-pointer text-gray-700 hover:text-black">
                                {nav.name}
                            </li>
                        </ul>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-8">
                    <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} count={count} setCount={setCount}/>
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
