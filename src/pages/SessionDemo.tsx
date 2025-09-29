import React from 'react';
import { SessionRecorder } from '@/components/SessionRecorder';
import { SessionAnalytics } from '@/components/SessionAnalytics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, BarChart3, Info } from 'lucide-react';

const SessionDemo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Session Recording & Analytics</h1>
        <p className="text-muted-foreground text-lg">
          Track user interactions, analyze behavior patterns, and improve your website's user experience
        </p>
      </div>

      <Tabs defaultValue="recorder" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recorder" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Recorder
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="info" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recorder" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <SessionRecorder />
            <Card>
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Start Recording</h4>
                  <p className="text-sm text-muted-foreground">
                    Click "Start Recording" to begin capturing user interactions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Interact with Website</h4>
                  <p className="text-sm text-muted-foreground">
                    Navigate, click, scroll, and fill forms - all interactions are recorded
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Stop & Save</h4>
                  <p className="text-sm text-muted-foreground">
                    Click "Stop & Save" to end recording and save to database
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">4. View Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Switch to Analytics tab to view and replay saved sessions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <SessionAnalytics />
        </TabsContent>

        <TabsContent value="info" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What is Session Recording?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Session recording captures user interactions on your website including:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mouse movements and clicks</li>
                  <li>• Page scrolls and navigation</li>
                  <li>• Form inputs and interactions</li>
                  <li>• Page loads and DOM changes</li>
                  <li>• Viewport resizes and orientation changes</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  This data helps you understand user behavior, identify UX issues, and optimize conversion funnels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Data Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    Sessions are recorded client-side and stored securely in your database
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Sensitive Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Password fields and sensitive inputs can be masked automatically
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">User Consent</h4>
                  <p className="text-sm text-muted-foreground">
                    Always inform users about recording and obtain proper consent
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Data Retention</h4>
                  <p className="text-sm text-muted-foreground">
                    Set appropriate retention policies for recorded session data
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SessionDemo;