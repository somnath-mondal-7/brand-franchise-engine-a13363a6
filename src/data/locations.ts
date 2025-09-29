// Comprehensive location data for SEO pages
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
          { name: "San Jose", slug: "san-jose", population: 1013240 },
          { name: "Fresno", slug: "fresno", population: 542107 },
          { name: "Sacramento", slug: "sacramento", population: 524943 },
          { name: "Oakland", slug: "oakland", population: 433031 }
        ]
      },
      {
        name: "Texas",
        slug: "texas",
        cities: [
          { name: "Houston", slug: "houston", population: 2320268 },
          { name: "San Antonio", slug: "san-antonio", population: 1547253 },
          { name: "Dallas", slug: "dallas", population: 1343573 },
          { name: "Austin", slug: "austin", population: 978908 },
          { name: "Fort Worth", slug: "fort-worth", population: 918915 },
          { name: "El Paso", slug: "el-paso", population: 695044 }
        ]
      },
      {
        name: "New York",
        slug: "new-york",
        cities: [
          { name: "New York City", slug: "new-york-city", population: 8336817 },
          { name: "Buffalo", slug: "buffalo", population: 255284 },
          { name: "Rochester", slug: "rochester", population: 206284 },
          { name: "Yonkers", slug: "yonkers", population: 211569 },
          { name: "Syracuse", slug: "syracuse", population: 144142 },
          { name: "Albany", slug: "albany", population: 97856 }
        ]
      },
      {
        name: "Florida",
        slug: "florida",
        cities: [
          { name: "Jacksonville", slug: "jacksonville", population: 949611 },
          { name: "Miami", slug: "miami", population: 442241 },
          { name: "Tampa", slug: "tampa", population: 384959 },
          { name: "Orlando", slug: "orlando", population: 307573 },
          { name: "St. Petersburg", slug: "st-petersburg", population: 258308 },
          { name: "Tallahassee", slug: "tallahassee", population: 194500 }
        ]
      },
      {
        name: "Illinois",
        slug: "illinois",
        cities: [
          { name: "Chicago", slug: "chicago", population: 2693976 },
          { name: "Aurora", slug: "aurora", population: 197899 },
          { name: "Rockford", slug: "rockford", population: 145609 },
          { name: "Joliet", slug: "joliet", population: 150362 },
          { name: "Naperville", slug: "naperville", population: 149540 }
        ]
      },
      {
        name: "Pennsylvania",
        slug: "pennsylvania",
        cities: [
          { name: "Philadelphia", slug: "philadelphia", population: 1584064 },
          { name: "Pittsburgh", slug: "pittsburgh", population: 300286 },
          { name: "Allentown", slug: "allentown", population: 125845 },
          { name: "Erie", slug: "erie", population: 94831 }
        ]
      },
      {
        name: "Ohio",
        slug: "ohio",
        cities: [
          { name: "Columbus", slug: "columbus", population: 898553 },
          { name: "Cleveland", slug: "cleveland", population: 383793 },
          { name: "Cincinnati", slug: "cincinnati", population: 309317 },
          { name: "Toledo", slug: "toledo", population: 270871 }
        ]
      },
      {
        name: "Georgia",
        slug: "georgia",
        cities: [
          { name: "Atlanta", slug: "atlanta", population: 498715 },
          { name: "Augusta", slug: "augusta", population: 197166 },
          { name: "Columbus", slug: "columbus-ga", population: 194058 },
          { name: "Savannah", slug: "savannah", population: 147780 }
        ]
      },
      {
        name: "North Carolina",
        slug: "north-carolina",
        cities: [
          { name: "Charlotte", slug: "charlotte", population: 885708 },
          { name: "Raleigh", slug: "raleigh", population: 474069 },
          { name: "Greensboro", slug: "greensboro", population: 296710 },
          { name: "Durham", slug: "durham", population: 283506 }
        ]
      },
      {
        name: "Michigan",
        slug: "michigan",
        cities: [
          { name: "Detroit", slug: "detroit", population: 639111 },
          { name: "Grand Rapids", slug: "grand-rapids", population: 198917 },
          { name: "Warren", slug: "warren", population: 139387 },
          { name: "Sterling Heights", slug: "sterling-heights", population: 134346 }
        ]
      }
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
          { name: "London", slug: "london", population: 9648110 },
          { name: "Birmingham", slug: "birmingham", population: 1149000 },
          { name: "Manchester", slug: "manchester", population: 547000 },
          { name: "Leeds", slug: "leeds", population: 789000 },
          { name: "Sheffield", slug: "sheffield", population: 685000 },
          { name: "Liverpool", slug: "liverpool", population: 498000 },
          { name: "Bristol", slug: "bristol", population: 467000 },
          { name: "Newcastle", slug: "newcastle", population: 300000 },
          { name: "Nottingham", slug: "nottingham", population: 321000 }
        ]
      },
      {
        name: "Scotland",
        slug: "scotland",
        cities: [
          { name: "Glasgow", slug: "glasgow", population: 635000 },
          { name: "Edinburgh", slug: "edinburgh", population: 540000 },
          { name: "Aberdeen", slug: "aberdeen", population: 198000 },
          { name: "Dundee", slug: "dundee", population: 148000 }
        ]
      },
      {
        name: "Wales",
        slug: "wales",
        cities: [
          { name: "Cardiff", slug: "cardiff", population: 481000 },
          { name: "Swansea", slug: "swansea", population: 246000 },
          { name: "Newport", slug: "newport", population: 159000 }
        ]
      },
      {
        name: "Northern Ireland",
        slug: "northern-ireland",
        cities: [
          { name: "Belfast", slug: "belfast", population: 345000 },
          { name: "Derry", slug: "derry", population: 110000 }
        ]
      }
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
          { name: "Ottawa", slug: "ottawa", population: 994837 },
          { name: "Mississauga", slug: "mississauga", population: 721599 },
          { name: "Brampton", slug: "brampton", population: 656480 },
          { name: "Hamilton", slug: "hamilton", population: 569353 },
          { name: "London", slug: "london-ontario", population: 422324 }
        ]
      },
      {
        name: "Quebec",
        slug: "quebec",
        cities: [
          { name: "Montreal", slug: "montreal", population: 1780000 },
          { name: "Quebec City", slug: "quebec-city", population: 542298 },
          { name: "Laval", slug: "laval", population: 438366 },
          { name: "Gatineau", slug: "gatineau", population: 291041 }
        ]
      },
      {
        name: "British Columbia",
        slug: "british-columbia",
        cities: [
          { name: "Vancouver", slug: "vancouver", population: 675218 },
          { name: "Surrey", slug: "surrey", population: 568322 },
          { name: "Burnaby", slug: "burnaby", population: 249125 },
          { name: "Richmond", slug: "richmond", population: 209937 }
        ]
      },
      {
        name: "Alberta",
        slug: "alberta",
        cities: [
          { name: "Calgary", slug: "calgary", population: 1336000 },
          { name: "Edmonton", slug: "edmonton", population: 981280 },
          { name: "Red Deer", slug: "red-deer", population: 100418 },
          { name: "Lethbridge", slug: "lethbridge", population: 101482 }
        ]
      },
      {
        name: "Manitoba",
        slug: "manitoba",
        cities: [
          { name: "Winnipeg", slug: "winnipeg", population: 749534 },
          { name: "Brandon", slug: "brandon", population: 51313 }
        ]
      }
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
          { name: "Sydney", slug: "sydney", population: 5312163 },
          { name: "Newcastle", slug: "newcastle-au", population: 322278 },
          { name: "Wollongong", slug: "wollongong", population: 305691 },
          { name: "Maitland", slug: "maitland", population: 85407 }
        ]
      },
      {
        name: "Victoria",
        slug: "victoria",
        cities: [
          { name: "Melbourne", slug: "melbourne", population: 5078193 },
          { name: "Geelong", slug: "geelong", population: 253269 },
          { name: "Ballarat", slug: "ballarat", population: 109553 },
          { name: "Bendigo", slug: "bendigo", population: 100617 }
        ]
      },
      {
        name: "Queensland",
        slug: "queensland",
        cities: [
          { name: "Brisbane", slug: "brisbane", population: 2560720 },
          { name: "Gold Coast", slug: "gold-coast", population: 679127 },
          { name: "Townsville", slug: "townsville", population: 180820 },
          { name: "Cairns", slug: "cairns", population: 153075 }
        ]
      },
      {
        name: "Western Australia",
        slug: "western-australia",
        cities: [
          { name: "Perth", slug: "perth", population: 2125114 },
          { name: "Bunbury", slug: "bunbury", population: 75917 },
          { name: "Geraldton", slug: "geraldton", population: 40257 }
        ]
      },
      {
        name: "South Australia",
        slug: "south-australia",
        cities: [
          { name: "Adelaide", slug: "adelaide", population: 1402393 },
          { name: "Mount Gambier", slug: "mount-gambier", population: 26878 }
        ]
      }
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
          { name: "Dubai City", slug: "dubai-city", population: 3331420 },
          { name: "Deira", slug: "deira", population: 500000 },
          { name: "Jumeirah", slug: "jumeirah", population: 200000 },
          { name: "Bur Dubai", slug: "bur-dubai", population: 300000 }
        ]
      },
      {
        name: "Abu Dhabi",
        slug: "abu-dhabi",
        cities: [
          { name: "Abu Dhabi City", slug: "abu-dhabi-city", population: 1482816 },
          { name: "Al Ain", slug: "al-ain", population: 766936 }
        ]
      },
      {
        name: "Sharjah",
        slug: "sharjah",
        cities: [
          { name: "Sharjah City", slug: "sharjah-city", population: 1684649 }
        ]
      },
      {
        name: "Ajman",
        slug: "ajman",
        cities: [
          { name: "Ajman City", slug: "ajman-city", population: 504846 }
        ]
      }
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
          { name: "Mumbai", slug: "mumbai", population: 12442373 },
          { name: "Pune", slug: "pune", population: 3124458 },
          { name: "Nagpur", slug: "nagpur", population: 2405421 },
          { name: "Nashik", slug: "nashik", population: 1486973 }
        ]
      },
      {
        name: "Delhi",
        slug: "delhi",
        cities: [
          { name: "New Delhi", slug: "new-delhi", population: 28514000 },
          { name: "Gurgaon", slug: "gurgaon", population: 876969 },
          { name: "Noida", slug: "noida", population: 642381 }
        ]
      },
      {
        name: "Karnataka",
        slug: "karnataka",
        cities: [
          { name: "Bangalore", slug: "bangalore", population: 8443675 },
          { name: "Mysore", slug: "mysore", population: 887446 },
          { name: "Hubli", slug: "hubli", population: 943857 }
        ]
      },
      {
        name: "Tamil Nadu",
        slug: "tamil-nadu",
        cities: [
          { name: "Chennai", slug: "chennai", population: 4681087 },
          { name: "Coimbatore", slug: "coimbatore", population: 1061447 },
          { name: "Madurai", slug: "madurai", population: 1561129 }
        ]
      },
      {
        name: "West Bengal",
        slug: "west-bengal",
        cities: [
          { name: "Kolkata", slug: "kolkata", population: 4496694 },
          { name: "Asansol", slug: "asansol", population: 563917 },
          { name: "Siliguri", slug: "siliguri", population: 513264 }
        ]
      }
    ]
  },
  {
    country: "Kuwait",
    countryCode: "KW",
    states: [
      {
        name: "Al Asimah",
        slug: "al-asimah",
        cities: [
          { name: "Kuwait City", slug: "kuwait-city", population: 2380000 },
          { name: "Salmiya", slug: "salmiya", population: 147649 },
          { name: "Hawally", slug: "hawally", population: 164212 }
        ]
      },
      {
        name: "Hawalli",
        slug: "hawalli",
        cities: [
          { name: "Hawalli City", slug: "hawalli-city", population: 164212 },
          { name: "Farwaniya", slug: "farwaniya", population: 86525 }
        ]
      },
      {
        name: "Al Farwaniyah",
        slug: "al-farwaniyah",
        cities: [
          { name: "Farwaniya", slug: "farwaniya-city", population: 86525 },
          { name: "Jleeb Al-Shuyoukh", slug: "jleeb-al-shuyoukh", population: 67311 }
        ]
      }
    ]
  }
];

// SEO Keywords for different variations
export const seoKeywords = [
  "best franchise lead generation agency",
  "franchise lead generation services",
  "franchise marketing agency",
  "franchise lead generation company",
  "franchise development services",
  "franchise marketing experts",
  "franchise lead generation specialists",
  "top franchise marketing agency",
  "franchise business development",
  "franchise advertising agency",
  "franchise marketing consultants",
  "franchise lead generation solutions",
  "professional franchise marketing",
  "franchise growth services",
  "franchise marketing professionals",
  "expert franchise lead generation",
  "franchise business marketing",
  "franchise lead generation experts",
  "franchise marketing services",
  "franchise development agency",
  "franchise lead generation firms",
  "franchise marketing specialists",
  "franchise advertising services",
  "franchise business consultants",
  "franchise marketing solutions",
  "franchise lead generation professionals",
  "franchise development experts",
  "franchise marketing company",
  "franchise business growth",
  "franchise lead generation consultants",
  "franchise marketing strategies",
  "franchise development solutions",
  "franchise business services",
  "franchise marketing firms",
  "franchise lead generation agency near me",
  "local franchise marketing agency",
  "franchise marketing agency nearby",
  "franchise lead generation services near me",
  "franchise development agency near me",
  "franchise marketing consultants near me",
  "best local franchise marketing",
  "top franchise agency near me",
  "franchise marketing experts nearby",
  "franchise lead generation company near me",
  "franchise business development near me",
  "franchise advertising agency near me",
  "franchise marketing professionals near me",
  "franchise growth services near me",
  "expert franchise marketing nearby",
  "franchise lead generation specialists near me",
  "professional franchise development",
  "franchise business marketing near me",
  "franchise marketing solutions nearby",
  "franchise development services near me"
];

export const serviceKeywords = [
  "franchise lead generation",
  "franchise marketing",
  "franchise development", 
  "franchise advertising",
  "franchise consulting",
  "franchise business growth",
  "franchise brand building",
  "franchise digital marketing",
  "franchise social media marketing",
  "franchise email marketing",
  "franchise content marketing",
  "franchise SEO services",
  "franchise PPC advertising",
  "franchise website design",
  "franchise sales funnel",
  "franchise conversion optimization",
  "franchise CRM services",
  "franchise automation",
  "franchise analytics",
  "franchise ROI optimization"
];