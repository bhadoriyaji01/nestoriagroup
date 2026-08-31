/**
 * SchemaMarkup.js - Comprehensive JSON-LD Structured Data Utilities for Nestoria Group
 * 
 * Complies with schema.org specifications and Google Rich Results guidelines.
 */

const BASE_URL = 'https://nestoriagroup.com';
const LOGO_URL = `${BASE_URL}/logonew.png`;

/**
 * Creates organization schema markup
 * @returns {Object} Organization schema
 */
export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${BASE_URL}/#organization`,
    "name": "Nestoria Group",
    "legalName": "Nestoria Group Buildcon LLP",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": 512,
      "height": 512
    },
    "image": LOGO_URL,
    "description": "Top-rated real estate developer in Dholera SIR offering AUDA-approved NA residential, commercial, villa, and industrial investment plots near the Tata Semiconductor Fab.",
    "telephone": "+919213005611",
    "email": "nestoriagroupofficial@gmail.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Dholera SIR, Gujarat"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/nestoriagroup",
      "https://www.instagram.com/nestoria.group",
      "https://www.linkedin.com/company/nestoria-group",
      "https://www.youtube.com/@nestoriagroup"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919213005611",
        "contactType": "sales",
        "areaServed": ["IN", "AE", "US", "GB", "SG"],
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+919213005611",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Sarthik Annexe, Satellite Road, Iskon Cross Road",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0298,
      "longitude": 72.5074
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};

/**
 * Creates website search schema markup
 * @returns {Object} WebSite schema
 */
export const getWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "Nestoria Group - Dholera SIR Real Estate Developer",
    "url": BASE_URL,
    "description": "Leading developer for residential, commercial & industrial plots in Dholera SIR Smart City near Tata Semiconductor Fab.",
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/projects?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };
};

/**
 * Creates local business schema markup
 * @returns {Object} LocalBusiness schema
 */
export const getLocalBusinessSchema = () => {
  return getOrganizationSchema();
};

/**
 * Creates real estate listing schema markup for single project
 * @param {Object} property - Property details
 * @returns {Object} RealEstateListing schema
 */
export const getRealEstateListingSchema = (property) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.name || property.title,
    "description": property.description || property.tagline,
    "image": property.image ? (property.image.startsWith('http') ? property.image : `${BASE_URL}${property.image}`) : LOGO_URL,
    "url": property.url || `${BASE_URL}/project/${property.slug}`,
    "datePosted": property.datePosted || "2025-01-01",
    "offeredBy": {
      "@type": "RealEstateAgent",
      "name": "Nestoria Group",
      "url": BASE_URL,
      "telephone": "+919213005611"
    },
    "contentLocation": {
      "@type": "Place",
      "name": property.location || "Dholera SIR, Gujarat, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dholera",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": property.latitude || 22.2495,
        "longitude": property.longitude || 72.1932
      }
    }
  };
};

/**
 * Creates ItemList schema for multiple properties
 * @param {Array} projects - Array of project objects
 * @returns {Object} ItemList schema
 */
export const getItemListSchema = (projects = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects in Dholera SIR - Nestoria Group",
    "description": "Featured residential plots, luxury villas, and commercial land parcels in Dholera Special Investment Region.",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": p.title || p.name,
      "url": `${BASE_URL}/project/${p.slug}`,
      "description": p.tagline || p.description
    }))
  };
};

/**
 * Creates FAQ schema markup
 * @param {Array} faqs - Array of FAQ objects with question and answer properties
 * @returns {Object} FAQPage schema
 */
export const getFAQSchema = (faqs = []) => {
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
export const getBreadcrumbSchema = (items = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
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
      "image": LOGO_URL,
      "url": BASE_URL
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating || "5",
      "bestRating": "5"
    },
    "name": review.title || `Investor Review by ${review.name || review.author}`,
    "author": {
      "@type": "Person",
      "name": review.name || review.author
    },
    "reviewBody": review.content || review.quote || review.text
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
    "@type": "BlogPosting",
    "headline": article.title,
    "image": article.image ? [article.image] : [LOGO_URL],
    "datePublished": article.datePublished || "2026-01-01",
    "dateModified": article.dateModified || article.datePublished || "2026-03-01",
    "author": {
      "@type": "Person",
      "name": article.author || "Nestoria Research Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nestoria Group",
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "description": article.excerpt || article.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url ? (article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`) : `${BASE_URL}/blog`
    }
  };
};

/**
 * Creates video schema markup for media & site videos
 * @param {Object} video - Video details
 * @returns {Object} VideoObject schema
 */
export const getVideoSchema = (video) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description || video.excerpt || "Dholera SIR site walkthrough and development progress video by Nestoria Group.",
    "thumbnailUrl": [video.image || video.thumbnail || LOGO_URL],
    "uploadDate": video.date || "2026-01-01",
    "contentUrl": video.link || video.url,
    "embedUrl": video.link || video.url
  };
};

/**
 * Creates Service schema markup
 * @param {Object} service - Service details
 * @returns {Object} Service schema
 */
export const getServiceSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title || service.name,
    "description": service.desc || service.description,
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Nestoria Group",
      "url": BASE_URL
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Dholera SIR, Gujarat"
    }
  };
};
