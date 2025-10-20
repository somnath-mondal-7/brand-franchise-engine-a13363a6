import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2, Phone, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import chatAvatar from '@/assets/chat-avatar.png';

interface Message {
  id: string;
  message: string;
  sender_type: 'visitor' | 'bot';
  created_at: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open chat and send proactive messages
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('chat_visited');
    
    if (!hasVisited) {
      sessionStorage.setItem('chat_visited', 'true');
      
      // Open chat after 5 seconds
      setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      // Start conversation after 6 seconds
      setTimeout(async () => {
        await startConversation();
      }, 6000);
    }
  }, []);

  // Send sequential proactive messages after conversation starts
  useEffect(() => {
    if (!conversationId || messages.length > 1) return;

    const sendProactiveMessages = async () => {
      // First message after 2 seconds
      setTimeout(async () => {
        await addMessage(conversationId, "Thanks for visiting our website. Is there anything I can assist you with?", 'bot');
      }, 2000);

      // Second message after 5 seconds
      setTimeout(async () => {
        await addMessage(conversationId, "Were you able to find the information you were looking for?", 'bot');
      }, 5000);

      // Third message after 8 seconds
      setTimeout(async () => {
        await addMessage(conversationId, "Would you like to set up a consultation? We specialize in:\n\n• Franchise Lead Generation\n• Digital Marketing Strategy\n• Brand Building & Growth\n• Multi-Channel Marketing Campaigns", 'bot');
      }, 8000);
    };

    sendProactiveMessages();
  }, [conversationId]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const calendlyLink = "https://calendly.com/franchiseleadshq/consultation";

    // Greeting responses
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "Hello! I'm Somnath from FranchiseLeads HQ. How can I help you today? We specialize in franchise lead generation, digital marketing, and brand building for franchise businesses.";
    }

    // Services - Enhanced with more details
    if (lowerMessage.match(/\b(service|services|what do you do|help with|offer)\b/)) {
      return "We offer comprehensive franchise marketing services:\n\n🎯 Lead Generation\n• Qualified franchise prospect acquisition\n• Multi-channel lead campaigns\n• Lead nurturing & follow-up systems\n\n📱 Digital Marketing\n• SEO optimization for franchise visibility\n• PPC advertising campaigns\n• Social media marketing & management\n• Content marketing strategies\n\n🎨 Brand Building\n• Franchise brand development\n• Marketing collateral design\n• Website development & optimization\n• Brand consistency across locations\n\n💼 Consulting Services\n• Marketing strategy development\n• Franchise growth planning\n• Market analysis & research\n\nWhich service interests you most?";
    }

    // SEO specific
    if (lowerMessage.match(/\b(seo|search engine|ranking|google|optimization)\b/)) {
      return "Our SEO services help franchise businesses dominate local and national search results:\n\n• Keyword research & strategy\n• On-page & technical SEO\n• Local SEO for multiple locations\n• Content optimization\n• Link building campaigns\n• Monthly reporting & analytics\n\nWe've helped franchises increase organic traffic by 200%+ on average. Want to discuss your SEO needs? Book a call: " + calendlyLink;
    }

    // Lead generation - Enhanced
    if (lowerMessage.match(/\b(lead|leads|generate|generation|prospect)\b/)) {
      return "We specialize in generating high-quality franchise leads through:\n\n✅ Targeted Digital Campaigns\n• Facebook & Instagram ads\n• Google Ads (Search & Display)\n• LinkedIn B2B targeting\n\n✅ Lead Qualification\n• Pre-screened prospects\n• Financial qualification\n• Territory-specific targeting\n\n✅ CRM Integration\n• Automated lead delivery\n• Lead scoring systems\n• Follow-up automation\n\nOur average client sees 50-100 qualified leads per month. Ready to scale your franchise? Schedule a consultation: " + calendlyLink;
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

    // Default response with Calendly
    return "Thank you for your message! I'm here to help answer questions about our franchise lead generation and marketing services.\n\nIf you have a specific question, feel free to ask about:\n• Lead generation strategies\n• Digital marketing services\n• Pricing & packages\n• Success stories & ROI\n• Getting started process\n\nOr, if you'd prefer to speak with our team directly, book a free consultation: " + calendlyLink + "\n\nHow can I help you today?";
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
        ? `Hi ${visitorName}! I'm Somnath from FranchiseLeads HQ.`
        : "Hi! I'm Somnath from FranchiseLeads HQ.";
      
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
        created_at: data.created_at
      }]);
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversationId) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Add user message
    await addMessage(conversationId, userMessage, 'visitor');

    // Generate bot response
    setTimeout(async () => {
      const botResponse = getBotResponse(userMessage);
      await addMessage(conversationId, botResponse, 'bot');
      setIsLoading(false);
    }, 500);
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

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-6 h-16 w-16 rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-transform z-40 p-0 overflow-hidden"
          size="icon"
          aria-label="Open chat"
        >
          <img 
            src={chatAvatar} 
            alt="Chat with us" 
            className="w-full h-full object-cover"
          />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-32 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-[450px] lg:w-[500px] shadow-2xl z-40 flex transition-all overflow-hidden ${isMinimized ? 'h-16' : 'h-[90vh] md:h-[600px]'}`}>
          {/* Left Sidebar - Hidden when minimized */}
          {!isMinimized && (
            <div className="hidden md:flex md:w-[180px] lg:w-[200px] bg-gradient-to-b from-primary to-primary/90 text-primary-foreground flex-col items-center justify-between p-4">
              <div className="text-center space-y-4 w-full">
                <div className="w-20 h-20 rounded-full border-4 border-white/30 mx-auto overflow-hidden">
                  <img 
                    src={chatAvatar} 
                    alt="Support Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Somnath Mondal</h3>
                  <div className="flex items-center gap-1.5 justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs opacity-90">Available Now</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 space-y-2">
                  <p className="text-sm font-semibold">We are ONLINE!</p>
                  <p className="text-xs opacity-90">We'd love to help you</p>
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-xs">Call Us</span>
                </a>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="text-primary-foreground hover:bg-white/20 w-full"
              >
                {isMuted ? <VolumeX className="h-4 w-4 mr-2" /> : <Volume2 className="h-4 w-4 mr-2" />}
                <span className="text-xs">{isMuted ? 'Unmute' : 'Mute'}</span>
              </Button>
            </div>
          )}

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b bg-background">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden md:hidden">
                  <img 
                    src={chatAvatar} 
                    alt="Support Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Somnath Mondal</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs text-muted-foreground">Available Now</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8"
                  aria-label="Minimize chat"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (conversationId) {
                      endConversation();
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="h-8 w-8"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 bg-muted/30">
                  {!hasProvidedInfo ? (
                    <div className="space-y-3">
                      <div className="bg-background rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-muted-foreground mb-3">Welcome! Please provide your information to start chatting:</p>
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
                        <Button onClick={startConversation} className="w-full">
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender_type === 'visitor' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] md:max-w-[80%] p-3 rounded-lg shadow-sm ${
                              msg.sender_type === 'visitor'
                                ? 'bg-primary text-primary-foreground rounded-br-none'
                                : 'bg-background border rounded-bl-none'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{msg.message}</p>
                            <span className="text-xs opacity-70 mt-1 block">
                              {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-background border p-3 rounded-lg shadow-sm">
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
                  <div className="p-3 md:p-4 border-t bg-background">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                        disabled={isLoading}
                        className="flex-1"
                      />
                      <Button onClick={sendMessage} size="icon" disabled={isLoading || !inputMessage.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      By using this chat, you agree to our Privacy Policy
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
