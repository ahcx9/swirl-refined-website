import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://swirl.cx';
const DEFAULT_OG_IMAGE = `${SITE_URL}/lovable-uploads/swirl-logo-transparent.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/" for canonical + og:url. Defaults to current pathname. */
  path?: string;
  ogType?: 'website' | 'article';
  image?: string;
  /** Optional JSON-LD object(s) injected as <script type="application/ld+json"> */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  ogType = 'website',
  image = DEFAULT_OG_IMAGE,
  jsonLd,
  noindex,
}) => {
  const resolvedPath =
    path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const url = `${SITE_URL}${resolvedPath === '/' ? '' : resolvedPath}` || SITE_URL;
  const absImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absImage} />
      <meta property="og:site_name" content="swirl" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absImage} />

      {ldArray.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
