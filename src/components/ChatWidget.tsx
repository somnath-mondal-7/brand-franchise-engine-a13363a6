import React, { useState, useEffect, useRef } from 'react';
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
  // Randomly select an agent for each conversation
  const currentAgent = React.useMemo(() => getRandomAgent(), []);
  const [hasShownProactivePopup, setHasShownProactivePopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const originalFaviconRef = useRef<string>('');
  const faviconBlinkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const botMessageCountRef = useRef(0); // Track bot response count for speed control
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Blink favicon every 3 seconds when chat is open
  useEffect(() => {
    if (isOpen) {
      // Set initial state
      updateFaviconWithNotification();
      
      // Blink every 3 seconds
      faviconBlinkIntervalRef.current = setInterval(() => {
        updateFaviconWithNotification();
      }, 3000);
    } else if (unreadCount > 0) {
      updateFaviconWithNotification();
    } else {
      resetFavicon();
      // Clear interval when closed
      if (faviconBlinkIntervalRef.current) {
        clearInterval(faviconBlinkIntervalRef.current);
        faviconBlinkIntervalRef.current = null;
      }
    }
    
    return () => {
      if (faviconBlinkIntervalRef.current) {
        clearInterval(faviconBlinkIntervalRef.current);
      }
    };
  }, [unreadCount, isOpen]);

  // Store original favicon on mount
  useEffect(() => {
    const favicon = document.querySelector('link[rel*="icon"]') as HTMLLinkElement;
    if (favicon) {
      originalFaviconRef.current = favicon.href;
    }
  }, []);

  const updateFaviconWithNotification = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Draw orange background
    ctx.fillStyle = '#FF6B35';
    ctx.fillRect(0, 0, 32, 32);
    
    // Add text "New"
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('New', 16, 16);

    // Update favicon
    const favicon = document.querySelector('link[rel*="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = canvas.toDataURL('image/png');
    }

    // Update title with "(New Message)" text
    document.title = `(New Message) FranchiseLeads HQ`;
  };

  const resetFavicon = () => {
    const favicon = document.querySelector('link[rel*="icon"]') as HTMLLinkElement;
    if (favicon && originalFaviconRef.current) {
      favicon.href = originalFaviconRef.current;
    }
    document.title = 'FranchiseLeads HQ - Franchise Lead Generation Experts';
  };

  // Play clear, professional notification sound
  const playNotificationSound = () => {
    if (!isMuted) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Clear notification tone - gentle rising pitch
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(800, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    }
  };

  // Track follow-up state
  const followUpCountRef = useRef(0);
  const lastMessageTimeRef = useRef<number>(Date.now());

  // Send follow-up after 30s, then after 1min, then stop
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    
    // Reset follow-up count and timestamp on user activity
    followUpCountRef.current = 0;
    lastMessageTimeRef.current = Date.now();
    
    if (isOpen && conversationId) {
      // First follow-up after 30 seconds
      inactivityTimerRef.current = setTimeout(async () => {
        if (followUpCountRef.current === 0) {
          followUpCountRef.current = 1;
          const followUpMsg = "Are you still there? 😊";
          await addMessage(conversationId, followUpMsg, 'bot');
          playNotificationSound();
          if (!isOpen) {
            setUnreadCount(prev => prev + 1);
          }
          
          // Schedule second follow-up after another 30 seconds (1 minute total)
          inactivityTimerRef.current = setTimeout(async () => {
            if (followUpCountRef.current === 1) {
              followUpCountRef.current = 2;
              const secondFollowUp = "I'm here whenever you're ready to chat!";
              await addMessage(conversationId, secondFollowUp, 'bot');
              playNotificationSound();
              if (!isOpen) {
                setUnreadCount(prev => prev + 1);
              }
              // Stop after this - no more follow-ups
            }
          }, 30000); // Another 30 seconds
        }
      }, 30000); // 30 seconds
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
  }, [isOpen, conversationId, messages]);

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
        // First 3 messages are fast
        await simulateTyping(data.id, proactiveMessages[i], true);
        if (i < proactiveMessages.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second pause between fast messages
        }
      }
    } catch (error) {
      console.error('Error with proactive messages:', error);
    }
  };

  // Simulate realistic typing with character-by-character delay
  const simulateTyping = async (convId: string, message: string, isFast: boolean = false): Promise<void> => {
    // First 3 responses are fast, rest are slower
    const thinkingDelay = isFast 
      ? 800 + Math.random() * 500  // Fast: 0.8-1.3 seconds
      : 1500 + Math.random() * 2000; // Slow: 1.5-3.5 seconds
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, thinkingDelay));
    
    // Simulate reading the user's message based on length
    const readingDelay = isFast 
      ? Math.min(1000, message.length * 15)  // Fast reading
      : Math.min(3000, message.length * 30);  // Slower reading
    await new Promise(resolve => setTimeout(resolve, readingDelay));
    
    setIsTyping(false);
    
    // Add message to database and UI
    await addMessage(convId, message, 'bot');
    botMessageCountRef.current += 1; // Increment bot message count
  };

  // Send AI-generated response
  const sendAIResponse = async (conversationId: string, userMessage: string) => {
    try {
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
        // Check if this is within the first 3 bot messages (use fast typing)
        const isFastResponse = botMessageCountRef.current < 3;
        
        // Use simulateTyping to show typing indicator and add delay
        const tempIsTyping = isTyping;
        setIsTyping(true);
        
        const thinkingDelay = isFastResponse 
          ? 800 + Math.random() * 500  // Fast: 0.8-1.3 seconds
          : 1500 + Math.random() * 2000; // Slow: 1.5-3.5 seconds
        
        await new Promise(resolve => setTimeout(resolve, thinkingDelay));
        setIsTyping(tempIsTyping);
        
        await addMessage(conversationId, data.response, 'bot');
        botMessageCountRef.current += 1; // Increment count
        
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

      // Send welcome message - fast since it's initial
      const welcomeMessage = visitorName 
        ? `Hi ${visitorName}! I'm ${currentAgent.name}, ${currentAgent.role} at FranchiseLeads HQ. Thanks for connecting with me today.`
        : `Hi! I'm ${currentAgent.name}, ${currentAgent.role} at FranchiseLeads HQ. Thanks for connecting with me today.`;
      
      playNotificationSound();
      await simulateTyping(data.id, welcomeMessage, true);
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
                setUnreadCount(0);
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
        <>
          <div className="fixed inset-0 z-40 bg-background/50" />
          <Card className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] max-w-[480px] shadow-2xl z-50 flex flex-col transition-all overflow-hidden border-2 border-border ${isMinimized ? 'h-16' : 'h-[70vh] md:h-[650px]'}`}>

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary/90">
          <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-3 border-white overflow-hidden">
                <img 
                  src={currentAgent.avatar} 
                  alt={currentAgent.name} 
                  className="w-full h-full object-cover"
                />
                {/* Active green dot on avatar */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white">{currentAgent.name}</h3>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-500 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <p className="text-xs text-white font-medium">Online Agent</p>
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
                  setUnreadCount(0);
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
        </>
      )}
    </>
  );
};

export default ChatWidget;