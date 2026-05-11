// Sitemap Index — returns a <sitemapindex> pointing to chunked child sitemaps + blog sitemap
// IMPORTANT: This sitemap MUST only contain URLs that api/render.js actually serves
// with HTTP 200. Otherwise Google logs them as "Not found (404)" and wastes crawl budget.
import { curatedKeywordSlugs, curatedServiceSlugs } from './programmaticSeoConfig.js';
const DOMAIN = 'https://www.franchiseleadspro.com';

// ─── Location Data (inline for serverless context) ───
const locationData = [
  { country: "United States", countryCode: "USA", states: [
    { name: "California", slug: "california", cities: [
      { name: "Los Angeles", slug: "los-angeles" }, { name: "San Francisco", slug: "san-francisco" },
      { name: "San Diego", slug: "san-diego" }, { name: "San Jose", slug: "san-jose" },
      { name: "Sacramento", slug: "sacramento" }, { name: "Fresno", slug: "fresno" },
      { name: "Oakland", slug: "oakland" }, { name: "Long Beach", slug: "long-beach" },
      { name: "Anaheim", slug: "anaheim" }, { name: "Irvine", slug: "irvine" },
      { name: "Santa Ana", slug: "santa-ana" }, { name: "Riverside", slug: "riverside" },
    ]},
    { name: "Texas", slug: "texas", cities: [
      { name: "Houston", slug: "houston" }, { name: "Dallas", slug: "dallas" },
      { name: "San Antonio", slug: "san-antonio" }, { name: "Austin", slug: "austin" },
      { name: "Fort Worth", slug: "fort-worth" }, { name: "El Paso", slug: "el-paso" },
      { name: "Arlington", slug: "arlington" }, { name: "Plano", slug: "plano" },
      { name: "Corpus Christi", slug: "corpus-christi" }, { name: "Lubbock", slug: "lubbock" },
    ]},
    { name: "Florida", slug: "florida", cities: [
      { name: "Miami", slug: "miami" }, { name: "Orlando", slug: "orlando" },
      { name: "Tampa", slug: "tampa" }, { name: "Jacksonville", slug: "jacksonville" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale" }, { name: "St. Petersburg", slug: "st-petersburg" },
      { name: "Hialeah", slug: "hialeah" }, { name: "Tallahassee", slug: "tallahassee" },
      { name: "Cape Coral", slug: "cape-coral" }, { name: "Port St. Lucie", slug: "port-st-lucie" },
    ]},
    { name: "New York", slug: "new-york", cities: [
      { name: "New York City", slug: "new-york-city" }, { name: "Buffalo", slug: "buffalo" },
      { name: "Rochester", slug: "rochester" }, { name: "Syracuse", slug: "syracuse" },
      { name: "Albany", slug: "albany" }, { name: "Yonkers", slug: "yonkers" },
    ]},
    { name: "Illinois", slug: "illinois", cities: [
      { name: "Chicago", slug: "chicago" }, { name: "Aurora", slug: "aurora" },
      { name: "Naperville", slug: "naperville" }, { name: "Rockford", slug: "rockford" },
      { name: "Joliet", slug: "joliet" }, { name: "Springfield", slug: "springfield" },
    ]},
    { name: "Pennsylvania", slug: "pennsylvania", cities: [
      { name: "Philadelphia", slug: "philadelphia" }, { name: "Pittsburgh", slug: "pittsburgh" },
      { name: "Allentown", slug: "allentown" }, { name: "Erie", slug: "erie" },
      { name: "Reading", slug: "reading" },
    ]},
    { name: "Ohio", slug: "ohio", cities: [
      { name: "Columbus", slug: "columbus" }, { name: "Cleveland", slug: "cleveland" },
      { name: "Cincinnati", slug: "cincinnati" }, { name: "Toledo", slug: "toledo" },
      { name: "Akron", slug: "akron" }, { name: "Dayton", slug: "dayton" },
    ]},
    { name: "Georgia", slug: "georgia", cities: [
      { name: "Atlanta", slug: "atlanta" }, { name: "Augusta", slug: "augusta" },
      { name: "Savannah", slug: "savannah" }, { name: "Columbus", slug: "columbus-ga" },
      { name: "Macon", slug: "macon" }, { name: "Athens", slug: "athens" },
    ]},
    { name: "North Carolina", slug: "north-carolina", cities: [
      { name: "Charlotte", slug: "charlotte" }, { name: "Raleigh", slug: "raleigh" },
      { name: "Greensboro", slug: "greensboro" }, { name: "Durham", slug: "durham" },
      { name: "Winston-Salem", slug: "winston-salem" }, { name: "Fayetteville", slug: "fayetteville" },
    ]},
    { name: "Michigan", slug: "michigan", cities: [
      { name: "Detroit", slug: "detroit" }, { name: "Grand Rapids", slug: "grand-rapids" },
      { name: "Warren", slug: "warren" }, { name: "Sterling Heights", slug: "sterling-heights" },
      { name: "Ann Arbor", slug: "ann-arbor" }, { name: "Lansing", slug: "lansing" },
    ]},
    { name: "New Jersey", slug: "new-jersey", cities: [
      { name: "Newark", slug: "newark" }, { name: "Jersey City", slug: "jersey-city" },
      { name: "Paterson", slug: "paterson" }, { name: "Elizabeth", slug: "elizabeth" },
      { name: "Trenton", slug: "trenton" },
    ]},
    { name: "Virginia", slug: "virginia", cities: [
      { name: "Virginia Beach", slug: "virginia-beach" }, { name: "Norfolk", slug: "norfolk" },
      { name: "Chesapeake", slug: "chesapeake" }, { name: "Richmond", slug: "richmond" },
      { name: "Arlington", slug: "arlington-va" },
    ]},
    { name: "Washington", slug: "washington", cities: [
      { name: "Seattle", slug: "seattle" }, { name: "Spokane", slug: "spokane" },
      { name: "Tacoma", slug: "tacoma" }, { name: "Vancouver", slug: "vancouver-wa" },
      { name: "Bellevue", slug: "bellevue" },
    ]},
    { name: "Arizona", slug: "arizona", cities: [
      { name: "Phoenix", slug: "phoenix" }, { name: "Tucson", slug: "tucson" },
      { name: "Mesa", slug: "mesa" }, { name: "Chandler", slug: "chandler" },
      { name: "Scottsdale", slug: "scottsdale" }, { name: "Gilbert", slug: "gilbert" },
      { name: "Glendale", slug: "glendale" }, { name: "Tempe", slug: "tempe" },
    ]},
    { name: "Massachusetts", slug: "massachusetts", cities: [
      { name: "Boston", slug: "boston" }, { name: "Worcester", slug: "worcester" },
      { name: "Springfield", slug: "springfield-ma" }, { name: "Cambridge", slug: "cambridge" },
      { name: "Lowell", slug: "lowell" },
    ]},
    { name: "Tennessee", slug: "tennessee", cities: [
      { name: "Nashville", slug: "nashville" }, { name: "Memphis", slug: "memphis" },
      { name: "Knoxville", slug: "knoxville" }, { name: "Chattanooga", slug: "chattanooga" },
      { name: "Clarksville", slug: "clarksville" },
    ]},
    { name: "Indiana", slug: "indiana", cities: [
      { name: "Indianapolis", slug: "indianapolis" }, { name: "Fort Wayne", slug: "fort-wayne" },
      { name: "Evansville", slug: "evansville" }, { name: "South Bend", slug: "south-bend" },
      { name: "Carmel", slug: "carmel" },
    ]},
    { name: "Missouri", slug: "missouri", cities: [
      { name: "Kansas City", slug: "kansas-city" }, { name: "St. Louis", slug: "st-louis" },
      { name: "Springfield", slug: "springfield-mo" }, { name: "Columbia", slug: "columbia-mo" },
      { name: "Independence", slug: "independence" },
    ]},
    { name: "Maryland", slug: "maryland", cities: [
      { name: "Baltimore", slug: "baltimore" }, { name: "Columbia", slug: "columbia-md" },
      { name: "Germantown", slug: "germantown" }, { name: "Silver Spring", slug: "silver-spring" },
    ]},
    { name: "Wisconsin", slug: "wisconsin", cities: [
      { name: "Milwaukee", slug: "milwaukee" }, { name: "Madison", slug: "madison" },
      { name: "Green Bay", slug: "green-bay" }, { name: "Kenosha", slug: "kenosha" },
    ]},
    { name: "Colorado", slug: "colorado", cities: [
      { name: "Denver", slug: "denver" }, { name: "Colorado Springs", slug: "colorado-springs" },
      { name: "Aurora", slug: "aurora-co" }, { name: "Fort Collins", slug: "fort-collins" },
      { name: "Boulder", slug: "boulder" },
    ]},
    { name: "Minnesota", slug: "minnesota", cities: [
      { name: "Minneapolis", slug: "minneapolis" }, { name: "St. Paul", slug: "st-paul" },
      { name: "Rochester", slug: "rochester-mn" }, { name: "Bloomington", slug: "bloomington" },
    ]},
    { name: "South Carolina", slug: "south-carolina", cities: [
      { name: "Charleston", slug: "charleston" }, { name: "Columbia", slug: "columbia-sc" },
      { name: "Greenville", slug: "greenville" }, { name: "Myrtle Beach", slug: "myrtle-beach" },
    ]},
    { name: "Alabama", slug: "alabama", cities: [
      { name: "Birmingham", slug: "birmingham" }, { name: "Montgomery", slug: "montgomery" },
      { name: "Huntsville", slug: "huntsville" }, { name: "Mobile", slug: "mobile" },
    ]},
    { name: "Louisiana", slug: "louisiana", cities: [
      { name: "New Orleans", slug: "new-orleans" }, { name: "Baton Rouge", slug: "baton-rouge" },
      { name: "Shreveport", slug: "shreveport" }, { name: "Lafayette", slug: "lafayette" },
    ]},
    { name: "Kentucky", slug: "kentucky", cities: [
      { name: "Louisville", slug: "louisville" }, { name: "Lexington", slug: "lexington" },
      { name: "Bowling Green", slug: "bowling-green" },
    ]},
    { name: "Oregon", slug: "oregon", cities: [
      { name: "Portland", slug: "portland" }, { name: "Salem", slug: "salem" },
      { name: "Eugene", slug: "eugene" }, { name: "Bend", slug: "bend" },
    ]},
    { name: "Oklahoma", slug: "oklahoma", cities: [
      { name: "Oklahoma City", slug: "oklahoma-city" }, { name: "Tulsa", slug: "tulsa" },
      { name: "Norman", slug: "norman" },
    ]},
    { name: "Connecticut", slug: "connecticut", cities: [
      { name: "Bridgeport", slug: "bridgeport" }, { name: "Hartford", slug: "hartford" },
      { name: "New Haven", slug: "new-haven" }, { name: "Stamford", slug: "stamford" },
    ]},
    { name: "Utah", slug: "utah", cities: [
      { name: "Salt Lake City", slug: "salt-lake-city" }, { name: "Provo", slug: "provo" },
      { name: "Ogden", slug: "ogden" }, { name: "St. George", slug: "st-george" },
    ]},
    { name: "Iowa", slug: "iowa", cities: [
      { name: "Des Moines", slug: "des-moines" }, { name: "Cedar Rapids", slug: "cedar-rapids" },
      { name: "Davenport", slug: "davenport" },
    ]},
    { name: "Nevada", slug: "nevada", cities: [
      { name: "Las Vegas", slug: "las-vegas" }, { name: "Henderson", slug: "henderson" },
      { name: "Reno", slug: "reno" }, { name: "North Las Vegas", slug: "north-las-vegas" },
    ]},
    { name: "Arkansas", slug: "arkansas", cities: [
      { name: "Little Rock", slug: "little-rock" }, { name: "Fort Smith", slug: "fort-smith" },
      { name: "Fayetteville", slug: "fayetteville-ar" },
    ]},
    { name: "Mississippi", slug: "mississippi", cities: [
      { name: "Jackson", slug: "jackson" }, { name: "Gulfport", slug: "gulfport" },
      { name: "Hattiesburg", slug: "hattiesburg" },
    ]},
    { name: "Kansas", slug: "kansas", cities: [
      { name: "Wichita", slug: "wichita" }, { name: "Overland Park", slug: "overland-park" },
      { name: "Kansas City", slug: "kansas-city-ks" }, { name: "Topeka", slug: "topeka" },
    ]},
    { name: "New Mexico", slug: "new-mexico", cities: [
      { name: "Albuquerque", slug: "albuquerque" }, { name: "Las Cruces", slug: "las-cruces" },
      { name: "Santa Fe", slug: "santa-fe" },
    ]},
    { name: "Nebraska", slug: "nebraska", cities: [
      { name: "Omaha", slug: "omaha" }, { name: "Lincoln", slug: "lincoln" },
    ]},
    { name: "Idaho", slug: "idaho", cities: [
      { name: "Boise", slug: "boise" }, { name: "Meridian", slug: "meridian" },
      { name: "Nampa", slug: "nampa" },
    ]},
    { name: "Hawaii", slug: "hawaii", cities: [
      { name: "Honolulu", slug: "honolulu" },
    ]},
    { name: "West Virginia", slug: "west-virginia", cities: [
      { name: "Charleston", slug: "charleston-wv" }, { name: "Huntington", slug: "huntington-wv" },
    ]},
    { name: "New Hampshire", slug: "new-hampshire", cities: [
      { name: "Manchester", slug: "manchester-nh" }, { name: "Nashua", slug: "nashua" },
    ]},
    { name: "Maine", slug: "maine", cities: [
      { name: "Portland", slug: "portland-me" },
    ]},
    { name: "Montana", slug: "montana", cities: [
      { name: "Billings", slug: "billings" }, { name: "Missoula", slug: "missoula" },
    ]},
    { name: "Delaware", slug: "delaware", cities: [
      { name: "Wilmington", slug: "wilmington" }, { name: "Dover", slug: "dover" },
    ]},
    { name: "South Dakota", slug: "south-dakota", cities: [
      { name: "Sioux Falls", slug: "sioux-falls" },
    ]},
    { name: "North Dakota", slug: "north-dakota", cities: [
      { name: "Fargo", slug: "fargo" }, { name: "Bismarck", slug: "bismarck" },
    ]},
    { name: "Alaska", slug: "alaska", cities: [
      { name: "Anchorage", slug: "anchorage" },
    ]},
    { name: "Vermont", slug: "vermont", cities: [
      { name: "Burlington", slug: "burlington" },
    ]},
    { name: "Wyoming", slug: "wyoming", cities: [
      { name: "Cheyenne", slug: "cheyenne" },
    ]},
    { name: "Rhode Island", slug: "rhode-island", cities: [
      { name: "Providence", slug: "providence" },
    ]},
    { name: "Washington D.C.", slug: "washington-dc", cities: [
      { name: "Washington D.C.", slug: "washington-dc" },
    ]},
  ]},
  { country: "India", countryCode: "IN", states: [
    { name: "Maharashtra", slug: "maharashtra", cities: [
      { name: "Mumbai", slug: "mumbai" }, { name: "Pune", slug: "pune" },
      { name: "Nagpur", slug: "nagpur" }, { name: "Nashik", slug: "nashik" },
      { name: "Thane", slug: "thane" }, { name: "Aurangabad", slug: "aurangabad" },
    ]},
    { name: "Delhi", slug: "delhi", cities: [
      { name: "New Delhi", slug: "new-delhi" }, { name: "North Delhi", slug: "north-delhi" },
      { name: "South Delhi", slug: "south-delhi" }, { name: "East Delhi", slug: "east-delhi" },
      { name: "West Delhi", slug: "west-delhi" },
    ]},
    { name: "Karnataka", slug: "karnataka", cities: [
      { name: "Bangalore", slug: "bangalore" }, { name: "Mysore", slug: "mysore" },
      { name: "Hubli", slug: "hubli" }, { name: "Mangalore", slug: "mangalore" },
    ]},
    { name: "Tamil Nadu", slug: "tamil-nadu", cities: [
      { name: "Chennai", slug: "chennai" }, { name: "Coimbatore", slug: "coimbatore" },
      { name: "Madurai", slug: "madurai" }, { name: "Tiruchirappalli", slug: "tiruchirappalli" },
      { name: "Salem", slug: "salem-tn" },
    ]},
    { name: "Gujarat", slug: "gujarat", cities: [
      { name: "Ahmedabad", slug: "ahmedabad" }, { name: "Surat", slug: "surat" },
      { name: "Vadodara", slug: "vadodara" }, { name: "Rajkot", slug: "rajkot" },
    ]},
    { name: "West Bengal", slug: "west-bengal", cities: [
      { name: "Kolkata", slug: "kolkata" }, { name: "Howrah", slug: "howrah" },
      { name: "Durgapur", slug: "durgapur" }, { name: "Asansol", slug: "asansol" },
      { name: "Siliguri", slug: "siliguri" },
    ]},
    { name: "Rajasthan", slug: "rajasthan", cities: [
      { name: "Jaipur", slug: "jaipur" }, { name: "Jodhpur", slug: "jodhpur" },
      { name: "Udaipur", slug: "udaipur" }, { name: "Kota", slug: "kota" },
    ]},
    { name: "Uttar Pradesh", slug: "uttar-pradesh", cities: [
      { name: "Lucknow", slug: "lucknow" }, { name: "Kanpur", slug: "kanpur" },
      { name: "Noida", slug: "noida" }, { name: "Agra", slug: "agra" },
      { name: "Varanasi", slug: "varanasi" }, { name: "Prayagraj", slug: "prayagraj" },
      { name: "Ghaziabad", slug: "ghaziabad" },
    ]},
    { name: "Telangana", slug: "telangana", cities: [
      { name: "Hyderabad", slug: "hyderabad" }, { name: "Warangal", slug: "warangal" },
      { name: "Nizamabad", slug: "nizamabad" },
    ]},
    { name: "Madhya Pradesh", slug: "madhya-pradesh", cities: [
      { name: "Indore", slug: "indore" }, { name: "Bhopal", slug: "bhopal" },
      { name: "Jabalpur", slug: "jabalpur" }, { name: "Gwalior", slug: "gwalior" },
    ]},
    { name: "Kerala", slug: "kerala", cities: [
      { name: "Kochi", slug: "kochi" }, { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
      { name: "Kozhikode", slug: "kozhikode" }, { name: "Thrissur", slug: "thrissur" },
    ]},
    { name: "Punjab", slug: "punjab", cities: [
      { name: "Ludhiana", slug: "ludhiana" }, { name: "Amritsar", slug: "amritsar" },
      { name: "Jalandhar", slug: "jalandhar" }, { name: "Chandigarh", slug: "chandigarh" },
    ]},
    { name: "Haryana", slug: "haryana", cities: [
      { name: "Gurugram", slug: "gurugram" }, { name: "Faridabad", slug: "faridabad" },
      { name: "Panipat", slug: "panipat" }, { name: "Ambala", slug: "ambala" },
    ]},
    { name: "Bihar", slug: "bihar", cities: [
      { name: "Patna", slug: "patna" }, { name: "Gaya", slug: "gaya" },
      { name: "Muzaffarpur", slug: "muzaffarpur" },
    ]},
    { name: "Odisha", slug: "odisha", cities: [
      { name: "Bhubaneswar", slug: "bhubaneswar" }, { name: "Cuttack", slug: "cuttack" },
    ]},
    { name: "Andhra Pradesh", slug: "andhra-pradesh", cities: [
      { name: "Visakhapatnam", slug: "visakhapatnam" }, { name: "Vijayawada", slug: "vijayawada" },
      { name: "Guntur", slug: "guntur" }, { name: "Tirupati", slug: "tirupati" },
    ]},
    { name: "Assam", slug: "assam", cities: [
      { name: "Guwahati", slug: "guwahati" }, { name: "Silchar", slug: "silchar" },
    ]},
    { name: "Jharkhand", slug: "jharkhand", cities: [
      { name: "Ranchi", slug: "ranchi" }, { name: "Jamshedpur", slug: "jamshedpur" },
      { name: "Dhanbad", slug: "dhanbad" },
    ]},
    { name: "Chhattisgarh", slug: "chhattisgarh", cities: [
      { name: "Raipur", slug: "raipur" }, { name: "Bilaspur", slug: "bilaspur" },
    ]},
    { name: "Uttarakhand", slug: "uttarakhand", cities: [
      { name: "Dehradun", slug: "dehradun" }, { name: "Haridwar", slug: "haridwar" },
    ]},
    { name: "Goa", slug: "goa", cities: [
      { name: "Panaji", slug: "panaji" }, { name: "Margao", slug: "margao" },
    ]},
  ]},
  { country: "United Kingdom", countryCode: "UK", states: [
    { name: "England", slug: "england", cities: [
      { name: "London", slug: "london" }, { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham-uk" }, { name: "Liverpool", slug: "liverpool" },
      { name: "Leeds", slug: "leeds" }, { name: "Bristol", slug: "bristol" },
      { name: "Sheffield", slug: "sheffield" }, { name: "Newcastle", slug: "newcastle" },
      { name: "Nottingham", slug: "nottingham" }, { name: "Southampton", slug: "southampton" },
    ]},
    { name: "Scotland", slug: "scotland", cities: [
      { name: "Edinburgh", slug: "edinburgh" }, { name: "Glasgow", slug: "glasgow" },
      { name: "Aberdeen", slug: "aberdeen" }, { name: "Dundee", slug: "dundee" },
    ]},
    { name: "Wales", slug: "wales", cities: [
      { name: "Cardiff", slug: "cardiff" }, { name: "Swansea", slug: "swansea" },
      { name: "Newport", slug: "newport" },
    ]},
    { name: "Northern Ireland", slug: "northern-ireland", cities: [
      { name: "Belfast", slug: "belfast" }, { name: "Derry", slug: "derry" },
    ]},
  ]},
  { country: "Canada", countryCode: "CA", states: [
    { name: "Ontario", slug: "ontario", cities: [
      { name: "Toronto", slug: "toronto" }, { name: "Ottawa", slug: "ottawa" },
      { name: "Mississauga", slug: "mississauga" }, { name: "Hamilton", slug: "hamilton" },
      { name: "Brampton", slug: "brampton" }, { name: "London", slug: "london-ca" },
    ]},
    { name: "British Columbia", slug: "british-columbia", cities: [
      { name: "Vancouver", slug: "vancouver" }, { name: "Victoria", slug: "victoria" },
      { name: "Surrey", slug: "surrey" }, { name: "Burnaby", slug: "burnaby" },
    ]},
    { name: "Quebec", slug: "quebec", cities: [
      { name: "Montreal", slug: "montreal" }, { name: "Quebec City", slug: "quebec-city" },
      { name: "Laval", slug: "laval" }, { name: "Gatineau", slug: "gatineau" },
    ]},
    { name: "Alberta", slug: "alberta", cities: [
      { name: "Calgary", slug: "calgary" }, { name: "Edmonton", slug: "edmonton" },
      { name: "Red Deer", slug: "red-deer" },
    ]},
    { name: "Manitoba", slug: "manitoba", cities: [
      { name: "Winnipeg", slug: "winnipeg" },
    ]},
    { name: "Saskatchewan", slug: "saskatchewan", cities: [
      { name: "Saskatoon", slug: "saskatoon" }, { name: "Regina", slug: "regina" },
    ]},
    { name: "Nova Scotia", slug: "nova-scotia", cities: [
      { name: "Halifax", slug: "halifax" },
    ]},
  ]},
  { country: "Australia", countryCode: "AU", states: [
    { name: "New South Wales", slug: "new-south-wales", cities: [
      { name: "Sydney", slug: "sydney" }, { name: "Newcastle", slug: "newcastle-au" },
      { name: "Wollongong", slug: "wollongong" },
    ]},
    { name: "Victoria", slug: "victoria", cities: [
      { name: "Melbourne", slug: "melbourne" }, { name: "Geelong", slug: "geelong" },
    ]},
    { name: "Queensland", slug: "queensland", cities: [
      { name: "Brisbane", slug: "brisbane" }, { name: "Gold Coast", slug: "gold-coast" },
      { name: "Cairns", slug: "cairns" }, { name: "Townsville", slug: "townsville" },
    ]},
    { name: "Western Australia", slug: "western-australia", cities: [
      { name: "Perth", slug: "perth" }, { name: "Fremantle", slug: "fremantle" },
    ]},
    { name: "South Australia", slug: "south-australia", cities: [
      { name: "Adelaide", slug: "adelaide" },
    ]},
    { name: "Tasmania", slug: "tasmania", cities: [
      { name: "Hobart", slug: "hobart" },
    ]},
  ]},
  { country: "United Arab Emirates", countryCode: "AE", states: [
    { name: "Dubai", slug: "dubai", cities: [
      { name: "Dubai City", slug: "dubai-city" }, { name: "Deira", slug: "deira" },
      { name: "Jumeirah", slug: "jumeirah" }, { name: "Business Bay", slug: "business-bay" },
    ]},
    { name: "Abu Dhabi", slug: "abu-dhabi", cities: [
      { name: "Abu Dhabi City", slug: "abu-dhabi-city" }, { name: "Al Ain", slug: "al-ain" },
    ]},
    { name: "Sharjah", slug: "sharjah", cities: [
      { name: "Sharjah City", slug: "sharjah-city" },
    ]},
  ]},
  { country: "Kuwait", countryCode: "KW", states: [
    { name: "Kuwait City", slug: "kuwait-city", cities: [
      { name: "Kuwait City", slug: "kuwait-city-metro" },
      { name: "Hawalli", slug: "hawalli" },
      { name: "Salmiya", slug: "salmiya" },
    ]},
  ]},
];

const broadMarketingKeywords = [
  "Franchise Lead Generation", "Franchise Marketing", "Franchise Digital Marketing",
  "Franchise SEO Services", "Franchise Social Media Marketing", "Franchise PPC Advertising",
  "Franchise Brand Development", "Franchise Content Marketing", "Franchise Email Marketing",
  "Franchise Website Development", "Franchise Consulting Services", "Franchise Sales Funnel",
  "Franchise Advertising Agency", "Franchise Growth Strategy", "LinkedIn Franchise Marketing",
  "Buy Franchise Leads", "Franchise Buyer Leads", "Qualified Franchise Leads",
  "Franchise Lead Nurturing", "Franchise Conversion Optimization", "Franchise App Development",
  "IT Services for Franchises", "Franchise CRM Solutions", "Franchise Technology Consulting",
];

const seoKeywords = [
  "franchise lead generation", "franchise leads", "buy franchise leads",
  "franchise marketing", "franchise advertising", "franchise development",
  "franchise consulting", "franchise SEO", "franchise digital marketing",
  "franchise social media", "franchise PPC", "franchise branding",
  "franchise buyer leads", "franchise investor leads", "franchise sales",
  "franchise growth", "franchise expansion", "franchise recruitment",
  "franchise website design", "franchise online marketing",
  "franchise lead generation company", "franchise marketing agency",
  "franchise advertising agency", "best franchise leads",
  "qualified franchise leads", "exclusive franchise leads",
  "franchise lead generation services", "franchise marketing services",
  "franchise consultant leads", "franchise opportunity leads",
  "franchise app development", "franchise IT services",
  "franchise website development", "franchise technology solutions",
  "IT outsourcing for franchises", "franchise CRM implementation",
];

function slugify(str) {
  return str.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// ─── Generate ALL URLs ───
function generateAllUrls() {
  const currentDate = new Date().toISOString().split('T')[0];
  const urls = [];

  // Core pages
  const corePages = [
    { path: '/', priority: '1.00', changefreq: 'weekly' },
    { path: '/about', priority: '0.90', changefreq: 'monthly' },
    { path: '/services', priority: '0.95', changefreq: 'weekly' },
    { path: '/contact', priority: '0.80', changefreq: 'monthly' },
    { path: '/blog', priority: '0.85', changefreq: 'daily' },
    { path: '/testimonials', priority: '0.80', changefreq: 'weekly' },
    { path: '/franchise-leads-india', priority: '0.95', changefreq: 'weekly' },
    { path: '/franchise-leads-usa', priority: '0.95', changefreq: 'weekly' },
    { path: '/franchise-leads-uk', priority: '0.90', changefreq: 'weekly' },
    { path: '/franchise-leads-canada', priority: '0.90', changefreq: 'weekly' },
    { path: '/franchise-leads-australia', priority: '0.90', changefreq: 'weekly' },
    { path: '/franchise-leads-dubai', priority: '0.90', changefreq: 'weekly' },
    { path: '/franchise-leads-kuwait', priority: '0.85', changefreq: 'weekly' },
    { path: '/buy-franchise-leads', priority: '0.90', changefreq: 'weekly' },
    { path: '/digital-marketing', priority: '0.85', changefreq: 'weekly' },
    { path: '/legal-terms/privacy-policy', priority: '0.40', changefreq: 'monthly' },
    { path: '/legal-terms/refund-satisfaction-guarantee-policy', priority: '0.40', changefreq: 'monthly' },
  ];
  corePages.forEach(p => {
    urls.push({ loc: `${DOMAIN}${p.path}`, lastmod: currentDate, changefreq: p.changefreq, priority: p.priority });
  });

  // Location pages — aggressive pruning. Diagnosis (May 2026): 984 URLs stuck
  // "Crawled – currently not indexed" because templated city/service pages were
  // judged low-value at scale. We now publish only:
  //   • country pages (all)
  //   • state + top-3 city pages (USA, India only)
  // Everything else returns noindex via api/render.js.
  const LOC_MAX_CITIES_PRIMARY = 3;
  locationData.forEach(country => {
    const cc = country.countryCode.toLowerCase();
    const isPrimary = ['usa', 'in'].includes(cc);
    urls.push({ loc: `${DOMAIN}/locations/${cc}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.80' });
    if (!isPrimary) return;
    country.states.forEach(state => {
      urls.push({ loc: `${DOMAIN}/locations/${cc}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });
      state.cities.slice(0, LOC_MAX_CITIES_PRIMARY).forEach(city => {
        urls.push({ loc: `${DOMAIN}/locations/${cc}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.70' });
      });
    });
  });

  // Keyword pages — ONLY curated slugs that api/render.js serves with 200 OK
  curatedKeywordSlugs.forEach(slug => {
    urls.push({ loc: `${DOMAIN}/services/${slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.70' });
  });

  // Service + location pages — state-level only, primary markets only.
  // City-level service pages are excluded (they were the main source of
  // "Crawled – currently not indexed").
  curatedServiceSlugs.forEach(serviceSlug => {
    locationData.forEach(country => {
      const cc = country.countryCode.toLowerCase();
      if (!['usa', 'in'].includes(cc)) return;
      country.states.forEach(state => {
        urls.push({ loc: `${DOMAIN}/${serviceSlug}/${cc}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.80' });
      });
    });
  });

  return urls;
}

// ─── Chunk helper ───
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const CHUNK_SIZE = 10000;

// ─── Build sitemap index XML ───
function buildSitemapIndex() {
  const allUrls = generateAllUrls();
  const chunks = chunkArray(allUrls, CHUNK_SIZE);
  const currentDate = new Date().toISOString().split('T')[0];
  
  const entries = [];
  for (let i = 1; i <= chunks.length; i++) {
    entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemaps/sitemap-${i}.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  }
  // Blog sitemap
  entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemap-blog.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);

  console.log(`Sitemap index: ${chunks.length} chunks, ${allUrls.length} total URLs`);

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</sitemapindex>`;
}

// ─── Build a single chunk sitemap ───
function buildChunkSitemap(chunkIndex) {
  const allUrls = generateAllUrls();
  const chunks = chunkArray(allUrls, CHUNK_SIZE);
  
  if (chunkIndex < 1 || chunkIndex > chunks.length) {
    return null;
  }

  const urls = chunks[chunkIndex - 1];
  const items = urls.map(u =>
    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
}

export default function handler(req, res) {
  try {
    // Check if a chunk is requested via query param
    const chunk = parseInt(req.query.chunk, 10);
    
    if (chunk && !isNaN(chunk)) {
      const xml = buildChunkSitemap(chunk);
      if (!xml) {
        res.status(404).send('Sitemap chunk not found');
        return;
      }
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
      res.status(200).send(xml);
      return;
    }

    // Default: return sitemap index
    const xml = buildSitemapIndex();
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.status(200).send(xml);
  } catch (err) {
    console.error('Sitemap generation error:', err);
    res.status(500).send('Error generating sitemap');
  }
}
