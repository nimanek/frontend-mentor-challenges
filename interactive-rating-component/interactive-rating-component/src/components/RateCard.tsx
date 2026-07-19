import { useState } from "react";
import ThankYouCard from "./ThankYouCard";

export const ratingNumbers = [1, 2, 3, 4, 5];

const RateCard = () => {
    const [selectedRating, setSelectedRating] = useState<number | undefined>();
    const [isSubmited, setIsSubmited] = useState(false)


    const handleSubmit = () => {
        if(!selectedRating){
            alert('Please select a number')
        }else{
            setIsSubmited(!isSubmited)
        }
    };

    return (
        <>
           {
            isSubmited ? <ThankYouCard selectedRating={selectedRating}/> :(
                 <div className="bg-gray-800 h-fit w-90 rounded-2xl p-6 md: flex flex-col gap-2 mt-20">
                <div
                    title="star"
                    className="bg-gray-700 w-10 h-10 flex items-center justify-center mb-6 rounded-full"
                >
                    <img src="/icon-star.svg" alt="Star" />
                </div>
                <div>
                    <h3 className="text-white font-bold">How did we do?</h3>
                </div>
                <div>
                    <p className="text-gray-500 font-light">
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our
                        offering!
                    </p>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                    {ratingNumbers.map((number) => {
                        const isSelected = (selectedRating === number);
                        const ratingTitles: Record<number, string> = {
                            1: 'Very Bad',
                            2: 'Bad',
                            3: 'Okay',
                            4: 'Good',
                            5: 'Very Good'
                        }
                        return(
                            <button
                            key={number}
                            onClick={()=>setSelectedRating(number)}
                            title={ratingTitles[number]}
                            className={`bg-gray-700 px-4 py-2 rounded-full hover:bg-orange-500 transition cursor-pointer focus-visible:outline-1 outline-orange-400 ${isSelected? 'bg-white' : ''}`}
                        >
                            {number}
                        </button>
                        )
                            })}
                </div>
                <div>
                    <button
                        onClick={handleSubmit}
                        className="bg-orange-500 text-gray-800 w-full rounded-full py-3 mt-4 cursor-pointer hover:bg-white transition tracking-widest font-bold text-sm"
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
            )
           }
        </>
    );
};

export default RateCard;
