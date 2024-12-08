import { productDataAll } from "../Info";
import ProductCard from "./Product";
import { ButtonGray } from "./button";
import "../Components/styles/hero.css"
export default function AllProduct() {
  return (
    <section className="flex flex-col gap-5 justify-center items-center ">
        <div className="custom-bg w-full h-[12rem] flex items-end">
            <p className="headline-three text-white m-[2rem]">All Products</p>
        </div>
      <div className="w-[100%] flex flex-col justify-center mb-[5rem] items-center">
        {/* Grid container for Product Tiles */}
        <div className="grid grid-cols-1 gap-6 w-[90%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productDataAll.map((tile, index) => (
            <ProductCard
              key={index}
              imagePath={tile.imagePath}
              title={tile.title}
              price={tile.price}
            />
          ))}
        </div>
        <ButtonGray className="mt-6">View More</ButtonGray>
      </div>
    </section>
  );
}
