import { useState, useEffect, useCallback } from 'react';
import { record } from 'rrweb';
import { supabase } from '@/integrations/supabase/client';

export interface SessionEvent {
  type: number;
  data: any;
  timestamp: number;
}

export const useSessionRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [events, setEvents] = useState<SessionEvent[]>([]);
  const [stopRecordingFn, setStopRecordingFn] = useState<(() => void) | null>(null);

  const startRecording = useCallback(() => {
    if (isRecording) return;

    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    setEvents([]);
    setIsRecording(true);

    const stopFn = record({
      emit(event) {
        setEvents(prev => [...prev, event as SessionEvent]);
      },
      recordCanvas: true,
      collectFonts: true,
      inlineStylesheet: true,
    });

    setStopRecordingFn(() => stopFn);
  }, [isRecording]);

  const stopRecording = useCallback(async () => {
    if (!isRecording || !stopRecordingFn || !sessionId) return;

    stopRecordingFn();
    setIsRecording(false);
    setStopRecordingFn(null);

    // Save session to Supabase
    try {
      const { error } = await supabase
        .from('session_recordings')
        .insert({
          session_id: sessionId,
          events: events,
          duration: events.length > 0 ? events[events.length - 1].timestamp - events[0].timestamp : 0,
          user_agent: navigator.userAgent,
          page_url: window.location.href,
        });

      if (error) {
        console.error('Error saving session:', error);
      }
    } catch (err) {
      console.error('Error saving session:', err);
    }

    return { sessionId, events };
  }, [isRecording, stopRecordingFn, sessionId, events]);

  return {
    isRecording,
    sessionId,
    events,
    startRecording,
    stopRecording,
  };
};