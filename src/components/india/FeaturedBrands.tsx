import { Link } from "react-router-dom";
import { indiaLeading, indiaOpportunities, usaBrands, type Brand } from "@/data/brands";

const BrandCard = ({ b }: { b: Brand }) => (
  <Link
    to={`/brands/${b.slug}`}
    className="group bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
  >
    <div className="h-36 bg-white flex items-center justify-center border-b border-border p-6 relative">
      <img
        src={`https://icons.duckduckgo.com/ip3/${b.domain}.ico`}
        alt={`${b.name} logo`}
        loading="lazy"
        className="max-h-20 max-w-[80%] object-contain"
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.dataset.fallback) {
            img.dataset.fallback = "1";
            img.src = `https://www.google.com/s2/favicons?sz=128&domain=${b.domain}`;
          } else {
            img.style.display = "none";
          }
        }}
      />
    </div>
    <div className="p-5">
      <p className="text-[11px] uppercase tracking-[0.15em] text-accent font-semibold mb-2">{b.category}</p>
      <h3 className="font-display text-lg text-foreground mb-3">{b.name}</h3>
      <dl className="text-sm space-y-1.5 mb-4">
        <div className="flex justify-between gap-2">
          <dt className="text-muted-foreground">Investment</dt>
          <dd className="font-semibold text-foreground text-right">{b.investment}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-muted-foreground">Area Required</dt>
          <dd className="font-semibold text-foreground text-right">{b.area}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-muted-foreground">Outlets</dt>
          <dd className="font-semibold text-foreground text-right">{b.outlets}</dd>
        </div>
      </dl>
      <div className="block w-full text-center border border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground font-semibold rounded-md py-2 text-sm transition-colors">
        View Brand Details
      </div>
    </div>
  </Link>
);

const Section = ({ title, subtitle, brands, cta }: { title: string; subtitle?: string; brands: Brand[]; cta?: { label: string; to: string } }) => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground border-b-4 border-accent inline-block pb-2">
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>}
        </div>
        {cta && (
          <Link to={cta.to} className="text-sm font-semibold text-accent hover:underline">
            {cta.label} →
          </Link>
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {brands.map((b) => <BrandCard key={b.slug} b={b} />)}
      </div>
    </div>
  </section>
);

const FeaturedBrands = () => {
  return (
    <>
      <div className="bg-secondary/30 border-y border-border">
        <Section title="Leading Franchises Today" brands={indiaLeading} cta={{ label: "Enquire for any brand", to: "/contact" }} />
      </div>
      <Section
        title="Top Business Opportunities"
        subtitle="Explore investment-ready franchise opportunities across India. Connect with our consulting team for a personalised match."
        brands={indiaOpportunities}
      />
      <div className="bg-secondary/30 border-y border-border">
        <Section
          title="USA Franchise Brands"
          subtitle="World-class American franchise systems we help bring to India and support globally."
          brands={usaBrands}
        />
      </div>
    </>
  );
};

export default FeaturedBrands;
