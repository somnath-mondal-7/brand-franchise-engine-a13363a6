// Strategic SEO Pages - Key Markets + Top Keywords
// This creates ~60-70 high-quality, indexable pages

export interface KeyMarket {
  name: string;
  slug: string;
  country: string;
  countryCode: string;
  type: 'city' | 'state' | 'region';
  population?: number;
  businessHub?: boolean;
}

export interface ServiceKeyword {
  name: string;
  slug: string;
  description: string;
}

// Top 15 Key Markets - Major business hubs in USA and India
export const keyMarkets: KeyMarket[] = [
  // USA - Top 10 Markets
  { name: "New York City", slug: "new-york-city", country: "United States", countryCode: "USA", type: "city", population: 8336817, businessHub: true },
  { name: "Los Angeles", slug: "los-angeles", country: "United States", countryCode: "USA", type: "city", population: 3898747, businessHub: true },
  { name: "Chicago", slug: "chicago", country: "United States", countryCode: "USA", type: "city", population: 2693976, businessHub: true },
  { name: "Houston", slug: "houston", country: "United States", countryCode: "USA", type: "city", population: 2320268, businessHub: true },
  { name: "Miami", slug: "miami", country: "United States", countryCode: "USA", type: "city", population: 442241, businessHub: true },
  { name: "Dallas", slug: "dallas", country: "United States", countryCode: "USA", type: "city", population: 1343573, businessHub: true },
  { name: "Atlanta", slug: "atlanta", country: "United States", countryCode: "USA", type: "city", population: 498715, businessHub: true },
  { name: "San Francisco", slug: "san-francisco", country: "United States", countryCode: "USA", type: "city", population: 873965, businessHub: true },
  { name: "Phoenix", slug: "phoenix", country: "United States", countryCode: "USA", type: "city", population: 1608139, businessHub: true },
  { name: "Denver", slug: "denver", country: "United States", countryCode: "USA", type: "city", population: 715522, businessHub: true },
  
  // India - Top 5 Markets
  { name: "Mumbai", slug: "mumbai", country: "India", countryCode: "IN", type: "city", population: 12478447, businessHub: true },
  { name: "Delhi", slug: "delhi", country: "India", countryCode: "IN", type: "city", population: 11034555, businessHub: true },
  { name: "Bangalore", slug: "bangalore", country: "India", countryCode: "IN", type: "city", population: 8443675, businessHub: true },
  { name: "Hyderabad", slug: "hyderabad", country: "India", countryCode: "IN", type: "city", population: 6809970, businessHub: true },
  { name: "Chennai", slug: "chennai", country: "India", countryCode: "IN", type: "city", population: 4681087, businessHub: true },
];

// Top 5 Service Keywords for combinations
export const serviceKeywords: ServiceKeyword[] = [
  { 
    name: "Franchise Development", 
    slug: "franchise-development",
    description: "Complete franchise development consulting services"
  },
  { 
    name: "Franchise Consulting", 
    slug: "franchise-consulting",
    description: "Expert franchise consulting and advisory services"
  },
  { 
    name: "Franchise Opportunities", 
    slug: "franchise-opportunities",
    description: "Find the best franchise investment opportunities"
  },
  { 
    name: "Franchise Matchmaking", 
    slug: "franchise-matchmaking",
    description: "Connect franchisors with qualified franchisees"
  },
  { 
    name: "Buy a Franchise", 
    slug: "buy-a-franchise",
    description: "Expert guidance to buy the right franchise"
  },
];

// Generate strategic page URLs
export const generateStrategicPageUrls = () => {
  const urls: { path: string; priority: string; type: string }[] = [];
  
  // Key Market Pages (15 pages)
  keyMarkets.forEach(market => {
    urls.push({
      path: `/franchise-consulting/${market.slug}`,
      priority: "0.8",
      type: "market"
    });
  });
  
  // Service + Top 5 Markets combinations (5 services × 5 major cities = 25 pages)
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

// Get unique content for each market page
export const getMarketContent = (market: KeyMarket) => {
  const isUSA = market.countryCode === "USA";
  const currency = isUSA ? "USD" : "INR";
  const investmentRange = isUSA ? "$50,000 - $500,000" : "₹10 Lakhs - ₹2 Crores";
  
  return {
    title: `Franchise Consulting in ${market.name} | Expert Franchise Advisory`,
    metaDescription: `Looking for franchise consulting in ${market.name}? Our experts help you develop, expand, or invest in franchises with proven success rates. Get free consultation today.`,
    heroTitle: `Franchise Consulting Services in ${market.name}`,
    heroSubtitle: `Your trusted partner for franchise development, matchmaking, and expansion in ${market.name} and surrounding areas.`,
    investmentRange,
    currency,
    opportunities: isUSA 
      ? ["Food & Beverage", "Health & Fitness", "Education", "Home Services", "Retail"]
      : ["QSR & Restaurants", "Education & Coaching", "Health & Wellness", "Retail", "Services"],
  };
};

// Get unique content for service-location pages
export const getServiceLocationContent = (service: ServiceKeyword, market: KeyMarket) => {
  return {
    title: `${service.name} in ${market.name} | Franchise Leads HQ`,
    metaDescription: `Expert ${service.name.toLowerCase()} services in ${market.name}. ${service.description}. Contact us for a free consultation.`,
    heroTitle: `${service.name} in ${market.name}`,
    heroSubtitle: `${service.description} in ${market.name} and ${market.country}.`,
  };
};
