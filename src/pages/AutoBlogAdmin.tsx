import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { Bot, RefreshCw, Clock, CheckCircle, AlertCircle, Newspaper, Calendar, TrendingUp, Settings, Zap } from 'lucide-react';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface AutoBlogPost {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  is_published: boolean;
  author_name: string;
  excerpt: string | null;
}

const INTERVAL_OPTIONS = [
  { value: "12", label: "Every 12 hours" },
  { value: "24", label: "Every 24 hours (Daily)" },
  { value: "48", label: "Every 48 hours" },
  { value: "72", label: "Every 3 days" },
  { value: "168", label: "Weekly" },
];

const AutoBlogAdmin = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [recentPosts, setRecentPosts] = useState<AutoBlogPost[]>([]);
  const [lastGenerated, setLastGenerated] = useState<string | null>(null);
  const [nextScheduled, setNextScheduled] = useState<string | null>(null);
  const [intervalHours, setIntervalHours] = useState("24");
  const [publishAsDraft, setPublishAsDraft] = useState(false);

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  useEffect(() => {
    // Recalculate next scheduled time when interval changes
    if (lastGenerated) {
      const next = new Date(lastGenerated);
      next.setHours(next.getHours() + parseInt(intervalHours));
      setNextScheduled(next.toISOString());
    }
  }, [intervalHours, lastGenerated]);

  const fetchRecentPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, created_at, is_published, author_name, excerpt')
      .eq('author_name', 'FranchiseLeadsPro Research Team')
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setRecentPosts(data);
      if (data.length > 0) {
        setLastGenerated(data[0].created_at);
        const next = new Date(data[0].created_at);
        next.setHours(next.getHours() + parseInt(intervalHours));
        setNextScheduled(next.toISOString());
      }
    }
  };

  const handleGenerateNow = async (force = false) => {
    setIsGenerating(true);
    const startTime = Date.now();
    
    try {
      const { data, error } = await supabase.functions.invoke('auto-blog-generator', {
        body: { 
          force,
          intervalHours: parseInt(intervalHours),
          publishAsDraft
        }
      });

      if (error) throw error;

      const duration = ((Date.now() - startTime) / 1000).toFixed(1);

      if (data.success) {
        toast.success(`Blog post ${publishAsDraft ? 'drafted' : 'published'} in ${duration}s!`, {
          description: data.post?.title || 'New post created'
        });
        fetchRecentPosts();
      } else {
        toast.info(data.message || 'No new post needed yet');
      }
    } catch (error: any) {
      console.error('Generation error:', error);
      toast.error('Failed to generate blog post', {
        description: error.message
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  const getTimeUntilNext = () => {
    if (!nextScheduled) return 'Not scheduled';
    const now = new Date();
    const next = new Date(nextScheduled);
    const diff = next.getTime() - now.getTime();
    
    if (diff <= 0) return 'Ready to publish';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  const isReadyToPublish = () => {
    if (!nextScheduled) return true;
    return new Date(nextScheduled).getTime() <= Date.now();
  };

  return (
    <>
      <Helmet>
        <title>Auto Blog Generator | FranchiseLeadsPro Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Auto Blog Generator</h1>
              <p className="text-muted-foreground">AI-powered franchise content with real industry research</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  Total Auto-Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{recentPosts.length}</div>
                <p className="text-xs text-muted-foreground mt-1">Generated by AI research</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Last Generated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">
                  {lastGenerated ? formatDate(lastGenerated) : 'Never'}
                </div>
              </CardContent>
            </Card>

            <Card className={isReadyToPublish() ? "border-primary/50 bg-primary/5" : ""}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Next Scheduled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-lg font-semibold ${isReadyToPublish() ? "text-primary" : ""}`}>
                  {getTimeUntilNext()}
                </div>
                {isReadyToPublish() && (
                  <p className="text-xs text-primary mt-1 flex items-center gap-1">
                    <Zap className="h-3 w-3" /> Ready for new content
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Settings Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Generation Settings
              </CardTitle>
              <CardDescription>
                Configure how often posts are generated and publishing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="interval">Publishing Frequency</Label>
                  <Select value={intervalHours} onValueChange={setIntervalHours}>
                    <SelectTrigger id="interval">
                      <SelectValue placeholder="Select interval" />
                    </SelectTrigger>
                    <SelectContent>
                      {INTERVAL_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Minimum time between auto-generated posts
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="draft-mode">Publishing Mode</Label>
                  <div className="flex items-center gap-3 pt-2">
                    <Switch
                      id="draft-mode"
                      checked={publishAsDraft}
                      onCheckedChange={setPublishAsDraft}
                    />
                    <Label htmlFor="draft-mode" className="font-normal cursor-pointer">
                      {publishAsDraft ? "Save as Draft (Review first)" : "Auto-Publish Immediately"}
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {publishAsDraft 
                      ? "Posts will be saved as drafts for manual review" 
                      : "Posts will be published automatically"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generate Actions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Generate New Post
              </CardTitle>
              <CardDescription>
                Research current franchise trends and create expert-level content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => handleGenerateNow(false)}
                  disabled={isGenerating}
                  className="gap-2"
                  size="lg"
                >
                  {isGenerating ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                  {isGenerating ? "Researching & Writing..." : "Generate (If Due)"}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleGenerateNow(true)}
                  disabled={isGenerating}
                  className="gap-2"
                  size="lg"
                >
                  {isGenerating ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                  Force Generate Now
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-3">✨ What makes this content different:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong>Real data:</strong> Every post includes actual industry statistics and percentages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong>Human-readable:</strong> Short paragraphs, bullet points, and scannable formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong>Actionable insights:</strong> Every article has clear takeaways and next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong>SEO-optimized:</strong> Proper headings, meta descriptions, and keyword targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span><strong>Current trends:</strong> Pulls from live franchise news RSS feeds</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Auto-Generated Posts</CardTitle>
              <CardDescription>
                AI-researched content with real industry data
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentPosts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No auto-generated posts yet</p>
                  <p className="text-sm">Click "Generate" to create your first AI blog post</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <a 
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary block mb-1"
                          >
                            {post.title}
                          </a>
                          {post.excerpt && (
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                              {post.excerpt}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {formatDate(post.created_at)}
                          </p>
                        </div>
                        <Badge variant={post.is_published ? "default" : "secondary"} className="shrink-0">
                          {post.is_published ? (
                            <><CheckCircle className="h-3 w-3 mr-1" /> Published</>
                          ) : (
                            <><AlertCircle className="h-3 w-3 mr-1" /> Draft</>
                          )}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Setup Instructions */}
          <Card className="mt-8 border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">⚙️ Full Automation Setup</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                For hands-free publishing, set up an external cron job to call this function:
              </p>
              <div className="bg-muted rounded-lg p-3 font-mono text-xs overflow-x-auto">
                <code>
                  POST {window.location.origin.replace('id-preview--', '').replace('.lovable.app', '')}/functions/v1/auto-blog-generator
                  <br />
                  Body: {`{ "intervalHours": ${intervalHours}, "publishAsDraft": ${publishAsDraft} }`}
                </code>
              </div>
              <ul className="list-disc list-inside space-y-1 mt-4">
                <li><strong>Free option:</strong> cron-job.org (schedule daily calls)</li>
                <li><strong>GitHub Actions:</strong> Use scheduled workflows</li>
                <li><strong>Supabase:</strong> pg_cron extension for database triggers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AutoBlogAdmin;