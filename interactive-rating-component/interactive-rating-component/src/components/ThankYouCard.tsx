import { ratingNumbers } from "./RateCard";

interface ThankYouCardProps{
    selectedRating: number | undefined
}

const ThankYouCard = ({selectedRating}:ThankYouCardProps) => {
    return (
        <>
            <div className="bg-gray-800 h-91 w-90 rounded-2xl p-6 flex flex-col gap-2">
                <div className="flex items-center justify-center">
                    <img src="public/illustration-thank-you.svg" alt="Star" />
                </div>
                <div className="bg-gray-500/30 px-4 rounded-full py-2 text-orange-500 text-center mt-4">
                    <p>You selected <span>{selectedRating}</span> out of <span>{ratingNumbers.length}</span></p>
                </div>
                <div className="text-center text-2xl mt-6">
                    <h3 className="text-white font-bold">Thank you!</h3>
                </div>
                <div>
                    <p className="text-gray-500 font-extralight text-sm text-center">
                        We appreciate you taking the time to give a rating. If
                        you ever need more support, don’t hesitate to get in
                        touch!
                    </p>
                </div>
            </div>
        </>
    );
};

export default ThankYouCard;
