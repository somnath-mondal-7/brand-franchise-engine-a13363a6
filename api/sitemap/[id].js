// Serverless function to generate sitemap chunks on-the-fly
// This eliminates build-time dependency and guarantees all chunks are always available

const DOMAIN = 'https://www.franchiseleadspro.com';

// ─── Location Data (inline for serverless context) ───
// We inline a minimal version of the location data to avoid import issues in serverless

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
      { name: "Mississauga", slug: "mississauga" }, { name: "Brampton", slug: "brampton" },
      { name: "Hamilton", slug: "hamilton" }, { name: "London", slug: "london-ca" },
    ]},
    { name: "British Columbia", slug: "british-columbia", cities: [
      { name: "Vancouver", slug: "vancouver" }, { name: "Surrey", slug: "surrey" },
      { name: "Victoria", slug: "victoria" }, { name: "Burnaby", slug: "burnaby" },
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
      { name: "Winnipeg", slug: "winnipeg" }, { name: "Brandon", slug: "brandon" },
    ]},
    { name: "Saskatchewan", slug: "saskatchewan", cities: [
      { name: "Saskatoon", slug: "saskatoon" }, { name: "Regina", slug: "regina" },
    ]},
    { name: "Nova Scotia", slug: "nova-scotia", cities: [
      { name: "Halifax", slug: "halifax" },
    ]},
    { name: "New Brunswick", slug: "new-brunswick", cities: [
      { name: "Moncton", slug: "moncton" }, { name: "Saint John", slug: "saint-john" },
    ]},
  ]},
  { country: "Australia", countryCode: "AU", states: [
    { name: "New South Wales", slug: "new-south-wales", cities: [
      { name: "Sydney", slug: "sydney" }, { name: "Newcastle", slug: "newcastle-au" },
      { name: "Wollongong", slug: "wollongong" },
    ]},
    { name: "Victoria", slug: "victoria", cities: [
      { name: "Melbourne", slug: "melbourne" }, { name: "Geelong", slug: "geelong" },
      { name: "Ballarat", slug: "ballarat" },
    ]},
    { name: "Queensland", slug: "queensland", cities: [
      { name: "Brisbane", slug: "brisbane" }, { name: "Gold Coast", slug: "gold-coast" },
      { name: "Sunshine Coast", slug: "sunshine-coast" }, { name: "Cairns", slug: "cairns" },
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
    { name: "Australian Capital Territory", slug: "act", cities: [
      { name: "Canberra", slug: "canberra" },
    ]},
  ]},
  { country: "UAE", countryCode: "AE", states: [
    { name: "Dubai", slug: "dubai", cities: [
      { name: "Dubai Marina", slug: "dubai-marina" }, { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Business Bay", slug: "business-bay" }, { name: "Jumeirah", slug: "jumeirah" },
      { name: "Deira", slug: "deira" },
    ]},
    { name: "Abu Dhabi", slug: "abu-dhabi", cities: [
      { name: "Abu Dhabi City", slug: "abu-dhabi-city" }, { name: "Al Ain", slug: "al-ain" },
    ]},
    { name: "Sharjah", slug: "sharjah", cities: [
      { name: "Sharjah City", slug: "sharjah-city" },
    ]},
    { name: "Ajman", slug: "ajman", cities: [
      { name: "Ajman City", slug: "ajman-city" },
    ]},
  ]},
  { country: "Kuwait", countryCode: "KW", states: [
    { name: "Kuwait City", slug: "kuwait-city", cities: [
      { name: "Kuwait City", slug: "kuwait-city" }, { name: "Salmiya", slug: "salmiya" },
      { name: "Hawalli", slug: "hawalli" }, { name: "Farwaniya", slug: "farwaniya" },
    ]},
    { name: "Ahmadi", slug: "ahmadi", cities: [
      { name: "Ahmadi", slug: "ahmadi" }, { name: "Fahaheel", slug: "fahaheel" },
    ]},
    { name: "Jahra", slug: "jahra", cities: [
      { name: "Jahra", slug: "jahra-city" },
    ]},
  ]},
];

const broadMarketingKeywords = [
  "franchise consulting", "franchise development", "franchisee recruitment",
  "franchise matchmaking", "franchise expansion", "franchise marketing",
  "franchise lead generation", "franchise lead generation agency", "franchise leads",
  "buy franchise leads", "qualified franchise leads", "franchise buyer leads",
  "franchise investor leads", "exclusive franchise leads", "verified franchise leads",
  "premium franchise leads", "franchise prospect generation",
  "franchise marketing agency", "franchise digital marketing agency",
  "franchise advertising agency", "franchise branding agency", "franchise growth agency",
  "franchise seo agency", "franchise ppc agency", "franchise social media agency",
  "franchise digital marketing", "franchise seo", "franchise ppc management",
  "franchise social media marketing", "franchise email marketing",
  "franchise content marketing", "franchise video marketing",
  "franchise online advertising", "franchise google ads", "franchise facebook ads",
  "franchise business development", "franchise sales consulting",
  "franchise growth strategy", "franchise expansion planning",
  "franchise territory development", "franchise market research",
  "franchise competitive analysis", "franchise feasibility study",
  "franchise operations consulting", "franchise training programs",
  "franchise support services", "franchise management consulting",
  "franchise performance optimization",
  "franchise legal services", "franchise funding solutions", "franchise financing help",
  "franchise business plan", "franchise roi analysis",
  "franchise branding services", "franchise website design",
  "franchise reputation management", "franchise public relations",
  "master franchise development", "multi unit franchise consulting",
  "franchise resale services", "franchise broker services",
  "international franchise consulting", "franchise conversion consulting",
  "franchise turnaround consulting",
];

const seoKeywords = [
  "best franchise consultant", "franchise business consultant",
  "franchise consultant near me", "franchise development company",
  "franchise startup consultant", "how to franchise my business",
  "franchise your business", "franchise opportunity", "buy a franchise",
  "franchise investment", "franchise cost", "franchise fee", "franchise roi",
  "franchise success rate", "franchise business model", "franchise agreement",
  "franchise disclosure document", "franchise territory", "master franchise",
  "area developer franchise", "multi unit franchise", "franchise resale",
  "franchise broker", "franchise attorney", "franchise funding", "franchise loans",
  "SBA franchise loan", "franchise financing", "franchise marketing agency",
  "franchise digital marketing", "franchise seo", "franchise ppc",
  "franchise social media", "franchise advertising", "franchise branding",
  "franchise lead generation company", "qualified franchise leads",
  "franchise buyer leads", "franchise investor leads", "franchise prospect",
  "franchise inquiry", "franchise sales", "franchise development services",
  "franchise growth strategy", "franchise expansion planning",
  "best franchise lead generation agency", "top franchise marketing company",
  "franchise lead generation services", "franchise marketing experts",
  "franchise marketing consultants", "best franchise marketing agency in usa",
  "franchise marketing agency usa", "franchise marketing agency uk",
  "best franchise digital marketing agency", "franchise lead generation usa",
  "franchise lead generation uk", "franchise lead generation india",
  "franchise lead generation australia", "franchise lead generation canada",
  "franchise lead generation dubai", "how to get franchise leads",
  "how to generate franchise leads", "franchise lead generation strategies",
  "franchise lead generation tips", "franchise marketing strategies",
  "franchise online marketing", "franchise brand development",
  "franchise sales funnel", "franchise conversion optimization",
  "franchise appointment setting", "franchise discovery day marketing",
  "franchise recruitment marketing", "franchise awareness campaigns",
  "franchise local seo", "franchise google my business",
  "franchise review management", "franchise email campaigns",
  "franchise landing pages", "franchise website optimization",
  "franchise pay per click", "franchise retargeting ads",
  "franchise influencer marketing", "franchise trade show marketing",
  "franchise content strategy", "franchise blog writing services",
  "franchise press release distribution",
];

// ─── URL Generation ───

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function generateAllUrls() {
  const currentDate = new Date().toISOString().split('T')[0];
  const urls = [];

  // Core pages
  const corePages = [
    { path: '/', priority: '1.00', freq: 'weekly' },
    { path: '/about', priority: '0.90', freq: 'monthly' },
    { path: '/services', priority: '0.95', freq: 'weekly' },
    { path: '/contact', priority: '0.80', freq: 'monthly' },
    { path: '/blog', priority: '0.85', freq: 'daily' },
    { path: '/testimonials', priority: '0.80', freq: 'weekly' },
    { path: '/franchise-leads-india', priority: '0.95', freq: 'weekly' },
    { path: '/franchise-leads-usa', priority: '0.95', freq: 'weekly' },
    { path: '/franchise-leads-uk', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-canada', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-australia', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-dubai', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-kuwait', priority: '0.85', freq: 'weekly' },
    { path: '/buy-franchise-leads', priority: '0.90', freq: 'weekly' },
    { path: '/digital-marketing', priority: '0.85', freq: 'weekly' },
    { path: '/legal-terms/privacy-policy', priority: '0.40', freq: 'monthly' },
    { path: '/legal-terms/refund-satisfaction-guarantee-policy', priority: '0.40', freq: 'monthly' },
  ];
  corePages.forEach(p => {
    urls.push({ loc: `${DOMAIN}${p.path}`, lastmod: currentDate, changefreq: p.freq, priority: p.priority });
  });

  // Location pages
  locationData.forEach(country => {
    const cc = country.countryCode.toLowerCase();
    urls.push({ loc: `${DOMAIN}/locations/${cc}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.80' });
    country.states.forEach(state => {
      urls.push({ loc: `${DOMAIN}/locations/${cc}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });
      state.cities.forEach(city => {
        urls.push({ loc: `${DOMAIN}/locations/${cc}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.70' });
      });
    });
  });

  // Keyword pages
  seoKeywords.forEach(kw => {
    urls.push({ loc: `${DOMAIN}/services/${slugify(kw)}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.70' });
  });

  // Service + location pages
  broadMarketingKeywords.forEach(service => {
    const serviceSlug = slugify(service);
    locationData.forEach(country => {
      const cc = country.countryCode.toLowerCase();
      const isPrimary = ['usa', 'in'].includes(cc);
      const basePriority = isPrimary ? 0.85 : 0.75;
      country.states.forEach(state => {
        urls.push({ loc: `${DOMAIN}/${serviceSlug}/${cc}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: basePriority.toFixed(2) });
        state.cities.forEach(city => {
          urls.push({ loc: `${DOMAIN}/${serviceSlug}/${cc}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: (basePriority - 0.05).toFixed(2) });
        });
      });
    });
  });

  return urls;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function buildSitemapXml(urls) {
  const items = urls.map(u =>
    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
}

// Cache the generated chunks
let cachedChunks = null;

function getChunks() {
  if (!cachedChunks) {
    const allUrls = generateAllUrls();
    cachedChunks = chunk(allUrls, 10000);
  }
  return cachedChunks;
}

export default function handler(req, res) {
  try {
    const { id } = req.query;
    const chunkIndex = parseInt(id, 10) - 1;
    const chunks = getChunks();

    if (isNaN(chunkIndex) || chunkIndex < 0 || chunkIndex >= chunks.length) {
      res.status(404).send('Sitemap not found');
      return;
    }

    const xml = buildSitemapXml(chunks[chunkIndex]);

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    res.status(200).send(xml);
  } catch (err) {
    console.error('Sitemap generation error:', err);
    res.status(500).send('Error generating sitemap');
  }
}
