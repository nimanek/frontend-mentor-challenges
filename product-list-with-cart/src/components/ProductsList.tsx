import ProductCard from "./ProductCard";

const ProductsList = () => {
    return (
        <>
            <p className="font-bold text-3xl mb-6">Desserts</p>
            <div className="grid gap-6 grid-cols-3">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
};

export default ProductsList;
