import { useState } from "react";
import { toast } from "react-toastify"; 

import products from "../data/products.json";
import ProductCard from "./ProductCard";


import writing from "../assets/writing.png";
import design from "../assets/design-tool.png";
import group from "../assets/Group.png";
import operation from "../assets/operation.png";
import portfolio from "../assets/portfolio.png";
import social from "../assets/social-media.png";
import vectorImg from "../assets/vector.jpg";


const icons = {
  "writing.png": writing,
  "design-tool.png": design,
  "Group.png": group,
  "operation.png": operation,
  "portfolio.png": portfolio,
  "social-media.png": social,
};

const ToggleSection = ({ cart, setCart }) => {


  const [active, setActive] = useState("products");

 
  const handleAddToCart = (product) => {
    setCart([...cart, product]);

    toast.success(`${product.name} added to cart `);
  };

  
  const handleRemove = (index) => {
    const removedItem = cart[index];

    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);

    toast.error(`${removedItem.name} removed `);
  };

  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">

     
      <h2 className="text-3xl font-bold text-center mb-4">
        Premium Digital Tools
      </h2>

      <p className="text-gray-500 mb-8 text-center max-w-xl mx-auto">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>

      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 p-1 rounded-full flex gap-2">

          <button
            onClick={() => setActive("products")}
            className={`px-6 py-2 rounded-full ${
              active === "products"
                ? "bg-purple-600 text-white"
                : "text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActive("cart")}
            className={`px-6 py-2 rounded-full ${
              active === "cart"
                ? "bg-purple-600 text-white"
                : "text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>
      </div>

  
      {active === "products" ? (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>

      ) : (

  
        <div className="bg-gray-50 p-6 rounded-2xl border">

          <h3 className="text-xl font-semibold mb-6">Your Cart</h3>

          {cart.length === 0 ? (


            <div className="flex flex-col items-center py-10">
              <img
                src={vectorImg}
                alt="empty"
                className="w-40 mb-4"
              />
              <p className="text-gray-500">Your cart is empty</p>
            </div>

          ) : (

            <>

              <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
                  >


                    <div className="flex items-center gap-4">

                      <img
                        src={icons[item.icon]}
                        alt={item.name}
                        className="w-10 h-10 bg-gray-100 p-2 rounded-full"
                      />

                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          ${item.price}
                        </p>
                      </div>

                    </div>

           
                    <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>

                  </div>
                ))}
              </div>

  
              <div className="flex justify-between mb-6 font-semibold text-lg">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>

    
              <button
                onClick={() => {
                  setCart([]);
                  toast.info("Checkout successful ");
                }}
                className="w-full py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
              >
                Proceed To Checkout
              </button>
            </>
          )}

        </div>
      )}

    </div>
  );
};

export default ToggleSection;

