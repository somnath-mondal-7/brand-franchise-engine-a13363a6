import topRatedBadge from "@/assets/badges/top-rated-badge.png";
import clutchBadge from "@/assets/badges/clutch-badge.png";
import trustpilotBadge from "@/assets/badges/trustpilot-badge.png";
import expertiseBadge from "@/assets/badges/expertise-badge.png";
import digitalBadge from "@/assets/badges/digital-150-badge.png";

interface TrustBadgesProps {
  variant?: "default" | "compact" | "footer";
}

const badges = [
  { src: topRatedBadge, alt: "Top Rated Digital Marketing Agency 2026" },
  { src: clutchBadge, alt: "Top 100 Companies - Sustained Growth 2026" },
  { src: trustpilotBadge, alt: "Trustpilot 5-Star Excellent Rating" },
  { src: expertiseBadge, alt: "Best Franchise Lead Generation Agency 2026" },
  { src: digitalBadge, alt: "Digital Health 150 - 2026" },
];

const TrustBadges = ({ variant = "default" }: TrustBadgesProps) => {
  const sizeClass =
    variant === "compact"
      ? "h-12 w-auto"
      : variant === "footer"
        ? "h-20 w-auto"
        : "h-28 w-auto";

  return (
    <div
      className={`flex flex-wrap items-center justify-center ${
        variant === "compact" ? "gap-4 mt-4" : "gap-6 py-6"
      }`}
    >
      {badges.map((badge, i) => (
        <img
          key={i}
          src={badge.src}
          alt={badge.alt}
          loading="lazy"
          className={`${sizeClass} object-contain`}
        />
      ))}
    </div>
  );
};

export default TrustBadges;
