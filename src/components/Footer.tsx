
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&to=hello.zivium@gmail.com', '_blank');
  };
  
  return (
    <footer className="py-12 px-4 bg-zivium-navy">
      <div className="container mx-auto text-center">
        <div className="text-white space-y-4">
          <p className="text-lg">
            &copy; {currentYear} Zivium. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex justify-center space-x-8">
              <a href="/privacy-policy" className="text-white hover:text-zivium-gold transition-colors underline">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white hover:text-zivium-gold transition-colors underline">
                Terms of Service
              </a>
            </div>
            <button 
              onClick={handleContactClick}
              className="text-white hover:text-zivium-gold transition-colors underline cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
