import Header from "./Components/header";
import Hero from "./Components/hero";
import Head from "next/head";
import { ButtonGray,ButtonDarkBlue } from "./Components/button";
import ServiceTile from "./Components/mainPage/serviceTile";
import {serviceTilesData,productData} from "./Info"
import ProductCard from "./Components/Product";
import Image from "next/image";
import { QualityIcon } from "./Components/icons";
export default function Home() {
  return (
    
    <div className="bg-white h-full max-w-[1440px] m-auto">

    <Header/>
    <Hero/>
    <section className="flex flex-col items-center justify-center">
      <h1 className="headline-three text-custom-purple-dark m-[3rem]">What make our brand different?</h1>
      <div className="flex gap-4 w-[90%] justify-evenly">

   {serviceTilesData.map((tile, index) => (
        <ServiceTile
          key={index}
          Icon={tile.Icon}
          title={tile.title}
          description={tile.description}
        />
      ))} </div>
    </section>
    <section className="flex justify-center items-center mt-[5rem] mb-[5rem]">
      <div className="w-[100%] flex flex-col justify-center items-center">

      <div className="flex gap-4 w-[90%] justify-evenly ">

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
    <section className="flex items-center justify-center">
    <div className="w-[90%] flex overflow-hidden  items-center justify-between ">
    <div className="bg-custom-purple-dark  h-[25rem] ">
      <div className="flex flex-col   justify-between h-[85%] m-[2rem] ">
        <div className="flex flex-col justify-between">
          <h1 className="headline-two text-white">It started with a small idea</h1>
          <p className="headline-five text-white">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
        </div>
        <ButtonDarkBlue className="text-white w-[8rem] headline-six">
          View Collection
        </ButtonDarkBlue>
      </div>
    </div>
      <div className=" h-[25rem] overflow-hidden ml-3 flex justify-end">
        <img  src="MainPageCollection.png" alt="collection" />
      </div>
    </div>
</section>
<section className="joinClub-bg w-full flex justify-center items-center">
  <div className="flex flex-col justify-evenly ">
    <h1>Join the club and get the benefits</h1>
    <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
    <div>
      <div>
        <QualityIcon/>
        <p>Exclusive Offers</p>
      </div>
      <div>
        <QualityIcon/>
        <p>Exclusive Offers</p>
      </div>
      <div>
        <QualityIcon/>
        <p>Exclusive Offers</p>
      </div>
    </div>
  </div>
</section>
    </div>
     );
}
