import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBreadcrumbSchema } from '../utils/SchemaMarkup';

/**
 * BreadcrumbNav Component
 * 
 * Displays a breadcrumb navigation trail and adds structured data for SEO
 * 
 * @param {Array} items - Array of breadcrumb items with name and path properties
 * @returns {JSX.Element} - Breadcrumb navigation component
 */
const BreadcrumbNav = ({ items }) => {
  // Convert items to the format expected by getBreadcrumbSchema
  const schemaItems = items.map(item => ({
    name: item.name,
    url: `https://nestoriagroup.com${item.path}`
  }));

  // Generate schema markup
  const breadcrumbSchema = getBreadcrumbSchema(schemaItems);

  return (
    <>
      {/* Add schema markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb UI */}
      <nav className="flex py-3 px-5 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-lg">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              )}
              {index < items.length - 1 ? (
                <Link to={item.path} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  {index === 0 && (
                    <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                  )}
                  {item.name}
                </Link>
              ) : (
                <span className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;