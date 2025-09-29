import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-navy mb-2">
                    First Name *
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="border-border focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-brand-navy mb-2">
                    Last Name *
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    className="border-border focus:border-brand-blue"
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
                  placeholder="john@example.com" 
                  className="border-border focus:border-brand-blue"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
                  Phone Number *
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  className="border-border focus:border-brand-blue"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-2">
                  Company/Franchise Name
                </label>
                <Input 
                  id="company" 
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
                  placeholder="Describe your current challenges and what you're looking to achieve..."
                  rows={4}
                  className="border-border focus:border-brand-blue"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary text-primary-foreground shadow-elegant py-3">
                Book My Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
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
                    <a href="mailto:support@franchiseleadshq.com" className="text-brand-gray hover:text-brand-blue">
                      support@franchiseleadshq.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-navy">Call Us</p>
                    <a href="tel:+13215159932" className="text-brand-gray hover:text-brand-blue">
                      (+1) 321-515-9932
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
                <h4 className="text-lg font-bold mb-4">Why Choose FranchiseLeadsHQ?</h4>
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