import Image from "next/image"
import { ABeeZee } from "next/font/google";
import './styles/hero.css'
import { ButtonGray } from "./button";
export default function Hero(){
    // const abeezee  = ABeeZee({
    //     weight:['500','700'],
    // })
    return(
        <div className="h-[43rem] hero-bg">
            <div className="bg-white h-[30rem] flex  w-[35rem] float-right m-[5rem] ">
                <div className="m-[3rem] flex flex-col justify-between">
                <div>
                    <h1 className="headline-two text-custom-purple-dark">Luxury homeware for people who love timeless design quality</h1>
                    <p style={{ color: '#4E4D93' }} className="headline-six text-custom-purple-dark mt-2">Shop the new Spring 2022 collection today</p>
                </div>
                <ButtonGray  className="">Button</ButtonGray>
                </div>
            </div>
        </div>
    )
}