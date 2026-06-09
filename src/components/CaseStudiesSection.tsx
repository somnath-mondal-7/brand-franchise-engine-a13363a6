import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    label: "Paid Ads · CRM · Website Inbound",
    title: "Jesica Thompson — Franchise Solutions Inc.",
    body:
      "An independent franchise consultant running on referrals. We built an investor lead engine that delivers qualified enquiries every week — on autopilot.",
    to: "/case-studies",
  },
  {
    label: "Website Redesign · Brand",
    title: "HOF Franchise Consulting — Shawn Gurn",
    body:
      "A complete website rebuild — modern brand, searchable franchise directory, video storytelling, and a real lead capture system for Shawn's consultancy.",
    to: "/case-studies/hof-franchise-consulting",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="india-theme py-20 sm:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Case Studies</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Real Clients. <em>Real Results.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A closer look at how franchise consultants run their investor lead pipeline with FranchiseLeadsPro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-all"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">{c.label}</p>
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.body}</p>
              <span className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                Read case study <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/case-studies">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-7 rounded-full font-semibold">
              View All Case Studies <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
