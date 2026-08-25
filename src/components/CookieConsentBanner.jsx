import React from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../contexts/CookieConsentContext';

const CookieConsentBanner = () => {
  const { consent, acceptCookies, declineCookies } = useCookieConsent();

  // Don't render if consent has been given or declined
  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-4 border-blue-600 animate-slideUp">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Cookie Information */}
          <div className="flex-1">
            <div className="flex items-start mb-3">
              <div className="bg-blue-600 rounded-full p-2 mr-3 flex-shrink-0">
                <i className="fas fa-cookie text-white text-xl"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">We Value Your Privacy</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content,
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  Visit our{' '}
                  <Link to="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                    Privacy Policy
                  </Link>{' '}
                  for more information.
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-ban mr-2"></i>
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-check mr-2"></i>
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
