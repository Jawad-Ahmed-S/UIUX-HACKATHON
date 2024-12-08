import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { ButtonDarkBlueLarge } from "../Components/button";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
      image: "/grayvaase.png",
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      quantity: 1,
      image: "/whitevase.png",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section>
      <Header />
      <div className="bg-gray-50 p-8">
        <h1 className="headline-three ml-6 md:ml-[5rem]">Your shopping cart</h1>
        <div className="max-w-5xl text-custom-purple-dark mx-auto p-6">
          {/* Hide table header on mobile */}
          <div className="hidden md:grid grid-cols-12 body-medium border-b pb-4 mb-4">
            <div className="col-span-6 text-left font-semibold">Product</div>
            <div className="col-span-3 text-center font-semibold">Quantity</div>
            <div className="col-span-3 text-right font-semibold">Total</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid md:grid-cols-12 items-center border-b py-4 gap-4"
            >
              {/* Product Details */}
              <div className="col-span-6 flex items-center gap-4 md:gap-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 md:w-24 md:h-24 object-cover"
                />
                <div>
                  <h2 className="headline-six">{item.name}</h2>
                  <p className="body-small text-gray-500">{item.description}</p>
                  <p className="body-medium font-semibold text-gray-700">
                    £{item.price}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="col-span-3 flex justify-center items-center gap-2">
                <button className="w-8 h-8 border border-gray-300">-</button>
                <span>{item.quantity}</span>
                <button className="w-8 h-8 border border-gray-300">+</button>
              </div>

              {/* Total Price */}
              <div className="col-span-3 text-right font-semibold">
                £{item.price * item.quantity}
              </div>
            </div>
          ))}

          {/* Subtotal and Checkout */}
          <div className="mt-6 flex flex-col gap-5 items-end text-right">
            <div>
              <p className="text-lg font-semibold">Subtotal: £{subtotal}</p>
              <p className="text-sm text-gray-500">
                Taxes and shipping are calculated at checkout.
              </p>
            </div>
            <ButtonDarkBlueLarge className="w-full md:w-auto text-white">
              Proceed to Checkout
            </ButtonDarkBlueLarge>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
