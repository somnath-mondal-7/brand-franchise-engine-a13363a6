// Auto-generated from src/data/locations.ts
export const validLocations = {
  "ae": {
  },
  "au": {
  },
  "ca": {
  },
  "in": {
  },
  "kw": {
  },
  "uk": {
  },
  "usa": {
  },
};

export const validCountryCodes = new Set(Object.keys(validLocations));

export function isValidLocation(country, state, city) {
  const norm = country === "us" || country === "united-states" ? "usa" : country;
  const countryData = validLocations[norm];
  if (!countryData) return false;
  if (!state) return true;
  const stateData = countryData[state];
  if (!stateData) return false;
  if (!city) return true;
  return stateData.has(city);
}
