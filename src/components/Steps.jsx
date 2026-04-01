import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-4">
        Get Started in 3 Steps
      </h2>

      <p className="text-gray-500 mb-12">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* STEP 1 */}
        <div className="relative p-8 border rounded-2xl shadow-sm hover:shadow-md transition">

          {/* 🔥 NUMBER BADGE */}
          <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
            01
          </div>

          {/* 🔥 ICON BOX */}
          <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={userImg} alt="user" className="w-10 h-10 object-contain" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Create Account
          </h3>

          <p className="text-gray-500 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="relative p-8 border rounded-2xl shadow-sm hover:shadow-md transition">

          <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
            02
          </div>

          <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={packageImg} alt="package" className="w-10 h-10 object-contain" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Choose Products
          </h3>

          <p className="text-gray-500 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="relative p-8 border rounded-2xl shadow-sm hover:shadow-md transition">

          <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
            03
          </div>

          <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={rocketImg} alt="rocket" className="w-10 h-10 object-contain" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Start Creating
          </h3>

          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;


