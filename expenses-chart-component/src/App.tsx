import "./App.css";
import Last7Days from "./components/main/Last7Days";
import MyBalance from "./components/MyBalance";

function App() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4 mt-10 items-center justify-center w-full md:w-[50%]">
                <MyBalance />
                <Last7Days />
            </div>
        </div>
    );
}

export default App;
