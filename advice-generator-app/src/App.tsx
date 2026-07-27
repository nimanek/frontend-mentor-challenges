import { useEffect, useState } from "react";
import "./App.css";

export interface Root {
    slip: {
        id: number;
        advice: string;
    };
}


function App() {
    const [advice, setAdvice] = useState<Root>();

    useEffect(()=>{
      
    },[])

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-slate-800">
                <main className="flex flex-col bg-slate-600 rounded-md p-6 items-center text-white">
                    <p className="text-green-500 text-sm">ADVICE NUMBER #22</p>
                    <p className="font-semibold p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi.
                    </p>

                    <img
                        className="my-4"
                        src="../public/pattern-divider-desktop.svg"
                    />
                </main>
                <button className="absolute top-[62%] p-3 bg-green-300 rounded-full">
                    <img
                        className="h-4"
                        src="../public/icon-dice.svg"
                        alt="Dice icon"
                    />
                </button>
            </div>
        </>
    );
}

export default App;
