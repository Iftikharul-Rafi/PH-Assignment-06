import heroImg from "../assets/banner.png";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>

        {/* TAG */}
        <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
          New: AI-Powered Tools Available
        </p>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
          Supercharge Your <br /> Digital Workflow
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mb-6 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
            Explore Products
          </button>

          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 flex items-center gap-2 transition">
            <FaPlay />
            Watch Demo
          </button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">

        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl overflow-hidden shadow-lg">
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;
