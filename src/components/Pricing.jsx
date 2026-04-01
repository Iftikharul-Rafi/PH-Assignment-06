import { FcCheckmark } from "react-icons/fc";


const Pricing = () => {

  const starter = {
    name: "Starter",
    description: "Perfect for getting started",
    price: "$0",
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    buttonText: "Get Started Free"
  };


  const pro = {
    name: "Pro",
    description: "Best for professionals",
    price: "$29",
    period: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    buttonText: "Start Pro Trial"
  };

  const enterprise = {
    name: "Enterprise",
    description: "For teams and businesses",
    price: "$99",
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    buttonText: "Contact Sales"
  };

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          
          <div className="bg-white rounded-lg shadow-md p-6 text-left border border-gray-200 relative">
            <h3 className="text-xl font-bold">{starter.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{starter.description}</p>
            <div className="mt-4">
              <span className="text-3xl font-extrabold">{starter.price}</span>
              <span className="text-gray-500">/{starter.period}</span>
            </div>
            <ul className="mt-5 space-y-2">
              {starter.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-lg"><FcCheckmark /></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 px-4 rounded-md border border-purple-600 bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition duration-200">
              {starter.buttonText}
            </button>
          </div>

          
          <div className="bg-purple-500 rounded-lg shadow-md p-6 text-left border border-purple-200 relative text-white">
            
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h3 className="text-xl font-bold">{pro.name}</h3>
            <p className="text-gray-500 text-white text-sm mt-1">{pro.description}</p>
            <div className="mt-4">
              <span className="text-3xl font-extrabold">{pro.price}</span>
              <span className="text-gray-500 text-white">/{pro.period}</span>
            </div>
            <ul className="mt-5 space-y-2v ">
              {pro.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-lg"><FcCheckmark /></span>
                  <span className="text-gray-700 text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 px-4 rounded-md bg-white text-purple-600 border border-purple-300 hover:bg-purple-600 hover:border-purple-300 hover:text-white transition duration-200">
              {pro.buttonText}
            </button>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-6 text-left border border-gray-200 relative">
            <h3 className="text-xl font-bold">{enterprise.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{enterprise.description}</p>
            <div className="mt-4">
              <span className="text-3xl font-extrabold">{enterprise.price}</span>
              <span className="text-gray-500">/{enterprise.period}</span>
            </div>
            <ul className="mt-5 space-y-2">
              {enterprise.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-lg"><FcCheckmark /></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 px-4 rounded-md border border-purple-600 bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition duration-200">
              {enterprise.buttonText}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
