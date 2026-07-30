import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductDetailsText from "./components/ProductDetailsText";
import ProductPics from "./components/ProductPics";

function App() {
    return (
        <>
            <Navbar />

            <div className="mt-16">
                <main className="grid grid-cols-10 gap-18">
                    <div className="col-span-4">
                        <ProductPics />
                    </div>
                    <div className="col-span-6">
                        <ProductDetailsText />
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
