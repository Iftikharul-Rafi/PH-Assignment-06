import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";

import user from "../assets/writing.png";
import rocket from "../assets/design-tool.png";
import design from "../assets/Group.png";
import social from "../assets/operation.png";
import packageImg from "../assets/portfolio.png";
import operation from "../assets/social-media.png";

// icon mapping
const icons = {
  "writing.png": user,
  "design-tool.png": rocket,
  "Group.png": design,
  "operation.png": social,
  "portfolio.png": packageImg,
  "social-media.png": operation,
};

const ProductCard = ({ product, handleAddToCart }) => {


  const [isAdded, setIsAdded] = useState(false);


  const handleClick = () => {
    handleAddToCart(product); 
    setIsAdded(true);
  };

  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition relative bg-white">

  
      <span className="absolute top-4 right-4 text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
        {product.tag}
      </span>

    
      <div className="w-10 h-10 mb-4">
        <img
          src={icons[product.icon]}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

  
      <h2 className="text-xl font-semibold mb-2">
        {product.name}
      </h2>

     
      <p className="text-gray-500 text-sm mb-4">
        {product.description}
      </p>

     
      <h3 className="text-2xl font-bold mb-4">
        ${product.price}
        <span className="text-sm text-gray-500 font-normal">
          /{product.period}
        </span>
      </h3>

     
      <ul className="text-sm text-gray-600 mb-6 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <FcCheckmark />
            {feature}
          </li>
        ))}
      </ul>

    
      <button
        onClick={handleClick}
        disabled={isAdded}
        className={`w-full py-2 rounded-full transition
          ${isAdded
            ? "bg-green-500 text-white"
            : "bg-purple-600 text-white hover:bg-white hover:text-black hover:border-purple-600 border"
          }
        `}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;


...