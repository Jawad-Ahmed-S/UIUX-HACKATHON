import { productData } from "../Info";
import ProductCard from "./Product";
import { ButtonGray } from "./button";

export default function ProductSlider() {
  return (
    <section className="max-w-[1440px] flex justify-center items-center mt-[5rem] mb-[5rem] px-4 overflow-x-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 w-full justify-evenly md:flex-row md:items-center overflow-x-auto">
          {productData.map((tile, index) => (
            <ProductCard
              key={index}
              imagePath={tile.imagePath}
              title={tile.title}
              price={tile.price}
            />
          ))}
        </div>
        <ButtonGray className="m-auto">View More</ButtonGray>
      </div>
    </section>
  );
}
