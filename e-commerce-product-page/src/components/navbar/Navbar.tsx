const Navbar = () => {
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
                    <button className="cursor-pointer hover:bg-gray-100 p-2 rounded-full">
                        <img src="./icon-cart.svg" alt="cart" />
                    </button>
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
