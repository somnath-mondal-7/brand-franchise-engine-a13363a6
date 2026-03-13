import { Navigate, useParams } from 'react-router-dom';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';
import { locationData } from '@/data/locations';
import NotFound from './NotFound';

const LocationPage = () => {
  const { country, location, city } = useParams();
  
  if (!country || !location) {
    return <NotFound />;
  }

// Find the country data with normalization for common variants
  const normalizeCountry = (c: string) => {
    const v = c.toLowerCase();
    if (v === 'us' || v === 'united-states' || v === 'united-states-of-america') return 'usa';
    return v;
  };
  const normalized = normalizeCountry(country);

  const countryData = locationData.find(c => 
    c.countryCode.toLowerCase() === normalized || c.country.toLowerCase().replace(/\s+/g, '-') === normalized
  );
  if (!countryData) {
    return <NotFound />;
  }

  const canonicalCountryCode = countryData.countryCode.toLowerCase();
  if (country.toLowerCase() !== canonicalCountryCode) {
    const redirectPath = city
      ? `/locations/${canonicalCountryCode}/${location}/${city}`
      : `/locations/${canonicalCountryCode}/${location}`;
    return <Navigate to={redirectPath} replace />;
  }

  // If city is provided, find the city data
  if (city) {
    const stateData = countryData.states.find(s => s.slug === location);
    if (!stateData) {
      return <NotFound />;
    }

    const cityData = stateData.cities.find(c => c.slug === city);
    if (!cityData) {
      return <NotFound />;
    }

    return (
      <LocationPageTemplate
        location={cityData.name}
        locationSlug={cityData.slug}
        state={stateData.name}
        stateSlug={stateData.slug}
        country={countryData.country}
        countryCode={countryData.countryCode}
        population={cityData.population}
        isCity={true}
        nearbyLocations={stateData.cities
          .filter(c => c.slug !== city)
          .slice(0, 3)
          .map(c => ({ name: c.name, slug: c.slug }))}
      />
    );
  }

  // Otherwise, find the state/region data
  const stateData = countryData.states.find(s => s.slug === location);
  if (!stateData) {
    return <NotFound />;
  }

  return (
    <LocationPageTemplate
      location={stateData.name}
      locationSlug={stateData.slug}
      country={countryData.country}
      countryCode={countryData.countryCode}
      isCity={false}
      nearbyLocations={stateData.cities
        .slice(0, 5)
        .map(c => ({ name: c.name, slug: c.slug }))}
    />
  );
};

export default LocationPage;
