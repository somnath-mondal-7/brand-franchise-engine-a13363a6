// Strategic SEO Pages - Key Markets + Top Keywords
// Targeting: USA, UK, Canada, Australia, India
// High-value keywords for franchise marketing & lead generation

export interface KeyMarket {
  name: string;
  slug: string;
  country: string;
  countryCode: string;
  region: string; // For geo-targeting
  type: 'city' | 'state' | 'region';
  population?: number;
  businessHub?: boolean;
  currency: string;
  investmentRange: string;
}

export interface ServiceKeyword {
  name: string;
  slug: string;
  description: string;
  searchVolume: 'high' | 'medium' | 'low';
  primaryKeyword: string; // For meta targeting
}

// ============================================
// TOP 25 KEY MARKETS ACROSS 5 COUNTRIES
// ============================================

export const keyMarkets: KeyMarket[] = [
  // USA - Top 8 Markets (Primary)
  { name: "New York City", slug: "new-york-city", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 8336817, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "Los Angeles", slug: "los-angeles", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 3898747, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "Chicago", slug: "chicago", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 2693976, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "Houston", slug: "houston", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 2320268, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "Miami", slug: "miami", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 442241, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "Dallas", slug: "dallas", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 1343573, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "Atlanta", slug: "atlanta", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 498715, businessHub: true, currency: "USD", investmentRange: "$50,000 - $500,000" },
  { name: "San Francisco", slug: "san-francisco", country: "United States", countryCode: "USA", region: "North America", type: "city", population: 873965, businessHub: true, currency: "USD", investmentRange: "$75,000 - $750,000" },
  
  // UK - Top 5 Markets
  { name: "London", slug: "london", country: "United Kingdom", countryCode: "UK", region: "Europe", type: "city", population: 8982000, businessHub: true, currency: "GBP", investmentRange: "£30,000 - £300,000" },
  { name: "Manchester", slug: "manchester", country: "United Kingdom", countryCode: "UK", region: "Europe", type: "city", population: 547627, businessHub: true, currency: "GBP", investmentRange: "£25,000 - £250,000" },
  { name: "Birmingham", slug: "birmingham", country: "United Kingdom", countryCode: "UK", region: "Europe", type: "city", population: 1141816, businessHub: true, currency: "GBP", investmentRange: "£25,000 - £250,000" },
  { name: "Leeds", slug: "leeds", country: "United Kingdom", countryCode: "UK", region: "Europe", type: "city", population: 793139, businessHub: true, currency: "GBP", investmentRange: "£20,000 - £200,000" },
  { name: "Glasgow", slug: "glasgow", country: "United Kingdom", countryCode: "UK", region: "Europe", type: "city", population: 635640, businessHub: true, currency: "GBP", investmentRange: "£20,000 - £200,000" },
  
  // Canada - Top 4 Markets
  { name: "Toronto", slug: "toronto", country: "Canada", countryCode: "CA", region: "North America", type: "city", population: 2731571, businessHub: true, currency: "CAD", investmentRange: "$50,000 - $400,000 CAD" },
  { name: "Vancouver", slug: "vancouver", country: "Canada", countryCode: "CA", region: "North America", type: "city", population: 631486, businessHub: true, currency: "CAD", investmentRange: "$50,000 - $400,000 CAD" },
  { name: "Montreal", slug: "montreal", country: "Canada", countryCode: "CA", region: "North America", type: "city", population: 1762949, businessHub: true, currency: "CAD", investmentRange: "$40,000 - $350,000 CAD" },
  { name: "Calgary", slug: "calgary", country: "Canada", countryCode: "CA", region: "North America", type: "city", population: 1239220, businessHub: true, currency: "CAD", investmentRange: "$40,000 - $350,000 CAD" },
  
  // Australia - Top 4 Markets
  { name: "Sydney", slug: "sydney", country: "Australia", countryCode: "AU", region: "Asia-Pacific", type: "city", population: 5312163, businessHub: true, currency: "AUD", investmentRange: "$50,000 - $500,000 AUD" },
  { name: "Melbourne", slug: "melbourne", country: "Australia", countryCode: "AU", region: "Asia-Pacific", type: "city", population: 5078193, businessHub: true, currency: "AUD", investmentRange: "$50,000 - $500,000 AUD" },
  { name: "Brisbane", slug: "brisbane", country: "Australia", countryCode: "AU", region: "Asia-Pacific", type: "city", population: 2514184, businessHub: true, currency: "AUD", investmentRange: "$40,000 - $400,000 AUD" },
  { name: "Perth", slug: "perth", country: "Australia", countryCode: "AU", region: "Asia-Pacific", type: "city", population: 2085973, businessHub: true, currency: "AUD", investmentRange: "$40,000 - $400,000 AUD" },
  
  // India - Top 5 Markets
  { name: "Mumbai", slug: "mumbai", country: "India", countryCode: "IN", region: "Asia-Pacific", type: "city", population: 12478447, businessHub: true, currency: "INR", investmentRange: "₹10 Lakhs - ₹2 Crores" },
  { name: "Delhi", slug: "delhi", country: "India", countryCode: "IN", region: "Asia-Pacific", type: "city", population: 11034555, businessHub: true, currency: "INR", investmentRange: "₹10 Lakhs - ₹2 Crores" },
  { name: "Bangalore", slug: "bangalore", country: "India", countryCode: "IN", region: "Asia-Pacific", type: "city", population: 8443675, businessHub: true, currency: "INR", investmentRange: "₹8 Lakhs - ₹1.5 Crores" },
  { name: "Hyderabad", slug: "hyderabad", country: "India", countryCode: "IN", region: "Asia-Pacific", type: "city", population: 6809970, businessHub: true, currency: "INR", investmentRange: "₹8 Lakhs - ₹1.5 Crores" },
  { name: "Chennai", slug: "chennai", country: "India", countryCode: "IN", region: "Asia-Pacific", type: "city", population: 4681087, businessHub: true, currency: "INR", investmentRange: "₹8 Lakhs - ₹1.5 Crores" },
];

// ============================================
// HIGH-VALUE SERVICE KEYWORDS FOR RANKING
// ============================================

export const serviceKeywords: ServiceKeyword[] = [
  // Primary Money Keywords (High Intent)
  { 
    name: "Franchise Lead Generation", 
    slug: "franchise-lead-generation",
    description: "Professional franchise lead generation services to connect franchisors with qualified investors",
    searchVolume: "high",
    primaryKeyword: "franchise leads"
  },
  { 
    name: "Franchise Marketing", 
    slug: "franchise-marketing",
    description: "Strategic franchise marketing solutions to grow your franchise brand globally",
    searchVolume: "high",
    primaryKeyword: "franchise marketing agency"
  },
  { 
    name: "Franchise Consulting", 
    slug: "franchise-consulting",
    description: "Expert franchise consulting services for development, expansion, and optimization",
    searchVolume: "high",
    primaryKeyword: "franchise consultant"
  },
  { 
    name: "Franchise Development", 
    slug: "franchise-development",
    description: "Complete franchise development services to transform businesses into successful franchises",
    searchVolume: "high",
    primaryKeyword: "franchise development company"
  },
  { 
    name: "Buy Franchise Leads", 
    slug: "buy-franchise-leads",
    description: "Buy qualified, exclusive franchise leads from the industry's leading lead generation experts",
    searchVolume: "high",
    primaryKeyword: "buy franchise leads"
  },
  // Secondary Keywords (Medium Intent)
  { 
    name: "Franchise Opportunities", 
    slug: "franchise-opportunities",
    description: "Discover the best franchise investment opportunities across multiple industries",
    searchVolume: "medium",
    primaryKeyword: "franchise opportunities"
  },
  { 
    name: "Franchise Matchmaking", 
    slug: "franchise-matchmaking",
    description: "Connect franchisors with qualified franchisees through expert matchmaking services",
    searchVolume: "medium",
    primaryKeyword: "franchise matchmaking"
  },
  { 
    name: "Franchise Advertising", 
    slug: "franchise-advertising",
    description: "High-performance franchise advertising campaigns to attract quality prospects",
    searchVolume: "medium",
    primaryKeyword: "franchise advertising"
  },
];

// Helper: Get markets by country
export const getMarketsByCountry = (countryCode: string) => 
  keyMarkets.filter(m => m.countryCode === countryCode);

// Helper: Get primary markets (for main sitemap - top 5 per country)
export const getPrimaryMarkets = () => {
  const countries = ['USA', 'UK', 'CA', 'AU', 'IN'];
  return countries.flatMap(code => 
    keyMarkets.filter(m => m.countryCode === code).slice(0, 5)
  );
};

// Generate strategic page URLs for sitemap
export const generateStrategicPageUrls = () => {
  const urls: { path: string; priority: string; type: string }[] = [];
  
  // Key Market Pages (25 pages - 5 per country)
  const primaryMarkets = getPrimaryMarkets();
  primaryMarkets.forEach(market => {
    urls.push({
      path: `/franchise-consulting/${market.slug}`,
      priority: "0.8",
      type: "market"
    });
  });
  
  // Service + Top Markets combinations (8 services × 5 top markets = 40 pages)
  const topMarkets = keyMarkets.filter(m => m.businessHub).slice(0, 5);
  serviceKeywords.forEach(service => {
    topMarkets.forEach(market => {
      urls.push({
        path: `/${service.slug}/${market.slug}`,
        priority: "0.7",
        type: "service-location"
      });
    });
  });
  
  return urls;
};

// Get unique content for each market page (enhanced for SEO)
export const getMarketContent = (market: KeyMarket) => {
  const countryOpportunities: Record<string, string[]> = {
    USA: ["Food & Beverage", "Health & Fitness", "Home Services", "Education", "Retail"],
    UK: ["Food & Beverage", "Health & Beauty", "Business Services", "Retail", "Education"],
    CA: ["Food & Beverage", "Health & Wellness", "Retail", "Home Services", "Education"],
    AU: ["Food & Beverage", "Health & Fitness", "Retail", "Home Services", "Education"],
    IN: ["QSR & Restaurants", "Education & Coaching", "Health & Wellness", "Retail", "Services"],
  };
  
  return {
    title: `Franchise Consulting in ${market.name} | #1 Franchise Marketing Agency ${market.country}`,
    metaDescription: `Looking for franchise lead generation in ${market.name}? Our experts help franchisors generate qualified leads and expand franchises across ${market.country}. Get free consultation today.`,
    heroTitle: `Franchise Lead Generation & Marketing in ${market.name}`,
    heroSubtitle: `Your trusted partner for franchise development, lead generation, and brand expansion in ${market.name} and across ${market.country}.`,
    investmentRange: market.investmentRange,
    currency: market.currency,
    opportunities: countryOpportunities[market.countryCode] || countryOpportunities.USA,
  };
};

// Get unique content for service-location pages (enhanced for SEO)
export const getServiceLocationContent = (service: ServiceKeyword, market: KeyMarket) => {
  return {
    title: `${service.name} in ${market.name} | Best ${service.primaryKeyword} ${market.country}`,
    metaDescription: `Expert ${service.name.toLowerCase()} services in ${market.name}, ${market.country}. ${service.description}. Get qualified franchise leads and grow your business.`,
    heroTitle: `${service.name} in ${market.name}`,
    heroSubtitle: `${service.description} in ${market.name} and across ${market.country}.`,
    primaryKeyword: service.primaryKeyword,
  };
};

// Country-specific SEO data
export const countrySEOData = {
  USA: {
    name: "United States",
    code: "USA",
    currency: "USD",
    primaryKeywords: ["franchise leads USA", "buy franchise leads America", "franchise marketing USA", "franchise lead generation United States"],
    description: "Leading franchise lead generation and marketing services across all 50 US states"
  },
  UK: {
    name: "United Kingdom", 
    code: "UK",
    currency: "GBP",
    primaryKeywords: ["franchise leads UK", "franchise marketing United Kingdom", "franchise lead generation England", "buy franchise leads Britain"],
    description: "Expert franchise consulting and lead generation throughout the United Kingdom"
  },
  CA: {
    name: "Canada",
    code: "CA", 
    currency: "CAD",
    primaryKeywords: ["franchise leads Canada", "franchise marketing Toronto", "franchise lead generation Vancouver", "Canadian franchise opportunities"],
    description: "Professional franchise development and lead generation across Canada"
  },
  AU: {
    name: "Australia",
    code: "AU",
    currency: "AUD", 
    primaryKeywords: ["franchise leads Australia", "franchise marketing Sydney", "franchise lead generation Melbourne", "Australian franchise opportunities"],
    description: "Premium franchise consulting and lead generation services in Australia"
  },
  IN: {
    name: "India",
    code: "IN",
    currency: "INR",
    primaryKeywords: ["franchise leads India", "franchise marketing Mumbai", "franchise lead generation Delhi", "Indian franchise opportunities"],
    description: "Complete franchise development and lead generation services across India"
  }
};
