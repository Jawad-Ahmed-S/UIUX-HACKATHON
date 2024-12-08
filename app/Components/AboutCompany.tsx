import { ButtonGray } from "./button";

export default function AboutCompany(){
    return(
        <section className="flex flex-col   max-w-[1440px] items-center">
            <div className="flex   justify-center w-3/4 text-center items-center m-[5rem]">
                <h1 className="headline-two text-custom-purple-dark">A brand built on the love of craftmanship,
quality and outstanding customer service</h1>
            </div>
            <div className="flex">
                <div className="w-[40%]    m-[4rem] flex flex-col justify-between ">
                    <div className="space-y-[1rem]">
                    <h1 className="headline-three text-custom-purple-dark ">From a studio in London to a global brand with
over 400 outlets</h1>
                    <p className="body-medium text-custom-purple-light">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br />Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                    <ButtonGray className="">  Get in Touch  </ButtonGray>
                </div>
                <div className="max-w-[49.5%] overflow-hidden"><img src="/about1.png" alt="" /></div>
            </div>
            <div className="flex  ">
                <div className="max-w-[49.5%]   overflow-hidden"><img src="/about2.png" alt="" /></div>
                <div className="w-[40%] m-[4rem] flex flex-col justify-between ">
                    <div className="space-y-[1rem]">
                    <h1 className="headline-three text-custom-purple-dark ">Our service isn’t just personal, it’s actually hyper personally exquisite</h1>

                    <p className="body-medium text-custom-purple-light">
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br />Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                    <ButtonGray className="">  Get in Touch  </ButtonGray>
                </div>
            </div>
        </section>
    )
}