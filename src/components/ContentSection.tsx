
import React, { useEffect, useState } from 'react';
import { UserType } from '../pages/Index';
import PainPoints from './PainPoints';
import Solutions from './Solutions';

interface ContentSectionProps {
  userType: UserType;
  onJoinWaitlist: () => void;
}

const ContentSection = ({ userType, onJoinWaitlist }: ContentSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (userType) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [userType]);

  if (!userType) return null;

  const introContent = {
    investor: "Zivium refines the art of angel investing, transforming scattered data into strategic insights and administrative burdens into streamlined operations.",
    founder: "Zivium empowers founders to reclaim valuable time, streamline investor communications, and attract the precise capital needed to scale their vision."
  };

  const ctaContent = {
    investor: "Elevate your strategy, not your workload. Experience a new era of intelligent angel investing.",
    founder: "Your vision deserves clarity, not complexity. Define your next chapter with Zivium."
  };

  return (
    <section className="bg-zivium-light-gray py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Introduction */}
        <div className={`text-center mb-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-zivium-dark-gray font-normal leading-relaxed max-w-4xl mx-auto">
            {introContent[userType]}
          </p>
        </div>

        {/* Pain Points */}
        <PainPoints userType={userType} isVisible={isVisible} />

        {/* Solutions */}
        <Solutions userType={userType} isVisible={isVisible} />

        {/* Final CTA */}
        <div className={`text-center bg-gradient-to-r from-zivium-navy to-zivium-accent-blue rounded-3xl py-16 px-8 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '3s' }}>
          <p className="text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto leading-relaxed">
            {ctaContent[userType]}
          </p>
          
          <button
            onClick={onJoinWaitlist}
            className="bg-zivium-gold text-zivium-navy px-12 py-4 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-zivium-gold focus:ring-opacity-50 animate-pulse-glow"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
