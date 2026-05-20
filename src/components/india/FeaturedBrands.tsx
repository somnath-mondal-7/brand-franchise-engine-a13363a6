import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

type Brand = {
  name: string;
  category: string;
  investment: string;
  area: string;
  outlets: string;
};

const leading: Brand[] = [
  { name: "Wow! Momo", category: "Food & Beverage", investment: "₹25L – 50L", area: "300 – 600 sq.ft", outlets: "500+" },
  { name: "Lenskart", category: "Retail / Eyewear", investment: "₹30L – 60L", area: "400 – 800 sq.ft", outlets: "1500+" },
  { name: "Lakmé Salon", category: "Wellness & Salon", investment: "₹40L – 80L", area: "1000 – 1500 sq.ft", outlets: "490+" },
  { name: "Kidzee", category: "Education / Pre-School", investment: "₹10L – 20L", area: "1500 – 2500 sq.ft", outlets: "1900+" },
];

const opportunities: Brand[] = [
  { name: "Chai Sutta Bar", category: "QSR / Cafe", investment: "₹12L – 16L", area: "200 – 400 sq.ft", outlets: "400+" },
  { name: "Cult.fit", category: "Fitness & Gym", investment: "₹50L – 1 Cr", area: "2000 – 4000 sq.ft", outlets: "500+" },
  { name: "FirstCry", category: "Retail / Kids", investment: "₹35L – 70L", area: "1000 – 2000 sq.ft", outlets: "400+" },
  { name: "Dr. Lal PathLabs", category: "Healthcare / Diagnostics", investment: "₹10L – 25L", area: "150 – 300 sq.ft", outlets: "5000+" },
  { name: "BlueTokai Coffee", category: "Cafe", investment: "₹40L – 80L", area: "600 – 1200 sq.ft", outlets: "100+" },
  { name: "Decathlon", category: "Sports Retail", investment: "₹2 Cr – 5 Cr", area: "8000+ sq.ft", outlets: "120+" },
  { name: "Apollo Pharmacy", category: "Healthcare", investment: "₹15L – 30L", area: "200 – 400 sq.ft", outlets: "5000+" },
  { name: "Burger Singh", category: "QSR", investment: "₹20L – 40L", area: "250 – 600 sq.ft", outlets: "180+" },
];

const BrandCard = ({ b }: { b: Brand }) => (
  <Link
    to={`/contact?intent=franchise-enquiry&q=${encodeURIComponent(`Brand: ${b.name} | Category: ${b.category}`)}`}
    className="group bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
  >
    <div className="h-32 bg-gradient-to-br from-secondary to-background flex items-center justify-center border-b border-border">
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <Building2 className="w-7 h-7 text-primary/60" />
        <span className="font-display text-base text-foreground">{b.name}</span>
      </div>
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
        Know More
      </div>
    </div>
  </Link>
);

const FeaturedBrands = () => {
  return (
    <>
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground border-b-4 border-accent inline-block pb-2">
                Leading Franchises Today
              </h2>
            </div>
            <Link to="/contact" className="text-sm font-semibold text-accent hover:underline">
              Enquire for any brand →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leading.map((b) => <BrandCard key={b.name} b={b} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground border-b-4 border-accent inline-block pb-2">
                Top Business Opportunities
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                Explore investment-ready franchise opportunities across India. Connect with our consulting team for a personalised match.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {opportunities.map((b) => <BrandCard key={b.name} b={b} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedBrands;
