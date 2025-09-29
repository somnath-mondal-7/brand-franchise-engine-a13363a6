import React from 'react';
import { SimpleSessionPlayer } from './SimpleSessionPlayer';
import { SessionEvent } from '@/hooks/useSessionRecording';

interface SessionPlayerProps {
  events: SessionEvent[];
  sessionId: string;
  onClose?: () => void;
}

export const SessionPlayer: React.FC<SessionPlayerProps> = ({ 
  events, 
  sessionId, 
  onClose 
}) => {
  return (
    <SimpleSessionPlayer
      events={events}
      sessionId={sessionId}
      onClose={onClose}
    />
  );
};