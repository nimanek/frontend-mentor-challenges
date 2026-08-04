import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductDetailsText from "./components/ProductDetailsText";
import ProductPics from "./components/ProductPics";
import Footer from "./components/Footer";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar count={count} setCount={setCount} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

            <div className="md:mt-16">
                <main className="grid md:grid-cols-10 md:gap-18 grid-cols-1">
                    <div className="md:col-span-4 col-span-1">
                        <ProductPics />
                    </div>
                    <div className="md:col-span-6 col-span-1">
                        <ProductDetailsText setIsCartOpen={setIsCartOpen} count={count} setCount={setCount}/>
                    </div>
                </main>
                    <Footer />
            </div>
        </>
    );
}

export default App;
