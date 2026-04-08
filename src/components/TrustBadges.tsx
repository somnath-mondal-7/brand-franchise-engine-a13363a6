import { ShieldCheck, Award, BadgeCheck, Star, Handshake } from "lucide-react";

interface TrustBadgesProps {
  variant?: "default" | "compact" | "footer";
}

const badges = [
  { icon: ShieldCheck, label: "Verified Agency" },
  { icon: Award, label: "Top Rated 2026" },
  { icon: BadgeCheck, label: "Trusted Partner" },
  { icon: Star, label: "5-Star Service" },
  { icon: Handshake, label: "640+ Clients" },
];

const TrustBadges = ({ variant = "default" }: TrustBadgesProps) => {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        {badges.map((badge, i) => (
          <div key={i} className="flex items-center gap-1.5 text-muted-foreground">
            <badge.icon className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 py-4">
        {badges.map((badge, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-400">
            <badge.icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-6">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-muted/50 border border-border/50"
        >
          <badge.icon className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">{badge.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
