import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  published_at: string | null;
  read_time_minutes: number | null;
  featured_image_url: string | null;
}

interface RelatedPostsProps {
  currentPostId: string;
  categoryId: string | null;
}

const RelatedPosts = ({ currentPostId, categoryId }: RelatedPostsProps) => {
  const [posts, setPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    const fetchRelated = async () => {
      let query = supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, published_at, read_time_minutes, featured_image_url")
        .eq("is_published", true)
        .neq("id", currentPostId)
        .order("published_at", { ascending: false })
        .limit(3);

      if (categoryId) {
        query = query.eq("category_id", categoryId);
      }

      const { data } = await query;
      if (data && data.length > 0) {
        setPosts(data as RelatedPost[]);
      } else {
        // Fallback: any recent posts
        const { data: fallback } = await supabase
          .from("blog_posts")
          .select("id, title, slug, excerpt, published_at, read_time_minutes, featured_image_url")
          .eq("is_published", true)
          .neq("id", currentPostId)
          .order("published_at", { ascending: false })
          .limit(3);
        if (fallback) setPosts(fallback as RelatedPost[]);
      }
    };
    fetchRelated();
  }, [currentPostId, categoryId]);

  if (posts.length === 0) return null;

  const formatDate = (d: string | null) =>
    d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";

  return (
    <section className="mt-16 pt-12 border-t-2 border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Keep Reading</h2>
        <p className="text-muted-foreground">More posts you'll probably love →</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.id} to={`/blog/${p.slug}`} className="group">
            <Card className="h-full overflow-hidden border-border/60 hover:border-primary/40 hover:shadow-lg transition-all">
              {p.featured_image_url && (
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={p.featured_image_url}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {p.title}
                </h3>
                {p.excerpt && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.excerpt}</p>
                )}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {p.published_at && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {formatDate(p.published_at)}
                    </span>
                  )}
                  {p.read_time_minutes && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {p.read_time_minutes} min
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                  Read post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
