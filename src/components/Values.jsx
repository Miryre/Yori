import React from 'react';

const Values = () => {
  const values = [
    {
      title: 'Genuinely caring',
      description: 'Real people supporting each other. No performative interactions, just authentic connection.',
      color: 'bg-warmSunset-peach',
      shape: 'circle',
    },
    {
      title: 'Accessible to all',
      description: 'Free to use. No paywalls, no premium tiers. Everyone deserves meaningful friendship.',
      color: 'bg-warmSunset-coral',
      shape: 'circle',
    },
    {
      title: 'Safe & kind',
      description: 'Zero tolerance for bullying or negativity. We protect this space so everyone feels welcome.',
      color: 'bg-warmSunset-orange',
      shape: 'circle',
    },
    {
      title: 'On your terms',
      description: 'Connect when you want, how you want. No pressure to meet in person until you\'re ready.',
      color: 'bg-warmSunset-pink',
      shape: 'circle',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-warmSunset-peach/10 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-4 text-center">
          Our values
        </h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          These aren't just words. They're commitments we make to you and this community.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 ${value.color} rounded-full`}></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
