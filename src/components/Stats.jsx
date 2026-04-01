const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        
       
        <div>
          <h1 className="text-5xl font-bold">50K+</h1>
          <p className="text-sm mt-2">Active Users</p>
        </div>

       
        <div>
          <h1 className="text-5xl font-bold">200+</h1>
          <p className="text-sm mt-2">Tools Available</p>
        </div>

  
        <div>
          <h1 className="text-5xl font-bold">4.9</h1>
          <p className="text-sm mt-2">Average Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
