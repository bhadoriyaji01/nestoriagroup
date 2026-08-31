import React from 'react';
import { Helmet } from 'react-helmet-async';

function Seo({ 
  title, 
  description, 
  keywords, 
  schemaMarkup, 
  canonicalUrl,
  imageUrl = '/logonew.png',
  type = 'website',
  author = 'Nestoria Group',
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
}) {
  const currentHref = typeof window !== 'undefined' ? window.location.href : 'https://nestoriagroup.com';
  
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `https://nestoriagroup.com${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`) 
    : currentHref;
  
  // Ensure image URL is absolute
  const fullImageUrl = imageUrl 
    ? (imageUrl.startsWith('http') ? imageUrl : `https://nestoriagroup.com${imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`}`) 
    : 'https://nestoriagroup.com/logonew.png';

  const schemas = Array.isArray(schemaMarkup) ? schemaMarkup : (schemaMarkup ? [schemaMarkup] : []);

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Primary Meta Tags */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Nestoria Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Schema Markup (Single or Multiple) */}
      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
