// Comprehensive location data for SEO pages - FULL COVERAGE
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

// FULL LOCATION DATA - Covering all major markets
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
          { name: "Sacramento", slug: "sacramento", population: 524943 },
          { name: "Fresno", slug: "fresno", population: 542107 },
          { name: "Oakland", slug: "oakland", population: 433031 },
          { name: "Long Beach", slug: "long-beach", population: 466742 },
          { name: "Anaheim", slug: "anaheim", population: 350365 },
          { name: "Irvine", slug: "irvine", population: 307670 },
          { name: "Santa Ana", slug: "santa-ana", population: 309441 },
          { name: "Riverside", slug: "riverside", population: 314998 },
          { name: "Bakersfield", slug: "bakersfield", population: 403455 },
          { name: "Stockton", slug: "stockton", population: 320804 },
          { name: "Modesto", slug: "modesto", population: 218464 },
          { name: "Pasadena", slug: "pasadena", population: 138699 },
          { name: "Santa Clarita", slug: "santa-clarita", population: 228673 },
          { name: "Ontario", slug: "ontario-ca", population: 175265 },
          { name: "Rancho Cucamonga", slug: "rancho-cucamonga", population: 177603 },
          { name: "Fontana", slug: "fontana", population: 214547 },
        ]
      },
      {
        name: "Texas",
        slug: "texas",
        cities: [
          { name: "Houston", slug: "houston", population: 2320268 },
          { name: "Dallas", slug: "dallas", population: 1343573 },
          { name: "San Antonio", slug: "san-antonio", population: 1547253 },
          { name: "Austin", slug: "austin", population: 978908 },
          { name: "Fort Worth", slug: "fort-worth", population: 918915 },
          { name: "El Paso", slug: "el-paso", population: 678815 },
          { name: "Arlington", slug: "arlington", population: 398854 },
          { name: "Plano", slug: "plano", population: 287677 },
          { name: "Irving", slug: "irving", population: 256684 },
          { name: "Frisco", slug: "frisco", population: 200509 },
          { name: "McKinney", slug: "mckinney", population: 199177 },
          { name: "Corpus Christi", slug: "corpus-christi", population: 317863 },
          { name: "Lubbock", slug: "lubbock", population: 263648 },
          { name: "Amarillo", slug: "amarillo", population: 200393 },
          { name: "Round Rock", slug: "round-rock", population: 133372 },
          { name: "Denton", slug: "denton", population: 139869 },
          { name: "Midland", slug: "midland", population: 132524 },
          { name: "The Woodlands", slug: "the-woodlands", population: 114436 },
          { name: "Sugar Land", slug: "sugar-land", population: 111026 },
          { name: "Katy", slug: "katy", population: 21894 },
        ]
      },
      {
        name: "New York",
        slug: "new-york",
        cities: [
          { name: "New York City", slug: "new-york-city", population: 8336817 },
          { name: "Buffalo", slug: "buffalo", population: 278349 },
          { name: "Rochester", slug: "rochester", population: 211328 },
          { name: "Albany", slug: "albany", population: 99224 },
          { name: "Syracuse", slug: "syracuse", population: 148620 },
          { name: "Yonkers", slug: "yonkers", population: 211569 },
        ]
      },
      {
        name: "Florida",
        slug: "florida",
        cities: [
          { name: "Miami", slug: "miami", population: 442241 },
          { name: "Orlando", slug: "orlando", population: 307573 },
          { name: "Tampa", slug: "tampa", population: 384959 },
          { name: "Jacksonville", slug: "jacksonville", population: 949611 },
          { name: "Fort Lauderdale", slug: "fort-lauderdale", population: 182760 },
          { name: "St. Petersburg", slug: "st-petersburg", population: 258308 },
          { name: "Hialeah", slug: "hialeah", population: 223109 },
          { name: "Tallahassee", slug: "tallahassee", population: 196169 },
          { name: "Cape Coral", slug: "cape-coral", population: 194016 },
          { name: "Fort Myers", slug: "fort-myers", population: 92245 },
        ]
      },
      {
        name: "Illinois",
        slug: "illinois",
        cities: [
          { name: "Chicago", slug: "chicago", population: 2693976 },
          { name: "Aurora", slug: "aurora", population: 197757 },
          { name: "Naperville", slug: "naperville", population: 149540 },
          { name: "Rockford", slug: "rockford", population: 147051 },
          { name: "Springfield", slug: "springfield", population: 114394 },
        ]
      },
      {
        name: "Georgia",
        slug: "georgia",
        cities: [
          { name: "Atlanta", slug: "atlanta", population: 498715 },
          { name: "Savannah", slug: "savannah", population: 147780 },
          { name: "Augusta", slug: "augusta", population: 202081 },
          { name: "Columbus", slug: "columbus", population: 206922 },
          { name: "Macon", slug: "macon", population: 157346 },
        ]
      },
      {
        name: "Arizona",
        slug: "arizona",
        cities: [
          { name: "Phoenix", slug: "phoenix", population: 1608139 },
          { name: "Tucson", slug: "tucson", population: 542629 },
          { name: "Mesa", slug: "mesa", population: 504258 },
          { name: "Scottsdale", slug: "scottsdale", population: 258069 },
          { name: "Chandler", slug: "chandler", population: 261165 },
          { name: "Gilbert", slug: "gilbert", population: 267918 },
          { name: "Tempe", slug: "tempe", population: 180587 },
        ]
      },
      {
        name: "Colorado",
        slug: "colorado",
        cities: [
          { name: "Denver", slug: "denver", population: 715522 },
          { name: "Colorado Springs", slug: "colorado-springs", population: 478961 },
          { name: "Aurora", slug: "aurora-co", population: 386261 },
          { name: "Fort Collins", slug: "fort-collins", population: 169810 },
          { name: "Boulder", slug: "boulder", population: 108250 },
        ]
      },
      {
        name: "Pennsylvania",
        slug: "pennsylvania",
        cities: [
          { name: "Philadelphia", slug: "philadelphia", population: 1584064 },
          { name: "Pittsburgh", slug: "pittsburgh", population: 302971 },
          { name: "Allentown", slug: "allentown", population: 126092 },
          { name: "Erie", slug: "erie", population: 94831 },
          { name: "Reading", slug: "reading", population: 95112 },
        ]
      },
      {
        name: "Ohio",
        slug: "ohio",
        cities: [
          { name: "Columbus", slug: "columbus-oh", population: 905748 },
          { name: "Cleveland", slug: "cleveland", population: 372624 },
          { name: "Cincinnati", slug: "cincinnati", population: 309317 },
          { name: "Toledo", slug: "toledo", population: 270871 },
          { name: "Akron", slug: "akron", population: 190469 },
          { name: "Dayton", slug: "dayton", population: 137644 },
        ]
      },
      {
        name: "Michigan",
        slug: "michigan",
        cities: [
          { name: "Detroit", slug: "detroit", population: 639111 },
          { name: "Grand Rapids", slug: "grand-rapids", population: 198917 },
          { name: "Warren", slug: "warren", population: 139387 },
          { name: "Sterling Heights", slug: "sterling-heights", population: 134346 },
          { name: "Ann Arbor", slug: "ann-arbor", population: 123851 },
        ]
      },
      {
        name: "North Carolina",
        slug: "north-carolina",
        cities: [
          { name: "Charlotte", slug: "charlotte", population: 874579 },
          { name: "Raleigh", slug: "raleigh", population: 469298 },
          { name: "Greensboro", slug: "greensboro", population: 299035 },
          { name: "Durham", slug: "durham", population: 283506 },
          { name: "Winston-Salem", slug: "winston-salem", population: 250320 },
        ]
      },
      {
        name: "New Jersey",
        slug: "new-jersey",
        cities: [
          { name: "Newark", slug: "newark", population: 311549 },
          { name: "Jersey City", slug: "jersey-city", population: 292449 },
          { name: "Paterson", slug: "paterson", population: 159732 },
          { name: "Elizabeth", slug: "elizabeth", population: 137298 },
          { name: "Trenton", slug: "trenton", population: 90871 },
        ]
      },
      {
        name: "Virginia",
        slug: "virginia",
        cities: [
          { name: "Virginia Beach", slug: "virginia-beach", population: 459470 },
          { name: "Norfolk", slug: "norfolk", population: 244076 },
          { name: "Chesapeake", slug: "chesapeake", population: 249422 },
          { name: "Richmond", slug: "richmond", population: 226610 },
          { name: "Arlington", slug: "arlington-va", population: 233464 },
        ]
      },
      {
        name: "Washington",
        slug: "washington",
        cities: [
          { name: "Seattle", slug: "seattle", population: 737015 },
          { name: "Spokane", slug: "spokane", population: 222081 },
          { name: "Tacoma", slug: "tacoma", population: 219346 },
          { name: "Vancouver", slug: "vancouver-wa", population: 190915 },
          { name: "Bellevue", slug: "bellevue", population: 151854 },
        ]
      },
      {
        name: "Massachusetts",
        slug: "massachusetts",
        cities: [
          { name: "Boston", slug: "boston", population: 675647 },
          { name: "Worcester", slug: "worcester", population: 206518 },
          { name: "Springfield", slug: "springfield-ma", population: 155929 },
          { name: "Cambridge", slug: "cambridge", population: 118403 },
          { name: "Lowell", slug: "lowell", population: 115554 },
        ]
      },
      {
        name: "Tennessee",
        slug: "tennessee",
        cities: [
          { name: "Nashville", slug: "nashville", population: 689447 },
          { name: "Memphis", slug: "memphis", population: 633104 },
          { name: "Knoxville", slug: "knoxville", population: 190740 },
          { name: "Chattanooga", slug: "chattanooga", population: 181099 },
          { name: "Clarksville", slug: "clarksville", population: 166722 },
        ]
      },
      {
        name: "Maryland",
        slug: "maryland",
        cities: [
          { name: "Baltimore", slug: "baltimore", population: 585708 },
          { name: "Frederick", slug: "frederick", population: 78171 },
          { name: "Rockville", slug: "rockville", population: 68155 },
          { name: "Gaithersburg", slug: "gaithersburg", population: 69657 },
          { name: "Bowie", slug: "bowie", population: 58587 },
        ]
      },
      {
        name: "Minnesota",
        slug: "minnesota",
        cities: [
          { name: "Minneapolis", slug: "minneapolis", population: 429954 },
          { name: "Saint Paul", slug: "saint-paul", population: 311527 },
          { name: "Rochester", slug: "rochester-mn", population: 121395 },
          { name: "Duluth", slug: "duluth", population: 90884 },
          { name: "Bloomington", slug: "bloomington-mn", population: 89987 },
        ]
      },
      {
        name: "Wisconsin",
        slug: "wisconsin",
        cities: [
          { name: "Milwaukee", slug: "milwaukee", population: 577222 },
          { name: "Madison", slug: "madison", population: 269840 },
          { name: "Green Bay", slug: "green-bay", population: 107395 },
          { name: "Kenosha", slug: "kenosha", population: 99986 },
          { name: "Racine", slug: "racine", population: 77816 },
        ]
      },
      {
        name: "Missouri",
        slug: "missouri",
        cities: [
          { name: "Kansas City", slug: "kansas-city", population: 508090 },
          { name: "St. Louis", slug: "st-louis", population: 301578 },
          { name: "Springfield", slug: "springfield-mo", population: 169176 },
          { name: "Columbia", slug: "columbia-mo", population: 126254 },
          { name: "Independence", slug: "independence", population: 123011 },
        ]
      },
      {
        name: "Indiana",
        slug: "indiana",
        cities: [
          { name: "Indianapolis", slug: "indianapolis", population: 887642 },
          { name: "Fort Wayne", slug: "fort-wayne", population: 270402 },
          { name: "Evansville", slug: "evansville", population: 117298 },
          { name: "South Bend", slug: "south-bend", population: 103453 },
          { name: "Carmel", slug: "carmel", population: 99757 },
        ]
      },
      {
        name: "Oregon",
        slug: "oregon",
        cities: [
          { name: "Portland", slug: "portland", population: 652503 },
          { name: "Eugene", slug: "eugene", population: 176654 },
          { name: "Salem", slug: "salem", population: 175535 },
          { name: "Gresham", slug: "gresham", population: 114247 },
          { name: "Hillsboro", slug: "hillsboro", population: 106447 },
        ]
      },
      {
        name: "Nevada",
        slug: "nevada",
        cities: [
          { name: "Las Vegas", slug: "las-vegas", population: 641903 },
          { name: "Henderson", slug: "henderson", population: 320189 },
          { name: "Reno", slug: "reno", population: 264165 },
          { name: "North Las Vegas", slug: "north-las-vegas", population: 262527 },
          { name: "Sparks", slug: "sparks", population: 105006 },
        ]
      },
      {
        name: "Utah",
        slug: "utah",
        cities: [
          { name: "Salt Lake City", slug: "salt-lake-city", population: 199723 },
          { name: "West Valley City", slug: "west-valley-city", population: 140230 },
          { name: "Provo", slug: "provo", population: 115919 },
          { name: "West Jordan", slug: "west-jordan", population: 116961 },
          { name: "Orem", slug: "orem", population: 97499 },
        ]
      },
      {
        name: "Connecticut",
        slug: "connecticut",
        cities: [
          { name: "Bridgeport", slug: "bridgeport", population: 148654 },
          { name: "New Haven", slug: "new-haven", population: 134023 },
          { name: "Hartford", slug: "hartford", population: 122587 },
          { name: "Stamford", slug: "stamford", population: 135470 },
          { name: "Waterbury", slug: "waterbury", population: 114403 },
        ]
      },
      {
        name: "South Carolina",
        slug: "south-carolina",
        cities: [
          { name: "Charleston", slug: "charleston", population: 150227 },
          { name: "Columbia", slug: "columbia-sc", population: 131674 },
          { name: "North Charleston", slug: "north-charleston", population: 114852 },
          { name: "Greenville", slug: "greenville", population: 70635 },
          { name: "Rock Hill", slug: "rock-hill", population: 74372 },
        ]
      },
      {
        name: "Alabama",
        slug: "alabama",
        cities: [
          { name: "Birmingham", slug: "birmingham", population: 200733 },
          { name: "Montgomery", slug: "montgomery", population: 198525 },
          { name: "Huntsville", slug: "huntsville", population: 215006 },
          { name: "Mobile", slug: "mobile", population: 187041 },
          { name: "Tuscaloosa", slug: "tuscaloosa", population: 101129 },
        ]
      },
      {
        name: "Louisiana",
        slug: "louisiana",
        cities: [
          { name: "New Orleans", slug: "new-orleans", population: 383997 },
          { name: "Baton Rouge", slug: "baton-rouge", population: 227715 },
          { name: "Shreveport", slug: "shreveport", population: 187593 },
          { name: "Lafayette", slug: "lafayette", population: 126185 },
          { name: "Lake Charles", slug: "lake-charles", population: 84872 },
        ]
      },
      {
        name: "Kentucky",
        slug: "kentucky",
        cities: [
          { name: "Louisville", slug: "louisville", population: 633045 },
          { name: "Lexington", slug: "lexington", population: 322570 },
          { name: "Bowling Green", slug: "bowling-green", population: 72294 },
          { name: "Owensboro", slug: "owensboro", population: 60183 },
          { name: "Covington", slug: "covington", population: 40455 },
        ]
      },
      {
        name: "Oklahoma",
        slug: "oklahoma",
        cities: [
          { name: "Oklahoma City", slug: "oklahoma-city", population: 681054 },
          { name: "Tulsa", slug: "tulsa", population: 401190 },
          { name: "Norman", slug: "norman", population: 128026 },
          { name: "Broken Arrow", slug: "broken-arrow", population: 113540 },
          { name: "Edmond", slug: "edmond", population: 94054 },
        ]
      },
      {
        name: "Iowa",
        slug: "iowa",
        cities: [
          { name: "Des Moines", slug: "des-moines", population: 214237 },
          { name: "Cedar Rapids", slug: "cedar-rapids", population: 137710 },
          { name: "Davenport", slug: "davenport", population: 101724 },
          { name: "Sioux City", slug: "sioux-city", population: 85797 },
          { name: "Iowa City", slug: "iowa-city", population: 74828 },
        ]
      },
      {
        name: "Kansas",
        slug: "kansas",
        cities: [
          { name: "Wichita", slug: "wichita", population: 397532 },
          { name: "Overland Park", slug: "overland-park", population: 197238 },
          { name: "Kansas City", slug: "kansas-city-ks", population: 156607 },
          { name: "Olathe", slug: "olathe", population: 141290 },
          { name: "Topeka", slug: "topeka", population: 126587 },
        ]
      },
      {
        name: "Arkansas",
        slug: "arkansas",
        cities: [
          { name: "Little Rock", slug: "little-rock", population: 202591 },
          { name: "Fort Smith", slug: "fort-smith", population: 89142 },
          { name: "Fayetteville", slug: "fayetteville", population: 93949 },
          { name: "Springdale", slug: "springdale", population: 84312 },
          { name: "Jonesboro", slug: "jonesboro", population: 78576 },
        ]
      },
      {
        name: "Mississippi",
        slug: "mississippi",
        cities: [
          { name: "Jackson", slug: "jackson-ms", population: 153701 },
          { name: "Gulfport", slug: "gulfport", population: 72076 },
          { name: "Southaven", slug: "southaven", population: 55026 },
          { name: "Hattiesburg", slug: "hattiesburg", population: 46805 },
          { name: "Biloxi", slug: "biloxi", population: 46212 },
        ]
      },
      {
        name: "Nebraska",
        slug: "nebraska",
        cities: [
          { name: "Omaha", slug: "omaha", population: 486051 },
          { name: "Lincoln", slug: "lincoln", population: 289102 },
          { name: "Bellevue", slug: "bellevue-ne", population: 63970 },
          { name: "Grand Island", slug: "grand-island", population: 53131 },
          { name: "Kearney", slug: "kearney", population: 34052 },
        ]
      },
      {
        name: "New Mexico",
        slug: "new-mexico",
        cities: [
          { name: "Albuquerque", slug: "albuquerque", population: 564559 },
          { name: "Las Cruces", slug: "las-cruces", population: 111385 },
          { name: "Rio Rancho", slug: "rio-rancho", population: 104046 },
          { name: "Santa Fe", slug: "santa-fe", population: 87505 },
          { name: "Roswell", slug: "roswell", population: 48422 },
        ]
      },
      {
        name: "Idaho",
        slug: "idaho",
        cities: [
          { name: "Boise", slug: "boise", population: 235684 },
          { name: "Meridian", slug: "meridian", population: 117635 },
          { name: "Nampa", slug: "nampa", population: 100200 },
          { name: "Idaho Falls", slug: "idaho-falls", population: 64597 },
          { name: "Caldwell", slug: "caldwell", population: 59987 },
        ]
      },
      {
        name: "Hawaii",
        slug: "hawaii",
        cities: [
          { name: "Honolulu", slug: "honolulu", population: 350964 },
          { name: "Hilo", slug: "hilo", population: 45703 },
          { name: "Kailua", slug: "kailua", population: 40514 },
          { name: "Pearl City", slug: "pearl-city", population: 47698 },
          { name: "Waipahu", slug: "waipahu", population: 38216 },
        ]
      },
      {
        name: "West Virginia",
        slug: "west-virginia",
        cities: [
          { name: "Charleston", slug: "charleston-wv", population: 47215 },
          { name: "Huntington", slug: "huntington", population: 46842 },
          { name: "Morgantown", slug: "morgantown", population: 30955 },
          { name: "Parkersburg", slug: "parkersburg", population: 29675 },
          { name: "Wheeling", slug: "wheeling", population: 26680 },
        ]
      },
      {
        name: "New Hampshire",
        slug: "new-hampshire",
        cities: [
          { name: "Manchester", slug: "manchester-nh", population: 115644 },
          { name: "Nashua", slug: "nashua", population: 91322 },
          { name: "Concord", slug: "concord-nh", population: 43976 },
          { name: "Derry", slug: "derry", population: 33876 },
          { name: "Rochester", slug: "rochester-nh", population: 32492 },
        ]
      },
      {
        name: "Maine",
        slug: "maine",
        cities: [
          { name: "Portland", slug: "portland-me", population: 68408 },
          { name: "Lewiston", slug: "lewiston", population: 36592 },
          { name: "Bangor", slug: "bangor", population: 31903 },
          { name: "South Portland", slug: "south-portland", population: 26498 },
          { name: "Auburn", slug: "auburn-me", population: 23203 },
        ]
      },
      {
        name: "Rhode Island",
        slug: "rhode-island",
        cities: [
          { name: "Providence", slug: "providence", population: 190934 },
          { name: "Warwick", slug: "warwick", population: 81699 },
          { name: "Cranston", slug: "cranston", population: 81273 },
          { name: "Pawtucket", slug: "pawtucket", population: 72117 },
          { name: "East Providence", slug: "east-providence", population: 47618 },
        ]
      },
      {
        name: "Montana",
        slug: "montana",
        cities: [
          { name: "Billings", slug: "billings", population: 117116 },
          { name: "Missoula", slug: "missoula", population: 75516 },
          { name: "Great Falls", slug: "great-falls", population: 60442 },
          { name: "Bozeman", slug: "bozeman", population: 53293 },
          { name: "Helena", slug: "helena", population: 32315 },
        ]
      },
      {
        name: "Delaware",
        slug: "delaware",
        cities: [
          { name: "Wilmington", slug: "wilmington", population: 71106 },
          { name: "Dover", slug: "dover", population: 39403 },
          { name: "Newark", slug: "newark-de", population: 33673 },
          { name: "Middletown", slug: "middletown-de", population: 22350 },
          { name: "Bear", slug: "bear", population: 21017 },
        ]
      },
      {
        name: "South Dakota",
        slug: "south-dakota",
        cities: [
          { name: "Sioux Falls", slug: "sioux-falls", population: 192517 },
          { name: "Rapid City", slug: "rapid-city", population: 74703 },
          { name: "Aberdeen", slug: "aberdeen", population: 28324 },
          { name: "Brookings", slug: "brookings", population: 24194 },
          { name: "Watertown", slug: "watertown-sd", population: 22655 },
        ]
      },
      {
        name: "North Dakota",
        slug: "north-dakota",
        cities: [
          { name: "Fargo", slug: "fargo", population: 125990 },
          { name: "Bismarck", slug: "bismarck", population: 73529 },
          { name: "Grand Forks", slug: "grand-forks", population: 56588 },
          { name: "Minot", slug: "minot", population: 48377 },
          { name: "West Fargo", slug: "west-fargo", population: 38626 },
        ]
      },
      {
        name: "Alaska",
        slug: "alaska",
        cities: [
          { name: "Anchorage", slug: "anchorage", population: 291247 },
          { name: "Juneau", slug: "juneau", population: 32113 },
          { name: "Fairbanks", slug: "fairbanks", population: 30917 },
          { name: "Ketchikan", slug: "ketchikan", population: 8022 },
          { name: "Sitka", slug: "sitka", population: 8458 },
        ]
      },
      {
        name: "Vermont",
        slug: "vermont",
        cities: [
          { name: "Burlington", slug: "burlington", population: 44743 },
          { name: "South Burlington", slug: "south-burlington", population: 20292 },
          { name: "Rutland", slug: "rutland", population: 15807 },
          { name: "Barre", slug: "barre", population: 8491 },
          { name: "Montpelier", slug: "montpelier", population: 8074 },
        ]
      },
      {
        name: "Wyoming",
        slug: "wyoming",
        cities: [
          { name: "Cheyenne", slug: "cheyenne", population: 65132 },
          { name: "Casper", slug: "casper", population: 58094 },
          { name: "Laramie", slug: "laramie", population: 32711 },
          { name: "Gillette", slug: "gillette", population: 33403 },
          { name: "Rock Springs", slug: "rock-springs", population: 23036 },
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
          { name: "Nagpur", slug: "nagpur", population: 2893000 },
          { name: "Thane", slug: "thane", population: 1890000 },
          { name: "Nashik", slug: "nashik", population: 1560000 },
          { name: "Aurangabad", slug: "aurangabad", population: 1189000 },
          { name: "Solapur", slug: "solapur", population: 951118 },
          { name: "Kolhapur", slug: "kolhapur", population: 549236 },
          { name: "Amravati", slug: "amravati", population: 647057 },
          { name: "Navi Mumbai", slug: "navi-mumbai", population: 1120000 },
        ]
      },
      {
        name: "Karnataka",
        slug: "karnataka",
        cities: [
          { name: "Bangalore", slug: "bangalore", population: 12765000 },
          { name: "Mysore", slug: "mysore", population: 920550 },
          { name: "Hubli-Dharwad", slug: "hubli-dharwad", population: 943788 },
          { name: "Mangalore", slug: "mangalore", population: 484785 },
          { name: "Belgaum", slug: "belgaum", population: 610189 },
          { name: "Gulbarga", slug: "gulbarga", population: 532031 },
          { name: "Davangere", slug: "davangere", population: 435128 },
          { name: "Bellary", slug: "bellary", population: 410445 },
          { name: "Shimoga", slug: "shimoga", population: 322650 },
          { name: "Tumkur", slug: "tumkur", population: 305821 },
        ]
      },
      {
        name: "Delhi NCR",
        slug: "delhi-ncr",
        cities: [
          { name: "New Delhi", slug: "new-delhi", population: 16787941 },
          { name: "Gurugram", slug: "gurugram", population: 1514085 },
          { name: "Noida", slug: "noida", population: 642381 },
          { name: "Faridabad", slug: "faridabad", population: 1414050 },
          { name: "Ghaziabad", slug: "ghaziabad", population: 1729000 },
          { name: "Greater Noida", slug: "greater-noida", population: 107676 },
        ]
      },
      {
        name: "Tamil Nadu",
        slug: "tamil-nadu",
        cities: [
          { name: "Chennai", slug: "chennai", population: 10971108 },
          { name: "Coimbatore", slug: "coimbatore", population: 2151466 },
          { name: "Madurai", slug: "madurai", population: 1465625 },
          { name: "Tiruchirappalli", slug: "tiruchirappalli", population: 916857 },
          { name: "Salem", slug: "salem-tn", population: 831038 },
          { name: "Tirunelveli", slug: "tirunelveli", population: 474838 },
          { name: "Tiruppur", slug: "tiruppur", population: 444543 },
          { name: "Erode", slug: "erode", population: 521776 },
          { name: "Vellore", slug: "vellore", population: 423425 },
          { name: "Thoothukudi", slug: "thoothukudi", population: 411831 },
        ]
      },
      {
        name: "Telangana",
        slug: "telangana",
        cities: [
          { name: "Hyderabad", slug: "hyderabad", population: 10534418 },
          { name: "Warangal", slug: "warangal", population: 811844 },
          { name: "Nizamabad", slug: "nizamabad", population: 311152 },
          { name: "Karimnagar", slug: "karimnagar", population: 261185 },
          { name: "Khammam", slug: "khammam", population: 262255 },
          { name: "Ramagundam", slug: "ramagundam", population: 229255 },
          { name: "Mahbubnagar", slug: "mahbubnagar", population: 189577 },
          { name: "Nalgonda", slug: "nalgonda", population: 137862 },
        ]
      },
      {
        name: "Gujarat",
        slug: "gujarat",
        cities: [
          { name: "Ahmedabad", slug: "ahmedabad", population: 7650000 },
          { name: "Surat", slug: "surat", population: 6081322 },
          { name: "Vadodara", slug: "vadodara", population: 2065771 },
          { name: "Rajkot", slug: "rajkot", population: 1390000 },
          { name: "Bhavnagar", slug: "bhavnagar", population: 593368 },
          { name: "Jamnagar", slug: "jamnagar", population: 600943 },
          { name: "Gandhinagar", slug: "gandhinagar", population: 292797 },
          { name: "Junagadh", slug: "junagadh", population: 320250 },
          { name: "Anand", slug: "anand", population: 198282 },
          { name: "Nadiad", slug: "nadiad", population: 225132 },
        ]
      },
      {
        name: "West Bengal",
        slug: "west-bengal",
        cities: [
          { name: "Kolkata", slug: "kolkata", population: 14850000 },
          { name: "Howrah", slug: "howrah", population: 1072000 },
          { name: "Durgapur", slug: "durgapur", population: 581409 },
          { name: "Asansol", slug: "asansol", population: 564491 },
          { name: "Siliguri", slug: "siliguri", population: 513264 },
          { name: "Bardhaman", slug: "bardhaman", population: 347016 },
          { name: "Malda", slug: "malda", population: 203508 },
          { name: "Kharagpur", slug: "kharagpur", population: 207604 },
        ]
      },
      {
        name: "Rajasthan",
        slug: "rajasthan",
        cities: [
          { name: "Jaipur", slug: "jaipur", population: 4107000 },
          { name: "Jodhpur", slug: "jodhpur", population: 1137815 },
          { name: "Udaipur", slug: "udaipur", population: 559317 },
          { name: "Kota", slug: "kota", population: 1001365 },
          { name: "Bikaner", slug: "bikaner", population: 647804 },
          { name: "Ajmer", slug: "ajmer", population: 551360 },
          { name: "Bhilwara", slug: "bhilwara", population: 360009 },
          { name: "Alwar", slug: "alwar", population: 341422 },
          { name: "Bharatpur", slug: "bharatpur", population: 252838 },
          { name: "Sikar", slug: "sikar", population: 237629 },
        ]
      },
      {
        name: "Uttar Pradesh",
        slug: "uttar-pradesh",
        cities: [
          { name: "Lucknow", slug: "lucknow", population: 3382000 },
          { name: "Kanpur", slug: "kanpur", population: 3000000 },
          { name: "Agra", slug: "agra", population: 1760000 },
          { name: "Varanasi", slug: "varanasi", population: 1435000 },
          { name: "Allahabad", slug: "allahabad", population: 1168000 },
          { name: "Meerut", slug: "meerut", population: 1305000 },
          { name: "Bareilly", slug: "bareilly", population: 903668 },
          { name: "Aligarh", slug: "aligarh", population: 874408 },
          { name: "Moradabad", slug: "moradabad", population: 841454 },
          { name: "Gorakhpur", slug: "gorakhpur", population: 673446 },
        ]
      },
      {
        name: "Madhya Pradesh",
        slug: "madhya-pradesh",
        cities: [
          { name: "Indore", slug: "indore", population: 2167447 },
          { name: "Bhopal", slug: "bhopal", population: 1798218 },
          { name: "Jabalpur", slug: "jabalpur", population: 1081677 },
          { name: "Gwalior", slug: "gwalior", population: 1069276 },
          { name: "Ujjain", slug: "ujjain", population: 515215 },
          { name: "Sagar", slug: "sagar", population: 274560 },
          { name: "Rewa", slug: "rewa", population: 235654 },
          { name: "Satna", slug: "satna", population: 286894 },
        ]
      },
      {
        name: "Kerala",
        slug: "kerala",
        cities: [
          { name: "Kochi", slug: "kochi", population: 2119724 },
          { name: "Thiruvananthapuram", slug: "thiruvananthapuram", population: 957730 },
          { name: "Kozhikode", slug: "kozhikode", population: 609224 },
          { name: "Thrissur", slug: "thrissur", population: 316865 },
          { name: "Kannur", slug: "kannur", population: 232486 },
          { name: "Kollam", slug: "kollam", population: 394288 },
          { name: "Palakkad", slug: "palakkad", population: 130955 },
          { name: "Alappuzha", slug: "alappuzha", population: 177079 },
        ]
      },
      {
        name: "Punjab",
        slug: "punjab",
        cities: [
          { name: "Ludhiana", slug: "ludhiana", population: 1613878 },
          { name: "Amritsar", slug: "amritsar", population: 1183705 },
          { name: "Jalandhar", slug: "jalandhar", population: 873725 },
          { name: "Patiala", slug: "patiala", population: 405164 },
          { name: "Bathinda", slug: "bathinda", population: 285813 },
          { name: "Mohali", slug: "mohali", population: 166864 },
          { name: "Hoshiarpur", slug: "hoshiarpur", population: 170803 },
          { name: "Pathankot", slug: "pathankot", population: 176306 },
        ]
      },
      {
        name: "Haryana",
        slug: "haryana",
        cities: [
          { name: "Faridabad", slug: "faridabad-hr", population: 1414050 },
          { name: "Gurugram", slug: "gurugram-hr", population: 1514085 },
          { name: "Panipat", slug: "panipat", population: 294580 },
          { name: "Ambala", slug: "ambala", population: 198890 },
          { name: "Yamunanagar", slug: "yamunanagar", population: 216677 },
          { name: "Rohtak", slug: "rohtak", population: 374292 },
          { name: "Hisar", slug: "hisar", population: 301249 },
          { name: "Karnal", slug: "karnal", population: 286183 },
        ]
      },
      {
        name: "Bihar",
        slug: "bihar",
        cities: [
          { name: "Patna", slug: "patna", population: 2046652 },
          { name: "Gaya", slug: "gaya", population: 470839 },
          { name: "Bhagalpur", slug: "bhagalpur", population: 410210 },
          { name: "Muzaffarpur", slug: "muzaffarpur", population: 393724 },
          { name: "Darbhanga", slug: "darbhanga", population: 312892 },
          { name: "Bihar Sharif", slug: "bihar-sharif", population: 297268 },
          { name: "Arrah", slug: "arrah", population: 261430 },
          { name: "Begusarai", slug: "begusarai", population: 252008 },
        ]
      },
      {
        name: "Odisha",
        slug: "odisha",
        cities: [
          { name: "Bhubaneswar", slug: "bhubaneswar", population: 837737 },
          { name: "Cuttack", slug: "cuttack", population: 610189 },
          { name: "Rourkela", slug: "rourkela", population: 274865 },
          { name: "Berhampur", slug: "berhampur", population: 355823 },
          { name: "Sambalpur", slug: "sambalpur", population: 183813 },
          { name: "Puri", slug: "puri", population: 200564 },
        ]
      },
      {
        name: "Jharkhand",
        slug: "jharkhand",
        cities: [
          { name: "Ranchi", slug: "ranchi", population: 1073427 },
          { name: "Jamshedpur", slug: "jamshedpur", population: 679068 },
          { name: "Dhanbad", slug: "dhanbad", population: 1161561 },
          { name: "Bokaro", slug: "bokaro", population: 394173 },
          { name: "Hazaribagh", slug: "hazaribagh", population: 142489 },
          { name: "Deoghar", slug: "deoghar", population: 203116 },
        ]
      },
      {
        name: "Chhattisgarh",
        slug: "chhattisgarh",
        cities: [
          { name: "Raipur", slug: "raipur", population: 1010087 },
          { name: "Bhilai", slug: "bhilai", population: 625138 },
          { name: "Bilaspur", slug: "bilaspur", population: 363619 },
          { name: "Korba", slug: "korba", population: 363079 },
          { name: "Durg", slug: "durg", population: 267873 },
          { name: "Rajnandgaon", slug: "rajnandgaon", population: 163122 },
        ]
      },
      {
        name: "Assam",
        slug: "assam",
        cities: [
          { name: "Guwahati", slug: "guwahati", population: 968549 },
          { name: "Silchar", slug: "silchar", population: 172830 },
          { name: "Dibrugarh", slug: "dibrugarh", population: 154019 },
          { name: "Jorhat", slug: "jorhat", population: 153677 },
          { name: "Nagaon", slug: "nagaon", population: 147231 },
          { name: "Tinsukia", slug: "tinsukia", population: 126389 },
        ]
      },
      {
        name: "Uttarakhand",
        slug: "uttarakhand",
        cities: [
          { name: "Dehradun", slug: "dehradun", population: 569578 },
          { name: "Haridwar", slug: "haridwar", population: 228832 },
          { name: "Roorkee", slug: "roorkee", population: 118188 },
          { name: "Haldwani", slug: "haldwani", population: 156078 },
          { name: "Rudrapur", slug: "rudrapur", population: 154445 },
          { name: "Kashipur", slug: "kashipur", population: 121623 },
        ]
      },
      {
        name: "Himachal Pradesh",
        slug: "himachal-pradesh",
        cities: [
          { name: "Shimla", slug: "shimla", population: 169578 },
          { name: "Dharamsala", slug: "dharamsala", population: 52300 },
          { name: "Solan", slug: "solan", population: 39256 },
          { name: "Mandi", slug: "mandi", population: 26422 },
          { name: "Kullu", slug: "kullu", population: 18306 },
          { name: "Manali", slug: "manali", population: 8096 },
        ]
      },
      {
        name: "Goa",
        slug: "goa",
        cities: [
          { name: "Panaji", slug: "panaji", population: 114759 },
          { name: "Margao", slug: "margao", population: 94466 },
          { name: "Vasco da Gama", slug: "vasco-da-gama", population: 100485 },
          { name: "Mapusa", slug: "mapusa", population: 40122 },
          { name: "Ponda", slug: "ponda", population: 22654 },
        ]
      },
      {
        name: "Chandigarh",
        slug: "chandigarh",
        cities: [
          { name: "Chandigarh", slug: "chandigarh-city", population: 1055450 },
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
          { name: "Birmingham", slug: "birmingham-uk", population: 1141816 },
          { name: "Manchester", slug: "manchester", population: 547627 },
          { name: "Liverpool", slug: "liverpool", population: 496784 },
          { name: "Leeds", slug: "leeds", population: 789194 },
          { name: "Sheffield", slug: "sheffield", population: 584853 },
          { name: "Bristol", slug: "bristol", population: 463405 },
          { name: "Newcastle", slug: "newcastle", population: 302820 },
          { name: "Leicester", slug: "leicester", population: 354224 },
          { name: "Nottingham", slug: "nottingham", population: 321500 },
          { name: "Southampton", slug: "southampton", population: 252796 },
          { name: "Portsmouth", slug: "portsmouth", population: 238800 },
          { name: "Brighton", slug: "brighton", population: 229700 },
          { name: "Coventry", slug: "coventry", population: 366785 },
          { name: "Reading", slug: "reading-uk", population: 161780 },
          { name: "Milton Keynes", slug: "milton-keynes", population: 229941 },
          { name: "Cambridge", slug: "cambridge-uk", population: 145700 },
          { name: "Oxford", slug: "oxford", population: 152450 },
        ]
      },
      {
        name: "Scotland",
        slug: "scotland",
        cities: [
          { name: "Edinburgh", slug: "edinburgh", population: 524930 },
          { name: "Glasgow", slug: "glasgow", population: 633120 },
          { name: "Aberdeen", slug: "aberdeen-uk", population: 196670 },
          { name: "Dundee", slug: "dundee", population: 148270 },
          { name: "Inverness", slug: "inverness", population: 63780 },
        ]
      },
      {
        name: "Wales",
        slug: "wales",
        cities: [
          { name: "Cardiff", slug: "cardiff", population: 366903 },
          { name: "Swansea", slug: "swansea", population: 246993 },
          { name: "Newport", slug: "newport-uk", population: 151500 },
          { name: "Wrexham", slug: "wrexham", population: 65692 },
        ]
      },
      {
        name: "Northern Ireland",
        slug: "northern-ireland",
        cities: [
          { name: "Belfast", slug: "belfast", population: 343542 },
          { name: "Derry", slug: "derry-uk", population: 83652 },
          { name: "Lisburn", slug: "lisburn", population: 45370 },
          { name: "Newry", slug: "newry", population: 27433 },
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
          { name: "Ottawa", slug: "ottawa", population: 1017449 },
          { name: "Mississauga", slug: "mississauga", population: 721599 },
          { name: "Brampton", slug: "brampton", population: 656480 },
          { name: "Hamilton", slug: "hamilton", population: 579200 },
          { name: "London", slug: "london-ca", population: 422324 },
          { name: "Markham", slug: "markham", population: 338503 },
          { name: "Vaughan", slug: "vaughan", population: 323103 },
          { name: "Kitchener", slug: "kitchener", population: 256885 },
          { name: "Windsor", slug: "windsor-ca", population: 229660 },
        ]
      },
      {
        name: "British Columbia",
        slug: "british-columbia",
        cities: [
          { name: "Vancouver", slug: "vancouver", population: 675218 },
          { name: "Surrey", slug: "surrey", population: 568322 },
          { name: "Burnaby", slug: "burnaby", population: 249197 },
          { name: "Richmond", slug: "richmond-ca", population: 209937 },
          { name: "Victoria", slug: "victoria", population: 92141 },
          { name: "Kelowna", slug: "kelowna", population: 144576 },
        ]
      },
      {
        name: "Quebec",
        slug: "quebec",
        cities: [
          { name: "Montreal", slug: "montreal", population: 1780000 },
          { name: "Quebec City", slug: "quebec-city", population: 542298 },
          { name: "Laval", slug: "laval", population: 438366 },
          { name: "Gatineau", slug: "gatineau", population: 291041 },
          { name: "Longueuil", slug: "longueuil", population: 246842 },
        ]
      },
      {
        name: "Alberta",
        slug: "alberta",
        cities: [
          { name: "Calgary", slug: "calgary", population: 1336000 },
          { name: "Edmonton", slug: "edmonton", population: 1010899 },
          { name: "Red Deer", slug: "red-deer", population: 106588 },
          { name: "Lethbridge", slug: "lethbridge", population: 101482 },
          { name: "Fort McMurray", slug: "fort-mcmurray", population: 66573 },
        ]
      },
      {
        name: "Manitoba",
        slug: "manitoba",
        cities: [
          { name: "Winnipeg", slug: "winnipeg", population: 749607 },
          { name: "Brandon", slug: "brandon", population: 51313 },
          { name: "Steinbach", slug: "steinbach", population: 17806 },
        ]
      },
      {
        name: "Saskatchewan",
        slug: "saskatchewan",
        cities: [
          { name: "Saskatoon", slug: "saskatoon", population: 317480 },
          { name: "Regina", slug: "regina", population: 236481 },
          { name: "Prince Albert", slug: "prince-albert", population: 37756 },
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
          { name: "Newcastle", slug: "newcastle-au", population: 322278 },
          { name: "Wollongong", slug: "wollongong", population: 302739 },
          { name: "Central Coast", slug: "central-coast", population: 333627 },
          { name: "Parramatta", slug: "parramatta", population: 259325 },
        ]
      },
      {
        name: "Victoria",
        slug: "victoria",
        cities: [
          { name: "Melbourne", slug: "melbourne", population: 5078000 },
          { name: "Geelong", slug: "geelong", population: 192393 },
          { name: "Ballarat", slug: "ballarat", population: 105471 },
          { name: "Bendigo", slug: "bendigo", population: 99122 },
          { name: "Shepparton", slug: "shepparton", population: 51631 },
        ]
      },
      {
        name: "Queensland",
        slug: "queensland",
        cities: [
          { name: "Brisbane", slug: "brisbane", population: 2514184 },
          { name: "Gold Coast", slug: "gold-coast", population: 679127 },
          { name: "Sunshine Coast", slug: "sunshine-coast", population: 351479 },
          { name: "Townsville", slug: "townsville", population: 180820 },
          { name: "Cairns", slug: "cairns", population: 153075 },
          { name: "Toowoomba", slug: "toowoomba", population: 114024 },
        ]
      },
      {
        name: "Western Australia",
        slug: "western-australia",
        cities: [
          { name: "Perth", slug: "perth", population: 2085973 },
          { name: "Mandurah", slug: "mandurah", population: 97926 },
          { name: "Bunbury", slug: "bunbury", population: 75106 },
          { name: "Geraldton", slug: "geraldton", population: 37648 },
        ]
      },
      {
        name: "South Australia",
        slug: "south-australia",
        cities: [
          { name: "Adelaide", slug: "adelaide", population: 1359760 },
          { name: "Mount Gambier", slug: "mount-gambier", population: 29639 },
          { name: "Whyalla", slug: "whyalla", population: 21742 },
          { name: "Murray Bridge", slug: "murray-bridge", population: 21615 },
        ]
      },
      {
        name: "Tasmania",
        slug: "tasmania",
        cities: [
          { name: "Hobart", slug: "hobart", population: 238834 },
          { name: "Launceston", slug: "launceston", population: 90816 },
          { name: "Devonport", slug: "devonport", population: 26234 },
        ]
      },
      {
        name: "Australian Capital Territory",
        slug: "act",
        cities: [
          { name: "Canberra", slug: "canberra", population: 453558 },
        ]
      },
      {
        name: "Northern Territory",
        slug: "northern-territory",
        cities: [
          { name: "Darwin", slug: "darwin", population: 147255 },
          { name: "Alice Springs", slug: "alice-springs", population: 26534 },
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
          { name: "Jebel Ali", slug: "jebel-ali", population: 110000 },
          { name: "Deira", slug: "deira", population: 275000 },
          { name: "Jumeirah", slug: "jumeirah", population: 250000 },
          { name: "Business Bay", slug: "business-bay", population: 75000 },
        ]
      },
      {
        name: "Abu Dhabi",
        slug: "abu-dhabi",
        cities: [
          { name: "Abu Dhabi City", slug: "abu-dhabi-city", population: 1450000 },
          { name: "Al Ain", slug: "al-ain", population: 656000 },
          { name: "Khalifa City", slug: "khalifa-city", population: 120000 },
        ]
      },
      {
        name: "Sharjah",
        slug: "sharjah",
        cities: [
          { name: "Sharjah City", slug: "sharjah-city", population: 1274000 },
          { name: "Kalba", slug: "kalba", population: 40000 },
          { name: "Khor Fakkan", slug: "khor-fakkan", population: 33575 },
        ]
      },
      {
        name: "Ajman",
        slug: "ajman",
        cities: [
          { name: "Ajman City", slug: "ajman-city", population: 504846 },
        ]
      },
      {
        name: "Ras Al Khaimah",
        slug: "ras-al-khaimah",
        cities: [
          { name: "RAK City", slug: "rak-city", population: 345000 },
        ]
      },
    ]
  },
  {
    country: "Kuwait",
    countryCode: "KW",
    states: [
      {
        name: "Kuwait City",
        slug: "kuwait-city",
        cities: [
          { name: "Kuwait City", slug: "kuwait-city-main", population: 60000 },
          { name: "Salmiya", slug: "salmiya", population: 170000 },
          { name: "Hawalli", slug: "hawalli", population: 164212 },
          { name: "Farwaniya", slug: "farwaniya", population: 235000 },
          { name: "Ahmadi", slug: "ahmadi", population: 637000 },
        ]
      },
    ]
  },
];

// Core service keywords (comprehensive franchise consulting services)
export const serviceKeywords = [
  "franchise consulting",
  "franchise development",
  "franchisee recruitment",
  "franchise matchmaking",
  "franchise expansion",
  "franchise marketing",
  "franchise lead generation",
  "franchise training",
  "franchise operations",
  "franchise legal services",
  "linkedin lead generation for franchises",
];

// Marketing keywords for programmatic pages
export const broadMarketingKeywords = [
  // Core franchise services
  "franchise consulting",
  "franchise development",
  "franchisee recruitment",
  "franchise matchmaking",
  "franchise expansion",
  "franchise marketing",
  "franchise lead generation",
  // Lead generation variations
  "franchise lead generation agency",
  "franchise leads",
  "buy franchise leads",
  "qualified franchise leads",
  "franchise buyer leads",
  "franchise investor leads",
  "exclusive franchise leads",
  "verified franchise leads",
  "premium franchise leads",
  "franchise prospect generation",
  // Marketing agency variations
  "franchise marketing agency",
  "franchise digital marketing agency",
  "franchise advertising agency",
  "franchise branding agency",
  "franchise growth agency",
  "franchise seo agency",
  "franchise ppc agency",
  "franchise social media agency",
  // LinkedIn lead generation
  "linkedin lead generation for franchises",
  "linkedin lead generation for franchise brands",
  "linkedin marketing for franchisors",
  // Digital marketing services
  "franchise digital marketing",
  "franchise seo",
  "franchise ppc management",
  "franchise social media marketing",
  "franchise email marketing",
  "franchise content marketing",
  "franchise video marketing",
  "franchise online advertising",
  "franchise google ads",
  "franchise facebook ads",
  // Business development
  "franchise business development",
  "franchise sales consulting",
  "franchise growth strategy",
  "franchise expansion planning",
  "franchise territory development",
  "franchise market research",
  "franchise competitive analysis",
  "franchise feasibility study",
  // Operations & training
  "franchise operations consulting",
  "franchise training programs",
  "franchise support services",
  "franchise management consulting",
  "franchise performance optimization",
  // Legal & financial
  "franchise legal services",
  "franchise funding solutions",
  "franchise financing help",
  "franchise business plan",
  "franchise roi analysis",
  // Branding & creative
  "franchise branding services",
  "franchise website design",
  "franchise reputation management",
  "franchise public relations",
  // Specialized
  "master franchise development",
  "multi unit franchise consulting",
  "franchise resale services",
  "franchise broker services",
  "international franchise consulting",
  "franchise conversion consulting",
  "franchise turnaround consulting",
];

// Additional SEO keywords for keyword pages
export const seoKeywords = [
  "best franchise consultant",
  "franchise business consultant",
  "franchise consultant near me",
  "franchise development company",
  "franchise startup consultant",
  "how to franchise my business",
  "franchise your business",
  "franchise opportunity",
  "buy a franchise",
  "franchise investment",
  "franchise cost",
  "franchise fee",
  "franchise roi",
  "franchise success rate",
  "franchise business model",
  "franchise agreement",
  "franchise disclosure document",
  "franchise territory",
  "master franchise",
  "area developer franchise",
  "multi unit franchise",
  "franchise resale",
  "franchise broker",
  "franchise attorney",
  "franchise funding",
  "franchise loans",
  "SBA franchise loan",
  "franchise financing",
  "franchise marketing agency",
  "franchise digital marketing",
  "franchise seo",
  "franchise ppc",
  "franchise social media",
  "franchise advertising",
  "franchise branding",
  "franchise lead generation company",
  "qualified franchise leads",
  "franchise buyer leads",
  "franchise investor leads",
  "franchise prospect",
  "franchise inquiry",
  "franchise sales",
  "franchise development services",
  "franchise growth strategy",
  "franchise expansion planning",
  // Additional high-value keywords
  "best franchise lead generation agency",
  "top franchise marketing company",
  "franchise lead generation services",
  "franchise marketing experts",
  "franchise marketing consultants",
  "best franchise marketing agency in usa",
  "franchise marketing agency usa",
  "franchise marketing agency uk",
  "best franchise digital marketing agency",
  "franchise lead generation usa",
  "franchise lead generation uk",
  "franchise lead generation india",
  "franchise lead generation australia",
  "franchise lead generation canada",
  "franchise lead generation dubai",
  "how to get franchise leads",
  "how to generate franchise leads",
  "franchise lead generation strategies",
  "franchise lead generation tips",
  "franchise marketing strategies",
  "franchise online marketing",
  "franchise brand development",
  "franchise sales funnel",
  "franchise conversion optimization",
  "franchise appointment setting",
  "franchise discovery day marketing",
  "franchise recruitment marketing",
  "franchise awareness campaigns",
  "franchise local seo",
  "franchise google my business",
  "franchise review management",
  "franchise email campaigns",
  "franchise landing pages",
  "franchise website optimization",
  "franchise pay per click",
  "franchise retargeting ads",
  "franchise influencer marketing",
  "franchise trade show marketing",
  "franchise content strategy",
  "franchise blog writing services",
  "franchise press release distribution",
  // LinkedIn keywords
  "linkedin lead generation for franchises",
  "linkedin lead generation for franchise brands",
  "linkedin marketing for franchisors",
  "linkedin franchise recruitment",
  "linkedin franchise broker marketing",
];
