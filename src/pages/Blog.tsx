import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author_name: string;
  published_at: string;
  category_id: string;
  read_time_minutes: number;
  tags: string[];
  is_featured: boolean;
  featured_image_url: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch categories
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (categoriesData) setCategories(categoriesData);

      // Fetch all published posts
      const { data: postsData } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (postsData) {
        setPosts(postsData);
        // Set featured post
        const featured = postsData.find(p => p.is_featured) || postsData[0];
        setFeaturedPost(featured);
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || '';
  };

  const filteredPosts = selectedCategory === "all" 
    ? posts.filter(p => !p.is_featured)
    : posts.filter(p => !p.is_featured && p.category_id === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Franchise Growth Blog
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              Expert insights, strategies, and tips to help franchise consultants and franchisors 
              generate more leads and build stronger brands.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Featured Article</h2>
              </div>
              
              <Link to={`/blog/${featuredPost.slug}`}>
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-secondary p-8 lg:p-12 flex items-center">
                      <div className="space-y-6">
                        <Badge className="bg-primary text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {getCategoryName(featuredPost.category_id)}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-brand-navy group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-brand-gray leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-brand-gray">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author_name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(featuredPost.published_at)}</span>
                          </div>
                          <span>{featuredPost.read_time_minutes} min read</span>
                        </div>
                        <Button className="bg-gradient-primary hover:shadow-elegant group-hover:scale-105 transition-all">
                          Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient-primary p-8 lg:p-12 flex items-center justify-center">
                      {featuredPost.featured_image_url ? (
                        <img 
                          src={featuredPost.featured_image_url} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-white text-center space-y-4">
                          <div className="text-4xl font-bold">Featured</div>
                          <div className="text-xl">Article</div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="hover:bg-primary hover:text-white transition-colors"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="hover:bg-primary hover:text-white transition-colors"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Latest Articles</h2>
              <p className="text-brand-gray">
                Stay updated with the latest strategies and insights for franchise success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-brand-gray">No blog posts found in this category.</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card 
                      className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer h-full"
                    >
                      {post.featured_image_url && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.featured_image_url} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <Badge variant="outline" className="w-fit mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                          {getCategoryName(post.category_id)}
                        </Badge>
                        <CardTitle className="text-xl text-brand-navy group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-brand-gray text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-brand-gray">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author_name}</span>
                          </div>
                          <span>{post.read_time_minutes} min read</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-xs text-brand-gray">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.published_at)}</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-primary hover:bg-primary hover:text-white transition-all group-hover:scale-105"
                          >
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl font-bold">Never Miss an Update</h2>
            <p className="text-xl opacity-90">
              Get the latest franchise growth strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg text-brand-navy flex-1 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;