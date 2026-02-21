import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Team member imports
import marketingDirectorSarahChen from "@/assets/team/marketing-director-sarah-chen.jpg";
import leadSpecialistDavidMartinez from "@/assets/team/lead-specialist-david-martinez.jpg";  
import brandStrategistEmilyThompson from "@/assets/team/brand-strategist-emily-thompson.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "Franchise Development Director",
      image: marketingDirectorSarahChen,
      bio: "15+ years in franchise consulting. Led 300+ franchise development projects across retail, F&B, and service industries in India and USA markets.",
      expertise: ["Franchise Development", "Legal Compliance", "Operations Manuals"]
    },
    {
      name: "David Martinez",
      position: "Franchisee Recruitment Specialist",
      image: leadSpecialistDavidMartinez,
      bio: "Expert in franchise matchmaking and investor relations. Successfully matched 500+ franchisees with ideal opportunities, achieving 95% retention rate.",
      expertise: ["Franchisee Recruitment", "Investor Relations", "Due Diligence"] 
    },
    {
      name: "Emily Thompson",
      position: "Expansion Strategy Consultant",
      image: brandStrategistEmilyThompson,
      bio: "International franchising expert specializing in USA and India expansion. Helped 100+ brands scale their franchise networks across multiple markets.",
      expertise: ["Expansion Strategy", "Market Research", "International Franchising"]
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Comprehensive Solutions",
      description: "End-to-end franchise consulting from development to expansion, covering every aspect of franchising success."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client Partnership",
      description: "We build long-term relationships, guiding you through every stage of your franchise journey with dedicated support."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Expertise",
      description: "18+ years of franchise consulting experience across India and USA markets with 850+ successful projects."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes - successful franchise launches, qualified franchisee matches, and profitable expansion."
    }
  ];

  return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>About FranchiseLeadsPro - Leading Franchise Consulting Firm | India & USA</title>
          <meta name="description" content="FranchiseLeadsPro is a premier franchise consulting company with 18+ years of experience in franchise development, recruitment, matchmaking, and expansion across India and USA." />
          <link rel="canonical" href="https://www.franchiseleadspro.com/about" />
        </Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is FranchiseLeadsPro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FranchiseLeadsPro is a specialized franchise marketing and lead generation agency helping consultants and franchisors grow with qualified leads and strong brand positioning."
                }
              },
              {
                "@type": "Question",
                "name": "Where do you operate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve clients worldwide, with strong presence across the USA, UK, Canada, Australia, Dubai, India and Kuwait."
                }
              },
              {
                "@type": "Question",
                "name": "What services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer franchise lead generation, brand building, digital marketing strategy, campaign execution, and conversion optimization tailored to the franchise industry."
                }
              },
              {
                "@type": "Question",
                "name": "How fast can I see results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many clients start seeing qualified franchise inquiries within 30 days, depending on budget, market, and goals."
                }
              }
            ]
          })}
        </script>
        <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              About FranchiseLeads Pro
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              Your trusted franchise consulting partner with 18+ years of experience helping businesses franchise successfully 
              and connecting investors with profitable franchise opportunities across India & USA.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-brand-navy">Our Mission</h2>
                <p className="text-lg text-brand-gray leading-relaxed">
                  To empower businesses to franchise successfully and help entrepreneurs find the perfect franchise opportunity 
                  through expert consulting, strategic guidance, and proven methodologies that work in both Indian and American markets.
                </p>
                <p className="text-lg text-brand-gray leading-relaxed">
                  Founded in 2007, we've helped 850+ brands develop and expand their franchise systems, matched thousands of investors 
                  with their ideal franchise opportunities, and facilitated franchise growth across 60+ industries.
                </p>
                <p className="text-lg text-brand-gray leading-relaxed">
                  We're not just another consulting agency. We're franchise development specialists who understand 
                  every aspect of franchising - from legal documentation and operations manuals to recruitment strategies 
                  and international expansion. Our bilingual team brings deep expertise in both Indian and USA markets.
                </p>
              </div>
              <div className="bg-gradient-secondary p-8 rounded-3xl shadow-card">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">850+</div>
                    <div className="text-sm text-brand-gray">Franchise Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">60+</div>
                    <div className="text-sm text-brand-gray">Industries Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">97%</div>
                    <div className="text-sm text-brand-gray">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">18+</div>
                    <div className="text-sm text-brand-gray">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Core Values</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-brand-navy">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Our team combines deep franchise industry knowledge with cutting-edge marketing strategies 
              to deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader className="pb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full rounded-full object-cover shadow-card"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.position}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-brand-navy">Specialties:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Why Choose FranchiseLeads Pro?</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              We're not just another marketing agency. Here's what sets us apart in the franchise industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Complete Franchise Development</h3>
              <p className="text-brand-gray leading-relaxed">
                We transform successful businesses into franchise systems with comprehensive development services including FDD preparation, 
                operations manuals, training programs, and legal compliance. Our expertise spans both Indian and USA franchise laws, 
                ensuring your franchise model meets all regulatory requirements while being attractive to potential franchisees.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Expert Franchise Matchmaking</h3>
              <p className="text-brand-gray leading-relaxed">
                With 850+ franchise projects completed, we excel at connecting the right investors with the right opportunities. 
                Our matchmaking process includes detailed investor profiling, financial capability assessment, and brand compatibility analysis 
                to ensure mutually beneficial partnerships that lead to long-term success for both franchisors and franchisees.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Strategic Expansion Planning</h3>
              <p className="text-brand-gray leading-relaxed">
                Whether you're expanding within India, entering the USA market, or going international, we provide data-driven expansion 
                strategies. Our services include market research, site selection, territory planning, and master franchise development 
                to help you scale your franchise network efficiently while maintaining brand consistency and quality standards.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Ongoing Support & Training</h3>
              <p className="text-brand-gray leading-relaxed">
                Franchising success requires continuous support. We provide comprehensive training programs, operational guidance, 
                quality assurance systems, and performance monitoring to ensure every franchise location operates at peak efficiency. 
                Our dedicated support team helps franchisors and franchisees navigate challenges and capitalize on growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;