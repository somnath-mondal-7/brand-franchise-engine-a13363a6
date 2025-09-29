import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Square, SkipBack, SkipForward } from 'lucide-react';
import { Replayer } from 'rrweb-player';
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
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<Replayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!playerRef.current || events.length === 0) return;

    const replayer = new Replayer(events, {
      root: playerRef.current,
      loadTimeout: 0,
      showWarning: false,
      showDebug: false,
    });

    setPlayer(replayer);

    replayer.on('start', () => setIsPlaying(true));
    replayer.on('pause', () => setIsPlaying(false));
    replayer.on('finish', () => setIsPlaying(false));

    return () => {
      replayer.destroy();
    };
  }, [events]);

  const handlePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
    }
  };

  const handleStop = () => {
    if (player) {
      player.pause();
      player.goto(0);
    }
  };

  const handleSkipBack = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      player.goto(Math.max(0, currentTime - 10000)); // Go back 10 seconds
    }
  };

  const handleSkipForward = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      const totalTime = player.getMetaData().totalTime;
      player.goto(Math.min(totalTime, currentTime + 10000)); // Go forward 10 seconds
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            Session Replay
            <Badge variant="outline">{sessionId}</Badge>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          ref={playerRef} 
          className="w-full h-96 border rounded-lg bg-white"
          style={{ minHeight: '400px' }}
        />
        
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" onClick={handleSkipBack}>
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button onClick={handlePlay} className="px-6">
            {isPlaying ? (
              <Pause className="h-4 w-4 mr-2" />
            ) : (
              <Play className="h-4 w-4 mr-2" />
            )}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Button variant="outline" size="sm" onClick={handleStop}>
            <Square className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleSkipForward}>
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          {events.length} events recorded
        </div>
      </CardContent>
    </Card>
  );
};