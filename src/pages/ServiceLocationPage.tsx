import { useParams } from 'react-router-dom';
import { ServiceLocationTemplate } from '@/components/ServiceLocationTemplate';
import { locationData, broadMarketingKeywords } from '@/data/locations';
import NotFound from './NotFound';

const ServiceLocationPage = () => {
  const { service, country, location, city } = useParams();
  
  if (!service || !country || !location) {
    return <NotFound />;
  }

  // Convert slug back to service name
  const decodedService = service.replace(/-/g, ' ');
  
  // Check if service exists in our data
  const foundService = broadMarketingKeywords.find(k => 
    k.toLowerCase() === decodedService.toLowerCase()
  );

  if (!foundService) {
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
      <ServiceLocationTemplate
        service={foundService}
        location={cityData.name}
        state={stateData.name}
        country={countryData.country}
        countryCode={countryData.countryCode}
        population={cityData.population}
      />
    );
  }

  // Otherwise, find the state/region data
  const stateData = countryData.states.find(s => s.slug === location);
  if (!stateData) {
    return <NotFound />;
  }

  return (
    <ServiceLocationTemplate
      service={foundService}
      location={stateData.name}
      country={countryData.country}
      countryCode={countryData.countryCode}
    />
  );
};

export default ServiceLocationPage;
