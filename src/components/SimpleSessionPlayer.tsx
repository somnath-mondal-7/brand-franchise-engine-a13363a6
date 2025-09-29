import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Download, Calendar } from 'lucide-react';
import { SessionEvent } from '@/hooks/useSessionRecording';

interface SimpleSessionPlayerProps {
  events: SessionEvent[];
  sessionId: string;
  onClose?: () => void;
}

export const SimpleSessionPlayer: React.FC<SimpleSessionPlayerProps> = ({ 
  events, 
  sessionId, 
  onClose 
}) => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const getEventTypeName = (type: number) => {
    const eventTypes: { [key: number]: string } = {
      0: 'DOMContentLoaded',
      1: 'Load',
      2: 'FullSnapshot',
      3: 'IncrementalSnapshot',
      4: 'Meta',
      5: 'Custom',
      6: 'Plugin'
    };
    return eventTypes[type] || `Type ${type}`;
  };

  const downloadSession = () => {
    const dataStr = JSON.stringify(events, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `session_${sessionId}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Session Analysis
            <Badge variant="outline">{sessionId}</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={downloadSession}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                ✕
              </Button>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">Session Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Total Events:</span>
              <br />
              <span className="font-semibold">{events.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Duration:</span>
              <br />
              <span className="font-semibold">
                {events.length > 1 
                  ? `${Math.round((events[events.length - 1].timestamp - events[0].timestamp) / 1000)}s`
                  : 'N/A'
                }
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Start Time:</span>
              <br />
              <span className="font-semibold">
                {events.length > 0 ? formatTimestamp(events[0].timestamp) : 'N/A'}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">End Time:</span>
              <br />
              <span className="font-semibold">
                {events.length > 0 ? formatTimestamp(events[events.length - 1].timestamp) : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          <h3 className="font-semibold sticky top-0 bg-background pb-2">Event Timeline</h3>
          {events.map((event, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 hover:bg-accent/50 cursor-pointer transition-colors"
              onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{getEventTypeName(event.type)}</Badge>
                  <span className="text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {formatTimestamp(event.timestamp)}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {expandedEvent === index ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
              
              {expandedEvent === index && (
                <div className="mt-3 pt-3 border-t">
                  <pre className="text-xs bg-muted/50 p-2 rounded overflow-auto max-h-32">
                    {JSON.stringify(event.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};