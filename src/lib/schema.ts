import { OG_IMAGE, SITE } from '../config/site';
import { FAQS } from '../data/faqs';

export interface Crumb {
  name: string;
  path: string;
}

function abs(path: string) {
  return new URL(path, SITE.url).toString();
}

export function buildSchema(opts: {
  title: string;
  description: string;
  path: string;
  crumbs?: Crumb[];
  includeFaq?: boolean;
  article?: boolean;
}) {
  const url = abs(opts.path);
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
      email: SITE.email,
      description:
        'Seller of the domain phxsugarwaxing.com. This website offers the domain for acquisition. It is not a sugar waxing salon.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: SITE.email,
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'Product',
      '@id': `${SITE.url}/#product`,
      name: 'phxsugarwaxing.com',
      description:
        'Exact-match .com domain for Phoenix sugar waxing. Available for acquisition. Not an operating salon.',
      category: 'Domain name',
      url: `${SITE.url}/acquire/`,
      image: OG_IMAGE,
      brand: { '@type': 'Brand', name: 'phxsugarwaxing.com' },
      offers: {
        '@type': 'Offer',
        url: `${SITE.url}/acquire/`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        seller: { '@id': `${SITE.url}/#organization` },
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: opts.title,
      description: opts.description,
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#product` },
      datePublished: SITE.published,
      dateModified: SITE.modified,
      inLanguage: 'en-US',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
        width: 1366,
        height: 745,
      },
    },
  ];

  if (opts.includeFaq) {
    nodes.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  if (opts.article) {
    nodes.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: opts.title,
      description: opts.description,
      datePublished: SITE.published,
      dateModified: SITE.modified,
      inLanguage: 'en-US',
      image: OG_IMAGE,
      mainEntityOfPage: url,
      author: { '@id': `${SITE.url}/#organization` },
      publisher: { '@id': `${SITE.url}/#organization` },
    });
  }

  if (opts.crumbs?.length) {
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: abs(crumb.path),
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': nodes };
}
