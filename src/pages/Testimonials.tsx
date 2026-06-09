import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import jesicaThompsonVideo from "@/assets/videos/jesica-thompson-review.mp4.asset.json";
import jonathanMorganVideo from "@/assets/videos/jonathan-morgan-review.mp4.asset.json";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Franchise Consultant",
      company: "Mitchell Franchise Group",
      rating: 5,
      text: "FranchiseLeadsPro transformed our lead generation completely. We went from 15 leads per month to over 100 qualified prospects. The quality is exceptional and our conversion rate doubled.",
      results: "100+ leads/month",
      industry: "Multi-Unit Development"
    },
    {
      name: "Michael Rodriguez",
      title: "CEO & Franchisor", 
      company: "GrowthMax Franchising",
      rating: 5,
      text: "The brand building work they did for us was game-changing. Our brand recognition improved dramatically, and we're now the go-to choice in our market. ROI was 400% in the first year.",
      results: "400% ROI",
      industry: "Food & Beverage"
    },
    {
      name: "Jennifer Chen",
      title: "Franchise Development Director",
      company: "Elite Franchise Solutions",
      rating: 5,
      text: "Working with FranchiseLeadsPro has been the best business decision we made. Their systematic approach to lead qualification saves us hours each week, and we close more deals than ever.",
      results: "3x more closures",
      industry: "Business Services"
    },
    {
      name: "David Thompson",
      title: "Franchise Consultant",
      company: "Thompson Franchise Partners", 
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. In 6 months, we generated over $2M in franchise fees. Their lead quality is unmatched in the industry.",
      results: "$2M+ in fees",
      industry: "Retail & Services"
    },
    {
      name: "Lisa Anderson",
      title: "VP of Franchise Development",
      company: "NextGen Franchises",
      rating: 5,
      text: "The brand positioning strategy they developed helped us stand out in a crowded market. We're now seen as the premium choice, and our average franchise investment increased by 40%.",
      results: "40% higher investment",
      industry: "Health & Fitness"
    },
    {
      name: "Robert Johnson",
      title: "Franchise Broker",
      company: "Johnson Business Brokers",
      rating: 5,
      text: "FranchiseLeadsPro doesn't just deliver leads - they deliver results. Our pipeline is consistently full of qualified prospects, and our team can focus on what we do best: closing deals.",
      results: "Consistent pipeline",
      industry: "Business Brokerage"
    }
    ,
    {
      name: "Amanda Reyes",
      title: "Independent Franchise Consultant",
      company: "Reyes Franchise Advisory • Phoenix, AZ",
      rating: 5,
      text: "As a solo consultant, my calendar is my business. Their team handles outreach and qualification end-to-end so every conversation I take is with a serious, vetted candidate.",
      results: "Vetted candidates",
      industry: "Independent Consulting"
    },
    {
      name: "Daniel Brooks",
      title: "Franchise Development Director",
      company: "Brooks Brands USA • Atlanta, GA",
      rating: 5,
      text: "They actually took the time to learn our brand story. The candidates they bring fit our culture, not just the price point. That's something other agencies never delivered.",
      results: "Culture-fit leads",
      industry: "Multi-Brand Franchisor"
    },
    {
      name: "Priya Natarajan",
      title: "VP Franchise Growth",
      company: "Sunrise QSR Group • Chicago, IL",
      rating: 5,
      text: "Prospects show up to our discovery calls already familiar with our concept. That kind of warm pipeline is rare and it's changed how our development team operates.",
      results: "Warm discovery calls",
      industry: "Quick Service Restaurants"
    },
    {
      name: "Marcus Hill",
      title: "Independent Franchise Broker, IFPG",
      company: "Hill Franchise Group • Charlotte, NC",
      rating: 5,
      text: "Straightforward team, no fluff, no over-promising. They told me what to expect and delivered consistently month after month. Refreshing in this industry.",
      results: "Consistent delivery",
      industry: "Independent Brokerage"
    },
    {
      name: "Elena Vasquez",
      title: "Franchise Consultant",
      company: "FranBridge Partners • Miami, FL",
      rating: 5,
      text: "Communication is what sets them apart. Clear weekly updates, transparent reporting, and a team that actually picks up the phone when I have a question.",
      results: "Transparent reporting",
      industry: "Franchise Consulting"
    },
    {
      name: "Gregory Patel",
      title: "Founder & CEO",
      company: "Patel Fitness Concepts • Houston, TX",
      rating: 5,
      text: "We're a US-based emerging franchisor and they treated our brand like it was their own. The investor introductions they made directly led to signed franchise agreements.",
      results: "Signed agreements",
      industry: "Health & Fitness Franchisor"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Testimonials | Franchise Lead Generation Results | FranchiseLeadsPro</title>
        <meta name="description" content="Read real success stories from franchise consultants and franchisors who generated qualified leads with FranchiseLeadsPro. See proven results and ROI." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/testimonials" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Success Stories
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              See how franchise consultants and franchisors are achieving extraordinary growth 
              with our lead generation and brand building services.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-4">
                Video Reviews
              </Badge>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Video Testimonials</h2>
              <p className="text-xl text-brand-gray">
                Hear directly from our clients about their experience working with us.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { name: "Jesica Thompson", title: "Consultant, Franchise Solutions Inc.", videoSrc: "/videos/jesica-thompson-review.mp4" },
                { name: "Jonathan Morgan", title: "CEO, NextFranch Corp", videoSrc: "/videos/jonathan-morgan-review.mp4" },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] sm:aspect-[4/5] bg-muted relative overflow-hidden">
                    <video className="w-full h-full object-cover" controls preload="metadata">
                      <source src={video.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                  <CardContent className="p-5">
                    <h4 className="text-base font-bold text-foreground">{video.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{video.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text Testimonials Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">What Our Clients Say</h2>
              <p className="text-xl text-brand-gray">
                Real results from real franchise professionals who trust us with their growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 relative overflow-hidden"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {testimonial.results}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-brand-gray leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-brand-navy group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-brand-gray">{testimonial.title}</p>
                          <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.industry}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-brand-navy">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-brand-gray">
              Join franchise professionals who have transformed their businesses with our services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 text-center hover:shadow-elegant transition-all">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Lead Generation</h3>
                <p className="text-brand-gray mb-6">
                  Get 50-100+ qualified franchise leads per month with our proven system.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-elegant transition-all">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Brand Building</h3>
                <p className="text-brand-gray mb-6">
                  Position your franchise as the market leader with strategic brand development.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl font-bold">Start Your Success Story Today</h2>
            <p className="text-xl opacity-90">
              Book a strategy call to discuss how we can help you achieve similar results.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg backdrop-blur-sm"
              >
                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;