import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <div className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        
        <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">
          DigiTools
        </h1>

        
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        
        <div className="flex items-center gap-5">

          
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-700 text-xl" />

            
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {cartCount}
            </span>
          </div>

          
          <button className="text-gray-700 font-medium hover:text-purple-600">
            Login
          </button>

          
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;