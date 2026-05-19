import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin, IndianRupee, Building2, Tag } from "lucide-react";

type Tab = "category" | "location" | "investment" | "brand";

const INDUSTRIES = [
  "Food & Beverage", "Education & EdTech", "Wellness & Salon", "Fitness & Gym",
  "Retail & D2C", "Healthcare", "Cloud Kitchens", "Coaching & Tuition",
  "Automotive", "Real Estate Services", "Logistics", "Home Services",
];

const SECTORS: Record<string, string[]> = {
  "Food & Beverage": ["QSR", "Cafe", "Casual Dining", "Ice Cream & Dessert", "Bakery"],
  "Education & EdTech": ["K-12 Tuition", "Pre-School", "Skill / Vocational", "Test Prep", "Online Learning"],
  "Wellness & Salon": ["Unisex Salon", "Spa", "Ayurveda", "Skin & Hair Clinic"],
  "Fitness & Gym": ["Gym", "Yoga Studio", "Boutique Fitness", "Sports Academy"],
  "Retail & D2C": ["Apparel", "Footwear", "Eyewear", "Mobile & Electronics", "Grocery"],
  "Healthcare": ["Diagnostics", "Pharmacy", "Dental", "Eye Clinic", "Physio"],
  "Cloud Kitchens": ["Multi-brand Kitchen", "Single-brand Kitchen"],
  "Coaching & Tuition": ["Engineering Prep", "Medical Prep", "Banking / Govt"],
  "Automotive": ["Service & Repair", "Detailing", "EV Charging"],
  "Real Estate Services": ["Broker Network", "Co-living", "Property Mgmt"],
  "Logistics": ["Courier", "Hyperlocal Delivery", "Warehousing"],
  "Home Services": ["Cleaning", "Pest Control", "Repairs"],
};

const LOCATIONS = [
  "Pan India", "Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh",
  "Tier-2 Cities", "Tier-3 Cities",
];

const INVESTMENTS = [
  "Under ₹2 Lakh", "₹2 Lakh – ₹5 Lakh", "₹5 Lakh – ₹10 Lakh",
  "₹10 Lakh – ₹20 Lakh", "₹20 Lakh – ₹50 Lakh", "₹50 Lakh – ₹1 Cr",
  "₹1 Cr – ₹2 Cr", "Above ₹2 Cr",
];

const FranchiseSearchHero = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("category");
  const [industry, setIndustry] = useState("");
  const [sector, setSector] = useState("");
  const [location, setLocation] = useState("");
  const [investment, setInvestment] = useState("");
  const [brand, setBrand] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts: string[] = [];
    if (brand) parts.push(`Brand: ${brand}`);
    if (industry) parts.push(`Industry: ${industry}`);
    if (sector) parts.push(`Sector: ${sector}`);
    if (location) parts.push(`Location: ${location}`);
    if (investment) parts.push(`Investment: ${investment}`);
    const q = parts.join(" | ");
    navigate(`/contact?intent=franchise-enquiry&q=${encodeURIComponent(q || "General franchise enquiry")}`);
  };

  const tabs: { id: Tab; label: string; icon: typeof Search }[] = [
    { id: "category", label: "Categories", icon: Tag },
    { id: "location", label: "Location", icon: MapPin },
    { id: "investment", label: "Investment", icon: IndianRupee },
    { id: "brand", label: "Brand Name", icon: Building2 },
  ];

  const selectBase =
    "w-full h-12 px-4 rounded-md bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card border border-border rounded-xl shadow-elegant overflow-hidden"
    >
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 px-3 pt-3 bg-secondary/40 border-b border-border">
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-md transition ${
                active
                  ? "bg-card text-primary border-t-2 border-x border-border border-t-primary -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Fields */}
      <div className="p-5 sm:p-6">
        {tab === "category" && (
          <div className="grid sm:grid-cols-3 gap-3">
            <select
              className={selectBase}
              value={industry}
              onChange={(e) => { setIndustry(e.target.value); setSector(""); }}
            >
              <option value="">Select Industry</option>
              {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
            <select
              className={selectBase}
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              disabled={!industry}
            >
              <option value="">{industry ? "Select Sector" : "Pick industry first"}</option>
              {(SECTORS[industry] || []).map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select
              className={selectBase}
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            >
              <option value="">Investment Range (optional)</option>
              {INVESTMENTS.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        )}

        {tab === "location" && (
          <div className="grid sm:grid-cols-3 gap-3">
            <select
              className={selectBase}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <select
              className={selectBase}
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Industry (optional)</option>
              {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
            <select
              className={selectBase}
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            >
              <option value="">Investment (optional)</option>
              {INVESTMENTS.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        )}

        {tab === "investment" && (
          <div className="grid sm:grid-cols-3 gap-3">
            <select
              className={selectBase}
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            >
              <option value="">Select Investment Range</option>
              {INVESTMENTS.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
            <select
              className={selectBase}
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Industry (optional)</option>
              {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
            <select
              className={selectBase}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Location (optional)</option>
              {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        )}

        {tab === "brand" && (
          <div className="grid sm:grid-cols-3 gap-3">
            <input
              type="text"
              className={`${selectBase} sm:col-span-2`}
              placeholder="Search a franchise brand (e.g. Lakme Salon, Lenskart)"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <select
              className={selectBase}
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Industry (optional)</option>
              {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        )}

        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            Tell us what you're looking for — our India team will match you with relevant franchise opportunities within 24 hours.
          </p>
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-7 rounded-md font-semibold whitespace-nowrap shadow-card"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Franchises
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FranchiseSearchHero;
