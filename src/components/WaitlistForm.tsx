
import React, { useState, useEffect } from 'react';
import { UserType } from '../pages/Index';
import { Checkbox } from "@/components/ui/checkbox";

interface WaitlistFormProps {
  userType: UserType;
  onBack: () => void;
}

// Cloudflare Worker integration constants
const WORKER_URL = 'YOUR_WORKER_URL_FROM_CLOUDFLARE_HERE'; // Replace with actual Cloudflare Worker URL
const GITHUB_PAGES_DOMAIN = 'https://YOUR_GITHUB_PAGES_DOMAIN_HERE'; // Replace with actual domain

const WaitlistForm = ({ userType, onBack }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    investments: '',
    companyName: '',
    problem: '',
    subscribeNewsletter: true,
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+82', country: 'KR' },
    { code: '+61', country: 'AU' },
    { code: '+55', country: 'BR' }
  ];

  const investmentOptions = ['0-5', '6-20', '21-50', '50+'];

  useEffect(() => {
    if (showSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showSuccess && countdown === 0) {
      onBack();
    }
  }, [showSuccess, countdown, onBack]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    
    if (userType === 'investor' && !formData.investments) {
      newErrors.investments = 'Please select number of investments';
    }
    if (userType === 'founder' && !formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service and Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Prepare data for Cloudflare Worker
      const submitData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phoneNumber}`,
        userType: userType,
        ...(userType === 'investor' && { investments: formData.investments }),
        ...(userType === 'founder' && { companyName: formData.companyName }),
        problem: formData.problem,
        subscribeNewsletter: formData.subscribeNewsletter,
        timestamp: new Date().toISOString()
      };

      // Attempt to submit to Cloudflare Worker
      let workerSuccess = false;
      if (WORKER_URL !== 'YOUR_WORKER_URL_FROM_CLOUDFLARE_HERE') {
        try {
          const response = await fetch(WORKER_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Origin': GITHUB_PAGES_DOMAIN,
            },
            body: JSON.stringify(submitData),
          });

          if (response.ok) {
            const responseData = await response.json();
            console.log('Cloudflare Worker response:', responseData);
            workerSuccess = true;
          } else {
            console.error('Cloudflare Worker error:', response.statusText);
          }
        } catch (workerError) {
          console.error('Cloudflare Worker submission failed:', workerError);
        }
      }

      // Log form submission (fallback or additional logging)
      console.log('Form submitted:', submitData);
      console.log('Cloudflare Worker integration:', workerSuccess ? 'Success' : 'Not configured or failed');
      
      setIsSubmitting(false);
      setShowSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  const handleBackClick = () => {
    // Apply navigation logic like in Privacy Policy and Terms of Service
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      onBack();
    } else {
      window.location.href = '/';
    }
  };

  if (showSuccess) {
    return (
      <section className="min-h-screen bg-zivium-off-white flex items-center justify-center pt-20 px-4">
        <div className="text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-zivium-gold rounded-full flex items-center justify-center animate-pop-in">
              <svg className="w-12 h-12 text-zivium-navy" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-zivium-navy mb-6">
            You're In! Welcome to the <span className="bg-zivium-navy text-zivium-gold px-2 py-1 rounded">Zivium</span> Waitlist.
          </h1>
          
          <p className="text-xl text-zivium-navy mb-8 max-w-2xl mx-auto">
            We'll notify you personally as soon as early access is available. Thank you for your interest in <span className="bg-zivium-navy text-zivium-gold px-2 py-1 rounded">Zivium</span>!
          </p>
          
          <p className="text-zivium-navy">
            Redirecting to <span className="bg-zivium-navy text-zivium-gold px-2 py-1 rounded">Zivium</span> homepage in {countdown} seconds...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-zivium-off-white pt-20 px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-12 animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-bold text-zivium-navy text-center mb-8 md:mb-12">
            Join the Exclusive <span className="bg-zivium-navy text-zivium-gold px-2 py-1 rounded">Zivium</span> Waitlist
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-zivium-navy font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-zivium-error text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-zivium-navy font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-zivium-error text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-zivium-navy font-semibold mb-2">
                Email ID *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-zivium-error text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-zivium-navy font-semibold mb-2">
                Phone Number *
              </label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-full sm:w-auto min-w-[120px] px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {code} ({country})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phoneNumber && <p className="text-zivium-error text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Conditional Fields */}
            {userType === 'investor' && (
              <div>
                <label htmlFor="investments" className="block text-zivium-navy font-semibold mb-2">
                  Approximate Number of Investments *
                </label>
                <select
                  id="investments"
                  name="investments"
                  value={formData.investments}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                >
                  <option value="">Select range</option>
                  {investmentOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.investments && <p className="text-zivium-error text-sm mt-1">{errors.investments}</p>}
              </div>
            )}

            {userType === 'founder' && (
              <div>
                <label htmlFor="companyName" className="block text-zivium-navy font-semibold mb-2">
                  Name of Your Company *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors"
                  placeholder="Enter your company name"
                />
                {errors.companyName && <p className="text-zivium-error text-sm mt-1">{errors.companyName}</p>}
              </div>
            )}

            {/* Problem Description */}
            <div>
              <label htmlFor="problem" className="block text-zivium-navy font-semibold mb-2">
                What problem do you want to solve with <span className="bg-zivium-navy text-zivium-gold px-2 py-1 rounded">Zivium</span>?
              </label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zivium-navy focus:outline-none transition-colors resize-none"
                placeholder={`Describe your biggest challenge in ${userType === 'investor' ? 'portfolio management' : 'investor relations'}...`}
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked) => handleCheckboxChange('subscribeNewsletter', checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="subscribeNewsletter" className="text-zivium-navy font-medium leading-relaxed">
                  Subscribe to newsletter
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="agreeToTerms" className="text-zivium-navy font-medium leading-relaxed">
                  I agree to the{' '}
                  <a href="/terms-of-service" target="_blank" className="text-zivium-gold hover:underline">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="/privacy-policy" target="_blank" className="text-zivium-gold hover:underline">
                    Privacy Policy
                  </a>
                  {' '}*
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-zivium-error text-sm">{errors.agreeToTerms}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zivium-gold text-zivium-navy py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-zivium-gold focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
              </button>
            </div>
          </form>

          <div className="text-center mt-8">
            <button
              onClick={handleBackClick}
              className="text-zivium-navy hover:text-zivium-gold transition-colors underline"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
