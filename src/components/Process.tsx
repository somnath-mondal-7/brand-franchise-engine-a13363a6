import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Handshake, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Analysis & Outreach",
      description: "We delve deep into your business processes to identify areas for improvements. We start with data-driven outreach to find high-intent candidates seeking franchise ownership.",
      details: [
        "Market research and competitive analysis",
        "Target audience identification",
        "Strategic outreach planning",
        "Initial candidate sourcing"
      ]
    },
    {
      number: "02",
      icon: <Filter className="w-8 h-8 text-white" />,
      title: "Qualification",
      description: "We filter out the noise. Every candidate is put through our multi-point vetting system, ensuring you only engage with serious, viable prospects ready to move forward.",
      details: [
        "Financial qualification assessment",
        "Investment readiness verification",
        "Background and experience check",
        "Intent and commitment evaluation"
      ]
    },
    {
      number: "03",
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: "Introduction",
      description: "The final step is a seamless connection. We facilitate warm introductions between vetted candidates and you. We'll update every lead in your CRM system.",
      details: [
        "Personalized introductions",
        "CRM system integration",
        "Follow-up coordination",
        "Ongoing relationship support"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            From concept to execution, see how we bring life to your franchise business with our systematic approach to lead generation and brand building.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-24 top-32 w-0.5 h-32 bg-brand-blue/30" />
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <Card className="border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-brand-navy mb-2">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-brand-gray text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <ArrowRight className="w-4 h-4 text-brand-blue flex-shrink-0" />
                            <span className="text-brand-gray">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 lg:p-12 shadow-card">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">
              Ready to Transform Your Franchise Business?
            </h3>
            <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto">
              Our proven 3-step process has helped franchise professionals generate qualified leads and build powerful brands that dominate their markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;