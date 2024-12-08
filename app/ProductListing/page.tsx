import Header from "../Components/header";
import Hero from "../Components/hero";
import { ButtonGray,ButtonDarkBlue} from "../Components/button"
import ServiceTile from "../Components/mainPage/serviceTile";
import {serviceTilesData,productData} from "../Info"
import ProductCard from "../Components/Product";
import Image from "next/image";
import { QualityIcon } from "../Components/icons";
import JoinClub from "../Components/joinclub";
import StartingIdea from "../Components/startedidea";
import ProductSlider from "../Components/ProductSlider";
import Footer from "../Components/footer";
import ProductSpecific from "../Components/ProductSpecific";

export default function ProductListing() {
  return (
    
    <div className="bg-white h-full max-w-[1440px] sm:-w-[400px] m-auto">

    <Header/>
    <ProductSpecific/> 
    <h1 className="headline-three m-[5rem] text-custom-purple-dark">You May Also Like</h1>
          <ProductSlider/> 
     <section className="flex flex-col items-center justify-center ">
      <h1 className="headline-three text-custom-purple-dark m-[3rem]">What make our brand different?</h1>
      <div className="flex flex-col gap-4 w-[90%] justify-evenly md:flex-row  md:justify-center items-center">

   {serviceTilesData.map((tile, index) => (
        <ServiceTile 
          key={index}
          Icon={tile.Icon}
          title={tile.title}
          description={tile.description}
        />
      ))} </div>
    </section>
<JoinClub/>
<Footer/>
    </div>
     );
}
