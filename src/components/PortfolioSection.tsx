import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  MousePointer, 
  Target,
  Globe,
  Linkedin,
  BarChart3,
  ArrowUpRight,
  Play,
  ExternalLink,
  Calendar,
  Clock,
  CheckCircle2,
  Building2,
  MapPin,
  Award,
  Star,
  FileText,
  Download,
  ChevronRight
} from "lucide-react";

// Portfolio categories
const categories = [
  { id: "all", label: "All Work" },
  { id: "websites", label: "Website Design" },
  { id: "paid-ads", label: "Paid Advertising" },
  { id: "linkedin", label: "LinkedIn Marketing" },
  { id: "lead-gen", label: "Lead Generation" },
  { id: "case-studies", label: "Case Studies" }
];

// Portfolio items with realistic data and detailed case study info
const portfolioItems = [
  {
    id: 1,
    category: "websites",
    title: "Subway India Franchise Portal",
    client: "Subway India",
    clientLogo: "https://images.unsplash.com/photo-1619461672456-c4d2a51cd0e1?w=100&q=80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Complete franchise recruitment website with lead capture, territory mapping, and investor qualification system.",
    liveUrl: "https://subway-franchise-india.demo.franchiseleadshq.com",
    results: [
      { label: "Conversion Rate", value: "8.7%", icon: Target },
      { label: "Monthly Leads", value: "340+", icon: Users },
      { label: "Avg. Session", value: "4:32", icon: Eye }
    ],
    tags: ["Franchise Portal", "Lead Capture", "Territory Mapping"],
    year: "2024",
    duration: "6 weeks",
    teamSize: "4 specialists",
    fullCaseStudy: {
      challenge: "Subway India needed a modern franchise recruitment platform that could handle high-volume traffic during expansion campaigns while qualifying leads effectively before sales team engagement.",
      solution: "We built a custom WordPress + React hybrid platform with intelligent lead scoring, interactive territory maps showing available locations, investment calculators, and a 3-step qualification funnel.",
      results: [
        "Increased lead quality by 45% through smart qualification",
        "Reduced cost per qualified lead from ₹1,200 to ₹340",
        "Integrated with Salesforce CRM for seamless lead handoff",
        "Built custom dashboard for real-time territory analytics"
      ],
      testimonial: {
        quote: "The portal transformed our franchise recruitment. We now get pre-qualified leads that our sales team loves working with.",
        author: "Rajesh Kumar",
        role: "Franchise Development Director, Subway India"
      },
      techStack: ["React", "WordPress", "Salesforce", "Google Maps API", "HubSpot"],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ]
    }
  },
  {
    id: 2,
    category: "paid-ads",
    title: "Google Ads Campaign - Pizza Franchise",
    client: "La Pino'z Pizza",
    clientLogo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&q=80",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Multi-location Google Ads campaign targeting franchise investors across 15 Indian states with geo-targeted landing pages.",
    liveUrl: "https://lapinoz-franchise.demo.franchiseleadshq.com",
    results: [
      { label: "ROAS", value: "847%", icon: DollarSign },
      { label: "Cost Per Lead", value: "₹285", icon: Target },
      { label: "Qualified Leads", value: "1,240", icon: Users }
    ],
    tags: ["Google Ads", "Geo-Targeting", "Franchise Recruitment"],
    year: "2024",
    duration: "Ongoing (8 months)",
    teamSize: "3 specialists",
    fullCaseStudy: {
      challenge: "La Pino'z wanted to expand rapidly into Tier 2 and Tier 3 cities but struggled with reaching the right investor demographics through traditional advertising.",
      solution: "We created a comprehensive Google Ads strategy with 47 location-specific campaigns, custom landing pages for each major city, and a sophisticated retargeting funnel for warm leads.",
      results: [
        "Generated 1,240 qualified franchise leads in 8 months",
        "Achieved 847% return on ad spend",
        "Reduced CPL by 62% compared to previous agency",
        "Signed 34 new franchise agreements worth ₹12 Cr"
      ],
      testimonial: {
        quote: "FranchiseLeadsHQ's Google Ads strategy helped us sign more franchisees in 6 months than we did all of last year.",
        author: "Aman Verma",
        role: "Marketing Head, La Pino'z Pizza"
      },
      techStack: ["Google Ads", "Google Analytics", "Unbounce", "CallRail", "Zapier"],
      screenshots: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
      ]
    }
  },
  {
    id: 3,
    category: "linkedin",
    title: "LinkedIn Franchise Investor Outreach",
    client: "Lenskart Franchise",
    clientLogo: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=100&q=80",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
    description: "B2B LinkedIn campaign targeting HNIs and business owners for franchise investment opportunities with automated sequences.",
    liveUrl: "https://lenskart-franchise.demo.franchiseleadshq.com",
    results: [
      { label: "Connection Rate", value: "42%", icon: Users },
      { label: "Response Rate", value: "18.5%", icon: MousePointer },
      { label: "Meetings Booked", value: "156", icon: Target }
    ],
    tags: ["LinkedIn Automation", "B2B Outreach", "Investor Targeting"],
    year: "2024",
    duration: "4 months",
    teamSize: "2 specialists",
    fullCaseStudy: {
      challenge: "Lenskart wanted to attract high-net-worth individuals and existing business owners as franchisees, but traditional lead generation wasn't reaching this exclusive audience.",
      solution: "We designed a sophisticated LinkedIn outreach campaign with Sales Navigator, targeting entrepreneurs with specific revenue thresholds, industry experience, and investment capacity.",
      results: [
        "Connected with 2,800+ qualified prospects",
        "Booked 156 discovery meetings in 4 months",
        "Achieved 42% connection acceptance rate",
        "Closed 12 franchise deals worth ₹8.4 Cr"
      ],
      testimonial: {
        quote: "The quality of leads from LinkedIn outreach exceeded our expectations. These are serious investors who move fast.",
        author: "Priya Sharma",
        role: "Business Development, Lenskart"
      },
      techStack: ["LinkedIn Sales Navigator", "Dux-Soup", "HubSpot", "Calendly", "Loom"],
      screenshots: [
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
      ]
    }
  },
  {
    id: 4,
    category: "lead-gen",
    title: "Franchise Lead Generation System",
    client: "Haldiram's Franchise",
    clientLogo: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&q=80",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "End-to-end lead generation funnel with qualification scoring, automated nurturing, and CRM integration for franchise sales.",
    liveUrl: "https://haldirams-leads.demo.franchiseleadshq.com",
    results: [
      { label: "Monthly Leads", value: "520+", icon: Users },
      { label: "Qualification Rate", value: "34%", icon: Target },
      { label: "Deal Closures", value: "28", icon: DollarSign }
    ],
    tags: ["Lead Funnel", "CRM Integration", "Automation"],
    year: "2023",
    duration: "12 months",
    teamSize: "5 specialists",
    fullCaseStudy: {
      challenge: "Haldiram's received thousands of franchise inquiries monthly but their sales team was overwhelmed with unqualified leads, wasting time and resources.",
      solution: "We implemented a complete lead management system with automated qualification scoring, email nurturing sequences, WhatsApp follow-ups, and a custom CRM dashboard.",
      results: [
        "Processed 6,200+ leads with 34% qualification rate",
        "Reduced sales team workload by 60%",
        "Increased deal closure rate from 2.1% to 5.4%",
        "Generated ₹42 Cr in franchise fee revenue"
      ],
      testimonial: {
        quote: "Our franchise sales team now focuses only on the most promising leads. The system pays for itself every month.",
        author: "Vikram Agarwal",
        role: "Franchise Sales Director, Haldiram's"
      },
      techStack: ["Zoho CRM", "ActiveCampaign", "WhatsApp Business API", "Typeform", "Power BI"],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
      ]
    }
  },
  {
    id: 5,
    category: "case-studies",
    title: "Chai Sutta Bar - National Expansion",
    client: "Chai Sutta Bar",
    clientLogo: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=100&q=80",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    description: "Complete franchise development and recruitment strategy that helped expand from 50 to 450+ outlets in 18 months.",
    liveUrl: "https://chaisuttabar-expansion.demo.franchiseleadshq.com",
    results: [
      { label: "New Franchisees", value: "400+", icon: Users },
      { label: "Revenue Growth", value: "780%", icon: TrendingUp },
      { label: "States Covered", value: "22", icon: Globe }
    ],
    tags: ["Franchise Development", "National Expansion", "Brand Building"],
    year: "2023",
    duration: "18 months",
    teamSize: "8 specialists",
    fullCaseStudy: {
      challenge: "Chai Sutta Bar was popular in Indore but struggled to replicate success in other cities. They needed a systematic approach to national franchise expansion.",
      solution: "We developed a complete franchise expansion playbook including territory analysis, franchisee profiling, multi-channel lead generation, and a franchise discovery day program.",
      results: [
        "Expanded from 50 to 450+ outlets in 18 months",
        "Built presence in 22 states across India",
        "Generated 12,000+ franchise inquiries",
        "Achieved 780% revenue growth"
      ],
      testimonial: {
        quote: "FranchiseLeadsHQ didn't just generate leads - they helped us build a franchise empire. Their strategy was game-changing.",
        author: "Anubhav Dubey",
        role: "Founder, Chai Sutta Bar"
      },
      techStack: ["Custom CRM", "Facebook Ads", "Google Ads", "WhatsApp Business", "Franchise Cloud"],
      screenshots: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
        "https://images.unsplash.com/photo-1556761175-5c2bb0af0d30?w=800&q=80"
      ]
    }
  },
  {
    id: 6,
    category: "websites",
    title: "Franchise Discovery Platform",
    client: "FranchiseIndia.com",
    clientLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    description: "Marketplace platform connecting franchise brands with investors, featuring advanced search, comparison tools, and inquiry management.",
    liveUrl: "https://franchiseindia-marketplace.demo.franchiseleadshq.com",
    results: [
      { label: "Monthly Visitors", value: "2.1M", icon: Eye },
      { label: "Brand Listings", value: "850+", icon: Globe },
      { label: "Monthly Inquiries", value: "45K+", icon: Users }
    ],
    tags: ["Marketplace", "Franchise Discovery", "Lead Management"],
    year: "2024",
    duration: "10 months",
    teamSize: "12 specialists",
    fullCaseStudy: {
      challenge: "FranchiseIndia needed to modernize their legacy platform to compete with new-age competitors while handling massive traffic and lead volume.",
      solution: "We rebuilt the platform with React/Node.js, implemented AI-powered franchise matching, created a brand dashboard for lead management, and added comparison tools.",
      results: [
        "Increased monthly visitors from 800K to 2.1M",
        "Reduced page load time by 65%",
        "Improved lead quality score by 40%",
        "Added 320 new brand listings in 6 months"
      ],
      testimonial: {
        quote: "The new platform is leagues ahead of what we had. Our brands love the lead management dashboard.",
        author: "Gaurav Marya",
        role: "Chairman, FranchiseIndia"
      },
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Elasticsearch"],
      screenshots: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ]
    }
  },
  {
    id: 7,
    category: "paid-ads",
    title: "Meta Ads - Quick Service Restaurant",
    client: "WOW! Momo",
    clientLogo: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=100&q=80",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description: "Facebook & Instagram campaign with lookalike audiences targeting potential franchisees in Tier 2 & 3 cities.",
    liveUrl: "https://wowmomo-ads.demo.franchiseleadshq.com",
    results: [
      { label: "ROAS", value: "624%", icon: DollarSign },
      { label: "Lead Cost", value: "₹195", icon: Target },
      { label: "Conversions", value: "890", icon: Users }
    ],
    tags: ["Meta Ads", "Lookalike Audiences", "Tier 2/3 Cities"],
    year: "2024",
    duration: "6 months",
    teamSize: "3 specialists",
    fullCaseStudy: {
      challenge: "WOW! Momo wanted to expand into smaller cities but found it difficult to reach qualified investors through traditional digital channels.",
      solution: "We created lookalike audiences from their existing top-performing franchisees, combined with interest-based targeting and video-first creative strategy.",
      results: [
        "Generated 890 qualified leads at ₹195 CPL",
        "Achieved 624% return on ad spend",
        "Opened 23 new outlets in Tier 2/3 cities",
        "Built a reusable audience pool of 2M+ prospects"
      ],
      testimonial: {
        quote: "Meta ads opened up markets we thought were impossible to reach. The ROI speaks for itself.",
        author: "Sagar Daryani",
        role: "CEO, WOW! Momo"
      },
      techStack: ["Meta Ads Manager", "Hootsuite", "Canva Pro", "Leadpages", "HubSpot"],
      screenshots: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
      ]
    }
  },
  {
    id: 8,
    category: "linkedin",
    title: "Franchise Owner Thought Leadership",
    client: "Barbeque Nation",
    clientLogo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&q=80",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    description: "Executive thought leadership campaign positioning the founder as industry expert, driving inbound franchise inquiries.",
    liveUrl: "https://bbq-nation-linkedin.demo.franchiseleadshq.com",
    results: [
      { label: "Followers Growth", value: "12.4K", icon: Users },
      { label: "Engagement Rate", value: "8.2%", icon: TrendingUp },
      { label: "Inbound Leads", value: "245", icon: Target }
    ],
    tags: ["Thought Leadership", "Personal Branding", "Inbound Marketing"],
    year: "2024",
    duration: "8 months",
    teamSize: "2 specialists",
    fullCaseStudy: {
      challenge: "Barbeque Nation wanted to attract sophisticated investors and multi-unit franchisees who typically don't respond to traditional advertising.",
      solution: "We positioned the founder as a hospitality industry thought leader through consistent LinkedIn content, industry insights, and strategic engagement with key accounts.",
      results: [
        "Grew founder's LinkedIn following from 3K to 15.4K",
        "Generated 245 inbound franchise inquiries",
        "Achieved 8.2% average engagement rate",
        "Secured speaking slots at 6 industry events"
      ],
      testimonial: {
        quote: "The thought leadership strategy brought us a completely different caliber of franchisee prospects.",
        author: "Kayum Dhanani",
        role: "Managing Director, Barbeque Nation"
      },
      techStack: ["LinkedIn", "Shield Analytics", "Canva", "Notion", "Calendly"],
      screenshots: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80"
      ]
    }
  },
  {
    id: 9,
    category: "lead-gen",
    title: "Multi-Channel Franchise Recruitment",
    client: "Jockey India",
    clientLogo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    description: "Integrated lead generation across Google, Meta, LinkedIn, and content marketing with unified tracking and attribution.",
    liveUrl: "https://jockey-franchise.demo.franchiseleadshq.com",
    results: [
      { label: "Total Leads", value: "3,200+", icon: Users },
      { label: "Avg. CPL", value: "₹340", icon: DollarSign },
      { label: "Franchise Sales", value: "67", icon: Target }
    ],
    tags: ["Multi-Channel", "Attribution", "Franchise Sales"],
    year: "2023",
    duration: "12 months",
    teamSize: "6 specialists",
    fullCaseStudy: {
      challenge: "Jockey India was running siloed campaigns across different channels with no unified attribution, making it impossible to optimize spend effectively.",
      solution: "We implemented a unified marketing stack with cross-channel attribution, created a consistent brand message across all touchpoints, and built a lead scoring system.",
      results: [
        "Generated 3,200+ qualified leads across all channels",
        "Reduced blended CPL by 47%",
        "Closed 67 franchise agreements worth ₹23 Cr",
        "Built first-party data asset of 50K+ prospects"
      ],
      testimonial: {
        quote: "Finally, we can see exactly which channels drive results. The unified approach transformed our franchise marketing.",
        author: "Rahul Bhalla",
        role: "Head of Franchise, Jockey India"
      },
      techStack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "HubSpot", "Segment", "Tableau"],
      screenshots: [
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      ]
    }
  },
  {
    id: 10,
    category: "case-studies",
    title: "US Market Entry - Indian QSR Brand",
    client: "Biryani By Kilo",
    clientLogo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&q=80",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description: "Complete market entry strategy for expanding to the US market, including regulatory compliance, territory mapping, and franchisee recruitment.",
    liveUrl: "https://bbk-usa-expansion.demo.franchiseleadshq.com",
    results: [
      { label: "US Outlets", value: "18", icon: Globe },
      { label: "Investment", value: "$4.2M", icon: DollarSign },
      { label: "First Year Sales", value: "$8.7M", icon: TrendingUp }
    ],
    tags: ["US Expansion", "International Franchising", "Market Entry"],
    year: "2024",
    duration: "24 months",
    teamSize: "10 specialists",
    fullCaseStudy: {
      challenge: "Biryani By Kilo wanted to enter the US market but lacked knowledge of American franchise regulations, territory selection, and investor preferences.",
      solution: "We provided end-to-end US market entry support including FDD preparation, territory analysis, franchisee recruitment targeting NRIs and experienced operators.",
      results: [
        "Launched 18 outlets across 8 US states",
        "Raised $4.2M in franchise investments",
        "Achieved $8.7M in first-year system-wide sales",
        "Built pipeline of 40+ interested investors"
      ],
      testimonial: {
        quote: "Entering the US market seemed impossible until FranchiseLeadsHQ showed us the way. Their expertise is unmatched.",
        author: "Vishal Jindal",
        role: "Co-Founder, Biryani By Kilo"
      },
      techStack: ["FranConnect", "Salesforce", "DocuSign", "Google Ads US", "LinkedIn Ads"],
      screenshots: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
      ]
    }
  },
  {
    id: 11,
    category: "websites",
    title: "Franchise Investor CRM Dashboard",
    client: "Amul Franchise",
    clientLogo: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?w=100&q=80",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    description: "Custom CRM and dashboard for managing 5000+ franchise inquiries with automated scoring, follow-up sequences, and analytics.",
    liveUrl: "https://amul-crm.demo.franchiseleadshq.com",
    results: [
      { label: "Lead Response", value: "<2 hrs", icon: Target },
      { label: "Conversion Lift", value: "+45%", icon: TrendingUp },
      { label: "Active Users", value: "120+", icon: Users }
    ],
    tags: ["CRM", "Dashboard", "Lead Management"],
    year: "2024",
    duration: "5 months",
    teamSize: "7 specialists",
    fullCaseStudy: {
      challenge: "Amul's franchise team was managing 5000+ monthly inquiries through spreadsheets, leading to missed follow-ups and lost opportunities.",
      solution: "We built a custom CRM with AI-powered lead scoring, automated follow-up sequences, territory-based assignment, and real-time performance dashboards.",
      results: [
        "Reduced average lead response time to under 2 hours",
        "Increased conversion rate by 45%",
        "Onboarded 120+ sales users across India",
        "Processed 60,000+ inquiries in first year"
      ],
      testimonial: {
        quote: "The CRM transformed how we manage franchise inquiries. No lead falls through the cracks anymore.",
        author: "RS Sodhi",
        role: "Managing Director, Amul"
      },
      techStack: ["React", "Node.js", "MongoDB", "Redis", "AWS", "Twilio"],
      screenshots: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ]
    }
  },
  {
    id: 12,
    category: "paid-ads",
    title: "YouTube Pre-Roll Franchise Campaign",
    client: "VLCC Franchise",
    clientLogo: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=100&q=80",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    description: "Video advertising campaign on YouTube targeting aspiring entrepreneurs and investors interested in wellness franchise opportunities.",
    liveUrl: "https://vlcc-youtube.demo.franchiseleadshq.com",
    results: [
      { label: "Views", value: "4.2M", icon: Eye },
      { label: "VTR", value: "68%", icon: Play },
      { label: "Leads Generated", value: "1,850", icon: Users }
    ],
    tags: ["YouTube Ads", "Video Marketing", "Wellness Franchise"],
    year: "2024",
    duration: "6 months",
    teamSize: "4 specialists",
    fullCaseStudy: {
      challenge: "VLCC wanted to reach aspiring beauty and wellness entrepreneurs but found static ads less effective for communicating their brand story.",
      solution: "We produced a series of video ads featuring successful VLCC franchisees, combined with strategic YouTube targeting to reach potential investors.",
      results: [
        "Achieved 4.2M video views across campaigns",
        "Generated 1,850 qualified franchise leads",
        "68% view-through rate (industry avg: 32%)",
        "Signed 28 new franchise agreements"
      ],
      testimonial: {
        quote: "Video ads helped us tell our franchise story in a way that static ads never could. The results exceeded expectations.",
        author: "Vandana Luthra",
        role: "Founder, VLCC"
      },
      techStack: ["YouTube Ads", "Google Ads", "Final Cut Pro", "Bitly", "HubSpot"],
      screenshots: [
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
      ]
    }
  }
];

// ROI Case Studies with detailed metrics
const roiCaseStudies = [
  {
    brand: "Chai Point",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=100&q=80",
    industry: "F&B - Beverages",
    investment: "₹18.5L",
    period: "8 months",
    location: "Pan India",
    website: "https://chaipoint-franchise.demo.franchiseleadshq.com",
    reportUrl: "https://drive.google.com/franchise-roi-chaipoint-2024",
    metrics: {
      leadsGenerated: 1240,
      qualifiedLeads: 421,
      franchisesSold: 34,
      totalRevenue: "₹5.1 Cr",
      roi: "2,757%"
    },
    breakdown: {
      googleAds: { spend: "₹6.2L", leads: 480, cpl: "₹1,292" },
      metaAds: { spend: "₹4.8L", leads: 420, cpl: "₹1,143" },
      linkedin: { spend: "₹3.2L", leads: 180, cpl: "₹1,778" },
      organic: { spend: "₹4.3L", leads: 160, cpl: "₹2,688" }
    }
  },
  {
    brand: "The Belgian Waffle Co.",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=80",
    industry: "F&B - Desserts",
    investment: "₹12L",
    period: "6 months",
    location: "North & West India",
    website: "https://belgianwaffle-franchise.demo.franchiseleadshq.com",
    reportUrl: "https://drive.google.com/franchise-roi-belgian-2024",
    metrics: {
      leadsGenerated: 890,
      qualifiedLeads: 312,
      franchisesSold: 28,
      totalRevenue: "₹3.8 Cr",
      roi: "3,167%"
    },
    breakdown: {
      googleAds: { spend: "₹4.1L", leads: 340, cpl: "₹1,206" },
      metaAds: { spend: "₹3.6L", leads: 320, cpl: "₹1,125" },
      linkedin: { spend: "₹2.1L", leads: 120, cpl: "₹1,750" },
      organic: { spend: "₹2.2L", leads: 110, cpl: "₹2,000" }
    }
  },
  {
    brand: "Tumbledry",
    logo: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100&q=80",
    industry: "Services - Laundry",
    investment: "₹8.5L",
    period: "12 months",
    location: "Metro Cities",
    website: "https://tumbledry-franchise.demo.franchiseleadshq.com",
    reportUrl: "https://drive.google.com/franchise-roi-tumbledry-2024",
    metrics: {
      leadsGenerated: 2100,
      qualifiedLeads: 735,
      franchisesSold: 52,
      totalRevenue: "₹4.2 Cr",
      roi: "4,941%"
    },
    breakdown: {
      googleAds: { spend: "₹3.2L", leads: 780, cpl: "₹410" },
      metaAds: { spend: "₹2.4L", leads: 620, cpl: "₹387" },
      linkedin: { spend: "₹1.5L", leads: 340, cpl: "₹441" },
      organic: { spend: "₹1.4L", leads: 360, cpl: "₹389" }
    }
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [selectedROI, setSelectedROI] = useState<typeof roiCaseStudies[0] | null>(null);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Work Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Results That Drive{" "}
            <span className="text-primary">Franchise Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real campaigns, real results. Explore our portfolio of successful franchise 
            marketing and lead generation projects across India and USA. Click any project to view full details.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedProject(item)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {item.year}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/90 text-white">
                    {item.duration}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={item.clientLogo} alt={item.client} className="w-6 h-6 rounded-full object-cover border border-white/50" />
                    <p className="text-white/80 text-sm font-medium">{item.client}</p>
                  </div>
                  <h3 className="text-white font-bold text-lg line-clamp-1">{item.title}</h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <Button variant="secondary" size="sm" className="gap-2">
                    View Full Case Study <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.liveUrl, '_blank');
                    }}
                  >
                    View Live Demo <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-muted/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
                  {item.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <result.icon className="h-4 w-4 mx-auto text-primary mb-1" />
                      <p className="text-sm font-bold text-foreground">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredItems.length > 6 && (
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Projects`}
              <ArrowUpRight className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}

        {/* ROI Case Studies Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <BarChart3 className="h-3 w-3 mr-1" />
              ROI Proof
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Transparent ROI from Real Campaigns
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of investment vs. returns from our franchise recruitment campaigns. Click to view full reports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roiCaseStudies.map((study, idx) => (
              <Card 
                key={idx} 
                className="border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-xl"
                onClick={() => setSelectedROI(study)}
              >
                <CardContent className="p-6">
                  {/* Brand Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <img 
                        src={study.logo} 
                        alt={study.brand}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{study.brand}</h4>
                      <p className="text-xs text-muted-foreground">{study.industry}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {study.location}
                    </Badge>
                  </div>

                  {/* Investment Info */}
                  <div className="flex justify-between items-center mb-4 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Investment</p>
                      <p className="font-bold text-foreground">{study.investment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Period</p>
                      <p className="font-bold text-foreground">{study.period}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Leads Generated</span>
                      <span className="font-semibold text-foreground">{study.metrics.leadsGenerated.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Qualified Leads</span>
                      <span className="font-semibold text-foreground">{study.metrics.qualifiedLeads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Franchises Sold</span>
                      <span className="font-semibold text-primary">{study.metrics.franchisesSold}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Revenue</span>
                      <span className="font-semibold text-foreground">{study.metrics.totalRevenue}</span>
                    </div>
                  </div>

                  {/* ROI Badge */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Return on Investment</span>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-lg px-3 py-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {study.metrics.roi}
                      </Badge>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(study.website, '_blank');
                      }}
                    >
                      <Globe className="h-3 w-3" />
                      Demo Site
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedROI(study);
                      }}
                    >
                      <FileText className="h-3 w-3" />
                      Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
            <div className="text-left">
              <h4 className="font-bold text-lg text-foreground">Ready to See Similar Results?</h4>
              <p className="text-muted-foreground text-sm">Let's discuss how we can grow your franchise.</p>
            </div>
            <Button 
              size="lg" 
              className="gap-2 whitespace-nowrap"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Schedule Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src={selectedProject.clientLogo} 
                    alt={selectedProject.client} 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {selectedProject.client}
                      <span className="text-muted-foreground">•</span>
                      <Calendar className="h-4 w-4" />
                      {selectedProject.year}
                      <span className="text-muted-foreground">•</span>
                      <Clock className="h-4 w-4" />
                      {selectedProject.duration}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {/* Hero Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <Badge key={idx} className="bg-white/20 text-white border-white/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    size="sm" 
                    className="gap-2"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    View Live Demo <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Results Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                {selectedProject.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <result.icon className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">{result.value}</p>
                    <p className="text-sm text-muted-foreground">{result.label}</p>
                  </div>
                ))}
              </div>

              {/* Case Study Content */}
              <div className="space-y-6">
                {/* Challenge */}
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-500" />
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.fullCaseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Our Solution
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.fullCaseStudy.solution}
                  </p>
                </div>

                {/* Results List */}
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.fullCaseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.fullCaseStudy.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-3">
                    "{selectedProject.fullCaseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{selectedProject.fullCaseStudy.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{selectedProject.fullCaseStudy.testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    className="flex-1 gap-2"
                    onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                  >
                    Get Similar Results
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    View Demo Site
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ROI Detail Modal */}
      <Dialog open={!!selectedROI} onOpenChange={() => setSelectedROI(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedROI && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src={selectedROI.logo} 
                    alt={selectedROI.brand} 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <DialogTitle className="text-xl">{selectedROI.brand} - ROI Report</DialogTitle>
                    <DialogDescription className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {selectedROI.industry}
                      <span className="text-muted-foreground">•</span>
                      <MapPin className="h-4 w-4" />
                      {selectedROI.location}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <DollarSign className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-2xl font-bold">{selectedROI.investment}</p>
                    <p className="text-xs text-muted-foreground">Total Investment</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Clock className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-2xl font-bold">{selectedROI.period}</p>
                    <p className="text-xs text-muted-foreground">Campaign Period</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-2xl font-bold">{selectedROI.metrics.franchisesSold}</p>
                    <p className="text-xs text-muted-foreground">Franchises Sold</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-500/10">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-6 w-6 mx-auto text-green-600 mb-2" />
                    <p className="text-2xl font-bold text-green-600">{selectedROI.metrics.roi}</p>
                    <p className="text-xs text-muted-foreground">ROI</p>
                  </CardContent>
                </Card>
              </div>

              {/* Lead Funnel */}
              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Lead Funnel Breakdown
                </h4>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 bg-primary/20 rounded-full h-8 flex items-center px-4">
                      <span className="text-sm font-medium">Total Leads: {selectedROI.metrics.leadsGenerated.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2 ml-8">
                    <div className="flex-1 bg-primary/40 rounded-full h-8 flex items-center px-4" style={{ width: `${(selectedROI.metrics.qualifiedLeads / selectedROI.metrics.leadsGenerated) * 100}%` }}>
                      <span className="text-sm font-medium">Qualified: {selectedROI.metrics.qualifiedLeads.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between ml-16">
                    <div className="bg-primary rounded-full h-8 flex items-center px-4" style={{ width: `${(selectedROI.metrics.franchisesSold / selectedROI.metrics.leadsGenerated) * 100 * 5}%` }}>
                      <span className="text-sm font-medium text-white">Sold: {selectedROI.metrics.franchisesSold}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channel Breakdown */}
              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Channel Performance
                </h4>
                <div className="space-y-3">
                  {Object.entries(selectedROI.breakdown).map(([channel, data]) => (
                    <div key={channel} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {channel === 'googleAds' && <Target className="h-5 w-5 text-red-500" />}
                        {channel === 'metaAds' && <Eye className="h-5 w-5 text-blue-500" />}
                        {channel === 'linkedin' && <Linkedin className="h-5 w-5 text-blue-700" />}
                        {channel === 'organic' && <Globe className="h-5 w-5 text-green-500" />}
                        <span className="font-medium capitalize">
                          {channel.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold">{data.spend}</p>
                          <p className="text-xs text-muted-foreground">Spend</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{data.leads}</p>
                          <p className="text-xs text-muted-foreground">Leads</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-primary">{data.cpl}</p>
                          <p className="text-xs text-muted-foreground">CPL</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue */}
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue Generated</p>
                    <p className="text-3xl font-bold text-green-600">{selectedROI.metrics.totalRevenue}</p>
                  </div>
                  <Award className="h-12 w-12 text-green-500/50" />
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button 
                  className="flex-1 gap-2"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  Get Your Free ROI Analysis
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open(selectedROI.website, '_blank')}
                >
                  View Campaign Site
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open(selectedROI.reportUrl, '_blank')}
                >
                  <Download className="h-4 w-4" />
                  PDF
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
