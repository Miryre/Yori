import React from 'react';

const Why = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-warmSunset-peach/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-8 text-center">
          We understand
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            Feeling disconnected is hard. You want meaningful friendships, but going out to meet people feels overwhelming. 
            Online spaces can feel superficial or unsafe. You're stuck between wanting connection and not knowing where to find it.
          </p>
          
          <p>
            You deserve a place where you can be yourself, connect at your own pace, and build real friendships 
            with people who actually care—without leaving home, without pressure, and without barriers.
          </p>
          
          <div className="pt-8 text-center">
            <p className="text-2xl font-medium text-warmSunset-coral">
              That's why we created Yori.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
