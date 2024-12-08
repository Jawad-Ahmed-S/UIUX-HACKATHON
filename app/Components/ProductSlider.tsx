import { productData } from "../Info"
import ProductCard from "./Product"
import { ButtonGray } from "./button"
export default function ProductSlider(){
    return(
        <section className="flex justify-center items-center  mt-[5rem] mb-[5rem] ">
      <div className="w-[100%] flex flex-col  justify-center  items-center">

      <div className="flex flex-col gap-4 w-[90%] justify-evenly md:flex-row md:items-center  ">

      {productData.map((tile, index) => (
        <ProductCard
        key={index}
        imagePath={tile.imagePath}
        title={tile.title}
        price={tile.price}
        />
      ))}
      </div>
      <ButtonGray className="m-auto">Veiw More</ButtonGray>
      </div>
    </section>
    )
}