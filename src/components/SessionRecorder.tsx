import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Square, Video } from 'lucide-react';
import { useSessionRecording } from '@/hooks/useSessionRecording';

export const SessionRecorder: React.FC = () => {
  const { isRecording, sessionId, events, startRecording, stopRecording } = useSessionRecording();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5" />
          Session Recording
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}`} />
            <span className="text-sm font-medium">
              {isRecording ? 'Recording' : 'Stopped'}
            </span>
          </div>
          {isRecording && (
            <Badge variant="secondary">
              {events.length} events
            </Badge>
          )}
        </div>

        {sessionId && (
          <div className="text-xs text-muted-foreground">
            Session ID: {sessionId}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={startRecording}
            disabled={isRecording}
            className="flex-1"
            variant={isRecording ? "secondary" : "default"}
          >
            <Play className="h-4 w-4 mr-2" />
            Start Recording
          </Button>
          <Button
            onClick={stopRecording}
            disabled={!isRecording}
            variant="outline"
            className="flex-1"
          >
            <Square className="h-4 w-4 mr-2" />
            Stop & Save
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          Records user interactions including clicks, scrolls, and form inputs for debugging and analytics.
        </div>
      </CardContent>
    </Card>
  );
};