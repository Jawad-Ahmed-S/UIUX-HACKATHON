import { productDataAll } from "../Info";
import ProductCard from "./Product";
import { ButtonGray } from "./button";

export default function ProductSlider() {
  return (
    <section className="flex justify-center items-center mt-[5rem] mb-[5rem]">
      <div className="w-[100%] flex flex-col justify-center items-center">
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
