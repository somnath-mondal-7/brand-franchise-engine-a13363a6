import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import TableOfContents from "@/components/blog/TableOfContents";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Share2, FileText, Download, Check, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { toast } from "@/hooks/use-toast";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_name: string;
  published_at: string;
  category_id: string;
  read_time_minutes: number;
  tags: string[];
  seo_title: string;
  seo_description: string;
  featured_image_url: string;
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
    size: number;
  }>;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (postError) throw postError;

        setPost(postData as unknown as BlogPostData);

        if (postData.category_id) {
          const { data: categoryData } = await supabase
            .from('categories')
            .select('*')
            .eq('id', postData.category_id)
            .single();

          if (categoryData) setCategory(categoryData);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading post...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <Card className="p-12 text-center max-w-md mx-4">
          <h1 className="text-3xl font-bold text-brand-navy mb-4">
            Post Not Found
          </h1>
          <p className="text-brand-gray mb-6">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link to="/blog">
            <Button className="bg-gradient-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </Card>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{post.seo_title || post.title} | FranchiseLeads Pro</title>
        <meta name="description" content={post.seo_description || post.excerpt} />
        <meta name="keywords" content={post.tags?.join(', ')} />
        <link rel="canonical" href={`https://www.franchiseleadspro.com/blog/${post.slug}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={post.seo_title || post.title} />
        <meta property="og:description" content={post.seo_description || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.franchiseleadspro.com/blog/${post.slug}`} />
        {post.featured_image_url && <meta property="og:image" content={post.featured_image_url} />}
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:author" content={post.author_name} />
        {post.tags?.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo_title || post.title} />
        <meta name="twitter:description" content={post.seo_description || post.excerpt} />
        {post.featured_image_url && <meta name="twitter:image" content={post.featured_image_url} />}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.seo_description || post.excerpt,
            "image": post.featured_image_url,
            "author": {
              "@type": "Organization",
              "name": post.author_name
            },
            "publisher": {
              "@type": "Organization",
              "name": "FranchiseLeads Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.franchiseleadspro.com/logo-hq.png"
              }
            },
            "datePublished": post.published_at,
            "dateModified": post.published_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.franchiseleadspro.com/blog/${post.slug}`
            },
            "keywords": post.tags?.join(", ")
          })}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <SEOBreadcrumbs />
      </div>

      {/* Hero Section */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            {category && (
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {category.name}
                </span>
              </div>
            )}

            {/* Featured Image */}
            {post.featured_image_url && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.featured_image_url} 
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-brand-gray mb-8 pb-8 border-b border-border">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author_name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{post.read_time_minutes} min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-brand-gray leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Content */}
            <div className="blog-content prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Attachments */}
            {post.attachments && post.attachments.length > 0 && (
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Attachments
                </h3>
                <div className="space-y-3">
                  {post.attachments.map((attachment, index) => (
                    <a
                      key={index}
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-background rounded-lg hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-brand-navy group-hover:text-primary transition-colors">
                            {attachment.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {attachment.type} • {formatFileSize(attachment.size)}
                          </p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/blog">
                <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
                </Button>
              </Link>
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-primary text-white p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Generate Quality Franchise Leads?</h3>
                <p className="text-lg opacity-90">
                  Let's discuss how we can help you achieve your franchise growth goals.
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;