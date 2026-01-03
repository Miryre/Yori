import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Create your profile',
      description: 'Share your interests and what makes you, you. Be genuine—that\'s what Yori is all about.',
    },
    {
      number: '2',
      title: 'Find your people',
      description: 'Connect with others who share your interests and values. No endless scrolling, just real matches.',
    },
    {
      number: '3',
      title: 'Build real friendships',
      description: 'Chat, video call, or just be there for each other. Go at your own pace, from wherever you are.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-16 text-center">
          How Yori works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number circle */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-2xl font-semibold text-white">{step.number}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
