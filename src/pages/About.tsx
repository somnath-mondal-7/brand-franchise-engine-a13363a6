import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

// Team member imports
import ceoFounder from "@/assets/team/ceo-founder.jpg";
import marketingDirectorSarahChen from "@/assets/team/marketing-director-sarah-chen.jpg";
import leadSpecialistDavidMartinez from "@/assets/team/lead-specialist-david-martinez.jpg";  
import brandStrategistEmilyThompson from "@/assets/team/brand-strategist-emily-thompson.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Michael Ross",
      position: "CEO & Founder",
      image: ceoFounder,
      bio: "15+ years of franchise industry experience. Built and scaled multiple franchise consulting firms, helping over 1,000 franchisors expand nationwide.",
      expertise: ["Franchise Strategy", "Business Development", "Market Expansion"]
    },
    {
      name: "Sarah Chen",
      position: "Marketing Director",
      image: marketingDirectorSarahChen,
      bio: "Digital marketing expert specializing in franchise lead generation. Led campaigns generating $50M+ in franchise sales revenue.",
      expertise: ["Digital Marketing", "Lead Generation", "Campaign Strategy"]
    },
    {
      name: "David Martinez",
      position: "Lead Generation Specialist",
      image: leadSpecialistDavidMartinez,
      bio: "Data-driven marketer with expertise in converting prospects into qualified franchise leads. Developed our proprietary lead scoring system.",
      expertise: ["Lead Qualification", "Data Analytics", "Conversion Optimization"] 
    },
    {
      name: "Emily Thompson",
      position: "Brand Strategist",
      image: brandStrategistEmilyThompson,
      bio: "Brand positioning expert who has helped 200+ franchise brands establish market dominance through strategic brand development.",
      expertise: ["Brand Strategy", "Market Positioning", "Creative Direction"]
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable results for your franchise business."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with each client to understand their unique needs."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Industry Expertise",
      description: "Deep knowledge of the franchise industry helps us create strategies that actually work."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Continuous Growth",
      description: "We constantly evolve our methods to stay ahead of market trends and deliver better results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              About FranchiseLeads HQ
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              We're the franchise industry's most trusted partner for lead generation and brand building, 
              helping consultants and franchisors achieve extraordinary growth.
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
                  We believe every franchise professional deserves access to high-quality leads and powerful 
                  brand positioning. Our mission is to eliminate the guesswork from franchise marketing 
                  and deliver predictable, scalable growth.
                </p>
                <p className="text-lg text-brand-gray leading-relaxed">
                  Since our founding, we've helped over 640 franchise professionals generate 297,000+ 
                  qualified leads while building brands that command attention in their markets.
                </p>
                <p className="text-lg text-brand-gray leading-relaxed">
                  We're not just another marketing agency. We're franchise industry specialists who understand 
                  the unique challenges of franchise development, the importance of qualified lead generation, 
                  and the power of strategic brand positioning in competitive markets.
                </p>
              </div>
              <div className="bg-gradient-secondary p-8 rounded-3xl shadow-card">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">640+</div>
                    <div className="text-sm text-brand-gray">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">297K+</div>
                    <div className="text-sm text-brand-gray">Leads Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-brand-gray">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
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
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Why Choose FranchiseLeads HQ?</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              We're not just another marketing agency. Here's what sets us apart in the franchise industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Franchise Industry Expertise</h3>
              <p className="text-brand-gray leading-relaxed">
                We understand the unique challenges franchise consultants and franchisors face. 
                Our strategies are built specifically for the franchise industry, not adapted from generic marketing playbooks. 
                With deep knowledge of FTC regulations, franchise documentation, and buyer psychology, we deliver compliant and effective results.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Proven Track Record</h3>
              <p className="text-brand-gray leading-relaxed">
                With 640+ satisfied clients and 297,000+ qualified leads generated, our results speak for themselves. 
                We don't just promise growth—we deliver it consistently. Our clients see an average 300% ROI within the first 6 months, 
                with many achieving franchise awards and national recognition for their growth achievements.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Comprehensive Approach</h3>
              <p className="text-brand-gray leading-relaxed">
                We don't just generate leads—we build brands that attract quality prospects organically. Our holistic approach 
                includes strategic brand positioning, targeted lead generation, automated nurture sequences, and conversion optimization 
                to ensure your franchise business grows sustainably with a strong market presence.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Technology-Driven Results</h3>
              <p className="text-brand-gray leading-relaxed">
                Our proprietary lead scoring system and advanced analytics platform help you identify the most qualified prospects 
                before your competitors do. We leverage cutting-edge marketing automation, AI-powered targeting, and real-time 
                performance tracking to maximize your marketing investment and accelerate franchise development.
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