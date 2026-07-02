export const SITE = {
  name: 'phxsugarwaxing.com',
  title: 'phxsugarwaxing.com • Premium Domain for Sale | Phoenix Sugar Waxing',
  description:
    'Own phxsugarwaxing.com — the clean, modern domain with powerful local SEO for professional sugar waxing in Phoenix.',
  url: 'https://phxsugarwaxing.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  googleSiteVerification: '',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '9ef5c069-6817-441a-f69d-96f39d5ad400',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry - phxsugarwaxing.com')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phxsugarwaxing.com. Please provide details and next steps.\n\nBest regards,')}`;

export const DISCLAIMER_DATE = 'July 2, 2026';
