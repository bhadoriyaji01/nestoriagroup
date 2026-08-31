/**
 * SchemaMarkup.js - Utility functions for generating structured data
 * 
 * This file contains helper functions to create JSON-LD schema markup for various
 * entities on the Nestoria Group website, following schema.org specifications.
 */

/**
 * Creates organization schema markup
 * @returns {Object} Organization schema
 */
export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nestoria Group",
    "url": "https://nestoriagroup.com",
    "logo": "/logonew.png",
    "description": "Real Estate Developer In Dholera SIR | Investment Plots",
    "sameAs": [
      "https://www.facebook.com/nestoriagroup",
      "https://www.instagram.com/nestoria.group",
      "https://www.linkedin.com/company/nestoria-group",
      "http://www.youtube.com/@nestoriagroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919213005611",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Sarthik Annexe , Satellite Road, Iskon Cross Road, Ahmedabad - 380015, Gujarat, India",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    }
  };
};

/**
 * Creates local business schema markup
 * @returns {Object} LocalBusiness schema
 */
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Nestoria Group",
    "image": "/logonew.png",
    "@id": "https://nestoriagroup.com",
    "url": "https://nestoriagroup.com",
    "telephone": "+919213005611",
    "priceRange": "₹₹₹",
    "description": "Trusted residential, commercial, and industrial real estate opportunities in Dholera SIR.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Sarthik Annexe , Satellite Road, Iskon Cross Road, Ahmedabad - 380015, Gujarat, India",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.2495417, // Nestoria Buildcon office coordinates
      "longitude": 72.5485058 // Nestoria Buildcon office coordinates
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };
};

/**
 * Creates real estate listing schema markup
 * @param {Object} property - Property details
 * @returns {Object} RealEstateListing schema
 */
export const getRealEstateListingSchema = (property) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.name,
    "description": property.description,
    "image": property.image,
    "url": property.url,
    "datePosted": property.datePosted,
    "validFrom": property.validFrom,
    "validThrough": property.validThrough,
    "offeredBy": {
      "@type": "RealEstateAgent",
      "name": "Nestoria Group",
      "url": "https://nestoriagroup.com"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Dholera SIR, Gujarat, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dholera",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    }
  };
};

/**
 * Creates FAQ schema markup
 * @param {Array} faqs - Array of FAQ objects with question and answer properties
 * @returns {Object} FAQPage schema
 */
export const getFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Creates breadcrumb schema markup
 * @param {Array} items - Array of breadcrumb items with name and url properties
 * @returns {Object} BreadcrumbList schema
 */
export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Creates testimonial/review schema markup
 * @param {Object} review - Review details
 * @returns {Object} Review schema
 */
export const getReviewSchema = (review) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "RealEstateAgent",
      "name": "Nestoria Group",
      "image": "/logonew.png",
      "url": "https://nestoriagroup.com"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "name": review.title || `Review by ${review.author}`,
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.date,
    "reviewBody": review.content
  };
};

/**
 * Creates article schema markup for blog posts
 * @param {Object} article - Article details
 * @returns {Object} Article schema
 */
export const getArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nestoria Group",
      "logo": {
        "@type": "ImageObject",
        "url": "/logonew.png"
      }
    },
    "description": article.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};