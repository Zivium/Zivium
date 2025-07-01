
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other pages, navigate to homepage
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 h-12 flex items-center justify-center">
        <button 
          onClick={handleLogoClick}
          className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zivium-gold focus:ring-opacity-50 rounded-lg p-2"
          aria-label="Zivium Logo - Return to home"
        >
          <img 
            src="/images/Zivium Logo.png" 
            alt="Zivium Logo" 
            className="h-13 w-auto"
          />
        </button>
      </div>
    </header>
  );
};

export default Navigation;
