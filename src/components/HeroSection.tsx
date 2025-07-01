
import React, { useEffect, useState } from 'react';
import { UserType } from '../pages/Index';

interface HeroSectionProps {
  userType: UserType;
  onJoinWaitlist: () => void;
}

const HeroSection = ({ userType, onJoinWaitlist }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (userType) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [userType]);

  if (!userType) return null;

  const content = {
    investor: {
      headline: <>
        Unlock <span className="text-zivium-gold">Unrivaled Clarity</span> & <span className="text-zivium-gold">Strategic Alpha</span> in Angel Investing
      </>,
      subheadline: "Zivium offers discerning investors a bespoke platform to transform deal flow management, portfolio oversight, and compliance into a competitive advantage."
    },
    founder: {
      headline: <>
        Accelerate Your <span className="text-zivium-gold">Fundraising Journey</span> & Streamline <span className="text-zivium-gold">Investor Relations</span>
      </>,
      subheadline: "Zivium empowers ambitious founders to simplify investor updates, attract the right capital, and focus on building their vision without administrative drag."
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-8 px-4 bg-gradient-to-br from-zivium-navy via-zivium-accent-blue to-zivium-navy">
      {/* Abstract Animation Background */}
      <div className="abstract-animation">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Content */}
      <div className={`text-center max-w-4xl mx-auto z-10 flex flex-col justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
          {content[userType].headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-8 md:mb-10 font-normal leading-relaxed max-w-3xl mx-auto">
          {content[userType].subheadline}
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={onJoinWaitlist} 
            className={`
              bg-zivium-gold text-zivium-navy px-10 md:px-12 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-xl
              transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90
              focus:outline-none focus:ring-4 focus:ring-zivium-gold focus:ring-opacity-50
              animate-pulse-glow
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.5s' }}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
