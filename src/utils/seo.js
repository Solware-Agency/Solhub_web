export const createSEOConfig = ({
  title,
  description,
  keywords,
  url,
  type = 'website',
  structuredData = null
}) => {
  const baseUrl = 'https://solhub.solware.agency';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  const config = {
    title: `${title} | SolHub by Solware`,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:site_name', content: 'SolHub by Solware' },
      { name: 'geo.region', content: 'VE' },
      { name: 'geo.placename', content: 'Venezuela' },
      { name: 'language', content: 'es-VE' }
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  };

  if (structuredData) {
    config.script = [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    ];
  }

  return config;
};

export const commonStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SolHub by Solware",
  "description": "Plataforma SaaS para laboratorios médicos con IA integrada desarrollada por Solware",
  "url": "https://solhub.solware.agency",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "VE"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127"
  }
};