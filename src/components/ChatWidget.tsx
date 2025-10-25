import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2, Phone, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { getRandomAgent, type AgentProfile } from '@/utils/agentProfiles';

interface Message {
  id: string;
  message: string;
  sender_type: 'visitor' | 'bot';
  created_at: string;
  agentName?: string;
  agentAvatar?: string;
}

// Notification sound data URL
const NOTIFICATION_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7v/////////////////////////////////";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showProactivePopup, setShowProactivePopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [currentAgent, setCurrentAgent] = useState<AgentProfile>(getRandomAgent());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const originalTitleRef = useRef<string>(document.title);
  const { toast } = useToast();

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio(NOTIFICATION_SOUND);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Favicon notification effect
  useEffect(() => {
    if (unreadCount > 0 && !isOpen) {
      let favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      
      // Create canvas for notification badge
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Draw red circle
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(24, 8, 8, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw count
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(unreadCount.toString(), 24, 8);
      }
      
      favicon.href = canvas.toDataURL();
      
      // Title notification
      const interval = setInterval(() => {
        document.title = document.title === originalTitleRef.current 
          ? `(${unreadCount}) New Message!` 
          : originalTitleRef.current;
      }, 1000);
      
      return () => {
        clearInterval(interval);
        document.title = originalTitleRef.current;
        favicon.href = '/favicon.png';
      };
    }
  }, [unreadCount, isOpen]);

  // Reset unread count when chat opens
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Auto-open chat with proactive popup
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('chat_visited');
    
    if (!hasVisited) {
      sessionStorage.setItem('chat_visited', 'true');
      
      // Show small proactive popup after 10 seconds
      setTimeout(() => {
        setShowProactivePopup(true);
        playNotificationSound();
        setUnreadCount(1);
      }, 10000);

      // Open full chat after 60 seconds
      setTimeout(() => {
        setShowProactivePopup(false);
        setIsOpen(true);
        setShowOptionsMenu(true);
        startConversation();
      }, 60000);
    }
  }, []);

  // Play notification sound
  const playNotificationSound = () => {
    if (!isMuted && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  // Simulate realistic typing with character-by-character delay
  const simulateTyping = async (message: string): Promise<void> => {
    const typingSpeed = 30 + Math.random() * 40; // 30-70ms per character
    const thinkingDelay = 800 + Math.random() * 1200; // 800-2000ms thinking time
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, thinkingDelay));
    
    // Simulate reading the user's message (longer delay for longer messages)
    const readingDelay = Math.min(2000, message.length * 20);
    await new Promise(resolve => setTimeout(resolve, readingDelay));
    
    setIsTyping(false);
  };

  // Send AI-generated response
  const sendAIResponse = async (conversationId: string, userMessage: string) => {
    try {
      await simulateTyping(userMessage);
      setIsTyping(true);

      const conversationHistory = messages
        .filter(m => m.sender_type === 'visitor' || m.sender_type === 'bot')
        .map(m => ({
          role: m.sender_type === 'visitor' ? 'user' : 'assistant',
          content: m.message
        }));

      conversationHistory.push({ role: 'user', content: userMessage });

      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: { 
          messages: conversationHistory,
          agentName: currentAgent.name
        }
      });

      setIsTyping(false);

      if (error) throw error;

      if (data?.response) {
        await addMessage(conversationId, data.response, 'bot');
        if (!isOpen) {
          setUnreadCount(prev => prev + 1);
          playNotificationSound();
        }
      }
    } catch (error: any) {
      console.error('AI response error:', error);
      setIsTyping(false);
      
      const fallbackMessage = error.message?.includes('rate limit') || error.message?.includes('429')
        ? "I'm experiencing high demand right now. Please try again in a moment, or book a call directly: https://calendly.com/franchiseleadshq/consultation"
        : "I apologize for the technical issue. Please email us at contact@franchiseleadshq.com or book a consultation: https://calendly.com/franchiseleadshq/consultation";
      
      await addMessage(conversationId, fallbackMessage, 'bot');
    }
  };

  // Legacy fallback function - now replaced by AI
  const getLegacyBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const calendlyLink = "https://calendly.com/franchiseleadshq/consultation";

    // Greeting responses
    if (lowerMessage.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
      return "Hello! I'm Somnath Mondal, Lead Generation Specialist at FranchiseLeads HQ. I'm here to help you scale your franchise through data-driven marketing strategies.\n\nWe specialize in:\n• Enterprise-grade lead generation systems\n• Multi-channel digital marketing campaigns\n• Advanced SEO & conversion optimization\n• Franchise brand development & positioning\n\nHow can I assist you today?";
    }

    // Services - Comprehensive technical details
    if (lowerMessage.match(/\b(service|services|what do you do|help with|offer|capabilities|solutions)\b/)) {
      return "FranchiseLeads HQ offers enterprise-level franchise marketing solutions:\n\n🎯 **Lead Generation & Acquisition**\n• AI-powered lead scoring & qualification\n• Multi-touch attribution modeling\n• CRM integration (Salesforce, HubSpot, Pipedrive)\n• Automated lead nurturing workflows\n• Real-time lead distribution systems\n• Average: 50-150 qualified leads/month\n\n📱 **Digital Marketing Services**\n• Technical SEO audits & implementation\n• Local SEO for multi-location franchises\n• PPC campaign management (Google, Meta, LinkedIn)\n• Programmatic advertising & retargeting\n• Marketing automation & email campaigns\n• Social media strategy & management\n• Content marketing & thought leadership\n\n🎨 **Brand Development**\n• Franchise brand architecture & positioning\n• Visual identity & brand guidelines\n• Website design & development (React, Next.js)\n• Landing page optimization (CRO)\n• Marketing collateral & sales materials\n• Brand consistency frameworks\n\n📊 **Analytics & Optimization**\n• Google Analytics 4 implementation\n• Conversion tracking & funnel analysis\n• A/B testing & experimentation\n• Marketing attribution modeling\n• ROI tracking & reporting dashboards\n\n💼 **Strategic Consulting**\n• Go-to-market strategy development\n• Market research & competitive analysis\n• Franchise development planning\n• Territory expansion strategies\n\nTypical engagement delivers 300-500% ROI within 90 days.\n\nWhich area would you like to explore further?";
    }

    // SEO specific - Technical depth
    if (lowerMessage.match(/\b(seo|search engine|ranking|google|optimization|organic|serp|keywords)\b/)) {
      return "Our enterprise SEO solutions deliver measurable franchise growth:\n\n**Technical SEO Infrastructure**\n• Core Web Vitals optimization (LCP, FID, CLS)\n• Schema markup implementation (Local Business, Organization)\n• XML sitemap architecture for multi-location sites\n• Canonical URL management & pagination\n• Mobile-first indexing optimization\n• International SEO (hreflang) if applicable\n• Site speed optimization (sub-2s load times)\n\n**Local SEO for Franchises**\n• Google Business Profile optimization (all locations)\n• Local citation building & NAP consistency\n• Location page strategy & implementation\n• Review generation & reputation management\n• Local link building campaigns\n• Geo-targeted content strategies\n\n**Content & On-Page Optimization**\n• Keyword research & search intent analysis\n• Competitive gap analysis\n• Content cluster strategy\n• Title tag & meta description optimization\n• Header tag hierarchy optimization\n• Internal linking architecture\n\n**Performance Metrics**\n• Average organic traffic increase: 200-400%\n• Typical time to page 1 rankings: 3-6 months\n• Average keyword ranking improvements: 50-100 keywords to page 1\n• Local pack appearances: 3x increase in 90 days\n\n**Reporting & Analytics**\n• Monthly SEO performance dashboards\n• Keyword ranking tracking (desktop + mobile)\n• Competitor analysis & benchmarking\n• Google Search Console insights\n• Conversion tracking from organic traffic\n\nReady to dominate local search? Book a technical SEO audit: " + calendlyLink;
    }

    // Lead generation - Technical and comprehensive
    if (lowerMessage.match(/\b(lead|leads|generate|generation|prospect|acquisition|qualified leads)\b/)) {
      return "Our proprietary lead generation system delivers franchise-ready prospects:\n\n**Multi-Channel Acquisition Strategy**\n• Paid Search (Google Ads): Intent-based targeting\n• Paid Social (Meta, LinkedIn, TikTok): Demographic + interest targeting\n• Programmatic Display: Retargeting & prospecting campaigns\n• SEO & Content Marketing: Organic lead capture\n• Email Marketing: Nurture sequences & re-engagement\n• Strategic Partnerships: Co-marketing & referral programs\n\n**Lead Qualification Framework**\n• Financial qualification ($50K+ liquid capital typical)\n• Geographic territory preferences\n• Industry experience & background\n• Timeline to franchise ownership (0-6 months ideal)\n• Multi-unit potential assessment\n• Credit score & background pre-screening (optional)\n\n**Technology Stack & Integration**\n• CRM Integration: Salesforce, HubSpot, Zoho, Pipedrive\n• Lead scoring algorithms (0-100 scale)\n• Automated lead distribution & round-robin\n• Lead nurturing automation (drip campaigns)\n• Two-way SMS communication\n• Call tracking & recording\n• Lead source attribution\n\n**Lead Quality Metrics**\n• Average lead-to-consultation rate: 25-35%\n• Consultation-to-franchise agreement: 15-25%\n• Average cost per qualified lead: $50-$150\n• Monthly volume: 50-150 qualified leads (scalable)\n• Lead response time: <5 minutes (automated)\n\n**Deliverables & Reporting**\n• Real-time lead dashboard access\n• Weekly lead quality reports\n• Monthly campaign performance analysis\n• Lead source ROI tracking\n• Conversion funnel analytics\n• Recommendations for optimization\n\n**Typical Campaign Structure**\n• Month 1: Setup, targeting refinement, initial lead flow\n• Month 2-3: Optimization & scaling\n• Month 4+: Consistent qualified lead delivery at scale\n\nReady to build a predictable lead generation engine? Let's discuss your franchise goals: " + calendlyLink;
    }

    // Pricing
    if (lowerMessage.match(/\b(price|pricing|cost|how much|budget|investment)\b/)) {
      return "Our pricing is customized based on your specific needs, goals, and scale. We offer flexible packages for:\n\n• Startup franchises (1-5 locations)\n• Growing franchises (6-20 locations)\n• Established franchises (20+ locations)\n\nTypical investments range from $2,500-$15,000/month depending on services and scope.\n\nLet's discuss your needs and create a custom proposal. Book a strategy call: " + calendlyLink;
    }

    // Contact
    if (lowerMessage.match(/\b(contact|reach|call|email|phone|talk|speak|meeting|consultation)\b/)) {
      return "I'd love to connect you with our team! Here are your options:\n\n📅 Book a Free Consultation: " + calendlyLink + "\n\n📧 Email: contact@franchiseleadshq.com\n\n📞 Or share your email here and we'll reach out within 24 hours.\n\nWhat works best for you?";
    }

    // Results/ROI
    if (lowerMessage.match(/\b(result|results|roi|success|track record|case study|testimonial)\b/)) {
      return "Our clients see impressive results:\n\n📈 Average ROI: 300-500%\n📊 Lead Volume: 50-150 qualified leads/month\n🎯 Conversion Rate: 15-25% lead-to-franchisee\n⭐ Client Satisfaction: 4.8/5 stars\n\nRecent Success Stories:\n• Restaurant franchise: 180 leads in 90 days\n• Fitness franchise: 5 new locations in 6 months\n• Service franchise: 400% increase in qualified inquiries\n\nWant to see detailed case studies? Let's schedule a call: " + calendlyLink;
    }

    // Getting started
    if (lowerMessage.match(/\b(start|get started|begin|signup|sign up|onboard)\b/)) {
      return "Great! Here's how we get started:\n\n1️⃣ Discovery Call (30 min)\n• Understand your franchise goals\n• Assess current marketing\n• Identify opportunities\n\n2️⃣ Custom Strategy Proposal\n• Tailored marketing plan\n• Transparent pricing\n• Expected results timeline\n\n3️⃣ Launch & Optimize\n• Campaign setup (2 weeks)\n• Ongoing optimization\n• Regular reporting\n\nReady to begin? Book your discovery call: " + calendlyLink;
    }

    // Social media
    if (lowerMessage.match(/\b(social media|facebook|instagram|linkedin|twitter|tiktok)\b/)) {
      return "Our social media services for franchises include:\n\n📱 Platform Management\n• Facebook & Instagram\n• LinkedIn (B2B focus)\n• TikTok (for select industries)\n\n🎨 Content Creation\n• Custom graphics & videos\n• Engaging copy & captions\n• Brand-consistent messaging\n\n📊 Advertising Campaigns\n• Targeted franchise lead ads\n• Retargeting campaigns\n• Performance tracking\n\nLet's discuss your social media strategy: " + calendlyLink;
    }

    // PPC/Advertising
    if (lowerMessage.match(/\b(ppc|pay per click|google ads|facebook ads|advertising|paid)\b/)) {
      return "Our paid advertising expertise includes:\n\n💰 Google Ads\n• Search campaigns\n• Display network\n• YouTube advertising\n\n📱 Social Media Ads\n• Facebook & Instagram\n• LinkedIn B2B campaigns\n• Retargeting strategies\n\n📊 Campaign Management\n• A/B testing\n• Conversion optimization\n• ROI tracking & reporting\n\nAverage Cost Per Lead: $25-$75 (industry dependent)\n\nLet's maximize your ad spend: " + calendlyLink;
    }

    // Website/Design
    if (lowerMessage.match(/\b(website|web design|landing page|site|online presence)\b/)) {
      return "We create high-converting franchise websites:\n\n🎨 Custom Design\n• Brand-aligned aesthetics\n• Mobile-responsive layouts\n• Fast loading speeds\n\n🔧 Key Features\n• Lead capture forms\n• Multi-location support\n• Franchise opportunity pages\n• Testimonials & case studies\n\n⚡ Optimization\n• SEO-friendly structure\n• Conversion rate optimization\n• Analytics integration\n\nNeed a website audit or new site? Let's talk: " + calendlyLink;
    }

    // Timeline/Speed
    if (lowerMessage.match(/\b(how long|timeline|when|fast|quick|speed|time frame)\b/)) {
      return "Our typical timelines:\n\n⚡ Campaign Launch: 2-3 weeks\n📈 First Results: 30-45 days\n🎯 Optimized Performance: 60-90 days\n\nWhat we deliver from day one:\n• Detailed strategy document\n• Campaign setup & launch\n• Weekly progress updates\n• Monthly performance reports\n\nWant to get started quickly? Book now: " + calendlyLink;
    }

    // Industries/Franchise types
    if (lowerMessage.match(/\b(industry|industries|type|restaurant|fitness|service|retail)\b/)) {
      return "We work with franchises across all industries:\n\n🍔 Food & Beverage\n• Restaurants, QSR, Coffee shops\n\n💪 Health & Fitness\n• Gyms, Studios, Wellness centers\n\n🏠 Home Services\n• Cleaning, Repair, Maintenance\n\n🛍️ Retail\n• Specialty retail, Convenience stores\n\n📚 Education & Childcare\n• Tutoring, Daycare, Enrichment\n\n✨ And many more!\n\nLet's discuss your specific franchise: " + calendlyLink;
    }

    // Franchise-specific questions
    if (lowerMessage.match(/\b(franchise|franchising|franchisee|franchisor|territory|unit|location)\b/)) {
      return "Franchise Development & Growth Expertise:\n\n**Franchise Marketing Services**\n• Franchisee recruitment campaigns\n• Territory development strategies\n• Franchise disclosure document (FDD) marketing\n• Discovery day promotion & management\n• Franchise validation facilitation\n• Multi-unit franchisee targeting\n\n**Franchise Brand Building**\n• Franchise brand positioning & messaging\n• Franchisee portal development\n• Marketing playbooks for franchisees\n• Co-op marketing program management\n• National vs. local marketing balance\n• Franchise awards & recognition programs\n\n**Technology for Franchises**\n• Multi-location website architecture\n• Franchise locator tools\n• Review management across locations\n• Centralized marketing asset management\n• Franchisee performance dashboards\n\n**Industries We Serve**\n✓ Food & Beverage (QSR, Fast Casual, Coffee)\n✓ Fitness & Wellness (Gyms, Yoga, Med Spas)\n✓ Home Services (Cleaning, Restoration, Lawn Care)\n✓ Retail (Specialty, Convenience, Pet)\n✓ Education & Childcare (Tutoring, STEM, Daycare)\n✓ Automotive (Repair, Detailing, Oil Change)\n✓ Business Services (Shipping, Printing, Consulting)\n\nLet's build your franchise growth strategy: " + calendlyLink;
    }

    // Marketing automation & technology
    if (lowerMessage.match(/\b(automation|crm|technology|software|platform|tool|integration|api)\b/)) {
      return "Marketing Technology & Automation Solutions:\n\n**CRM & Marketing Automation**\n• Platform selection & implementation\n• Workflow automation design\n• Lead scoring configuration\n• Email marketing automation\n• SMS marketing integration\n• Landing page builders (Unbounce, Instapage)\n• Form optimization & progressive profiling\n\n**Analytics & Reporting**\n• Google Analytics 4 setup & configuration\n• Google Tag Manager implementation\n• Custom dashboard creation (Looker Studio, Tableau)\n• Call tracking (CallRail, DialogTech)\n• Heat mapping & session recording (Hotjar)\n• A/B testing platforms (Optimizely, VWO)\n\n**Integrations We Support**\n• CRMs: Salesforce, HubSpot, Zoho, Pipedrive\n• Email: Mailchimp, Constant Contact, ActiveCampaign\n• Ads: Google Ads API, Meta Business Suite\n• Webinar: Zoom, GoToWebinar, Demio\n• Payment: Stripe, Square (for consultations)\n• Scheduling: Calendly, Acuity, ScheduleOnce\n\n**Marketing Stack Optimization**\n• Technology audit & recommendations\n• Integration architecture design\n• Data flow mapping\n• API custom integrations\n• Zapier/Make automation workflows\n\nNeed help selecting or optimizing your marketing technology? Let's talk: " + calendlyLink;
    }

    // ROI and performance questions
    if (lowerMessage.match(/\b(roi|return on investment|performance|results|metrics|kpi|conversion|analytics|data)\b/)) {
      return "Performance Metrics & ROI Analysis:\n\n**Typical Client Results**\n📈 Average ROI: 300-500% within first year\n📊 Lead Volume: 50-150 qualified leads/month\n🎯 Lead-to-Close Rate: 15-25% (franchise industry avg)\n⚡ Time to First Lead: 7-14 days\n📞 Cost Per Lead: $50-$150 (depending on franchise)\n💰 Customer Acquisition Cost: $2,000-$8,000\n🔄 Payback Period: 3-6 months average\n\n**Key Performance Indicators We Track**\n• Website traffic & engagement metrics\n• Conversion rates by channel & campaign\n• Lead quality scores & qualification rates\n• Marketing qualified leads (MQL) to sales qualified leads (SQL)\n• Cost per click, cost per lead, cost per acquisition\n• Return on ad spend (ROAS) by platform\n• Customer lifetime value (LTV)\n• Attribution modeling & assisted conversions\n\n**Reporting & Transparency**\n• Real-time dashboard access 24/7\n• Weekly performance snapshots\n• Monthly comprehensive reports\n• Quarterly business reviews\n• Year-over-year trend analysis\n• Competitive benchmarking\n\n**Case Studies Available**\n• Fitness Franchise: 180 leads in 90 days, 12 new locations\n• Restaurant Franchise: 400% ROAS, $2.2M in franchise fees\n• Service Franchise: Reduced CPL by 63%, 5x lead volume\n\nRequest detailed case studies: " + calendlyLink;
    }

    // Budget and investment questions
    if (lowerMessage.match(/\b(budget|cost|price|pricing|investment|spend|fee|affordable|expensive)\b/)) {
      return "Investment & Pricing Structure:\n\n**Service Packages**\n\n🚀 **Startup Package** ($2,500-$5,000/month)\n• Best for: 1-5 franchise locations\n• Google Ads + Meta Ads management\n• Basic SEO (technical + on-page)\n• Landing page optimization\n• Monthly reporting\n• $3,000-$7,000/month ad spend recommended\n\n🎯 **Growth Package** ($5,000-$10,000/month)\n• Best for: 6-20 franchise locations\n• Multi-channel campaigns (Google, Meta, LinkedIn)\n• Advanced SEO + content marketing\n• CRM setup & automation\n• Lead nurturing sequences\n• Weekly optimization & reporting\n• $8,000-$15,000/month ad spend recommended\n\n🏆 **Enterprise Package** ($10,000-$25,000/month)\n• Best for: 20+ franchise locations or rapid expansion\n• Full-service digital marketing\n• Dedicated account team\n• Advanced analytics & attribution\n• Custom technology integrations\n• Franchise recruitment strategy\n• Brand development & positioning\n• $15,000-$50,000+/month ad spend recommended\n\n**What's Included in Management Fees**\n✓ Strategy development & planning\n✓ Campaign setup & management\n✓ Creative development (ads, landing pages)\n✓ Ongoing optimization & testing\n✓ Reporting & analytics\n✓ Monthly strategy calls\n✓ Account support & communication\n\n**Additional Services (À La Carte)**\n• Website design & development: $8,000-$25,000\n• Brand development: $5,000-$15,000\n• Video production: $2,000-$8,000 per video\n• Marketing automation setup: $3,000-$10,000\n\n**Payment Terms**\n• Month-to-month agreements (no long-term contracts)\n• 30-day notice to cancel or adjust\n• Ad spend billed separately (direct to platforms)\n\n**ROI Expectations**\n• Typical payback period: 3-6 months\n• Average first-year ROI: 300-500%\n• Break-even point: Usually 2-4 franchise sales\n\nLet's create a custom proposal for your franchise: " + calendlyLink;
    }

    // Competitor comparisons
    if (lowerMessage.match(/\b(competitor|alternative|vs|versus|compare|comparison|better|different|why choose)\b/)) {
      return "Why Choose FranchiseLeads HQ:\n\n**Franchise Industry Specialization**\n✓ 100% focus on franchise businesses (not general marketing)\n✓ Deep understanding of FDD, Item 19, franchise sales cycles\n✓ Experience with 50+ franchise brands across industries\n✓ Knowledge of franchise-specific compliance & regulations\n\n**Technology & Innovation**\n✓ Proprietary lead scoring algorithms\n✓ Advanced marketing automation\n✓ Real-time reporting dashboards\n✓ AI-powered campaign optimization\n✓ Custom integrations & API development\n\n**Results & Accountability**\n✓ Performance-based mindset (we track everything)\n✓ Transparent reporting (real-time access)\n✓ Month-to-month agreements (no long-term lock-in)\n✓ Dedicated account team (not outsourced)\n✓ Average client tenure: 2.5+ years\n\n**Comprehensive Approach**\n✓ Multi-channel expertise (not just one platform)\n✓ Full-funnel optimization (awareness to close)\n✓ Franchisee recruitment + franchisee support marketing\n✓ Brand building + lead generation combined\n\n**vs. General Marketing Agencies**\n• We understand franchise economics & unit-level profitability\n• We know franchise validation & discovery day processes\n• We speak the language of franchisors & franchisees\n\n**vs. In-House Marketing Teams**\n• Lower cost than full-time employees + benefits\n• Broader expertise across channels & technologies\n• No ramp-up time (we're franchise experts already)\n• Access to enterprise tools & relationships\n\n**vs. Freelancers**\n• Consistent team & accountability\n• Comprehensive strategy (not piecemeal)\n• Scalable resources as you grow\n• Proven processes & frameworks\n\nReady to see the difference? Book a strategy session: " + calendlyLink;
    }

    // Default response with comprehensive guidance
    return "Thank you for reaching out! I'm Somnath Mondal, and I'm here to provide expert guidance on franchise growth and marketing.\n\n**I can help you with:**\n\n📈 **Lead Generation**\n• Qualified prospect acquisition strategies\n• Multi-channel campaign planning\n• Lead nurturing systems\n\n🎯 **Digital Marketing**\n• SEO optimization for franchises\n• PPC advertising (Google, Meta, LinkedIn)\n• Social media marketing\n• Content marketing strategies\n\n💼 **Franchise Growth**\n• Territory expansion planning\n• Franchisee recruitment campaigns\n• Brand development & positioning\n• Marketing technology & automation\n\n📊 **Strategy & Analytics**\n• ROI analysis & performance metrics\n• Competitive analysis\n• Custom marketing plans\n• Budget planning & optimization\n\n**Quick Topics:**\nJust ask about pricing, services, ROI, case studies, SEO, lead generation, franchise marketing, technology, or anything related to growing your franchise.\n\n**Prefer to talk directly?**\nSchedule a free 30-minute strategy session: " + calendlyLink + "\n\n📧 Email: contact@franchiseleadshq.com\n📞 We typically respond within 2 hours during business hours.\n\nWhat specific aspect of franchise growth can I help you with?";
  };

  const startConversation = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_conversations')
        .insert({
          visitor_name: visitorName || null,
          visitor_email: visitorEmail || null,
          status: 'active'
        })
        .select()
        .single();

      if (error) throw error;

      setConversationId(data.id);
      setHasProvidedInfo(true);

      // Send welcome message
      const welcomeMessage = visitorName 
        ? `Hi ${visitorName}! I'm ${currentAgent.name}, ${currentAgent.role} at FranchiseLeads HQ. Thanks for connecting with me today.`
        : `Hi! I'm ${currentAgent.name}, ${currentAgent.role} at FranchiseLeads HQ. Thanks for connecting with me today.`;
      
      await addMessage(data.id, welcomeMessage, 'bot');
    } catch (error) {
      console.error('Error starting conversation:', error);
      toast({
        title: "Error",
        description: "Failed to start chat. Please try again.",
        variant: "destructive",
      });
    }
  };

  const addMessage = async (convId: string, messageText: string, senderType: 'visitor' | 'bot') => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert({
          conversation_id: convId,
          message: messageText,
          sender_type: senderType
        })
        .select()
        .single();

      if (error) throw error;

      setMessages(prev => [...prev, {
        id: data.id,
        message: data.message,
        sender_type: data.sender_type as 'visitor' | 'bot',
        created_at: data.created_at,
        agentName: senderType === 'bot' ? currentAgent.name : undefined,
        agentAvatar: senderType === 'bot' ? currentAgent.avatar : undefined
      }]);
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversationId) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message
    await addMessage(conversationId, userMessage, 'visitor');

    // Generate AI response
    await sendAIResponse(conversationId, userMessage);
  };

  const endConversation = async () => {
    if (!conversationId) return;

    try {
      // Update conversation status
      await supabase
        .from('chat_conversations')
        .update({ status: 'ended', ended_at: new Date().toISOString() })
        .eq('id', conversationId);

      // Send email notification
      await supabase.functions.invoke('send-chat-notification', {
        body: {
          conversationId,
          visitorName,
          visitorEmail,
          messages: messages.map(m => ({
            message: m.message,
            sender_type: m.sender_type,
            created_at: m.created_at
          }))
        }
      });

      toast({
        title: "Chat Ended",
        description: "Thank you for chatting with us! We'll be in touch soon.",
      });

      // Reset state
      setIsOpen(false);
      setMessages([]);
      setConversationId(null);
      setHasProvidedInfo(false);
      setVisitorName('');
      setVisitorEmail('');
    } catch (error) {
      console.error('Error ending conversation:', error);
    }
  };

  const handleProactivePopupAction = (action: 'question' | 'consultation' | 'other') => {
    setShowProactivePopup(false);
    setIsOpen(true);
    setShowOptionsMenu(true);
    
    if (!conversationId) {
      startConversation();
    }
  };

  const handleOptionSelect = async (option: string) => {
    setShowOptionsMenu(false);
    
    if (!conversationId) return;
    
    // User selects an option
    await addMessage(conversationId, option, 'visitor');
    
    // Generate AI response based on selection
    await sendAIResponse(conversationId, option);
  };

  return (
    <>
      {/* Proactive Popup - Small notification */}
      {showProactivePopup && !isOpen && (
        <div className="fixed bottom-36 left-6 w-80 bg-card border-2 border-primary shadow-2xl rounded-2xl z-50 animate-in slide-in-from-bottom-4">
          <div className="relative p-5">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowProactivePopup(false)}
              className="absolute top-2 right-2 h-6 w-6 rounded-full"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="mb-4">
              <p className="text-sm font-semibold text-foreground mb-1">
                Hello! Welcome to FranchiseLeads HQ
              </p>
              <p className="text-xs text-muted-foreground">
                I'm {currentAgent.name}, here to help you grow your franchise
              </p>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={() => handleProactivePopupAction('consultation')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                Free Consultation
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  onClick={() => handleProactivePopupAction('question')}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  I have a question
                </Button>
                <Button 
                  onClick={() => handleProactivePopupAction('other')}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Other
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button with Green Dot and Unread Badge */}
      {!isOpen && !showProactivePopup && (
        <div className="fixed bottom-6 left-6 z-40">
          <div className="relative">
            <Button
              onClick={() => {
                setIsOpen(true);
                if (!conversationId) {
                  setShowOptionsMenu(true);
                }
              }}
              className="h-16 w-16 rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-transform p-0 overflow-hidden"
              size="icon"
              aria-label="Open chat"
            >
              <img 
                src={currentAgent.avatar} 
                alt={`Chat with ${currentAgent.name}`} 
                className="w-full h-full object-cover"
              />
            </Button>
            {/* Green availability dot */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
            {/* Unread count badge */}
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white animate-bounce">
                {unreadCount}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Window - Full screen on mobile, card on desktop */}
      {isOpen && (
        <Card className={`fixed inset-0 md:bottom-6 md:left-6 md:inset-auto w-full md:w-[420px] shadow-2xl z-50 flex flex-col transition-all overflow-hidden ${isMinimized ? 'h-16' : 'h-full md:h-[650px]'}`}>

          {/* Header with Somnath Available */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary/90">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden">
                <img 
                  src={currentAgent.avatar} 
                  alt={currentAgent.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">{currentAgent.name}</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <p className="text-xs text-white/90">Available Now</p>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                className="h-8 w-8 text-white hover:bg-white/20"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                className="h-8 w-8 text-white hover:bg-white/20"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
                {!hasProvidedInfo ? (
                  <div className="space-y-3">
                    <div className="bg-card rounded-lg p-4 border shadow-sm">
                      <p className="text-sm text-foreground mb-3 font-medium">Welcome! Let's get started:</p>
                      <Input
                        placeholder="Your name (optional)"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="mb-2"
                      />
                      <Input
                        placeholder="Your email (optional)"
                        type="email"
                        value={visitorEmail}
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        className="mb-3"
                      />
                      <Button onClick={startConversation} className="w-full bg-primary hover:bg-primary/90">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                ) : showOptionsMenu ? (
                  <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-card rounded-2xl p-4 border shadow-sm">
                      <p className="text-sm font-medium text-foreground mb-4">I can provide insights on:</p>
                      <div className="space-y-2">
                        <Button 
                          onClick={() => handleOptionSelect("✓ Lead generation strategies & ROI expectations")}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-3 hover:bg-primary/10 hover:border-primary"
                        >
                          <span className="text-sm">✓ Lead generation strategies & ROI expectations</span>
                        </Button>
                        <Button 
                          onClick={() => handleOptionSelect("✓ Digital marketing solutions for franchises")}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-3 hover:bg-primary/10 hover:border-primary"
                        >
                          <span className="text-sm">✓ Digital marketing solutions for franchises</span>
                        </Button>
                        <Button 
                          onClick={() => handleOptionSelect("✓ SEO & paid advertising approaches")}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-3 hover:bg-primary/10 hover:border-primary"
                        >
                          <span className="text-sm">✓ SEO & paid advertising approaches</span>
                        </Button>
                        <Button 
                          onClick={() => handleOptionSelect("✓ Pricing & custom package options")}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-3 hover:bg-primary/10 hover:border-primary"
                        >
                          <span className="text-sm">✓ Pricing & custom package options</span>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 text-center">Or feel free to ask me anything!</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender_type === 'visitor' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
                      >
                        {msg.sender_type === 'bot' && (
                          <div className="w-8 h-8 rounded-full border-2 border-primary/20 overflow-hidden mr-2 flex-shrink-0">
                            <img 
                              src={msg.agentAvatar || currentAgent.avatar} 
                              alt={msg.agentName || currentAgent.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${
                            msg.sender_type === 'visitor'
                              ? 'bg-primary text-primary-foreground rounded-br-sm'
                              : 'bg-card border rounded-bl-sm'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{msg.message}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start items-center">
                        <div className="w-8 h-8 rounded-full border-2 border-primary/20 overflow-hidden mr-2 flex-shrink-0">
                          <img 
                            src={currentAgent.avatar} 
                            alt={currentAgent.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="bg-card border p-3 rounded-2xl shadow-sm">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Area */}
              {hasProvidedInfo && (
                <div className="p-4 border-t bg-card">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                          setShowOptionsMenu(false);
                        }
                      }}
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => {
                        sendMessage();
                        setShowOptionsMenu(false);
                      }} 
                      size="icon" 
                      disabled={isTyping || !inputMessage.trim()}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Powered by FranchiseLeads HQ
                  </p>
                </div>
              )}
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
