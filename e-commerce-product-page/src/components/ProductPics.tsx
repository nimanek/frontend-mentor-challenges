import { useState } from "react";

const ProductPics = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const images = [
        {
            full: "./image-product-1.jpg",
            thumbnail: "./image-product-1-thumbnail.jpg",
        },
        {
            full: "./image-product-2.jpg",
            thumbnail: "./image-product-2-thumbnail.jpg",
        },
        {
            full: "./image-product-3.jpg",
            thumbnail: "./image-product-3-thumbnail.jpg",
        },
        {
            full: "./image-product-4.jpg",
            thumbnail: "./image-product-4-thumbnail.jpg",
        },
    ];

    const handleImg = (ind: number) => {
        setSelectedImg(ind);
    };

    // func for closing lightbox
    const hanldeCloseLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    {/* next and prev btn for smaller screens */}
                    <div className="block md:hidden">
                        {/* next btn */}
                        <button
                            onClick={() => setSelectedImg((prev) => prev + 1)}
                            className={`absolute bg-white h-10 w-10 flex justify-center items-center rounded-full top-60 right-2 ${selectedImg === 3 ? "disabled:cursor-not-allowed bg-white/50" : ""}`}
                            disabled={selectedImg === 3}
                        >
                            <img src="./icon-next.svg" alt="" />
                        </button>
                        {/* prev btn */}
                        <button
                            onClick={() => setSelectedImg((prev) => prev - 1)}
                            className={`absolute bg-white h-10 w-10 flex justify-center items-center rounded-full top-60 left-2 ${selectedImg === 0 ? "disabled:cursor-not-allowed bg-white/50" : ""}`}
                            disabled={selectedImg === 0}
                        >
                            <img src="./icon-previous.svg" alt="" />
                        </button>
                    </div>
                    <img
                        onClick={() => setIsLightboxOpen(true)}
                        className="md:rounded-2xl cursor-pointer"
                        src={images[selectedImg].full}
                        alt="product"
                    />
                </div>

                <div className="flex mt-2 gap-4 items-center justify-end">
                    {images.map((img, ind) => (
                        <button
                            onClick={() => handleImg(ind)}
                            className={`hidden cursor-pointer rounded-xl md:flex items-center justify-end ${selectedImg === ind ? "border-2 border-orange-500" : ""}`}
                            key={ind}
                        >
                            <img
                                className={`ml-3 rounded-lg  ${selectedImg === ind ? "opacity-40" : ""}`}
                                src={img.thumbnail}
                                alt=""
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* lightbox */}
            {isLightboxOpen && (
                <div
                    onClick={hanldeCloseLightbox}
                    className="fixed inset-0 bg-black/50 z-40 md:block hidden"
                >
                    <div onClick={(e)=>e.stopPropagation()} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-110 z-50">
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <button
                                    onClick={hanldeCloseLightbox}
                                    className="absolute right-2 top-6 cursor-pointer text-gray-700 hover:text-orange-500"
                                >
                                    <svg
                                        width="14"
                                        height="15"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {/* next btn */}
                                <button
                                    onClick={() =>
                                        setSelectedImg((prev) => prev + 1)
                                    }
                                    className={`relative bg-white p-4 rounded-full top-60 cursor-pointer left-106 ${selectedImg === 3 ? "disabled:cursor-not-allowed bg-white/50" : ""}`}
                                    disabled={selectedImg === 3}
                                >
                                    <img src="./icon-next.svg" alt="" />
                                </button>

                                {/* prev btn */}
                                <button
                                    onClick={() =>
                                        setSelectedImg((prev) => prev - 1)
                                    }
                                    className={`relative bg-white p-4 rounded-full -bottom-60 cursor-pointer -left-16 ${selectedImg === 0 ? "disabled:cursor-not-allowed bg-white/50" : ""}`}
                                    disabled={selectedImg === 0}
                                >
                                    <img src="./icon-previous.svg" />
                                </button>
                                <img
                                    className="rounded-2xl"
                                    src={images[selectedImg].full}
                                    alt="product"
                                />
                            </div>

                            <div className="flex mt-2 gap-4 items-center justify-end">
                                {images.map((img, ind) => (
                                    <button
                                        onClick={() => handleImg(ind)}
                                        className={`cursor-pointer rounded-xl flex items-center justify-end ${selectedImg === ind ? "border-2 border-orange-500" : ""}`}
                                        key={ind}
                                    >
                                        <img
                                            className={`ml-3 rounded-lg ${selectedImg === ind ? "opacity-40" : ""}`}
                                            src={img.thumbnail}
                                            alt=""
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPics;
