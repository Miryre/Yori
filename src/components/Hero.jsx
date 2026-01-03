import React, { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with email service (Mailchimp/EmailOctopus)
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-4">
            Yori
          </h1>
          <div className="h-1 w-24 mx-auto gradient-accent rounded-full"></div>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6 leading-tight">
          You belong here
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
          Connect with people who truly care. Build genuine friendships from wherever you are.
        </p>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-warmSunset-coral focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 gradient-accent text-white font-medium rounded-full hover:opacity-90 transition-opacity text-lg whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </div>
          {submitted && (
            <p className="mt-4 text-warmSunset-coral font-medium">
              Thank you! We'll be in touch soon. ✨
            </p>
          )}
        </form>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
