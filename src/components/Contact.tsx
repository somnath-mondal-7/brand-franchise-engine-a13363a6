import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.firstName.length > 100 || formData.lastName.length > 100) {
      toast.error("Name fields must be under 100 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.message && formData.message.length > 5000) {
      toast.error("Message must be under 5000 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName.slice(0, 100),
          last_name: formData.lastName.slice(0, 100),
          email: formData.email.slice(0, 255),
          phone: formData.phone.slice(0, 30),
          company: formData.company.slice(0, 200),
          role: 'prospect',
          service_interest: 'franchise-leads',
          message: formData.message || 'Strategy call request',
        });

      if (dbError) {
        throw dbError;
      }

      // Send email notification (non-blocking)
      try {
        await supabase.functions.invoke('send-contact-email', { body: formData });
      } catch (emailErr) {
        console.warn('Email notification failed (form was still saved):', emailErr);
      }

      toast.success("Thank you! We'll contact you within 24 hours.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Ready to Scale Your Franchise?
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Let's discuss how we can generate qualified leads and build a powerful brand for your franchise business. Book a strategy call today.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Get Your Free Strategy Session
              </CardTitle>
              <CardDescription className="text-brand-gray">
                Fill out the form below and we'll schedule a personalized consultation to discuss your franchise growth goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-brand-navy mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      className="border-border focus:border-brand-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-brand-navy mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      className="border-border focus:border-brand-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="border-border focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    className="border-border focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-2">
                    Company/Franchise Name
                  </label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Franchise Brand" 
                    className="border-border focus:border-brand-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                    Tell us about your goals
                  </label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current challenges and what you're looking to achieve..."
                    rows={4}
                    className="border-border focus:border-brand-blue"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground shadow-elegant py-3"
                >
                  {isSubmitting ? "Sending..." : "Book My Strategy Call"} 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-sm text-brand-gray text-center">
                We'll respond within 2 hours during business hours
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Call Option */}
            <Card className="bg-gradient-primary text-white shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Book a Call Directly</h3>
                    <p className="opacity-90">Schedule instantly on our calendar</p>
                  </div>
                </div>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-brand-navy hover:bg-gray-50"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  Open Calendar Booking
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-navy">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-navy">Email Us</p>
                    <a href="mailto:support@franchiseleadspro.com" className="text-brand-gray hover:text-brand-blue">
                      support@franchiseleadspro.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-navy">Call Us</p>
                    <a href="tel:+15512012377" className="text-brand-gray hover:text-brand-blue">
                      +1 (551)-201-23-77
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-navy">Office</p>
                    <p className="text-brand-gray">
                      Remote Team<br />
                      Serving Franchise Professionals Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-brand-navy text-white shadow-elegant">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-4">Why Choose FranchiseLeadsPro?</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-bold text-blue-300">&lt; 2 Hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Client Satisfaction</span>
                    <span className="font-bold text-blue-300">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Clients</span>
                    <span className="font-bold text-blue-300">640+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;