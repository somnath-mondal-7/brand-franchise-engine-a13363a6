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

    // Greeting responses
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "Hello! Welcome to FranchiseLeads HQ. How can I help you today? We specialize in franchise lead generation and marketing.";
    }

    // Services
    if (lowerMessage.match(/\b(service|services|what do you do|help with)\b/)) {
      return "We offer comprehensive franchise lead generation services including:\n\n• Digital Marketing & SEO\n• Lead Generation Campaigns\n• Brand Building\n• Multi-Channel Marketing\n\nWould you like to know more about any specific service?";
    }

    // Pricing
    if (lowerMessage.match(/\b(price|pricing|cost|how much)\b/)) {
      return "Our pricing varies based on your specific needs and goals. I'd recommend speaking with our team for a customized quote. Would you like to leave your contact information so we can reach out to you?";
    }

    // Contact
    if (lowerMessage.match(/\b(contact|reach|call|email|phone)\b/)) {
      return "You can contact us through our contact form, or provide your email here and our team will reach out to you shortly. What works best for you?";
    }

    // Lead generation
    if (lowerMessage.match(/\b(lead|leads|generate|generation)\b/)) {
      return "We specialize in generating high-quality franchise leads through targeted digital marketing campaigns, SEO optimization, and multi-channel strategies. Our approach is data-driven and focuses on delivering qualified prospects. Would you like to learn more about our process?";
    }

    // Results/ROI
    if (lowerMessage.match(/\b(result|results|roi|success|track record)\b/)) {
      return "We've helped numerous franchise businesses grow their lead pipeline with measurable results. Our clients typically see increased qualified leads within the first few months. Would you like to see some case studies or testimonials?";
    }

    // Getting started
    if (lowerMessage.match(/\b(start|get started|begin|signup|sign up)\b/)) {
      return "Great! To get started, we'll need to understand your franchise goals and current situation. The best next step is to schedule a consultation with our team. Can you provide your email address?";
    }

    // Default response
    return "Thank you for your message. I'm a simple bot, but I'd love to help! Our team specializes in franchise lead generation and digital marketing. Could you tell me more about what you're looking for, or would you prefer to speak with a human team member?";
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
        ? `Hi ${visitorName}! Welcome to FranchiseLeads HQ.`
        : "Welcome to FranchiseLeads HQ!";
      
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
                  <h3 className="font-semibold text-sm">FranchiseLeads HQ</h3>
                  <p className="text-xs opacity-90">Chatting with Support</p>
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
                  <h3 className="font-semibold text-sm">Chat with us</h3>
                  <p className="text-xs text-muted-foreground">We're online</p>
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
