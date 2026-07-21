import { useState } from "react";
import { CardNumberFormat } from "../utils/CardNumberFormat";
import { CvcFormat } from "../utils/CvcFormat";
import { MonthFormat } from "../utils/MonthFormat";

type FormInputs = {
    cardNumber: string;
    setCardNumber: (value: string) => void;
    cardHolderName: string;
    setCardHolderName: (value: string) => void;
    cvcNumber: string;
    setCvcNumber: (value: string) => void;
    monthNumber: number | undefined;
    setMonthNumber: (value: number) => void;
    yearNumber: number | undefined;
    setYearNumber: (value: number) => void;
};

const FormInputs = ({
    setCardNumber,
    cardNumber,
    cardHolderName,
    setCardHolderName,
    cvcNumber,
    setCvcNumber,
    monthNumber,
    setMonthNumber,
    yearNumber,
    setYearNumber,
}: FormInputs) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!cardHolderName) {
            alert("Please Enter Card Holder Name");
            return;
        }
        if (!cardNumber || cardNumber.length < 19) {
            alert("Check Your Card Number Again");
            return;
        }
        if (!cvcNumber || cvcNumber.length < 3) {
            alert("Write a valid CVC");
            return;
        }
        if (!monthNumber || !yearNumber) {
            alert("Please Check the Expiration Dates");
            return;
        }
        if(yearNumber < 27){
            alert(`Year cannot be ${yearNumber}. must be more than 26`);
            return;
        }
        setIsSubmitted(true);
        // can take values here and save them
        // ...

        // return values to empty (taking cards back to defaul values)
        setCardHolderName("");
        setCardNumber("");
        setCvcNumber("");
        setMonthNumber(0);
        setYearNumber(0);
    };

    return (
        <>
            <div className="relative top-80 md:top-46">
                {isSubmitted 
                ?   (
                    // THANK YOU PAGE
                    <div className="absolute left-1 md:left-[55%]">
                        <div className="flex flex-col items-center justify-around w-94 h-76">
                            <img src="./icon-complete.svg" alt="Done" title="Done!" />
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-2xl font-semibold tracking-wide">THANK YOU!</p>
                                <p className="font-extralight text-gray-500 tracking-widest">We've added your card details</p>
                            </div>
                            <button onClick={()=>window.location.reload()} className="w-[80%] md:w-full bg-purple-950 rounded-md p-3 text-white cursor-pointer hover:bg-purple-900">Continue</button>
                        </div>
                    </div>
                    ) : (
                    <div className="absolute md:w-81 w-70 right-[20%] left-6 md:left-180">
                        <form action="">
                            {/* CardHolder name */}
                            <label className="flex flex-col w-70 md:w-81 mb-6 tracking-widest">
                                <span className="font-extralight text-xs mb-1 ">
                                    CARDHOLDER NAME
                                </span>
                                <input
                                    onChange={(e) =>
                                        setCardHolderName(e.target.value)
                                    }
                                    value={cardHolderName}
                                    className="border border-gray-300 rounded-md p-2 text-sm focus:outline-1 outline-purple-900"
                                    type="text"
                                    placeholder="e.g. Jane Appleseed"
                                />
                            </label>
                            {/* Card Number */}
                            <label className="flex flex-col w-70 md:w-81 mb-6 tracking-widest">
                                <span className="font-extralight text-xs mb-1">
                                    CARD NUMBER
                                </span>
                                <input
                                    onChange={(e) => {
                                        const formatted = CardNumberFormat(
                                            e.target.value,
                                        );
                                        setCardNumber(formatted);
                                    }}
                                    value={cardNumber}
                                    className="border border-gray-300 rounded-md p-2 text-sm focus:outline-1 outline-purple-900"
                                    type="text"
                                    placeholder="e.g. 1234 5678 9123 0000"
                                />
                            </label>
                            {/* EXP. date (MM/YY) */}
                            <div className="flex justify-start items-center w-81">
                                <label className="flex flex-col mb-6">
                                    <span className="text-xs mb-1 tracking-widest">
                                        EXP. DATE (MM/YY)
                                    </span>
                                    <div>
                                        <input
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (!val) {
                                                    setMonthNumber(0);
                                                }
                                                const parsed = parseInt(
                                                    val,
                                                    10,
                                                );
                                                if (!isNaN(parsed)) {
                                                    const formattedMonth =
                                                        MonthFormat(parsed);
                                                    setMonthNumber(
                                                        formattedMonth,
                                                    );
                                                }
                                            }}
                                            value={monthNumber ?? ""}
                                            min={1}
                                            max={12}
                                            className="w-16 border border-gray-300 rounded-md p-2 text-sm focus:outline-1 outline-purple-900"
                                            type="number"
                                            placeholder="MM"
                                        />
                                        <input
                                            min={27}
                                            max={99}
                                            onChange={(e) => {
                                            const digitsOnly = e.target.value.replace(/\D/g, "");
                                            const limitedDigits = digitsOnly.slice(0, 2);
                                            setYearNumber(parseInt(limitedDigits, 10));
                                            
                                        }}
                                            value={yearNumber}
                                            className="ml-2 w-16 border border-gray-300 rounded-md p-2 text-sm focus:outline-1 outline-purple-900"
                                            type="number"
                                            placeholder="YY"
                                        />
                                    </div>
                                </label>
                                {/* CVC */}
                                <label className="flex flex-col w-30 md:w-41 ml-6 mb-6 tracking-widest">
                                    <span className="font-extralight text-xs mb-1">
                                        CVC
                                    </span>
                                    <input
                                        onChange={(e) => {
                                            const formattedCvc = CvcFormat(
                                                e.target.value,
                                            );
                                            setCvcNumber(formattedCvc);
                                        }}
                                        value={cvcNumber}
                                        className="border border-gray-300 rounded-md p-2 text-sm focus:outline-1 outline-purple-900"
                                        type="text"
                                        placeholder="e.g. 123"
                                    />
                                </label>
                            </div>
                            {/* Confirm button */}
                            <button
                                onClick={(e)=>handleSubmit(e)}
                                className="bg-purple-950 hover:bg-purple-900 cursor-pointer w-full text-white py-3 rounded-md shadow-xl focus:outline-2 outline-purple-400"
                            >
                                Confirm
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default FormInputs;
