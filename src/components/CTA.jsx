const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>

        
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-200 shadow-md">
            Explore Products
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-purple-500 transition duration-200">
            View Pricing
          </button>
        </div>

        
        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
