# GDPR Cookie Consent Implementation Guide

## Overview
This website now includes a comprehensive GDPR-compliant cookie consent system that gives users control over their data and tracking preferences.

## Features Implemented

### 1. Cookie Consent Banner
- **Location**: Bottom of all pages
- **Appearance**: Slides up from bottom with smooth animation
- **Options**: 
  - ✅ Accept All (allows tracking)
  - ❌ Decline (blocks tracking scripts)
- **Link to Privacy Policy**: Users can learn more about data practices

### 2. Consent Management
- **localStorage-based**: Remembers user choice across sessions
- **Persistent**: Once user makes a choice, banner won't show again
- **Respects User Choice**: Tracking scripts only load after explicit consent

### 3. Affected Tracking Scripts

#### Facebook Pixel (ID: 2445301802581558)
- **Before Consent**: Not loaded
- **After Accept**: Loads automatically
- **After Decline**: Remains blocked

#### Google Analytics (G-3YP6RMRR24, GT-K48FW6C)
- Configured with privacy-friendly settings
- No third-party cookies
- Limited ad personalization signals

## Technical Implementation

### Files Created/Modified

1. **CookieConsentContext.jsx** (`src/contexts/`)
   - Central state management for consent
   - Provides `useCookieConsent()` hook
   - Handles loading tracking scripts after consent

2. **CookieConsentBanner.jsx** (`src/components/`)
   - Reusable banner component
   - Used on all pages via App.jsx
   - Responsive design (mobile to desktop)

3. **main.jsx**
   - Wrapped App with CookieConsentProvider
   - Ensures context available throughout app

4. **App.jsx**
   - Added CookieConsentBanner component
   - Shows on all routes automatically

5. **index.html**
   - Updated Facebook Pixel to check consent before loading
   - Added conditional script loading

6. **Home.jsx**
   - Removed duplicate GDPR code
   - Kept only lead form modal functionality

7. **styles.css**
   - Added slide-up animation for banner
   - Smooth fade-in effects

## How It Works

### User Flow
1. **First Visit**: Banner appears at bottom of screen
2. **User Action Required**:
   - Click "Accept All" → Cookies enabled, tracking scripts load
   - Click "Decline" → Cookies disabled, no tracking scripts load
3. **Subsequent Visits**: Banner hidden, respects previous choice

### Developer Usage

```jsx
import { useCookieConsent } from './contexts/CookieConsentContext';

function MyComponent() {
  const { consent, hasConsented, acceptCookies, declineCookies } = useCookieConsent();
  
  // Check consent status
  if (hasConsented) {
    // Load custom tracking or analytics
  }
  
  // Manually trigger consent (if needed)
  acceptCookies(); // or declineCookies();
}
```

## Compliance Features

✅ **Explicit Consent**: Users must actively accept (no pre-checked boxes)  
✅ **Clear Information**: Explains what cookies are used and why  
✅ **Easy to Decline**: One-click opt-out option  
✅ **Granular Control**: Separate from other terms & conditions  
✅ **Accessible**: Links to Privacy Policy for detailed information  
✅ **Persistent Choice**: Remembers user preference  
✅ **Script Blocking**: Tracking scripts don't load until consent given  

## Testing

### To Test Different Scenarios:

1. **First-time visitor (no consent)**:
   ```javascript
   localStorage.removeItem('gdprCookieConsent');
   location.reload();
   ```

2. **Previously accepted**:
   ```javascript
   localStorage.setItem('gdprCookieConsent', 'accepted');
   location.reload();
   ```

3. **Previously declined**:
   ```javascript
   localStorage.setItem('gdprCookieConsent', 'declined');
   location.reload();
   ```

## Browser Storage

The implementation uses `localStorage` to store:
- Key: `'gdprCookieConsent'`
- Values: `'accepted'`, `'declined'`, or `null` (not decided)

## Lead Form Modal Integration

The scroll-triggered lead form modal (appears at 50% scroll) works independently but respects the overall privacy-first approach:
- Uses localStorage for one-time display
- Doesn't set third-party cookies
- Iframe form hosted separately on `form.nestoriagroup.com`

## Future Enhancements

Consider adding:
- Granular cookie categories (Essential, Analytics, Marketing)
- Cookie preference center for managing settings
- Periodic re-consent (e.g., annually)
- Cookie audit/scan integration

## Support

For questions or issues related to GDPR compliance, contact your legal team to ensure this implementation meets your specific jurisdictional requirements.
