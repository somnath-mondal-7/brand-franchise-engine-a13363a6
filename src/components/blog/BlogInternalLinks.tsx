import { Link } from "react-router-dom";
import { BookOpen, Briefcase, ShoppingBag, Trophy, MessageSquare, ArrowRight } from "lucide-react";

const links = [
  {
    to: "/blog",
    icon: BookOpen,
    title: "More on the blog",
    description: "Fresh franchise growth posts, weekly.",
  },
  {
    to: "/services",
    icon: Briefcase,
    title: "Our services",
    description: "What we actually do for franchise brands.",
  },
  {
    to: "/buy-franchise-leads",
    icon: ShoppingBag,
    title: "Buy qualified leads",
    description: "Skip the DIY grind — get verified leads.",
  },
  {
    to: "/case-studies",
    icon: Trophy,
    title: "Real case studies",
    description: "The wins, the stories, the receipts.",
  },
  {
    to: "/contact",
    icon: MessageSquare,
    title: "Talk to us",
    description: "Quick chat, no pitch deck required.",
  },
];

const BlogInternalLinks = () => {
  return (
    <section className="not-prose my-12">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Want to dig deeper?
        </h2>
        <p className="text-muted-foreground">
          A few more spots on the site that might help 👇
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground leading-snug">
                  {link.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BlogInternalLinks;
