import { broadMarketingKeywords, seoKeywords, serviceKeywords } from '@/data/locations';
import { slugify } from '@/utils/slugify';

const preferredServiceKeywords = [
  'franchise consulting',
  'franchise development',
  'franchisee recruitment',
  'franchise expansion',
  'franchise marketing',
  'franchise lead generation',
  'franchise marketing agency',
  'franchise digital marketing agency',
  'franchise advertising agency',
  'franchise seo',
  'linkedin lead generation for franchises',
];

const preferredSeoKeywords = [
  'best franchise consultant',
  'franchise development company',
  'how to franchise my business',
  'franchise marketing agency',
  'franchise digital marketing',
  'franchise seo',
  'franchise advertising',
  'franchise branding',
  'franchise lead generation company',
  'best franchise lead generation agency',
  'franchise lead generation services',
  'franchise marketing experts',
  'franchise marketing consultants',
  'best franchise marketing agency in usa',
  'franchise marketing agency usa',
  'how to get franchise leads',
  'how to generate franchise leads',
  'franchise lead generation strategies',
  'linkedin lead generation for franchise brands',
  'linkedin marketing for franchisors',
];

export const highValueServiceKeywords = preferredServiceKeywords.filter((keyword) =>
  broadMarketingKeywords.includes(keyword),
);

export const highValueKeywordPages = Array.from(
  new Set([
    ...serviceKeywords.filter((keyword) => highValueServiceKeywords.includes(keyword)),
    ...preferredSeoKeywords.filter((keyword) => seoKeywords.includes(keyword)),
  ]),
);

export const highValueServiceSlugs = new Set(highValueServiceKeywords.map((keyword) => slugify(keyword)));
export const highValueKeywordSlugs = new Set(highValueKeywordPages.map((keyword) => slugify(keyword)));

export const isHighValueServiceSlug = (serviceSlug: string) => highValueServiceSlugs.has(serviceSlug);

export const isHighValueKeywordSlug = (keywordSlug: string) => highValueKeywordSlugs.has(keywordSlug);
