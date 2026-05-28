import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { useState } from "react";

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61579709174263",
    label: "Facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/franchiseleadspro_company/",
    label: "Instagram",
    color: "hover:bg-[#E4405F]",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/franchiseleadspro/",
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
];

const SocialFloat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Expanded cards */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`group flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elegant border border-primary-foreground/10 transition-all duration-200 ${s.color} hover:text-white hover:scale-110`}
          >
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close social links" : "Open social links"}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-elegant border transition-all duration-300 ${
          open
            ? "bg-accent text-primary rotate-45"
            : "bg-primary text-primary-foreground hover:scale-105"
        }`}
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialFloat;
