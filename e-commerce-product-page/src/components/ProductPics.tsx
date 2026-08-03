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
        }
    ];


    const handleImg = (ind:number)=>{
        setSelectedImg(ind)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">

              <div>
                <img className="rounded-2xl" src={images[selectedImg].full} alt="product" />
              </div>

              <div className="flex mt-2 gap-4 items-center justify-end">
                {images.map((img,ind)=>(
                  <button onClick={()=>handleImg(ind)} className={`cursor-pointer rounded-xl flex items-center justify-end ${selectedImg === ind ? 'border-2 border-orange-500' : ''}`} key={ind}>
                    <img className={`ml-3 rounded-lg  ${selectedImg === ind ? 'opacity-40' : ''}`} src={img.thumbnail} alt="" />
                  </button>
                ))}
              </div>

            </div>
        </>
    );
};

export default ProductPics;
