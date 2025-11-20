import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();

  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "swirl",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      },
      "description": "AI-powered restaurant management solution that enhances guest experience, boosts efficiency, and increases profits. Complete POS, QR ordering, inventory, CRM, and analytics in one platform.",
      "url": "https://swirl.cx",
      "logo": "https://swirl.cx/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "abid@swirl.cx",
        "contactType": "Customer Service"
      }
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": getBreadcrumbs()
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "swirl",
      "image": "https://swirl.cx/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png",
      "description": "Complete restaurant management platform with POS, QR ordering, inventory management, CRM, and analytics",
      "url": "https://swirl.cx",
      "telephone": "+1-XXX-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    };

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add new schemas
    const schemas = [organizationSchema, breadcrumbSchema, localBusinessSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [location.pathname]);

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://swirl.cx"
      }
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        "item": `https://swirl.cx${currentPath}`
      });
    });

    return breadcrumbs;
  };

  return null;
};

export default StructuredData;
