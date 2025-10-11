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
          { name: "Oakland", slug: "oakland", population: 433031 },
          { name: "Long Beach", slug: "long-beach", population: 466742 },
          { name: "Bakersfield", slug: "bakersfield", population: 380874 },
          { name: "Anaheim", slug: "anaheim", population: 352497 },
          { name: "Santa Ana", slug: "santa-ana", population: 334136 },
          { name: "Riverside", slug: "riverside", population: 331360 },
          { name: "Stockton", slug: "stockton", population: 310496 },
          { name: "Irvine", slug: "irvine", population: 307670 },
          { name: "Chula Vista", slug: "chula-vista", population: 275487 },
          { name: "Fremont", slug: "fremont", population: 230504 },
          { name: "Santa Clarita", slug: "santa-clarita", population: 228673 },
          { name: "San Bernardino", slug: "san-bernardino", population: 222101 },
          { name: "Modesto", slug: "modesto", population: 218464 },
          { name: "Fontana", slug: "fontana", population: 208393 },
          { name: "Oxnard", slug: "oxnard", population: 202063 },
          { name: "Moreno Valley", slug: "moreno-valley", population: 208634 },
          { name: "Huntington Beach", slug: "huntington-beach", population: 198711 },
          { name: "Glendale", slug: "glendale", population: 197747 },
          { name: "Santa Rosa", slug: "santa-rosa", population: 178127 },
          { name: "Oceanside", slug: "oceanside", population: 174648 },
          { name: "Garden Grove", slug: "garden-grove", population: 171949 },
          { name: "Rancho Cucamonga", slug: "rancho-cucamonga", population: 174453 },
          { name: "Ontario", slug: "ontario", population: 175265 },
          { name: "Corona", slug: "corona", population: 157136 }
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
          { name: "El Paso", slug: "el-paso", population: 695044 },
          { name: "Arlington", slug: "arlington", population: 394266 },
          { name: "Corpus Christi", slug: "corpus-christi", population: 326586 },
          { name: "Plano", slug: "plano", population: 285494 },
          { name: "Lubbock", slug: "lubbock", population: 258862 },
          { name: "Laredo", slug: "laredo", population: 255205 },
          { name: "Irving", slug: "irving", population: 239798 },
          { name: "Garland", slug: "garland", population: 238622 },
          { name: "Frisco", slug: "frisco", population: 200509 },
          { name: "McKinney", slug: "mckinney", population: 199177 },
          { name: "Amarillo", slug: "amarillo", population: 200393 },
          { name: "Grand Prairie", slug: "grand-prairie", population: 196100 },
          { name: "Brownsville", slug: "brownsville", population: 186738 },
          { name: "Killeen", slug: "killeen", population: 153095 },
          { name: "Pasadena", slug: "pasadena", population: 151950 },
          { name: "Mesquite", slug: "mesquite", population: 150108 },
          { name: "McAllen", slug: "mcallen", population: 142210 },
          { name: "Carrollton", slug: "carrollton", population: 133434 },
          { name: "Midland", slug: "midland", population: 132950 },
          { name: "Denton", slug: "denton", population: 139869 },
          { name: "Waco", slug: "waco", population: 138486 },
          { name: "Round Rock", slug: "round-rock", population: 133372 },
          { name: "Odessa", slug: "odessa", population: 123334 },
          { name: "Richardson", slug: "richardson", population: 121323 },
          { name: "Lewisville", slug: "lewisville", population: 111822 }
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
          { name: "Albany", slug: "albany", population: 97856 },
          { name: "New Rochelle", slug: "new-rochelle", population: 79726 },
          { name: "Mount Vernon", slug: "mount-vernon", population: 68224 },
          { name: "Schenectady", slug: "schenectady", population: 65273 },
          { name: "Utica", slug: "utica", population: 60651 },
          { name: "White Plains", slug: "white-plains", population: 58109 },
          { name: "Hempstead", slug: "hempstead", population: 55113 },
          { name: "Troy", slug: "troy", population: 49170 },
          { name: "Niagara Falls", slug: "niagara-falls", population: 47978 },
          { name: "Binghamton", slug: "binghamton", population: 44819 },
          { name: "Freeport", slug: "freeport", population: 43713 },
          { name: "Valley Stream", slug: "valley-stream", population: 37659 }
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
          { name: "Hialeah", slug: "hialeah", population: 233394 },
          { name: "Tallahassee", slug: "tallahassee", population: 194500 },
          { name: "Fort Lauderdale", slug: "fort-lauderdale", population: 182760 },
          { name: "Port St. Lucie", slug: "port-st-lucie", population: 195248 },
          { name: "Cape Coral", slug: "cape-coral", population: 194016 },
          { name: "Pembroke Pines", slug: "pembroke-pines", population: 171178 },
          { name: "Hollywood", slug: "hollywood", population: 153067 },
          { name: "Miramar", slug: "miramar", population: 144186 },
          { name: "Gainesville", slug: "gainesville", population: 141085 },
          { name: "Coral Springs", slug: "coral-springs", population: 134394 },
          { name: "Miami Gardens", slug: "miami-gardens", population: 111640 },
          { name: "Clearwater", slug: "clearwater", population: 117292 },
          { name: "Palm Bay", slug: "palm-bay", population: 119760 },
          { name: "West Palm Beach", slug: "west-palm-beach", population: 117415 },
          { name: "Pompano Beach", slug: "pompano-beach", population: 112046 }
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
          { name: "Naperville", slug: "naperville", population: 149540 },
          { name: "Springfield", slug: "springfield", population: 114230 },
          { name: "Peoria", slug: "peoria", population: 113150 },
          { name: "Elgin", slug: "elgin", population: 114797 },
          { name: "Waukegan", slug: "waukegan", population: 89321 },
          { name: "Cicero", slug: "cicero", population: 85616 },
          { name: "Champaign", slug: "champaign", population: 88302 }
        ]
      },
      {
        name: "Pennsylvania",
        slug: "pennsylvania",
        cities: [
          { name: "Philadelphia", slug: "philadelphia", population: 1584064 },
          { name: "Pittsburgh", slug: "pittsburgh", population: 300286 },
          { name: "Allentown", slug: "allentown", population: 125845 },
          { name: "Erie", slug: "erie", population: 94831 },
          { name: "Reading", slug: "reading", population: 95112 },
          { name: "Scranton", slug: "scranton", population: 76328 },
          { name: "Bethlehem", slug: "bethlehem", population: 75781 },
          { name: "Lancaster", slug: "lancaster", population: 59322 },
          { name: "Harrisburg", slug: "harrisburg", population: 49528 }
        ]
      },
      {
        name: "Ohio",
        slug: "ohio",
        cities: [
          { name: "Columbus", slug: "columbus", population: 898553 },
          { name: "Cleveland", slug: "cleveland", population: 383793 },
          { name: "Cincinnati", slug: "cincinnati", population: 309317 },
          { name: "Toledo", slug: "toledo", population: 270871 },
          { name: "Akron", slug: "akron", population: 190469 },
          { name: "Dayton", slug: "dayton", population: 137644 },
          { name: "Parma", slug: "parma", population: 78623 },
          { name: "Canton", slug: "canton", population: 70872 },
          { name: "Youngstown", slug: "youngstown", population: 60068 }
        ]
      },
      {
        name: "Georgia",
        slug: "georgia",
        cities: [
          { name: "Atlanta", slug: "atlanta", population: 498715 },
          { name: "Augusta", slug: "augusta", population: 197166 },
          { name: "Columbus", slug: "columbus-ga", population: 194058 },
          { name: "Savannah", slug: "savannah", population: 147780 },
          { name: "Athens", slug: "athens", population: 127315 },
          { name: "Sandy Springs", slug: "sandy-springs", population: 108080 },
          { name: "Roswell", slug: "roswell", population: 94884 },
          { name: "Macon", slug: "macon", population: 153159 },
          { name: "Johns Creek", slug: "johns-creek", population: 84551 },
          { name: "Albany", slug: "albany-ga", population: 72634 }
        ]
      },
      {
        name: "North Carolina",
        slug: "north-carolina",
        cities: [
          { name: "Charlotte", slug: "charlotte", population: 885708 },
          { name: "Raleigh", slug: "raleigh", population: 474069 },
          { name: "Greensboro", slug: "greensboro", population: 296710 },
          { name: "Durham", slug: "durham", population: 283506 },
          { name: "Winston-Salem", slug: "winston-salem", population: 249545 },
          { name: "Fayetteville", slug: "fayetteville", population: 211657 },
          { name: "Cary", slug: "cary", population: 174721 },
          { name: "Wilmington", slug: "wilmington", population: 123784 },
          { name: "High Point", slug: "high-point", population: 114059 },
          { name: "Greenville", slug: "greenville", population: 87521 }
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
          { name: "Lansing", slug: "lansing", population: 118210 },
          { name: "Flint", slug: "flint", population: 95538 },
          { name: "Dearborn", slug: "dearborn", population: 109976 },
          { name: "Livonia", slug: "livonia", population: 95535 }
        ]
      },
      {
        name: "Arizona",
        slug: "arizona",
        cities: [
          { name: "Phoenix", slug: "phoenix", population: 1608139 },
          { name: "Tucson", slug: "tucson", population: 548073 },
          { name: "Mesa", slug: "mesa", population: 504258 },
          { name: "Chandler", slug: "chandler", population: 275987 },
          { name: "Glendale", slug: "glendale-az", population: 248325 },
          { name: "Scottsdale", slug: "scottsdale", population: 258069 },
          { name: "Gilbert", slug: "gilbert", population: 267918 },
          { name: "Tempe", slug: "tempe", population: 195805 },
          { name: "Peoria", slug: "peoria-az", population: 179872 },
          { name: "Surprise", slug: "surprise", population: 147965 }
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
          { name: "Murfreesboro", slug: "murfreesboro", population: 152769 }
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
          { name: "Fishers", slug: "fishers", population: 95310 }
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
          { name: "Independence", slug: "independence", population: 123011 }
        ]
      },
      {
        name: "Maryland",
        slug: "maryland",
        cities: [
          { name: "Baltimore", slug: "baltimore", population: 585708 },
          { name: "Frederick", slug: "frederick", population: 78171 },
          { name: "Rockville", slug: "rockville", population: 68847 },
          { name: "Gaithersburg", slug: "gaithersburg", population: 69657 },
          { name: "Bowie", slug: "bowie", population: 58329 }
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
          { name: "Racine", slug: "racine", population: 77816 }
        ]
      },
      {
        name: "Colorado",
        slug: "colorado",
        cities: [
          { name: "Denver", slug: "denver", population: 715522 },
          { name: "Colorado Springs", slug: "colorado-springs", population: 478961 },
          { name: "Aurora", slug: "aurora-co", population: 379289 },
          { name: "Fort Collins", slug: "fort-collins", population: 169810 },
          { name: "Lakewood", slug: "lakewood", population: 155984 },
          { name: "Thornton", slug: "thornton", population: 141867 }
        ]
      },
      {
        name: "Minnesota",
        slug: "minnesota",
        cities: [
          { name: "Minneapolis", slug: "minneapolis", population: 429954 },
          { name: "St. Paul", slug: "st-paul", population: 311527 },
          { name: "Rochester", slug: "rochester-mn", population: 121395 },
          { name: "Duluth", slug: "duluth", population: 86697 },
          { name: "Bloomington", slug: "bloomington-mn", population: 89987 }
        ]
      },
      {
        name: "South Carolina",
        slug: "south-carolina",
        cities: [
          { name: "Charleston", slug: "charleston", population: 150227 },
          { name: "Columbia", slug: "columbia-sc", population: 137300 },
          { name: "North Charleston", slug: "north-charleston", population: 114852 },
          { name: "Mount Pleasant", slug: "mount-pleasant", population: 90801 },
          { name: "Rock Hill", slug: "rock-hill", population: 74410 }
        ]
      },
      {
        name: "Alabama",
        slug: "alabama",
        cities: [
          { name: "Birmingham", slug: "birmingham-al", population: 200733 },
          { name: "Montgomery", slug: "montgomery", population: 200602 },
          { name: "Mobile", slug: "mobile", population: 187041 },
          { name: "Huntsville", slug: "huntsville", population: 215006 },
          { name: "Tuscaloosa", slug: "tuscaloosa", population: 101129 }
        ]
      },
      {
        name: "Louisiana",
        slug: "louisiana",
        cities: [
          { name: "New Orleans", slug: "new-orleans", population: 383997 },
          { name: "Baton Rouge", slug: "baton-rouge", population: 221599 },
          { name: "Shreveport", slug: "shreveport", population: 187593 },
          { name: "Lafayette", slug: "lafayette", population: 126674 },
          { name: "Lake Charles", slug: "lake-charles", population: 84872 }
        ]
      },
      {
        name: "Kentucky",
        slug: "kentucky",
        cities: [
          { name: "Louisville", slug: "louisville", population: 617638 },
          { name: "Lexington", slug: "lexington", population: 322570 },
          { name: "Bowling Green", slug: "bowling-green", population: 72294 },
          { name: "Owensboro", slug: "owensboro", population: 60183 },
          { name: "Covington", slug: "covington", population: 40181 }
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
          { name: "Hillsboro", slug: "hillsboro", population: 106447 }
        ]
      },
      {
        name: "Oklahoma",
        slug: "oklahoma",
        cities: [
          { name: "Oklahoma City", slug: "oklahoma-city", population: 695677 },
          { name: "Tulsa", slug: "tulsa", population: 413066 },
          { name: "Norman", slug: "norman", population: 128026 },
          { name: "Broken Arrow", slug: "broken-arrow", population: 113540 },
          { name: "Lawton", slug: "lawton", population: 93535 }
        ]
      },
      {
        name: "Connecticut",
        slug: "connecticut",
        cities: [
          { name: "Bridgeport", slug: "bridgeport", population: 148654 },
          { name: "New Haven", slug: "new-haven", population: 134023 },
          { name: "Hartford", slug: "hartford", population: 121054 },
          { name: "Stamford", slug: "stamford", population: 135470 },
          { name: "Waterbury", slug: "waterbury", population: 114403 }
        ]
      },
      {
        name: "Utah",
        slug: "utah",
        cities: [
          { name: "Salt Lake City", slug: "salt-lake-city", population: 200567 },
          { name: "West Valley City", slug: "west-valley-city", population: 140230 },
          { name: "Provo", slug: "provo", population: 115162 },
          { name: "West Jordan", slug: "west-jordan", population: 116961 },
          { name: "Orem", slug: "orem", population: 98129 }
        ]
      },
      {
        name: "Iowa",
        slug: "iowa",
        cities: [
          { name: "Des Moines", slug: "des-moines", population: 214133 },
          { name: "Cedar Rapids", slug: "cedar-rapids", population: 137710 },
          { name: "Davenport", slug: "davenport", population: 101724 },
          { name: "Sioux City", slug: "sioux-city", population: 85797 },
          { name: "Iowa City", slug: "iowa-city", population: 74398 }
        ]
      },
      {
        name: "Arkansas",
        slug: "arkansas",
        cities: [
          { name: "Little Rock", slug: "little-rock", population: 198541 },
          { name: "Fort Smith", slug: "fort-smith", population: 89142 },
          { name: "Fayetteville", slug: "fayetteville-ar", population: 93949 },
          { name: "Springdale", slug: "springdale", population: 84161 },
          { name: "Jonesboro", slug: "jonesboro", population: 78576 }
        ]
      },
      {
        name: "Kansas",
        slug: "kansas",
        cities: [
          { name: "Wichita", slug: "wichita", population: 397532 },
          { name: "Overland Park", slug: "overland-park", population: 197238 },
          { name: "Kansas City", slug: "kansas-city-ks", population: 156607 },
          { name: "Olathe", slug: "olathe", population: 140545 },
          { name: "Topeka", slug: "topeka", population: 125904 }
        ]
      },
      {
        name: "Mississippi",
        slug: "mississippi",
        cities: [
          { name: "Jackson", slug: "jackson", population: 153701 },
          { name: "Gulfport", slug: "gulfport", population: 72926 },
          { name: "Southaven", slug: "southaven", population: 54648 },
          { name: "Hattiesburg", slug: "hattiesburg", population: 48730 },
          { name: "Biloxi", slug: "biloxi", population: 49449 }
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
          { name: "Sparks", slug: "sparks", population: 105006 }
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
          { name: "Roswell", slug: "roswell", population: 48611 }
        ]
      },
      {
        name: "West Virginia",
        slug: "west-virginia",
        cities: [
          { name: "Charleston", slug: "charleston-wv", population: 46536 },
          { name: "Huntington", slug: "huntington-wv", population: 45325 },
          { name: "Morgantown", slug: "morgantown", population: 30347 },
          { name: "Parkersburg", slug: "parkersburg", population: 29749 },
          { name: "Wheeling", slug: "wheeling", population: 27062 }
        ]
      },
      {
        name: "Nebraska",
        slug: "nebraska",
        cities: [
          { name: "Omaha", slug: "omaha", population: 486051 },
          { name: "Lincoln", slug: "lincoln", population: 295178 },
          { name: "Bellevue", slug: "bellevue", population: 64176 },
          { name: "Grand Island", slug: "grand-island", population: 53131 },
          { name: "Kearney", slug: "kearney", population: 33790 }
        ]
      },
      {
        name: "Idaho",
        slug: "idaho",
        cities: [
          { name: "Boise", slug: "boise", population: 235684 },
          { name: "Meridian", slug: "meridian", population: 117635 },
          { name: "Nampa", slug: "nampa", population: 100200 },
          { name: "Idaho Falls", slug: "idaho-falls", population: 64818 },
          { name: "Pocatello", slug: "pocatello", population: 56637 }
        ]
      },
      {
        name: "Hawaii",
        slug: "hawaii",
        cities: [
          { name: "Honolulu", slug: "honolulu", population: 350964 },
          { name: "East Honolulu", slug: "east-honolulu", population: 50922 },
          { name: "Pearl City", slug: "pearl-city", population: 45295 },
          { name: "Hilo", slug: "hilo", population: 45703 },
          { name: "Kailua", slug: "kailua", population: 38635 }
        ]
      },
      {
        name: "Maine",
        slug: "maine",
        cities: [
          { name: "Portland", slug: "portland-me", population: 68408 },
          { name: "Lewiston", slug: "lewiston", population: 36221 },
          { name: "Bangor", slug: "bangor", population: 31753 },
          { name: "South Portland", slug: "south-portland", population: 25665 },
          { name: "Auburn", slug: "auburn-me", population: 24061 }
        ]
      },
      {
        name: "New Hampshire",
        slug: "new-hampshire",
        cities: [
          { name: "Manchester", slug: "manchester-nh", population: 115644 },
          { name: "Nashua", slug: "nashua", population: 91322 },
          { name: "Concord", slug: "concord", population: 43976 },
          { name: "Derry", slug: "derry", population: 34317 },
          { name: "Rochester", slug: "rochester-nh", population: 32492 }
        ]
      },
      {
        name: "Rhode Island",
        slug: "rhode-island",
        cities: [
          { name: "Providence", slug: "providence", population: 190934 },
          { name: "Warwick", slug: "warwick", population: 82823 },
          { name: "Cranston", slug: "cranston", population: 82934 },
          { name: "Pawtucket", slug: "pawtucket", population: 75604 },
          { name: "East Providence", slug: "east-providence", population: 47408 }
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
          { name: "Butte", slug: "butte", population: 34494 }
        ]
      },
      {
        name: "Delaware",
        slug: "delaware",
        cities: [
          { name: "Wilmington", slug: "wilmington-de", population: 70898 },
          { name: "Dover", slug: "dover", population: 38079 },
          { name: "Newark", slug: "newark-de", population: 31454 },
          { name: "Middletown", slug: "middletown-de", population: 23192 },
          { name: "Bear", slug: "bear", population: 21397 }
        ]
      },
      {
        name: "South Dakota",
        slug: "south-dakota",
        cities: [
          { name: "Sioux Falls", slug: "sioux-falls", population: 192517 },
          { name: "Rapid City", slug: "rapid-city", population: 79128 },
          { name: "Aberdeen", slug: "aberdeen-sd", population: 28495 },
          { name: "Brookings", slug: "brookings", population: 24479 },
          { name: "Watertown", slug: "watertown-sd", population: 22655 }
        ]
      },
      {
        name: "North Dakota",
        slug: "north-dakota",
        cities: [
          { name: "Fargo", slug: "fargo", population: 125990 },
          { name: "Bismarck", slug: "bismarck", population: 73622 },
          { name: "Grand Forks", slug: "grand-forks", population: 59166 },
          { name: "Minot", slug: "minot", population: 48377 },
          { name: "West Fargo", slug: "west-fargo", population: 38626 }
        ]
      },
      {
        name: "Alaska",
        slug: "alaska",
        cities: [
          { name: "Anchorage", slug: "anchorage", population: 291247 },
          { name: "Fairbanks", slug: "fairbanks", population: 32515 },
          { name: "Juneau", slug: "juneau", population: 32255 },
          { name: "Sitka", slug: "sitka", population: 8458 },
          { name: "Ketchikan", slug: "ketchikan", population: 8192 }
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
          { name: "Montpelier", slug: "montpelier", population: 8074 }
        ]
      },
      {
        name: "Wyoming",
        slug: "wyoming",
        cities: [
          { name: "Cheyenne", slug: "cheyenne", population: 65132 },
          { name: "Casper", slug: "casper", population: 59038 },
          { name: "Laramie", slug: "laramie", population: 31407 },
          { name: "Gillette", slug: "gillette", population: 33403 },
          { name: "Rock Springs", slug: "rock-springs", population: 23526 }
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
          { name: "Nottingham", slug: "nottingham", population: 321000 },
          { name: "Leicester", slug: "leicester", population: 368600 },
          { name: "Coventry", slug: "coventry", population: 371521 },
          { name: "Hull", slug: "hull", population: 314018 },
          { name: "Bradford", slug: "bradford", population: 349561 },
          { name: "Stoke-on-Trent", slug: "stoke-on-trent", population: 258366 },
          { name: "Wolverhampton", slug: "wolverhampton", population: 263357 },
          { name: "Plymouth", slug: "plymouth", population: 264695 },
          { name: "Derby", slug: "derby", population: 261400 },
          { name: "Southampton", slug: "southampton", population: 253651 },
          { name: "Portsmouth", slug: "portsmouth", population: 238137 },
          { name: "York", slug: "york", population: 153717 },
          { name: "Peterborough", slug: "peterborough", population: 215671 },
          { name: "Norwich", slug: "norwich", population: 143135 },
          { name: "Luton", slug: "luton", population: 225262 },
          { name: "Sunderland", slug: "sunderland", population: 174286 },
          { name: "Bournemouth", slug: "bournemouth", population: 183491 },
          { name: "Southend-on-Sea", slug: "southend-on-sea", population: 182463 },
          { name: "Swindon", slug: "swindon", population: 230046 },
          { name: "Huddersfield", slug: "huddersfield", population: 162949 },
          { name: "Oxford", slug: "oxford", population: 154600 },
          { name: "Poole", slug: "poole", population: 151500 },
          { name: "Middlesbrough", slug: "middlesbrough", population: 174700 },
          { name: "Blackpool", slug: "blackpool", population: 139305 },
          { name: "Bolton", slug: "bolton", population: 194189 },
          { name: "Ipswich", slug: "ipswich", population: 144957 },
          { name: "Preston", slug: "preston", population: 147800 },
          { name: "Stockport", slug: "stockport", population: 137130 },
          { name: "Rotherham", slug: "rotherham", population: 109691 },
          { name: "Cambridge", slug: "cambridge", population: 145674 },
          { name: "Watford", slug: "watford", population: 102246 },
          { name: "Slough", slug: "slough", population: 164793 },
          { name: "Exeter", slug: "exeter", population: 130709 },
          { name: "Eastbourne", slug: "eastbourne", population: 109400 },
          { name: "Chelmsford", slug: "chelmsford", population: 181763 },
          { name: "Gloucester", slug: "gloucester", population: 136362 },
          { name: "Salford", slug: "salford", population: 254408 },
          { name: "Bedford", slug: "bedford", population: 87590 },
          { name: "Chesterfield", slug: "chesterfield", population: 88483 },
          { name: "Oldham", slug: "oldham", population: 96555 },
          { name: "Warrington", slug: "warrington", population: 210014 },
          { name: "Northampton", slug: "northampton", population: 249093 }
        ]
      },
      {
        name: "Scotland",
        slug: "scotland",
        cities: [
          { name: "Glasgow", slug: "glasgow", population: 635000 },
          { name: "Edinburgh", slug: "edinburgh", population: 540000 },
          { name: "Aberdeen", slug: "aberdeen", population: 198000 },
          { name: "Dundee", slug: "dundee", population: 148000 },
          { name: "Stirling", slug: "stirling", population: 37910 },
          { name: "Perth", slug: "perth-scotland", population: 47430 },
          { name: "Inverness", slug: "inverness", population: 70000 },
          { name: "Paisley", slug: "paisley", population: 77270 },
          { name: "East Kilbride", slug: "east-kilbride", population: 75310 },
          { name: "Livingston", slug: "livingston", population: 57040 },
          { name: "Hamilton", slug: "hamilton-scotland", population: 54480 },
          { name: "Kirkcaldy", slug: "kirkcaldy", population: 49460 },
          { name: "Dunfermline", slug: "dunfermline", population: 58480 },
          { name: "Ayr", slug: "ayr", population: 46490 },
          { name: "Kilmarnock", slug: "kilmarnock", population: 46350 },
          { name: "Greenock", slug: "greenock", population: 44248 }
        ]
      },
      {
        name: "Wales",
        slug: "wales", 
        cities: [
          { name: "Cardiff", slug: "cardiff", population: 481000 },
          { name: "Swansea", slug: "swansea", population: 246000 },
          { name: "Newport", slug: "newport", population: 159000 },
          { name: "Wrexham", slug: "wrexham", population: 135132 },
          { name: "Barry", slug: "barry", population: 62747 },
          { name: "Caerphilly", slug: "caerphilly", population: 41402 },
          { name: "Bridgend", slug: "bridgend", population: 49597 },
          { name: "Neath", slug: "neath", population: 50658 },
          { name: "Port Talbot", slug: "port-talbot", population: 37276 },
          { name: "Cwmbran", slug: "cwmbran", population: 48535 },
          { name: "Llanelli", slug: "llanelli", population: 49591 },
          { name: "Rhondda", slug: "rhondda", population: 62545 },
          { name: "Merthyr Tydfil", slug: "merthyr-tydfil", population: 43820 },
          { name: "Pontypridd", slug: "pontypridd", population: 32694 }
        ]
      },
      {
        name: "Northern Ireland",
        slug: "northern-ireland",
        cities: [
          { name: "Belfast", slug: "belfast", population: 345000 },
          { name: "Derry", slug: "derry", population: 110000 },
          { name: "Lisburn", slug: "lisburn", population: 45370 },
          { name: "Newtownabbey", slug: "newtownabbey", population: 65646 },
          { name: "Bangor", slug: "bangor-ni", population: 61011 },
          { name: "Craigavon", slug: "craigavon", population: 68890 },
          { name: "Castlereagh", slug: "castlereagh", population: 67242 },
          { name: "Ballymena", slug: "ballymena", population: 31224 },
          { name: "Newry", slug: "newry", population: 29946 },
          { name: "Carrickfergus", slug: "carrickfergus", population: 40419 }
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
          { name: "London", slug: "london-ontario", population: 422324 },
          { name: "Markham", slug: "markham", population: 338503 },
          { name: "Vaughan", slug: "vaughan", population: 323103 },
          { name: "Kitchener", slug: "kitchener", population: 256885 },
          { name: "Windsor", slug: "windsor", population: 229660 },
          { name: "Richmond Hill", slug: "richmond-hill", population: 195022 },
          { name: "Oakville", slug: "oakville", population: 213759 },
          { name: "Burlington", slug: "burlington", population: 186948 },
          { name: "Oshawa", slug: "oshawa", population: 166000 },
          { name: "Barrie", slug: "barrie", population: 154676 },
          { name: "St. Catharines", slug: "st-catharines", population: 140370 },
          { name: "Cambridge", slug: "cambridge-ontario", population: 138479 },
          { name: "Waterloo", slug: "waterloo", population: 121436 },
          { name: "Guelph", slug: "guelph", population: 131794 },
          { name: "Sudbury", slug: "sudbury", population: 166004 },
          { name: "Thunder Bay", slug: "thunder-bay", population: 123258 },
          { name: "Kingston", slug: "kingston", population: 132485 },
          { name: "Whitby", slug: "whitby", population: 138501 },
          { name: "Chatham", slug: "chatham", population: 103671 },
          { name: "Ajax", slug: "ajax", population: 126666 }
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
          { name: "Longueuil", slug: "longueuil", population: 254483 },
          { name: "Sherbrooke", slug: "sherbrooke", population: 172950 },
          { name: "Levis", slug: "levis", population: 149683 },
          { name: "Saguenay", slug: "saguenay", population: 144746 },
          { name: "Trois-Rivieres", slug: "trois-rivieres", population: 139163 },
          { name: "Terrebonne", slug: "terrebonne", population: 119944 },
          { name: "Saint-Jean-sur-Richelieu", slug: "saint-jean-sur-richelieu", population: 98036 },
          { name: "Repentigny", slug: "repentigny", population: 84965 },
          { name: "Brossard", slug: "brossard", population: 91525 },
          { name: "Drummondville", slug: "drummondville", population: 79264 },
          { name: "Saint-Jerome", slug: "saint-jerome", population: 79383 },
          { name: "Granby", slug: "granby", population: 68352 }
        ]
      },
      {
        name: "British Columbia",
        slug: "british-columbia",
        cities: [
          { name: "Vancouver", slug: "vancouver", population: 675218 },
          { name: "Surrey", slug: "surrey", population: 568322 },
          { name: "Burnaby", slug: "burnaby", population: 249125 },
          { name: "Richmond", slug: "richmond", population: 209937 },
          { name: "Abbotsford", slug: "abbotsford", population: 153569 },
          { name: "Coquitlam", slug: "coquitlam", population: 148625 },
          { name: "Kelowna", slug: "kelowna", population: 144576 },
          { name: "Victoria", slug: "victoria", population: 91867 },
          { name: "Saanich", slug: "saanich", population: 117735 },
          { name: "Delta", slug: "delta", population: 108455 },
          { name: "Kamloops", slug: "kamloops", population: 97385 },
          { name: "Langley", slug: "langley", population: 132603 },
          { name: "North Vancouver", slug: "north-vancouver", population: 88168 },
          { name: "West Vancouver", slug: "west-vancouver", population: 42473 },
          { name: "Prince George", slug: "prince-george", population: 86622 },
          { name: "Nanaimo", slug: "nanaimo", population: 99863 },
          { name: "Chilliwack", slug: "chilliwack", population: 93203 },
          { name: "Vernon", slug: "vernon", population: 44519 },
          { name: "Penticton", slug: "penticton", population: 37570 }
        ]
      },
      {
        name: "Alberta",
        slug: "alberta",
        cities: [
          { name: "Calgary", slug: "calgary", population: 1336000 },
          { name: "Edmonton", slug: "edmonton", population: 981280 },
          { name: "Red Deer", slug: "red-deer", population: 100418 },
          { name: "Lethbridge", slug: "lethbridge", population: 101482 },
          { name: "St. Albert", slug: "st-albert", population: 68224 },
          { name: "Medicine Hat", slug: "medicine-hat", population: 63260 },
          { name: "Grande Prairie", slug: "grande-prairie", population: 71524 },
          { name: "Airdrie", slug: "airdrie", population: 74100 },
          { name: "Spruce Grove", slug: "spruce-grove", population: 40742 },
          { name: "Leduc", slug: "leduc", population: 33032 },
          { name: "Lloydminster", slug: "lloydminster", population: 19645 },
          { name: "Camrose", slug: "camrose", population: 18742 },
          { name: "Fort McMurray", slug: "fort-mcmurray", population: 72917 }
        ]
      },
      {
        name: "Manitoba",
        slug: "manitoba",
        cities: [
          { name: "Winnipeg", slug: "winnipeg", population: 749534 },
          { name: "Brandon", slug: "brandon", population: 51313 },
          { name: "Steinbach", slug: "steinbach", population: 17806 },
          { name: "Thompson", slug: "thompson", population: 13678 },
          { name: "Portage la Prairie", slug: "portage-la-prairie", population: 13304 },
          { name: "Winkler", slug: "winkler", population: 12660 }
        ]
      },
      {
        name: "Saskatchewan",
        slug: "saskatchewan",
        cities: [
          { name: "Saskatoon", slug: "saskatoon", population: 317480 },
          { name: "Regina", slug: "regina", population: 249217 },
          { name: "Prince Albert", slug: "prince-albert", population: 37756 },
          { name: "Moose Jaw", slug: "moose-jaw", population: 35073 },
          { name: "Swift Current", slug: "swift-current", population: 17882 },
          { name: "Yorkton", slug: "yorkton", population: 19643 },
          { name: "North Battleford", slug: "north-battleford", population: 14315 }
        ]
      },
      {
        name: "Nova Scotia",
        slug: "nova-scotia",
        cities: [
          { name: "Halifax", slug: "halifax", population: 439819 },
          { name: "Dartmouth", slug: "dartmouth", population: 101343 },
          { name: "Sydney", slug: "sydney-ns", population: 94285 },
          { name: "Truro", slug: "truro", population: 13172 },
          { name: "New Glasgow", slug: "new-glasgow", population: 9075 },
          { name: "Glace Bay", slug: "glace-bay", population: 15717 }
        ]
      },
      {
        name: "New Brunswick",
        slug: "new-brunswick",
        cities: [
          { name: "Moncton", slug: "moncton", population: 79470 },
          { name: "Saint John", slug: "saint-john", population: 70063 },
          { name: "Fredericton", slug: "fredericton", population: 63116 },
          { name: "Dieppe", slug: "dieppe", population: 28114 },
          { name: "Riverview", slug: "riverview", population: 20584 },
          { name: "Miramichi", slug: "miramichi", population: 17537 }
        ]
      },
      {
        name: "Newfoundland and Labrador",
        slug: "newfoundland-and-labrador",
        cities: [
          { name: "St. John's", slug: "st-johns", population: 114434 },
          { name: "Mount Pearl", slug: "mount-pearl", population: 22957 },
          { name: "Corner Brook", slug: "corner-brook", population: 19806 },
          { name: "Conception Bay South", slug: "conception-bay-south", population: 26199 },
          { name: "Paradise", slug: "paradise-nl", population: 21389 }
        ]
      },
      {
        name: "Prince Edward Island",
        slug: "prince-edward-island",
        cities: [
          { name: "Charlottetown", slug: "charlottetown", population: 38809 },
          { name: "Summerside", slug: "summerside", population: 16001 },
          { name: "Stratford", slug: "stratford-pei", population: 10519 },
          { name: "Cornwall", slug: "cornwall-pei", population: 5348 }
        ]
      },
      {
        name: "Northwest Territories",
        slug: "northwest-territories",
        cities: [
          { name: "Yellowknife", slug: "yellowknife", population: 20834 },
          { name: "Hay River", slug: "hay-river", population: 3528 },
          { name: "Inuvik", slug: "inuvik", population: 3243 },
          { name: "Fort Smith", slug: "fort-smith", population: 2542 }
        ]
      },
      {
        name: "Yukon",
        slug: "yukon",
        cities: [
          { name: "Whitehorse", slug: "whitehorse", population: 28201 },
          { name: "Dawson City", slug: "dawson-city", population: 1375 },
          { name: "Watson Lake", slug: "watson-lake", population: 802 }
        ]
      },
      {
        name: "Nunavut",
        slug: "nunavut",
        cities: [
          { name: "Iqaluit", slug: "iqaluit", population: 7429 },
          { name: "Rankin Inlet", slug: "rankin-inlet", population: 2577 },
          { name: "Arviat", slug: "arviat", population: 2657 }
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

// SEO Keywords for different variations - Comprehensive competitor-based targeting
export const seoKeywords = [
  // Core Franchise Lead Generation Keywords
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
  
  // Location-based modifiers (Near Me variations)
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
  "franchise development services near me",
  
  // Long-tail competitive keywords
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
  
  // High-intent buyer keywords
  "hire franchise marketing agency",
  "franchise marketing agency cost",
  "franchise lead generation pricing",
  "franchise marketing agency reviews",
  "franchise development consultant rates",
  "best franchise marketing firm",
  "top franchise lead generation companies",
  "franchise marketing agency comparison",
  "franchise lead generation ROI",
  "franchise marketing budget",
  
  // Industry-specific variations
  "restaurant franchise marketing",
  "retail franchise lead generation",
  "service franchise marketing agency",
  "food franchise lead generation",
  "fitness franchise marketing",
  "automotive franchise lead generation",
  "healthcare franchise marketing",
  "real estate franchise lead generation", 
  "education franchise marketing",
  "cleaning franchise lead generation",
  
  // Service-specific long-tail keywords
  "franchise lead qualification services",
  "franchise prospect nurturing",
  "franchise sales funnel optimization",
  "franchise conversion rate optimization",
  "franchise marketing automation",
  "franchise CRM implementation",
  "franchise territory development",
  "franchise recruitment marketing", 
  "franchise discovery day marketing",
  "franchise financing assistance",
  
  // Competitive positioning keywords
  "alternative to franchise marketing agencies",
  "better than franchise consultants",
  "affordable franchise marketing services",
  "enterprise franchise lead generation",
  "multi-unit franchise marketing",
  "international franchise development",
  "franchise brand positioning",
  "franchise market penetration",
  
  // Problem-solving keywords
  "increase franchise leads",
  "improve franchise sales",
  "franchise marketing problems",
  "franchise lead shortage solutions",
  "franchise growth challenges",
  "franchise territory expansion",
  "franchise brand awareness",
  "franchise competitive advantage",
  
  // Technology-focused keywords
  "digital franchise marketing",
  "franchise online lead generation",
  "franchise social media marketing",
  "franchise SEO services",
  "franchise PPC management",
  "franchise website optimization",
  "franchise email marketing",
  "franchise content marketing",
  "franchise video marketing",
  "franchise mobile marketing",
  
  // Outcome-focused keywords
  "guaranteed franchise leads",
  "qualified franchise prospects",
  "franchise sales increase",
  "franchise growth acceleration", 
  "franchise territory fill rate",
  "franchise development success",
  "franchise marketing results",
  "franchise lead generation metrics",
  
  // Urgency-based keywords
  "immediate franchise leads",
  "fast franchise development",
  "quick franchise growth",
  "urgent franchise marketing",
  "emergency franchise consultation",
  
  // Authority-based keywords
  "certified franchise marketing experts",
  "experienced franchise consultants",
  "proven franchise lead generation",
  "award winning franchise agency",
  "recognized franchise specialists"
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

// Broad marketing keywords that people actually search for
export const broadMarketingKeywords = [
  "marketing agency",
  "digital marketing agency",
  "lead generation agency",
  "franchise marketing agency",
  "best marketing agency",
  "top marketing agency",
  "marketing company",
  "digital marketing company",
  "lead generation company",
  "franchise marketing company",
  "marketing services",
  "digital marketing services",
  "lead generation services",
  "marketing consultant",
  "franchise consultant",
  "business development agency",
  "business growth agency",
  "franchise business agency",
  "franchise growth agency",
  "franchise expansion services",
  
  // USA-focused keywords (perfect match)
  "best franchise marketing agency in usa",
  "top franchise marketing agency in usa",
  "franchise marketing agency usa",
  "franchise marketing agency in united states",
  "best franchise marketing agency united states",
  "top franchise marketing agency america",
  "franchise digital marketing agency usa",
  "best franchise digital marketing agency in usa",
  "franchise marketing company usa",
  "franchise marketing services usa",
  "franchise lead generation agency usa",
  "franchise marketing experts usa",
  "franchise marketing specialists usa",
  "usa franchise marketing agency",
  "united states franchise marketing agency",
  "american franchise marketing agency",
  "nationwide franchise marketing agency",
  "us franchise marketing agency",
  
  // USA-focused with variations
  "franchise marketing agency in the usa",
  "franchise marketing agency in the united states",
  "best franchise marketing in usa",
  "top franchise marketing in usa",
  "franchise marketing services in usa",
  "franchise marketing agency across usa",
  "franchise lead generation in usa",
  "franchise advertising agency usa",
  "franchise branding agency usa",
  "franchise development agency usa",
  
  // Common misspellings (USA focus)
  "best franchise mareting agency in usa",
  "best franchise marketing agenccy in usa",
  "best franchise marketting agency in usa",
  "franchise marketing agancy usa",
  "franchise digital amrketing agency in usa",
  "franchise digital marketing ageency usa",
  "best francise marketing agency usa",
  "franchise marketng agency usa",
  "franchise maketing agency in usa",
  "franshise marketing agency usa",
  
  // Service + USA combinations
  "franchise seo agency usa",
  "franchise ppc agency usa",
  "franchise social media marketing usa",
  "franchise content marketing agency usa",
  "franchise email marketing services usa",
  "franchise web design agency usa",
  "franchise advertising services usa",
  "franchise brand building usa",
  
  // Competitive positioning USA
  "affordable franchise marketing agency usa",
  "enterprise franchise marketing agency usa",
  "b2b franchise marketing agency usa",
  "full service franchise marketing agency usa",
  "integrated franchise marketing agency usa",
  "strategic franchise marketing agency usa",
  
  // Location-specific USA keywords
  "franchise marketing agency near me",
  "local franchise marketing agency usa",
  "franchise marketing agency servicing usa",
  "national franchise marketing agency",
  "coast to coast franchise marketing",
  
  // Industry leader keywords USA
  "leading franchise marketing agency usa",
  "premier franchise marketing agency usa",
  "award winning franchise marketing agency usa",
  "top rated franchise marketing agency usa",
  "highly rated franchise marketing agency usa",
  "trusted franchise marketing agency usa",
  "proven franchise marketing agency usa",
  "established franchise marketing agency usa",
  
  // Results-focused USA keywords
  "franchise lead generation experts usa",
  "franchise growth marketing agency usa",
  "franchise sales marketing agency usa",
  "franchise roi marketing agency usa",
  "franchise marketing agency with proven results usa",
  
  // Size-specific USA keywords
  "small business franchise marketing usa",
  "multi unit franchise marketing usa",
  "emerging franchise marketing usa",
  "established franchise marketing usa",
  
  // Technology-focused USA
  "digital first franchise marketing agency usa",
  "data driven franchise marketing agency usa",
  "performance franchise marketing agency usa",
  "online franchise marketing agency usa",
  
  // Specific services USA
  "franchise website design usa",
  "franchise local marketing usa",
  "franchise territory marketing usa",
  "franchise recruitment marketing usa",
  "franchise discovery day marketing usa"
];