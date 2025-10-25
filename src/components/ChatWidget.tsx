import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2, Phone, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { getRandomAgent, type AgentProfile } from '@/utils/agentProfiles';

interface Message {
  id: string;
  message: string;
  sender_type: 'visitor' | 'bot';
  created_at: string;
  agentName?: string;
  agentAvatar?: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showProactivePopup, setShowProactivePopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [currentAgent, setCurrentAgent] = useState<AgentProfile>(getRandomAgent());
  const [hasShownProactivePopup, setHasShownProactivePopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Play notification sound
  const playNotificationSound = () => {
    if (!isMuted) {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGi78OScTgwNUKjj8LVkHAU5kdXzzn0xBSl+zPLaizsIHGq78eOWTQ0PU6vk7rhsIgYug9D03Z1MDBhru+3mnU0MDlGn5O+6byMGLX/O8tyNOQcYaLrt6KFODBBTqOPwuW0iBC1+zPLaizsIG2m68OScTgwOUajk77lvIgYsf87y3I4+');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  };

  // Auto-close after 1 minute of inactivity
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    
    if (isOpen) {
      inactivityTimerRef.current = setTimeout(() => {
        setIsOpen(false);
        toast({
          title: "Chat closed",
          description: "Chat closed due to inactivity. Feel free to reach out again!",
        });
      }, 60000); // 1 minute
    }
  };

  useEffect(() => {
    if (isOpen) {
      resetInactivityTimer();
    }
    
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [isOpen]);

  // Show proactive popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownProactivePopup && !isOpen) {
        setShowProactivePopup(true);
        setHasShownProactivePopup(true);
      }
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [hasShownProactivePopup, isOpen]);

  const handleProactiveMessages = async () => {
    // Start conversation first
    try {
      const { data, error } = await supabase
        .from('chat_conversations')
        .insert({
          visitor_name: null,
          visitor_email: null,
          status: 'active'
        })
        .select()
        .single();

      if (error) throw error;
      setConversationId(data.id);

      const proactiveMessages = [
        "Thanks for visiting our website. Is there anything I can assist you with?",
        "Were you able to find the information you were looking for?",
        "Would you like to set up a consultation?"
      ];

      for (let i = 0; i < proactiveMessages.length; i++) {
        playNotificationSound();
        await simulateTyping(data.id, proactiveMessages[i]);
        if (i < proactiveMessages.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second pause between messages
        }
      }
    } catch (error) {
      console.error('Error with proactive messages:', error);
    }
  };

  // Simulate realistic typing with character-by-character delay
  const simulateTyping = async (convId: string, message: string): Promise<void> => {
    const typingSpeed = 30 + Math.random() * 40; // 30-70ms per character
    const thinkingDelay = 800 + Math.random() * 1200; // 800-2000ms thinking time
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, thinkingDelay));
    
    // Simulate reading/thinking
    const readingDelay = Math.min(2000, message.length * 20);
    await new Promise(resolve => setTimeout(resolve, readingDelay));
    
    setIsTyping(false);
    
    // Add message to database and UI
    await addMessage(convId, message, 'bot');
  };

  // Send AI-generated response
  const sendAIResponse = async (conversationId: string, userMessage: string) => {
    try {
      await simulateTyping(conversationId, userMessage);
      setIsTyping(true);

      const conversationHistory = messages
        .filter(m => m.sender_type === 'visitor' || m.sender_type === 'bot')
        .map(m => ({
          role: m.sender_type === 'visitor' ? 'user' : 'assistant',
          content: m.message
        }));

      conversationHistory.push({ role: 'user', content: userMessage });

      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: { 
          messages: conversationHistory,
          agentName: currentAgent.name
        }
      });

      setIsTyping(false);

      if (error) throw error;

      if (data?.response) {
        playNotificationSound();
        await addMessage(conversationId, data.response, 'bot');
        if (!isOpen) {
          setUnreadCount(prev => prev + 1);
        }
      }
    } catch (error: any) {
      console.error('AI response error:', error);
      setIsTyping(false);
      
      const fallbackMessage = error.message?.includes('rate limit') || error.message?.includes('429')
        ? "I'm experiencing high demand right now. Please try again in a moment, or book a call directly: https://calendly.com/franchiseleadshq/consultation"
        : "I apologize for the technical issue. Please email us at contact@franchiseleadshq.com or book a consultation: https://calendly.com/franchiseleadshq/consultation";
      
      await addMessage(conversationId, fallbackMessage, 'bot');
    }
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
        ? `Hi ${visitorName}! I'm ${currentAgent.name}, ${currentAgent.role} at FranchiseLeads HQ. Thanks for connecting with me today.`
        : `Hi! I'm ${currentAgent.name}, ${currentAgent.role} at FranchiseLeads HQ. Thanks for connecting with me today.`;
      
      playNotificationSound();
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
        created_at: data.created_at,
        agentName: senderType === 'bot' ? currentAgent.name : undefined,
        agentAvatar: senderType === 'bot' ? currentAgent.avatar : undefined
      }]);
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversationId) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    resetInactivityTimer(); // Reset timer on user activity

    // Add user message
    await addMessage(conversationId, userMessage, 'visitor');

    // Generate AI response
    await sendAIResponse(conversationId, userMessage);
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

  const handleProactivePopupAction = async (action: string) => {
    setShowProactivePopup(false);
    setIsOpen(true);
    
    // Start conversation and send proactive messages when full chatbox opens
    if (!conversationId) {
      await handleProactiveMessages();
    }
  };

  const handleOptionSelect = async (option: string) => {
    setShowOptionsMenu(false);
    
    if (!conversationId) return;
    
    // User selects an option
    await addMessage(conversationId, option, 'visitor');
    
    // Generate AI response based on selection
    await sendAIResponse(conversationId, option);
  };

  return (
    <>
      {/* Proactive Popup - Simple welcome with action buttons */}
      {showProactivePopup && !isOpen && (
        <div className="fixed bottom-36 right-6 w-80 bg-card border-2 border-primary shadow-2xl rounded-2xl z-50 animate-in slide-in-from-bottom-4">
          <div className="relative p-5">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleProactivePopupAction('close')}
              className="absolute top-2 right-2 h-6 w-6 rounded-full"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="mb-4">
              <p className="text-sm font-semibold text-foreground mb-2">
                Hello! Welcome to FranchiseLeads HQ
              </p>
              <p className="text-xs text-muted-foreground">
                I'm {currentAgent.name}, here to help you grow your franchise
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="space-y-2">
              <Button
                onClick={() => handleProactivePopupAction("I'd like a free consultation")}
                className="w-full"
                size="sm"
              >
                Free Consultation
              </Button>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleProactivePopupAction("I have a question")}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  I have a question
                </Button>
                <Button
                  onClick={() => handleProactivePopupAction("Other")}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  Other
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button with Green Dot and Unread Badge */}
      {!isOpen && !showProactivePopup && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="relative">
            <Button
              onClick={async () => {
                setIsOpen(true);
                resetInactivityTimer();
                if (!conversationId) {
                  await handleProactiveMessages();
                }
              }}
              className="h-16 w-16 rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-transform p-0 overflow-hidden"
              size="icon"
              aria-label="Open chat"
            >
              <img 
                src={currentAgent.avatar} 
                alt={`Chat with ${currentAgent.name}`} 
                className="w-full h-full object-cover"
              />
            </Button>
            {/* Green availability dot */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
            {/* Unread count badge */}
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white animate-bounce">
                {unreadCount}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Window - Centered on desktop */}
      {isOpen && (
        <Card className={`fixed inset-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:inset-auto w-full md:w-[420px] shadow-2xl z-50 flex flex-col transition-all overflow-hidden ${isMinimized ? 'h-16' : 'h-full md:h-[650px]'}`}>

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary/90">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden">
                <img 
                  src={currentAgent.avatar} 
                  alt={currentAgent.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">{currentAgent.name}</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <p className="text-xs text-white/90">Available Now</p>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                className="h-8 w-8 text-white hover:bg-white/20"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 text-white hover:bg-white/20"
                aria-label="Minimize"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsOpen(false);
                  if (inactivityTimerRef.current) {
                    clearTimeout(inactivityTimerRef.current);
                  }
                }}
                className="h-8 w-8 text-white hover:bg-white/20"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender_type === 'visitor' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2 max-w-[80%] ${msg.sender_type === 'visitor' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {msg.sender_type === 'bot' && (
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={msg.agentAvatar || currentAgent.avatar} 
                            alt={msg.agentName || currentAgent.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-2 ${
                          msg.sender_type === 'visitor'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card border border-border'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                        <p className="text-xs opacity-60 mt-1">
                          {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={currentAgent.avatar} 
                          alt={currentAgent.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-2xl px-4 py-3 bg-card border border-border">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Options Menu */}
              {showOptionsMenu && (
                <div className="p-4 border-t bg-card">
                  <p className="text-sm text-muted-foreground mb-3">How can I help you today?</p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleOptionSelect("I want to learn about your lead generation services")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3"
                    >
                      📈 Lead Generation Services
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("I'd like to schedule a consultation")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3"
                    >
                      📅 Schedule Consultation
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("Tell me about pricing and packages")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3"
                    >
                      💰 Pricing & Packages
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("I have a specific question")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3"
                    >
                      💬 Other Question
                    </Button>
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t bg-card">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => {
                      setInputMessage(e.target.value);
                      resetInactivityTimer();
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default ChatWidget;