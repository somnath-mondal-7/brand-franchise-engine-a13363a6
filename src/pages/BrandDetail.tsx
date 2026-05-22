import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Building2, ExternalLink } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";
import { getBrand, brands } from "@/data/brands";

const BrandDetail = () => {
  const { slug = "" } = useParams();
  const brand = getBrand(slug);

  if (!brand) return <Navigate to="/" replace />;

  const related = brands.filter((b) => b.slug !== brand.slug && b.category === brand.category).slice(0, 3);

  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${brand.name} Franchise — Investment, Cost & Details | FranchiseLeadsPro`}</title>
        <meta name="description" content={`${brand.name} franchise details: investment ${brand.investment}, area ${brand.area}, ${brand.outlets} outlets. ${brand.tagline}.`} />
        <link rel="canonical" href={`https://brand-franchise-engine.lovable.app/brands/${brand.slug}`} />
      </Helmet>

      <IndiaNav />

      <section className="bg-secondary/30 border-b border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to all brands
          </Link>
          <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-center">
            <div className="bg-white border border-border rounded-lg h-48 flex items-center justify-center p-6">
              <img
                src={`https://icons.duckduckgo.com/ip3/${brand.domain}.ico`}
                alt={`${brand.name} logo`}
                className="max-h-32 max-w-full object-contain"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = `https://www.google.com/s2/favicons?sz=128&domain=${brand.domain}`;
                  } else {
                    img.style.display = "none";
                  }
                }}
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">{brand.category} · {brand.country}</p>
              <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-3">{brand.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{brand.tagline}</p>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Founded {brand.founded}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {brand.hq}</span>
                <span className="inline-flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> {brand.outlets} outlets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3 border-b-4 border-accent inline-block pb-2">About {brand.name}</h2>
              <p className="text-muted-foreground leading-relaxed mt-4">{brand.about}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-foreground mb-4 border-b-4 border-accent inline-block pb-2">Why Choose This Franchise</h2>
              <ul className="space-y-3 mt-4">
                {brand.why.map((w) => (
                  <li key={w} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-foreground">{w}</span></li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl text-foreground mb-3">Franchisor Support</h3>
                <ul className="space-y-2 text-sm">
                  {brand.support.map((s) => (
                    <li key={s} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl text-foreground mb-3">Franchisee Requirements</h3>
                <ul className="space-y-2 text-sm">
                  {brand.requirements.map((r) => (
                    <li key={r} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{r}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card sticky top-24">
              <h3 className="font-display text-xl text-foreground mb-4">Franchise Snapshot</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Investment</dt><dd className="font-semibold">{brand.investment}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Area Required</dt><dd className="font-semibold">{brand.area}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Outlets</dt><dd className="font-semibold">{brand.outlets}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Category</dt><dd className="font-semibold text-right">{brand.category}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">ROI</dt><dd className="font-semibold text-right">{brand.roi}</dd></div>
              </dl>
              <Button asChild size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to={`/contact?intent=franchise-enquiry&q=${encodeURIComponent(`Brand: ${brand.name}`)}`}>Enquire Now</Link>
              </Button>
              {brand.website && (
                <a href={brand.website} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center justify-center gap-1 w-full text-sm text-muted-foreground hover:text-primary">
                  Visit official site <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-foreground mb-8 border-b-4 border-accent inline-block pb-2">Similar Franchise Opportunities</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((b) => (
                <Link key={b.slug} to={`/brands/${b.slug}`} className="bg-card border border-border rounded-lg p-5 hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="bg-white border border-border rounded h-20 flex items-center justify-center mb-3 p-3">
                    <img
                      src={`https://icons.duckduckgo.com/ip3/${b.domain}.ico`}
                      alt={b.name}
                      className="max-h-full max-w-full object-contain"
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
                  <p className="text-[11px] uppercase tracking-[0.15em] text-accent font-semibold">{b.category}</p>
                  <h3 className="font-display text-lg">{b.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{b.investment}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <IndiaFooter />
    </div>
  );
};

export default BrandDetail;
