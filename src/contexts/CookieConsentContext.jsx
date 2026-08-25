import React, { createContext, useContext, useState, useEffect } from 'react';

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
};

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing consent on mount
    const savedConsent = localStorage.getItem('gdprCookieConsent');
    if (savedConsent) {
      setConsent(savedConsent);
    }
    setIsLoading(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('gdprCookieConsent', 'accepted');
    setConsent('accepted');
    
    // Load tracking scripts after consent
    loadTrackingScripts();
  };

  const declineCookies = () => {
    localStorage.setItem('gdprCookieConsent', 'declined');
    setConsent('declined');
  };

  const loadTrackingScripts = () => {
    // Facebook Pixel
    if (!window.fbq) {
      !function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      if (window.fbq) {
        window.fbq('init', '2445301802581558');
        window.fbq('track', 'PageView');
      }
    }
  };

  const value = {
    consent,
    isLoading,
    acceptCookies,
    declineCookies,
    hasConsented: consent === 'accepted'
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};
