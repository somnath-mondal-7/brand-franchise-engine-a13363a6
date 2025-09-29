import { useParams } from 'react-router-dom';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';
import { locationData } from '@/data/locations';
import NotFound from './NotFound';

const LocationPage = () => {
  const { country, location, city } = useParams();
  
  if (!country || !location) {
    return <NotFound />;
  }

  // Find the country data
  const countryData = locationData.find(c => c.countryCode.toLowerCase() === country.toLowerCase());
  if (!countryData) {
    return <NotFound />;
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
        state={stateData.name}
        country={countryData.country}
        countryCode={countryData.countryCode}
        population={cityData.population}
        isCity={true}
        nearbyLocations={stateData.cities.filter(c => c.slug !== city).map(c => c.name).slice(0, 3)}
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
      country={countryData.country}
      countryCode={countryData.countryCode}
      isCity={false}
      nearbyLocations={stateData.cities.map(c => c.name).slice(0, 5)}
    />
  );
};

export default LocationPage;
