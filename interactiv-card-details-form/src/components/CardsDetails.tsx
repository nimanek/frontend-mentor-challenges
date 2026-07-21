
type CardsDetailsProps={
    cardNumber: string;
    cardHolderName: string;
    cvcNumber: string;
    monthNumber: number | undefined;
    yearNumber: number | undefined;
}

const CardsDetails = ({cardNumber, cardHolderName,cvcNumber, monthNumber, yearNumber}:CardsDetailsProps) => {
    return (
        <>
            <div className="relative left-4 md:left-0">
                {/* Front card */}
                <div className="absolute rounded-full top-32 z-50 md:left-58 shadow-xl/50 text-white">
                    <img className="h-40 z-50 md:h-48" src="./bg-card-front.png" />
                    <img className="absolute top-4 left-5 z-60" src="./card-logo.svg" />
                    <span className="absolute bottom-14 left-5 w-[90%] tracking-[0.4rem] font-medium text-lg">{!cardNumber ? <>0000 0000 0000 0000</> : cardNumber}</span>
                    <span className="absolute right-5 bottom-4 text-xs">{!monthNumber ? <>00</> : monthNumber}/{!yearNumber ? <>00</> : yearNumber}</span>
                    <span className="absolute left-5 bottom-4 text-xs">{!cardHolderName ? <>JANE APPLESEED</> : cardHolderName}</span>
                </div>
                {/* Back card */}
                <div className="absolute rounded-full top-10 right-10 w-fit md:left-78 md:top-86 shadow-xl/30">
                    <img className="h-40 z-40 md:h-48" src="./bg-card-back.png" />
                    <span className="absolute top-17 right-10 md:top-20 text-white">{!cvcNumber ? <>000</> : cvcNumber}</span>
                </div>
            </div>
        </>
    );
};

export default CardsDetails;
