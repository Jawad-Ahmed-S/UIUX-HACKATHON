import Image from "next/image"
export default function ProductSpecific(){
return(
    <section className="  flex flex-col justify-between mb-[5rem] items-center md:flex-row">
        <div className="  md:w-[50%] w-[100%] ">
            <img alt="product "src="/ProductListing.png" />
        </div>
    <div className="  flex flex-col md:w-[55%] w-[90%]  justify-center gap-10 p-8">
      {/* Left Section */}
      <div className="  flex-1 flex flex-col gap-6">
        <h1 className="  headline-two text-custom-purple-dark">The Dandy Chair</h1>
        <p className="  headline-three font-semibold text-custom-purple-dark">£250</p>
        <p className="  body-medium text-custom-purple-dark">
          A timeless design, with premium materials features as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beech legs and lambskin leather upholstery.
        </p>

        {/* Features */}
        <ul className="  list-disc body-medium list-inside text-custom-purple-dark">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>

        {/* Dimensions */}
        <div>
          <h2 className="  headline-four text-custom-purple-dark mb-2">
            Dimensions
          </h2>
          <ul className="  list-none flex gap-[2rem] mt-[2rem] text-custom-purple-dark">
            <li className="  flex flex-col">
              <span className="  font-semibold">Height</span> <span>110cm</span>
            </li>
            <li className="  flex flex-col">
              <span className="  font-semibold">Width</span> <span>75cm</span>
            </li>
            <li className="  flex flex-col">
              <span className="   font-semibold">Depth</span><span>80cm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="  flex flex-row justify-between items-center gap-4">
        {/* Quantity Selector */}
        <div className="  flex items-center ">
          <button className=" p-2 bg-gray-300 hover:bg-gray-400 text-custom-purple-dark ">
            -
          </button>
          <input
            type="text"
            value="1"
            readOnly
            className=" p-2 w-10 text-center bg-gray-300  "
          />
          <button className=" p-2 bg-gray-300 hover:bg-gray-400 text-custom-purple-dark  ">
            +
          </button>
        </div>

        <button className="  bg-custom-purple-dark text-white py-2 px-8   hover:bg-custom-purple">
          Add to cart
        </button>
      </div>

        </div>
    </section>
)
} 