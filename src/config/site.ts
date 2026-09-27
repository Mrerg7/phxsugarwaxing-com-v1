export const SITE = {
  name: 'phxsugarwaxing.com',
  title: 'phxsugarwaxing.com for Sale | Phoenix Sugar Waxing Domain',
  description:
    'phxsugarwaxing.com is for sale. Exact-match .com for Phoenix sugar waxing, with escrow transfer. Make a private offer.',
  url: 'https://phxsugarwaxing.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  googleSiteVerification: '',
  published: '2026-07-02',
  modified: '2026-09-27',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '9ef5c069-6817-441a-f69d-96f39d5ad400',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Offer for phxsugarwaxing.com')}&body=${encodeURIComponent('Hello,\n\nI would like to acquire phxsugarwaxing.com.\n\nName:\nEmail:\nOffer (USD):\nIntended use:\n\nMessage:\n')}`;

export const DISCLAIMER_DATE = 'September 27, 2026';
