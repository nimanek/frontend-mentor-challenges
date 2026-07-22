import "./App.css";
import ProductsList from "./components/ProductsList";
import RightCart from "./components/RightCart";

function App() {
    return (
        <>
            <div className="mx-auto w-295 mt-12 grid grid-cols-10 gap-6">
                <div className="col-span-7 bg-red-500">
                    <ProductsList />
                </div>

                <div className="col-span-3">
                    <RightCart />
                </div>
            </div>
        </>
    );
}

export default App;
