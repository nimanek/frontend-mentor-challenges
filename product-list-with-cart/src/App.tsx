import { useContext } from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";
import RightCart from "./components/RightCart";
import { ShoppingCartContext } from "./context/useShoppingCart";
import OrderConfirmedModal from "./components/OrderConfirmedModal";

function App() {
      const { desserts,orderModal } = useContext(ShoppingCartContext);

    return (
        <div>
            <div className="mx-auto w-295 mt-12 grid grid-cols-1 md:grid-cols-10 md:gap-6">
                <div className="col-span-7">
                    <ProductsList />
                </div>

                <div className="col-span-3">
                    <RightCart desserts={desserts}/>
                </div>

                    {orderModal && <OrderConfirmedModal desserts={desserts}/>}
            </div>
        </div>
    );
}

export default App;
