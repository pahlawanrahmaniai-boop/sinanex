/**
 * SinaNex LLC — Centralized Configuration
 * All official company contact information, store links, and product URLs are managed here.
 */

export interface StoreLinkConfig {
  /** The target URL on Apple App Store. If empty, the button operates in 'coming_soon' state */
  appStoreUrl: string;
  appStoreStatus: 'active' | 'coming_soon';

  /** The target URL on Google Play Store. If empty, the button operates in 'coming_soon' state */
  googlePlayUrl: string;
  googlePlayStatus: 'active' | 'coming_soon';
}

export const COMPANY_CONFIG = {
  name: 'SinaNex LLC',
  legalName: 'SinaNex LLC',
  officialWebsite: 'https://sinanex.com',
  contactEmail: 'contact@sinanex.com',
  flagshipProduct: {
    name: '7CV',
    fullName: '7CV — Smart AI Resume Builder',
    category: 'AI Resume Builder',
    officialUrl: 'https://sinanex.com#7cv',
    // Configure official store links below:
    storeLinks: {
      // Set to real store URLs once live, or keep as coming_soon:
      appStoreUrl: '', // e.g., 'https://apps.apple.com/app/id...'
      appStoreStatus: 'coming_soon' as const,

      googlePlayUrl: '', // e.g., 'https://play.google.com/store/apps/details?id=com.sinanex.sevencv'
      googlePlayStatus: 'coming_soon' as const,
    },
  },
};
