import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const getVal = (selector: string) => (form.querySelector(selector) as HTMLInputElement | HTMLTextAreaElement | null)?.value?.trim() || '';

    const firstName = getVal('#firstName');
    const lastName = getVal('#lastName');
    const email = getVal('#email');
    const phone = getVal('#phone');
    const company = getVal('#company');
    const message = getVal('#message');

    if (!firstName || !lastName || !email || !phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        company,
        role: 'prospect',
        service_interest: 'franchise-leads',
        message: message || 'Strategy call request',
      });
      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: { firstName, lastName, email, phone, company, message },
      });
      if (emailError) throw emailError;

      toast.success("Thank you! We'll contact you within 24 hours.");
      form.reset();
    } catch (err: any) {
      console.error('Contact form error:', err);
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Let's Talk Growth
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              Ready to transform your franchise business? Let's discuss how our lead generation 
              and brand building services can help you dominate your market.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-elegant border-border/50">
                  <CardHeader>
                    <CardTitle className="text-3xl text-brand-navy mb-4">
                      Book Your Strategy Call
                    </CardTitle>
                    <p className="text-brand-gray">
                      Fill out the form below and we'll schedule a personalized consultation 
                      to discuss your franchise growth goals.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Enter your first name"
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Enter your last name"
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="your@email.com"
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input 
                            id="company" 
                            placeholder="Your company name"
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role *</Label>
                          <Select>
                            <SelectTrigger className="border-border/50 focus:border-primary">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="consultant">Franchise Consultant</SelectItem>
                              <SelectItem value="franchisor">Franchisor</SelectItem>
                              <SelectItem value="broker">Franchise Broker</SelectItem>
                              <SelectItem value="developer">Franchise Developer</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select>
                          <SelectTrigger className="border-border/50 focus:border-primary">
                            <SelectValue placeholder="What service are you interested in?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lead-generation">Lead Generation</SelectItem>
                            <SelectItem value="brand-building">Brand Building</SelectItem>
                            <SelectItem value="both">Both Services</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Tell Us About Your Goals *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Describe your current challenges and what you'd like to achieve..."
                          rows={4}
                          className="border-border/50 focus:border-primary resize-none"
                        />
                      </div>

                       <Button 
                         type="submit" disabled={isSubmitting}
                        size="lg" 
                        className="w-full bg-gradient-primary hover:shadow-elegant text-lg py-6"
                      >
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Schedule Strategy Call
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Quick Links */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-navy">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Email</p>
                        <p className="text-brand-gray">support@franchiseleadshq.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Phone</p>
                        <p className="text-brand-gray">+1 (321) 515-9932</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Business Hours</p>
                        <p className="text-brand-gray">Mon-Fri: 9AM-6PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-gradient-secondary border-border/50">
                  <CardContent className="p-6 text-center space-y-6">
                    <h3 className="text-xl font-bold text-brand-navy">Why Choose Us?</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">640+</div>
                        <div className="text-sm text-brand-gray">Franchise Professionals Served</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">297K+</div>
                        <div className="text-sm text-brand-gray">Qualified Leads Generated</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-sm text-brand-gray">Client Success Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-gradient-primary text-white border-0">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="text-xl font-bold">Quick Response Guarantee</h3>
                    <p className="text-sm opacity-90">
                      We respond to all inquiries within 2 hours during business hours.
                    </p>
                    <div className="text-3xl font-bold">&lt; 2 Hours</div>
                    <div className="text-sm opacity-90">Average Response Time</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-brand-gray">
                Quick answers to common questions about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">How quickly can we start seeing results?</h4>
                  <p className="text-brand-gray text-sm">
                    Most clients start seeing qualified leads within 2-3 weeks of campaign launch, 
                    with full optimization typically achieved within 30-45 days.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">What makes your leads higher quality?</h4>
                  <p className="text-brand-gray text-sm">
                    Our multi-step qualification process ensures leads meet specific criteria for 
                    investment capacity, genuine interest, and franchise readiness before delivery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">Do you work with all franchise industries?</h4>
                  <p className="text-brand-gray text-sm">
                    Yes, we work with franchise consultants and franchisors across all industries, 
                    from food service to business services and everything in between.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-brand-navy mb-3">What's included in brand building?</h4>
                  <p className="text-brand-gray text-sm">
                    Brand strategy, positioning, content creation, digital presence optimization, 
                    and ongoing market analysis to ensure your brand stands out.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;