import React, { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with email service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-warmSunset-peach via-warmSunset-coral to-warmSunset-pink">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
          Ready to find your people?
        </h2>
        
        <p className="text-xl text-white/90 mb-10">
          Join the waitlist and be among the first to experience Yori when we launch.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:border-white focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-warmSunset-coral font-semibold rounded-full hover:bg-gray-50 transition-colors text-lg whitespace-nowrap"
            >
              Join Yori
            </button>
          </div>
          {submitted && (
            <p className="mt-4 text-white font-medium">
              Welcome to Yori! Check your email soon. ✨
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default CTA;
