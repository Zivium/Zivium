
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import UserSelectionOverlay from '../components/UserSelectionOverlay';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

export type UserType = 'investor' | 'founder' | null;

const Index = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    // Enhanced session storage check
    const storedUserType = sessionStorage.getItem('zivium-user-type') as UserType;
    
    if (storedUserType && (storedUserType === 'investor' || storedUserType === 'founder')) {
      // User has already selected their type
      setUserType(storedUserType);
      setShowOverlay(false);
      setIsBlurred(false);
      console.log('Retrieved user type from session storage:', storedUserType);
    } else {
      // First time visitor - show overlay
      setShowOverlay(true);
      setIsBlurred(true);
      console.log('New visitor - showing user selection overlay');
    }
  }, []);

  const handleUserSelection = (type: UserType) => {
    console.log('User selected:', type);
    setUserType(type);
    
    // Store in session storage with enhanced persistence
    if (type) {
      sessionStorage.setItem('zivium-user-type', type);
      // Also set a timestamp for potential cleanup
      sessionStorage.setItem('zivium-user-type-timestamp', new Date().toISOString());
    }
    
    // Trigger slide out animation
    setTimeout(() => {
      setShowOverlay(false);
      // Clear blur after overlay disappears
      setTimeout(() => {
        setIsBlurred(false);
      }, 500);
    }, 200);
  };

  const handleJoinWaitlist = () => {
    console.log('Join waitlist clicked');
    setShowWaitlistForm(true);
  };

  const handleBackToHome = () => {
    console.log('Back to home');
    setShowWaitlistForm(false);
  };

  return (
    <div className="min-h-screen">
      {/* User Selection Overlay */}
      {showOverlay && (
        <UserSelectionOverlay onUserSelect={handleUserSelection} />
      )}
      
      {/* Main Content */}
      <div className={`min-h-screen ${isBlurred ? 'blur-background' : 'clear-blur'}`}>
        <Navigation />
        
        {!showWaitlistForm ? (
          <>
            <HeroSection userType={userType} onJoinWaitlist={handleJoinWaitlist} />
            <ContentSection userType={userType} onJoinWaitlist={handleJoinWaitlist} />
          </>
        ) : (
          <WaitlistForm userType={userType} onBack={handleBackToHome} />
        )}
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
