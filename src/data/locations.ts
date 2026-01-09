// Comprehensive location data for SEO pages - OPTIMIZED for quality over quantity
export interface LocationData {
  country: string;
  countryCode: string;
  states: StateData[];
}

export interface StateData {
  name: string;
  slug: string;
  cities: CityData[];
}

export interface CityData {
  name: string;
  slug: string;
  population?: number;
}

// OPTIMIZED: Only major markets to avoid thin content issues
export const locationData: LocationData[] = [
  {
    country: "United States",
    countryCode: "USA",
    states: [
      {
        name: "California",
        slug: "california",
        cities: [
          { name: "Los Angeles", slug: "los-angeles", population: 3898747 },
          { name: "San Francisco", slug: "san-francisco", population: 873965 },
          { name: "San Diego", slug: "san-diego", population: 1386932 },
        ]
      },
      {
        name: "Texas",
        slug: "texas",
        cities: [
          { name: "Houston", slug: "houston", population: 2320268 },
          { name: "Dallas", slug: "dallas", population: 1343573 },
          { name: "Austin", slug: "austin", population: 978908 },
        ]
      },
      {
        name: "New York",
        slug: "new-york",
        cities: [
          { name: "New York City", slug: "new-york-city", population: 8336817 },
        ]
      },
      {
        name: "Florida",
        slug: "florida",
        cities: [
          { name: "Miami", slug: "miami", population: 442241 },
          { name: "Orlando", slug: "orlando", population: 307573 },
          { name: "Tampa", slug: "tampa", population: 384959 },
        ]
      },
      {
        name: "Illinois",
        slug: "illinois",
        cities: [
          { name: "Chicago", slug: "chicago", population: 2693976 },
        ]
      },
      {
        name: "Georgia",
        slug: "georgia",
        cities: [
          { name: "Atlanta", slug: "atlanta", population: 498715 },
        ]
      },
      {
        name: "Arizona",
        slug: "arizona",
        cities: [
          { name: "Phoenix", slug: "phoenix", population: 1608139 },
        ]
      },
      {
        name: "Colorado",
        slug: "colorado",
        cities: [
          { name: "Denver", slug: "denver", population: 715522 },
        ]
      },
    ]
  },
  {
    country: "India",
    countryCode: "IN",
    states: [
      {
        name: "Maharashtra",
        slug: "maharashtra",
        cities: [
          { name: "Mumbai", slug: "mumbai", population: 20667656 },
          { name: "Pune", slug: "pune", population: 6629347 },
        ]
      },
      {
        name: "Karnataka",
        slug: "karnataka",
        cities: [
          { name: "Bangalore", slug: "bangalore", population: 12765000 },
        ]
      },
      {
        name: "Delhi NCR",
        slug: "delhi-ncr",
        cities: [
          { name: "New Delhi", slug: "new-delhi", population: 16787941 },
          { name: "Gurugram", slug: "gurugram", population: 1514085 },
          { name: "Noida", slug: "noida", population: 642381 },
        ]
      },
      {
        name: "Tamil Nadu",
        slug: "tamil-nadu",
        cities: [
          { name: "Chennai", slug: "chennai", population: 10971108 },
        ]
      },
      {
        name: "Telangana",
        slug: "telangana",
        cities: [
          { name: "Hyderabad", slug: "hyderabad", population: 10534418 },
        ]
      },
      {
        name: "Gujarat",
        slug: "gujarat",
        cities: [
          { name: "Ahmedabad", slug: "ahmedabad", population: 7650000 },
        ]
      },
      {
        name: "West Bengal",
        slug: "west-bengal",
        cities: [
          { name: "Kolkata", slug: "kolkata", population: 14850000 },
        ]
      },
      {
        name: "Rajasthan",
        slug: "rajasthan",
        cities: [
          { name: "Jaipur", slug: "jaipur", population: 4107000 },
        ]
      },
    ]
  },
  {
    country: "United Kingdom",
    countryCode: "UK",
    states: [
      {
        name: "England",
        slug: "england",
        cities: [
          { name: "London", slug: "london", population: 8982000 },
          { name: "Manchester", slug: "manchester", population: 547627 },
          { name: "Birmingham", slug: "birmingham", population: 1141816 },
        ]
      },
    ]
  },
  {
    country: "Canada",
    countryCode: "CA",
    states: [
      {
        name: "Ontario",
        slug: "ontario",
        cities: [
          { name: "Toronto", slug: "toronto", population: 2930000 },
        ]
      },
      {
        name: "British Columbia",
        slug: "british-columbia",
        cities: [
          { name: "Vancouver", slug: "vancouver", population: 675218 },
        ]
      },
    ]
  },
  {
    country: "Australia",
    countryCode: "AU",
    states: [
      {
        name: "New South Wales",
        slug: "new-south-wales",
        cities: [
          { name: "Sydney", slug: "sydney", population: 5312000 },
        ]
      },
      {
        name: "Victoria",
        slug: "victoria",
        cities: [
          { name: "Melbourne", slug: "melbourne", population: 5078000 },
        ]
      },
    ]
  },
  {
    country: "United Arab Emirates",
    countryCode: "AE",
    states: [
      {
        name: "Dubai",
        slug: "dubai",
        cities: [
          { name: "Dubai City", slug: "dubai-city", population: 3331000 },
        ]
      },
    ]
  },
];

// REMOVED: Excessive SEO keywords that create thin content
// Only keep core service keywords that match actual services offered
export const seoKeywords: string[] = [];

// OPTIMIZED: Core service keywords only (no duplicates, no thin content generators)
export const serviceKeywords = [
  "franchise consulting",
  "franchise development",
  "franchisee recruitment",
  "franchise matchmaking",
  "franchise expansion",
];

// OPTIMIZED: Only 5 core service keywords to generate quality pages
export const broadMarketingKeywords = [
  "franchise consulting",
  "franchise development",
  "franchisee recruitment",
  "franchise matchmaking",
  "franchise expansion",
];
