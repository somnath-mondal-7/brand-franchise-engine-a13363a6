import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

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
      
      // Open chat after 3 seconds
      const openTimer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      // Start conversation after 4 seconds
      const startTimer = setTimeout(async () => {
        await startConversation();
      }, 4000);

      // Send follow-up messages
      const followUpTimer = setTimeout(async () => {
        if (conversationId) {
          await addMessage(conversationId, "Looking for help with franchise lead generation? I'm here to assist!", 'bot');
          
          setTimeout(async () => {
            await addMessage(conversationId, "What brings you to our site today? Are you interested in:\n\n• Lead Generation Services\n• Digital Marketing\n• Growing Your Franchise", 'bot');
          }, 3000);
        }
      }, 8000);

      return () => {
        clearTimeout(openTimer);
        clearTimeout(startTimer);
        clearTimeout(followUpTimer);
      };
    }
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
        ? `Hi ${visitorName}! Welcome to FranchiseLeads HQ. I'm here to help you with any questions about franchise lead generation. How can I assist you today?`
        : "Welcome to FranchiseLeads HQ! I'm here to help you with any questions about franchise lead generation. How can I assist you today?";
      
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
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-6 right-6 w-96 shadow-2xl z-50 flex flex-col transition-all ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Chat with us</h3>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary/80"
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
                className="h-8 w-8 text-primary-foreground hover:bg-primary/80"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
                {!hasProvidedInfo ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Welcome! Please provide your information to start chatting:</p>
                    <Input
                      placeholder="Your name (optional)"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                    />
                    <Input
                      placeholder="Your email (optional)"
                      type="email"
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                    />
                    <Button onClick={startConversation} className="w-full">
                      Start Chat
                    </Button>
                  </div>
                ) : (
                  <>
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender_type === 'visitor' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            msg.sender_type === 'visitor'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-sm">Typing...</p>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Area */}
              {hasProvidedInfo && (
                <div className="p-4 border-t bg-background">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      disabled={isLoading}
                    />
                    <Button onClick={sendMessage} size="icon" disabled={isLoading}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
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
