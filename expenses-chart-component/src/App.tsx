import "./App.css";
import MyBalance from "./components/MyBalance";

function App() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex h-80 justify-center mt-18 w-full md:w-[50%]">
                <MyBalance />
            </div>
        </div>
    );
}

export default App;
