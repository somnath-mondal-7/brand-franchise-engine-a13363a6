import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import { locationData } from '@/data/locations';
import { hasCuratedInsight } from '@/utils/locationContent';

const usaStateHighlights: Record<string, string> = {
  california: 'West Coast franchise demand, premium metro markets, and brand-led expansion opportunities.',
  texas: 'Fast-moving regional expansion markets with strong demand across major business corridors.',
  'new-york': 'Dense urban and suburban franchise markets with strong buyer intent and premium positioning.',
  florida: 'High-intent coastal and suburban markets suited to service, retail, and lifestyle franchises.',
  illinois: 'Midwest franchise visibility anchored by Chicago-area demand and established business markets.',
  georgia: 'Southeast expansion territory with strong regional reach and growing suburban demand.',
};

const CountryLocationPage: React.FC = () => {
  const { country } = useParams();

  if (!country) return <NotFound />;

  const normalizeCountry = (value: string) => {
    const slug = value.toLowerCase();
    if (slug === 'us' || slug === 'united-states' || slug === 'united-states-of-america') return 'usa';
    return slug;
  };

  const normalized = normalizeCountry(country);

  const countryData = locationData.find(
    (entry) => entry.countryCode.toLowerCase() === normalized || entry.country.toLowerCase().replace(/\s+/g, '-') === normalized,
  );

  if (!countryData) return <NotFound />;

  const canonicalCountryCode = countryData.countryCode.toLowerCase();
  if (country.toLowerCase() !== canonicalCountryCode) {
    return <Navigate to={`/locations/${canonicalCountryCode}`} replace />;
  }

  const curatedStates = countryData.states.filter((state) => hasCuratedInsight(countryData.countryCode, state.slug));
  const isUSA = canonicalCountryCode === 'usa';

  const pageTitle = `Franchise Leads in ${countryData.country} | FranchiseLeadsPro`;
  const pageDescription = isUSA
    ? 'Explore curated United States franchise lead generation pages by state, with regional context and direct paths to the strongest markets.'
    : `Explore curated franchise lead generation pages across ${countryData.country}, including regional markets and local expansion pages.`;
  const canonicalUrl = `https://www.franchiseleadspro.com/locations/${canonicalCountryCode}`;

  const introCopy = isUSA
    ? 'Use this United States hub to review the strongest curated state pages, compare regional markets, and move into the location that best matches your franchise growth plan.'
    : `Use this ${countryData.country} hub to explore curated regional pages and find the market that best matches your franchise growth plan.`;

  const sectionCopy = isUSA
    ? 'Each state page focuses on local franchise demand, market positioning, and the service mix most relevant to that region.'
    : `Each regional page focuses on local franchise demand, market positioning, and the service mix most relevant to that market.`;

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
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            hasPart: curatedStates.map((state) => ({
              '@type': 'WebPage',
              name: `${state.name} Franchise Leads`,
              url: `https://www.franchiseleadspro.com/locations/${canonicalCountryCode}/${state.slug}`,
            })),
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="bg-background text-foreground">
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Location hub</p>
              <h1 className="text-4xl font-bold sm:text-5xl">Franchise Leads in {countryData.country}</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{introCopy}</p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">Browse curated states and regions</h2>
              <p className="text-muted-foreground">{sectionCopy}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {curatedStates.map((state) => (
                <Link
                  key={state.slug}
                  to={`/locations/${canonicalCountryCode}/${state.slug}`}
                  className="block rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-card"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{state.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {usaStateHighlights[state.slug] || `Explore curated franchise lead generation coverage for ${state.name}.`}
                    </p>
                    <span className="inline-flex text-sm font-medium text-primary">Open state page</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/20 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold sm:text-3xl">What you will find on each market page</h2>
                <p className="text-muted-foreground">
                  Every curated market page is designed to help visitors understand the local demand story, the right service mix,
                  and the best next step for regional expansion.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Regional market context written for that location.</li>
                  <li>Clear internal paths to related franchise growth services.</li>
                  <li>Direct navigation into the strongest curated state pages.</li>
                  <li>Focused entry points for consultation and next-step planning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <Link to="/services" className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card">
                <h2 className="text-xl font-semibold">Explore services</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Review the full service mix behind franchise lead generation, consulting, marketing, and expansion support.
                </p>
              </Link>

              <Link to="/franchise-leads-usa" className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card">
                <h2 className="text-xl font-semibold">Open USA service page</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  See the broader United States service-led landing page for national franchise lead generation support.
                </p>
              </Link>

              <Link to="/contact" className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card">
                <h2 className="text-xl font-semibold">Talk about your target market</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Share the region you want to grow in and we will point you to the best matching market path.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CountryLocationPage;