export type Brand = {
  slug: string;
  name: string;
  category: string;
  country: "USA";
  investment: string;
  area: string;
  outlets: string;
  founded: string;
  hq: string;
  domain: string; // for Clearbit logo
  tagline: string;
  about: string;
  why: string[];
  support: string[];
  requirements: string[];
  roi: string;
  website?: string;
};

export const brands: Brand[] = [
  // ===== USA Brands =====
  {
    slug: "subway",
    name: "Subway",
    category: "QSR / Sandwiches",
    country: "USA",
    investment: "$1.5L – $3.5L",
    area: "500 – 1500 sq.ft",
    outlets: "37,000+",
    founded: "1965",
    hq: "Milford, Connecticut, USA",
    domain: "subway.com",
    tagline: "World's largest sandwich chain",
    about: "Subway is one of the world's largest QSR franchise systems with 37,000+ outlets across 100+ countries. The fresh-sandwich category leader.",
    why: ["Global brand recognition", "Flexible footprint formats", "Proven training systems"],
    support: ["Site selection", "Build-out support", "Operations training", "National marketing"],
    requirements: ["Net worth $80K+, liquid $30K+", "Operator presence", "Brand standards adherence"],
    roi: "Typical payback: 36–60 months",
    website: "https://subway.com",
  },
  {
    slug: "mcdonalds",
    name: "McDonald's",
    category: "QSR / Burgers",
    country: "USA",
    investment: "$1M – $2.2M",
    area: "2500 – 4000 sq.ft",
    outlets: "40,000+",
    founded: "1955",
    hq: "Chicago, Illinois, USA",
    domain: "mcdonalds.com",
    tagline: "The world's leading QSR brand",
    about: "McDonald's is the world's largest QSR chain with 40,000+ outlets across 100+ countries. A gold-standard franchise system with rigorous selection.",
    why: ["Unmatched global brand", "World-class systems", "Real-estate-driven model"],
    support: ["Hamburger University training", "Site selection", "Construction support", "Global supply chain"],
    requirements: ["$500K+ liquid, no debt", "Full-time owner-operator", "Multi-year commitment"],
    roi: "Typical payback: 60–84 months",
    website: "https://mcdonalds.com",
  },
  {
    slug: "kfc",
    name: "KFC",
    category: "QSR / Chicken",
    country: "USA",
    investment: "$1.4M – $2.7M",
    area: "2000 – 3500 sq.ft",
    outlets: "27,000+",
    founded: "1952",
    hq: "Louisville, Kentucky, USA",
    domain: "kfc.com",
    tagline: "World's most popular chicken QSR",
    about: "KFC, part of Yum! Brands, is the world's leading chicken QSR chain with 27,000+ outlets across 150+ countries.",
    why: ["Iconic global brand", "Category-defining product", "Strong franchisee economics"],
    support: ["Operations training", "Marketing fund", "Supply chain", "Build-out support"],
    requirements: ["Net worth $1.5M+, liquid $750K+", "Multi-unit commitment preferred"],
    roi: "Typical payback: 48–72 months",
    website: "https://kfc.com",
  },
  {
    slug: "dominos",
    name: "Domino's Pizza",
    category: "QSR / Pizza",
    country: "USA",
    investment: "$1.2L – $4.6L",
    area: "1000 – 1500 sq.ft",
    outlets: "20,000+",
    founded: "1960",
    hq: "Ann Arbor, Michigan, USA",
    domain: "dominos.com",
    tagline: "World's largest pizza company",
    about: "Domino's is the world's largest pizza brand with 20,000+ stores in 90+ markets. Tech-led delivery model and franchisee-first culture.",
    why: ["Delivery-led economics", "Tech-driven ordering", "Strong franchisee community"],
    support: ["Franchise training program", "Tech platform", "Marketing", "Supply chain"],
    requirements: ["Manage a store for 1 year first", "Net worth $250K+", "Liquid $75K+"],
    roi: "Typical payback: 36–60 months",
    website: "https://dominos.com",
  },
  {
    slug: "anytime-fitness",
    name: "Anytime Fitness",
    category: "Fitness & Gym",
    country: "USA",
    investment: "$3.8L – $9.8L",
    area: "4000 – 5500 sq.ft",
    outlets: "5,000+",
    founded: "2002",
    hq: "Woodbury, Minnesota, USA",
    domain: "anytimefitness.com",
    tagline: "World's largest 24/7 gym chain",
    about: "Anytime Fitness is the world's largest 24/7 gym chain with 5,000+ clubs across 30+ countries. Strong membership-based recurring revenue.",
    why: ["Recurring subscription revenue", "Lean staffing model", "24/7 access differentiator"],
    support: ["Site selection", "Equipment package", "Marketing system", "Training academy"],
    requirements: ["Net worth $300K+, liquid $100K+", "Owner involvement"],
    roi: "Typical payback: 36–54 months",
    website: "https://anytimefitness.com",
  },
  {
    slug: "7-eleven",
    name: "7-Eleven",
    category: "Convenience Retail",
    country: "USA",
    investment: "$50K – $1.2M",
    area: "1500 – 3000 sq.ft",
    outlets: "85,000+",
    founded: "1927",
    hq: "Dallas, Texas, USA",
    domain: "7-eleven.com",
    tagline: "World's largest convenience store chain",
    about: "7-Eleven is the world's largest convenience retail chain with 85,000+ stores across 19 countries. Industry-leading franchise support model.",
    why: ["World's largest convenience brand", "Turnkey model", "Strong financing options"],
    support: ["Turnkey store + inventory", "Bookkeeping & payroll", "Marketing", "24/7 helpdesk"],
    requirements: ["Liquid $50K+", "Owner-operator", "US residency/work auth"],
    roi: "Typical payback: 36–60 months",
    website: "https://7-eleven.com",
  },
  {
    slug: "ups-store",
    name: "The UPS Store",
    category: "Business Services",
    country: "USA",
    investment: "$1.7L – $5.6L",
    area: "1200 – 1800 sq.ft",
    outlets: "5,000+",
    founded: "1980",
    hq: "San Diego, California, USA",
    domain: "theupsstore.com",
    tagline: "America's #1 shipping & business services franchise",
    about: "The UPS Store is the largest shipping, printing and business services franchise in the US with 5,000+ locations.",
    why: ["Recession-resilient B2B + B2C", "Brand trust of UPS", "Diverse revenue streams"],
    support: ["Site selection", "2-week training program", "Marketing", "Ongoing field support"],
    requirements: ["Net worth $150K+, liquid $75K+", "Customer-service orientation"],
    roi: "Typical payback: 36–60 months",
    website: "https://theupsstore.com",
  },

  // ===== More USA Brands =====
  { slug: "starbucks", name: "Starbucks", category: "Cafe / Coffee", country: "USA", investment: "$3.15L – $3.15M (Licensed)", area: "1500 – 2500 sq.ft", outlets: "38,000+", founded: "1971", hq: "Seattle, Washington, USA", domain: "starbucks.com", tagline: "World's #1 coffeehouse brand", about: "Starbucks is the world's largest coffeehouse chain with 38,000+ stores. In most markets it operates via licensed-store partnerships rather than open franchising.", why: ["Iconic global brand", "Premium pricing power", "Strong daypart economics"], support: ["Store design", "Training", "Supply chain"], requirements: ["Strategic partnership / licensee", "Strong real-estate portfolio"], roi: "Typical payback: 48–72 months", website: "https://starbucks.com" },
  { slug: "burger-king", name: "Burger King", category: "QSR / Burgers", country: "USA", investment: "$1.9L – $3.3M", area: "2000 – 3500 sq.ft", outlets: "19,000+", founded: "1954", hq: "Miami, Florida, USA", domain: "bk.com", tagline: "Home of the Whopper", about: "Burger King is one of the world's largest QSR chains with 19,000+ outlets across 100+ countries.", why: ["Global brand", "Strong franchisee support", "Flame-grilled differentiator"], support: ["Real estate", "Training", "Marketing fund", "Supply chain"], requirements: ["Net worth $1.5M+, liquid $500K+", "Multi-unit operator preferred"], roi: "Typical payback: 48–72 months", website: "https://bk.com" },
  { slug: "popeyes", name: "Popeyes", category: "QSR / Chicken", country: "USA", investment: "$2.3L – $3.5M", area: "2000 – 3000 sq.ft", outlets: "4,000+", founded: "1972", hq: "Miami, Florida, USA", domain: "popeyes.com", tagline: "Louisiana Kitchen", about: "Popeyes is one of the fastest-growing chicken QSR chains globally, owned by Restaurant Brands International.", why: ["Fast-growing chicken category", "Iconic chicken sandwich", "Strong unit economics"], support: ["Training", "Marketing", "Supply chain"], requirements: ["Net worth $1M+, liquid $500K+", "Multi-unit experience"], roi: "Typical payback: 48–66 months", website: "https://popeyes.com" },
  { slug: "taco-bell", name: "Taco Bell", category: "QSR / Mexican", country: "USA", investment: "$5.7L – $3.4M", area: "2000 – 3000 sq.ft", outlets: "8,200+", founded: "1962", hq: "Irvine, California, USA", domain: "tacobell.com", tagline: "Live Más", about: "Taco Bell is a leading Mexican-inspired QSR chain part of Yum! Brands with 8,200+ outlets.", why: ["Differentiated cuisine", "Strong youth audience", "Innovation-led menu"], support: ["Training", "Marketing", "Real estate"], requirements: ["Net worth $1.5M+, liquid $750K+", "Multi-unit commitment"], roi: "Typical payback: 48–72 months", website: "https://tacobell.com" },
  { slug: "dunkin", name: "Dunkin'", category: "Cafe / Coffee & Donuts", country: "USA", investment: "$4.4L – $1.8M", area: "1200 – 2200 sq.ft", outlets: "13,000+", founded: "1950", hq: "Canton, Massachusetts, USA", domain: "dunkindonuts.com", tagline: "America runs on Dunkin'", about: "Dunkin' is one of America's most loved coffee and donuts chains with 13,000+ outlets globally.", why: ["Iconic daypart leader", "Drive-thru economics", "Loyal customer base"], support: ["Training", "Real estate", "Marketing"], requirements: ["Net worth $500K+, liquid $250K+"], roi: "Typical payback: 36–60 months", website: "https://dunkindonuts.com" },
  { slug: "chick-fil-a", name: "Chick-fil-A", category: "QSR / Chicken", country: "USA", investment: "$10K (Operator model)", area: "2500 – 5000 sq.ft", outlets: "3,000+", founded: "1967", hq: "Atlanta, Georgia, USA", domain: "chick-fil-a.com", tagline: "America's #1 fast food brand", about: "Chick-fil-A is the highest grossing QSR per unit in the US. It uses a unique operator model rather than traditional franchising.", why: ["#1 AUV in US QSR", "Strong customer loyalty", "Cult-loved brand"], support: ["Extensive operator training", "Marketing", "Operations"], requirements: ["Full-time operator commitment", "Highly selective process"], roi: "Operator-model — varies", website: "https://chick-fil-a.com" },
  { slug: "papa-johns", name: "Papa John's", category: "QSR / Pizza", country: "USA", investment: "$1.3L – $8.4L", area: "1200 – 1800 sq.ft", outlets: "5,500+", founded: "1984", hq: "Atlanta, Georgia, USA", domain: "papajohns.com", tagline: "Better Ingredients. Better Pizza.", about: "Papa John's is one of the world's largest pizza delivery chains with 5,500+ outlets in 50+ countries.", why: ["Established pizza brand", "Delivery-led model", "Strong franchisee support"], support: ["Training", "Marketing", "Tech stack"], requirements: ["Net worth $250K+, liquid $75K+"], roi: "Typical payback: 36–60 months", website: "https://papajohns.com" },
  { slug: "wendys", name: "Wendy's", category: "QSR / Burgers", country: "USA", investment: "$2L – $3.7M", area: "2500 – 3500 sq.ft", outlets: "7,000+", founded: "1969", hq: "Dublin, Ohio, USA", domain: "wendys.com", tagline: "Quality is our recipe", about: "Wendy's is the third-largest burger QSR chain globally with 7,000+ outlets.", why: ["Premium burger positioning", "Fresh-never-frozen edge", "Strong AUV"], support: ["Training", "Real estate", "Marketing"], requirements: ["Net worth $5M+, liquid $2M+", "Multi-unit operator"], roi: "Typical payback: 48–72 months", website: "https://wendys.com" },
  { slug: "planet-fitness", name: "Planet Fitness", category: "Fitness & Gym", country: "USA", investment: "$1.5M – $5M", area: "20,000 sq.ft", outlets: "2,500+", founded: "1992", hq: "Hampton, New Hampshire, USA", domain: "planetfitness.com", tagline: "The Judgement Free Zone", about: "Planet Fitness is one of America's largest gym chains with 2,500+ clubs and 18M+ members.", why: ["Low-price subscription model", "Massive member base", "Listed parent"], support: ["Site selection", "Training", "Marketing"], requirements: ["Net worth $3M+, liquid $1.5M+", "Multi-unit commitment"], roi: "Typical payback: 48–72 months", website: "https://planetfitness.com" },
  { slug: "marriott", name: "Marriott", category: "Hospitality / Hotels", country: "USA", investment: "$10M+", area: "Varies by brand", outlets: "8,500+", founded: "1927", hq: "Bethesda, Maryland, USA", domain: "marriott.com", tagline: "World's largest hotel company", about: "Marriott International is the world's largest hotel company with 30+ brands and 8,500+ properties.", why: ["Global distribution & loyalty (Bonvoy)", "30+ brand portfolio", "Strong RevPAR"], support: ["Brand standards", "Distribution", "Training"], requirements: ["Hotel-grade real estate", "$10M+ investment"], roi: "Typical payback: 84–120 months", website: "https://marriott.com" },
  { slug: "hilton", name: "Hilton", category: "Hospitality / Hotels", country: "USA", investment: "$8M+", area: "Varies by brand", outlets: "7,500+", founded: "1919", hq: "McLean, Virginia, USA", domain: "hilton.com", tagline: "World-leading hospitality", about: "Hilton is one of the largest hospitality companies in the world with 22 brands and 7,500+ properties.", why: ["Global brand & loyalty (Honors)", "Strong owner returns", "Multi-brand portfolio"], support: ["Brand standards", "Distribution", "Training"], requirements: ["Hotel-grade real estate", "$8M+ investment"], roi: "Typical payback: 84–120 months", website: "https://hilton.com" },
  { slug: "ace-hardware", name: "Ace Hardware", category: "Retail / Hardware", country: "USA", investment: "$2.7L – $1.5M", area: "8,000 – 14,000 sq.ft", outlets: "5,800+", founded: "1924", hq: "Oak Brook, Illinois, USA", domain: "acehardware.com", tagline: "The helpful place", about: "Ace Hardware is America's largest hardware cooperative with 5,800+ stores globally.", why: ["Co-op model with strong economics", "Neighbourhood positioning", "Diversified product mix"], support: ["Site selection", "Inventory", "Training"], requirements: ["Net worth $400K+, liquid $250K+"], roi: "Typical payback: 36–60 months", website: "https://acehardware.com" },
  { slug: "jan-pro", name: "Jan-Pro Cleaning", category: "Business Services / Cleaning", country: "USA", investment: "$4K – $58K", area: "Home-based", outlets: "10,000+", founded: "1991", hq: "Alpharetta, Georgia, USA", domain: "jan-pro.com", tagline: "World's #1 commercial cleaning franchise", about: "Jan-Pro is one of the world's largest commercial cleaning franchise systems with 10,000+ owner-operators.", why: ["Low-cost entry", "Recession-resilient B2B", "Recurring contracts"], support: ["Training", "Lead generation", "Contracts"], requirements: ["Owner-operator", "Liquid $4K+"], roi: "Typical payback: 12–24 months", website: "https://jan-pro.com" },
  { slug: "great-clips", name: "Great Clips", category: "Salon / Hair", country: "USA", investment: "$1.5L – $3.6L", area: "1000 – 1200 sq.ft", outlets: "4,400+", founded: "1982", hq: "Minneapolis, Minnesota, USA", domain: "greatclips.com", tagline: "America's #1 hair salon brand", about: "Great Clips is the largest hair salon brand in North America with 4,400+ salons.", why: ["Walk-in convenience model", "Cash-flow positive quickly", "Tech-led check-in"], support: ["Real estate", "Training", "Marketing"], requirements: ["Net worth $300K+, liquid $50K+"], roi: "Typical payback: 24–48 months", website: "https://greatclips.com" },
  { slug: "kumon", name: "Kumon", category: "Education / Coaching", country: "USA", investment: "$74K – $156K", area: "800 – 1500 sq.ft", outlets: "25,000+", founded: "1958", hq: "Teaneck, New Jersey, USA", domain: "kumon.com", tagline: "World's largest after-school learning brand", about: "Kumon is the world's largest after-school maths and reading program with 25,000+ centres globally.", why: ["Global category leader", "Recurring tuition revenue", "Recession-resilient"], support: ["Curriculum", "Training", "Marketing"], requirements: ["Bachelor's degree", "Liquid $70K+"], roi: "Typical payback: 24–36 months", website: "https://kumon.com" },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const usaBrands = brands.filter((b) => b.country === "USA");
export const usaLeading = usaBrands.slice(0, 4);
export const usaOpportunities = usaBrands.slice(4);
// Back-compat shims — India catalog has been removed; keep empty to avoid import errors.
export const indiaBrands: Brand[] = [];
export const indiaLeading: Brand[] = [];
export const indiaOpportunities: Brand[] = [];
