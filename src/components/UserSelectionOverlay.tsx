
import React, { useState } from 'react';
import { TrendingUp, Rocket } from 'lucide-react';
import { UserType } from '../pages/Index';

interface UserSelectionOverlayProps {
  onUserSelect: (type: UserType) => void;
}

const UserSelectionOverlay = ({ onUserSelect }: UserSelectionOverlayProps) => {
  const [selectedCard, setSelectedCard] = useState<UserType>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (type: UserType) => {
    if (isAnimating) return;
    
    console.log('Card clicked:', type);
    setSelectedCard(type);
    setIsAnimating(true);
    
    setTimeout(() => {
      onUserSelect(type);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-12">
          I am an...
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Investor Card */}
          <button
            onClick={() => handleCardClick('investor')}
            disabled={isAnimating}
            className={`
              w-60 h-60 rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300
              ${selectedCard === 'investor' 
                ? 'bg-zivium-gold text-zivium-navy' 
                : 'bg-white text-zivium-dark-gray hover:scale-105 hover:shadow-2xl'
              }
              ${isAnimating && selectedCard === 'investor' ? 'animate-[slideOutLeft_0.5s_ease-in-out_0.2s_forwards]' : ''}
              ${isAnimating && selectedCard !== 'investor' ? 'animate-[slideOutRight_0.5s_ease-in-out_0.2s_forwards]' : ''}
              shadow-xl focus:outline-none focus:ring-4 focus:ring-zivium-gold focus:ring-opacity-50
            `}
          >
            <TrendingUp size={48} className="mb-4" />
            <span className="text-xl font-semibold">
              I'm an <span className={selectedCard === 'investor' ? 'text-zivium-navy' : 'text-zivium-gold'}>Investor</span>
            </span>
          </button>

          {/* Founder Card */}
          <button
            onClick={() => handleCardClick('founder')}
            disabled={isAnimating}
            className={`
              w-60 h-60 rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300
              ${selectedCard === 'founder' 
                ? 'bg-zivium-gold text-zivium-navy' 
                : 'bg-white text-zivium-dark-gray hover:scale-105 hover:shadow-2xl'
              }
              ${isAnimating && selectedCard === 'founder' ? 'animate-[slideOutLeft_0.5s_ease-in-out_0.2s_forwards]' : ''}
              ${isAnimating && selectedCard !== 'founder' ? 'animate-[slideOutRight_0.5s_ease-in-out_0.2s_forwards]' : ''}
              shadow-xl focus:outline-none focus:ring-4 focus:ring-zivium-gold focus:ring-opacity-50
            `}
          >
            <Rocket size={48} className="mb-4" />
            <span className="text-xl font-semibold">
              I'm a <span className={selectedCard === 'founder' ? 'text-zivium-navy' : 'text-zivium-gold'}>Founder</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionOverlay;
