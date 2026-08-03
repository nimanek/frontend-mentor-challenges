import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductDetailsText from "./components/ProductDetailsText";
import ProductPics from "./components/ProductPics";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar count={count} setCount={setCount} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

            <div className="mt-16">
                <main className="grid grid-cols-10 gap-18">
                    <div className="col-span-4">
                        <ProductPics />
                    </div>
                    <div className="col-span-6">
                        <ProductDetailsText count={count} setCount={setCount}/>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
