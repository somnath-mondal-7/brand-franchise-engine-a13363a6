import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import { locationData } from '@/data/locations';

const CountryLocationPage: React.FC = () => {
  const { country } = useParams();

  if (!country) return <NotFound />;

  const countryData = locationData.find(
    (c) => c.countryCode.toLowerCase() === country.toLowerCase()
  );

  if (!countryData) return <NotFound />;

  const pageTitle = `Franchise Lead Generation in ${countryData.country} | FranchiseLeads HQ`;
  const pageDescription = `Top franchise lead generation agency serving ${countryData.country}. Explore state and city pages for tailored franchise marketing and development.`;
  const canonicalUrl = `https://www.franchiseleadshq.com/locations/${countryData.countryCode.toLowerCase()}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `Franchise Lead Generation in ${countryData.country}`,
            url: canonicalUrl,
            about: `State and city franchise lead generation pages in ${countryData.country}`,
            hasPart: countryData.states.map((s) => ({
              '@type': 'WebPage',
              name: `${s.name} Franchise Leads`,
              url: `https://www.franchiseleadshq.com/locations/${countryData.countryCode.toLowerCase()}/${s.slug}`,
            })),
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative min-h-[40vh] bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Franchise Leads in {countryData.country}
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl">
                Explore our franchise lead generation coverage across {countryData.country}. Choose your state to access detailed local pages and start generating qualified franchise leads.
              </p>
            </div>
          </div>
        </section>

        {/* States list */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Browse States/Regions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {countryData.states.map((state) => (
                <Link
                  key={state.slug}
                  to={`/locations/${countryData.countryCode.toLowerCase()}/${state.slug}`}
                  className="block bg-card rounded-lg p-4 border hover:shadow-md transition-shadow"
                >
                  <div className="text-lg font-medium">{state.name}</div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {state.cities.length} major cities covered
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CountryLocationPage;
