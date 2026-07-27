import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { ThreeDot } from "react-loading-indicators";

export interface Root {
    slip: {
        id: number;
        advice: string;
    };
}

function App() {
    const [advice, setAdvice] = useState<Root>();
    const [isLoading, setIsLoading] = useState(false);

    // getting advice function
    const fetchAdvice = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get<Root>(
                `https://api.adviceslip.com/advice?t=${Date.now()}`,
            );

            if (res.data && res.data.slip) {
                setAdvice(res.data);
            }
        } catch (error) {
            console.error("err: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    // calling the function(getting advice)
    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-slate-800">

                <div className="sm:w-[28%] w-[90%]">
                  <main className="real relative flex flex-col bg-slate-700 rounded-md p-6 items-center text-white shadow-md">
                    <p className="text-green-300 text-[0.6em] font-bold tracking-[0.18rem]">
                        ADVICE #{isLoading ? <>...</> : advice?.slip.id}
                    </p>
                    <p className="font-semibold p-4">
                        {isLoading ? (
                            <ThreeDot
                                variant="bounce"
                                color={[
                                    "#196719",
                                    "#239023",
                                    "#2db92d",
                                    "#47d247",
                                ]}
                                size="medium"
                                text=""
                                textColor=""
                            />
                        ) : (
                            <q className="font-semibold">{advice?.slip.advice}</q>
                        )}
                    </p>

                    <picture>
                      <source media="(min-width:400px )" srcSet="./pattern-divider-mobile.svg" />
                      <img
                        className="my-4"
                        src="./pattern-divider-desktop.svg"
                    />
                    </picture>
                    <button
                        onClick={() => fetchAdvice()}
                        className="absolute -bottom-5 cursor-pointer p-3 bg-green-300 hover:bg-green-400 transition rounded-full outline-0"
                    >
                        <img
                            className="h-4"
                            src="./icon-dice.svg"
                            alt="Dice icon"
                        />
                    </button>
                </main>
                </div>

            </div>
        </>
    );
}

export default App;
