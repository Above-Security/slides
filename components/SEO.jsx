import Head from 'next/head';

export default function SEO({
  title = "Above Security - Runtime Insider Protection",
  description = "Above Security provides real-time insider threat protection with behavioral analytics, AI-powered threat detection, and comprehensive security monitoring for modern enterprises.",
  ogTitle,
  ogDescription,
  ogImage = "https://above.security/oauth-greeting.png",
  ogType = "website",
  canonicalUrl,
  keywords = "insider threat protection, behavioral analytics, security monitoring, AI threat detection, runtime protection, enterprise security, data exfiltration prevention",
  article = null,
  breadcrumbs = null,
  pageType = "website"
}) {
  const siteUrl = "https://above.security";
  const fullTitle = title.includes('Above Security') ? title : `${title} | Above Security`;
  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description;
  const finalCanonicalUrl = canonicalUrl || siteUrl;
  
  // Ensure OG image is absolute URL
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Above Security",
    "alternateName": "Above",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`,
      "width": 400,
      "height": 400
    },
    "description": "Above Security provides real-time insider threat protection with behavioral analytics and AI-powered threat detection for modern enterprises.",
    "foundingDate": "2023",
    "industry": "Cybersecurity",
    "sameAs": [
      "https://twitter.com/AboveSecurity",
      "https://www.linkedin.com/company/above-security"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  // Website structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Above Security",
    "alternateName": "Above",
    "url": siteUrl,
    "description": "Real-time insider threat protection with behavioral analytics and AI-powered threat detection.",
    "publisher": {
      "@type": "Organization",
      "name": "Above Security"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": finalOgTitle,
    "description": finalOgDescription,
    "url": finalCanonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Above Security",
      "url": siteUrl
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Above Security"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Above Security",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    }
  };

  // Article structured data (if article props provided)
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline || finalOgTitle,
    "description": article.description || finalOgDescription,
    "image": finalOgImage,
    "author": {
      "@type": "Organization",
      "name": "Above Security"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Above Security",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "datePublished": article.datePublished || new Date().toISOString(),
    "dateModified": article.dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": finalCanonicalUrl
    }
  } : null;

  // Breadcrumb structured data (if breadcrumbs provided)
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  } : null;

  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* SEO Meta Tags */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Above Security" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content={`${finalOgTitle} - Above Security`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content="Above Security" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AboveSecurity" />
      <meta name="twitter:creator" content="@AboveSecurity" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={`${finalOgTitle} - Above Security`} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#FFB5CA" />
      <meta name="msapplication-TileColor" content="#FFB5CA" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Favicons and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema)
        }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema)
          }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
    </Head>
  );
}