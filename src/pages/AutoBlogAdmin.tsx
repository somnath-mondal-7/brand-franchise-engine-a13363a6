import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Bot, RefreshCw, Clock, CheckCircle, AlertCircle, Newspaper, Calendar, TrendingUp } from 'lucide-react';
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
}

const AutoBlogAdmin = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [recentPosts, setRecentPosts] = useState<AutoBlogPost[]>([]);
  const [lastGenerated, setLastGenerated] = useState<string | null>(null);
  const [nextScheduled, setNextScheduled] = useState<string | null>(null);

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  const fetchRecentPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, created_at, is_published, author_name')
      .eq('author_name', 'FranchiseLeads HQ Research Team')
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setRecentPosts(data);
      if (data.length > 0) {
        setLastGenerated(data[0].created_at);
        // Calculate next scheduled time (24 hours after last post)
        const next = new Date(data[0].created_at);
        next.setHours(next.getHours() + 24);
        setNextScheduled(next.toISOString());
      }
    }
  };

  const handleGenerateNow = async (force = false) => {
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('auto-blog-generator', {
        body: { force }
      });

      if (error) throw error;

      if (data.success) {
        toast.success('Blog post generated successfully!', {
          description: data.post?.title || 'New post published'
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
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      <Helmet>
        <title>Auto Blog Generator | FranchiseLeads HQ Admin</title>
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
              <p className="text-muted-foreground">AI-powered franchise industry blog automation</p>
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

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Next Scheduled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-primary">
                  {getTimeUntilNext()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Generate Actions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Generate New Post
              </CardTitle>
              <CardDescription>
                Research franchise industry trends and generate a fresh blog post
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => handleGenerateNow(false)}
                  disabled={isGenerating}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                  Generate (If Due)
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleGenerateNow(true)}
                  disabled={isGenerating}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4" />
                  )}
                  Force Generate Now
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2">How it works:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Researches latest franchise industry news from RSS feeds</li>
                  <li>• AI analyzes trends and generates relevant blog content</li>
                  <li>• Automatically publishes with SEO optimization</li>
                  <li>• Maintains 24-hour gap between posts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Auto-Generated Posts</CardTitle>
              <CardDescription>
                Posts created by the AI research system
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
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <a 
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary truncate block"
                        >
                          {post.title}
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(post.created_at)}
                        </p>
                      </div>
                      <Badge variant={post.is_published ? "default" : "secondary"}>
                        {post.is_published ? (
                          <><CheckCircle className="h-3 w-3 mr-1" /> Published</>
                        ) : (
                          <><AlertCircle className="h-3 w-3 mr-1" /> Draft</>
                        )}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Setup Instructions */}
          <Card className="mt-8 border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">⚙️ Automation Setup</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                To fully automate blog generation, you'll need to set up an external cron job 
                that calls this function daily. Options:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Supabase Cron:</strong> Use pg_cron extension</li>
                <li><strong>External Service:</strong> Use cron-job.org (free) or similar</li>
                <li><strong>GitHub Actions:</strong> Schedule a daily workflow</li>
              </ul>
              <p className="font-medium mt-4">
                Endpoint: <code className="bg-muted px-2 py-1 rounded">POST /functions/v1/auto-blog-generator</code>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AutoBlogAdmin;
