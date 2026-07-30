import { useState } from "react";

const ProductPics = () => {
    const [selectedImg, setSelectedImg] = useState(0);

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
        {
            full: "./image-product-5.jpg",
            thumbnail: "./image-product-5-thumbnail.jpg",
        },
    ];

    return (
        <>
            <div>

              <div>
                <img className="rounded-2xl " src={images[selectedImg].full} alt="product" />
              </div>

              <div></div>

            </div>
        </>
    );
};

export default ProductPics;
