import { useParams } from 'react-router-dom';
import { ServiceLocationTemplate } from '@/components/ServiceLocationTemplate';
import { locationData, broadMarketingKeywords } from '@/data/locations';
import { slugify } from '@/utils/slugify';
import NotFound from './NotFound';

const ServiceLocationPage = () => {
  const { service, country, location, city } = useParams();
  
  if (!service || !country || !location) {
    return <NotFound />;
  }

  const serviceSlug = service.toLowerCase();

  // Check if service exists in our data (slug-safe, matches sitemap generation)
  const foundService = broadMarketingKeywords.find(k => slugify(k) === serviceSlug);

  if (!foundService) {
    return <NotFound />;
  }

  // Find the country data (normalize common variants)
  const normalizeCountry = (c: string) => {
    const v = c.toLowerCase();
    if (v === 'us' || v === 'united-states' || v === 'united-states-of-america') return 'usa';
    return v;
  };

  const normalizedCountry = normalizeCountry(country);

  const countryData = locationData.find(c => c.countryCode.toLowerCase() === normalizedCountry);
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
        locationSlug={cityData.slug}
        state={stateData.name}
        stateSlug={stateData.slug}
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
      locationSlug={stateData.slug}
      country={countryData.country}
      countryCode={countryData.countryCode}
    />
  );
};

export default ServiceLocationPage;
