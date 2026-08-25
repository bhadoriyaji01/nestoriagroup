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
  author = 'Nestoria Group'
}) {
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `https://nestoriagroup.com${canonicalUrl}`) 
    : window.location.href;
  
  // Ensure image URL is absolute
  const fullImageUrl = imageUrl 
    ? (imageUrl.startsWith('http') ? imageUrl : `https://nestoriagroup.com${imageUrl}`) 
    : '/logonew.png';

  return (
    <Helmet>
      {/* Title - Keep it under 60 characters for best SEO practices */}
      <title>{title}</title>

      {/* Meta Tags - Description should be 150-160 characters */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL to prevent duplicate content issues */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags (for social media sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Nestoria Group" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}

export default Seo;
