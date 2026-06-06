import { useEffect, useState } from "react";
import { z } from "zod";
import { MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface CommentRow {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface PublicCommentRow {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
  post_id: string;
}

interface BlogCommentsProps {
  postId: string;
}

const commentSchema = z.object({
  author_name: z.string().trim().min(2, "Please add your name").max(80, "Name too long"),
  author_email: z.string().trim().email("Please add a valid email").max(255),
  content: z.string().trim().min(3, "Comment too short").max(2000, "Comment too long"),
});

const RATE_LIMIT_KEY = "blog_comment_last_post";
const RATE_LIMIT_MS = 30_000; // 30s between comments per browser

const formatRelative = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60_000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(iso).toLocaleDateString();
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const BlogComments = ({ postId }: BlogCommentsProps) => {
  const db = supabase as any;
  const [comments, setComments] = useState<CommentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — hidden from real users

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await db
        .from("blog_comments_public")
        .select("id, author_name, content, created_at, post_id")
        .eq("post_id", postId)
        .order("created_at", { ascending: false });
      if (!active) return;
      if (!error && data) setComments(data as PublicCommentRow[]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — bots fill hidden fields
    if (website.trim() !== "") return;

    // Rate limit per-browser
    const last = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0);
    if (Date.now() - last < RATE_LIMIT_MS) {
      toast({
        title: "Slow down a sec",
        description: "Please wait a moment before posting another comment.",
        variant: "destructive",
      });
      return;
    }

    const parsed = commentSchema.safeParse({
      author_name: name,
      author_email: email,
      content,
    });
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      toast({ title: "Check your comment", description: first.message, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const { author_name, author_email, content: cmt } = parsed.data;
    const { data, error } = await supabase
      .from("blog_comments")
      .insert([
        {
          post_id: postId,
          author_name,
          author_email,
          content: cmt,
        },
      ])
      .select("id, author_name, content, created_at")
      .single();

    setSubmitting(false);

    if (error) {
      toast({
        title: "Couldn't post comment",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
    if (data) setComments((prev) => [data as CommentRow, ...prev]);
    setName("");
    setEmail("");
    setContent("");
    toast({ title: "Comment posted!", description: "Thanks for joining the conversation." });
  };

  return (
    <section className="mt-16 pt-12 border-t border-border" aria-labelledby="comments-heading">
      <div className="flex items-center gap-3 mb-2">
        <MessageCircle className="w-6 h-6 text-primary" />
        <h2 id="comments-heading" className="text-2xl sm:text-3xl font-bold text-brand-navy m-0">
          Join the conversation
        </h2>
      </div>
      <p className="text-muted-foreground mb-8">
        {comments.length === 0
          ? "Be the first to share your thoughts on this post."
          : `${comments.length} ${comments.length === 1 ? "comment" : "comments"} so far — what do you think?`}
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card p-5 sm:p-6 mb-10 shadow-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="cmt-name" className="block text-sm font-medium text-brand-navy mb-1.5">
              Your name
            </label>
            <Input
              id="cmt-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              required
              maxLength={80}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="cmt-email" className="block text-sm font-medium text-brand-navy mb-1.5">
              Email <span className="text-muted-foreground font-normal">(never shown)</span>
            </label>
            <Input
              id="cmt-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              maxLength={255}
              autoComplete="email"
            />
          </div>
        </div>

        {/* Honeypot — hidden from humans, visible to bots */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label htmlFor="cmt-website">Website</label>
          <input
            id="cmt-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <label htmlFor="cmt-content" className="block text-sm font-medium text-brand-navy mb-1.5">
          Your comment
        </label>
        <Textarea
          id="cmt-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, a question, or your own experience…"
          required
          maxLength={2000}
          rows={4}
          className="resize-y"
        />
        <div className="flex items-center justify-between mt-2 mb-4">
          <span className="text-xs text-muted-foreground">{content.length}/2000</span>
          <span className="text-xs text-muted-foreground">Be kind. Spam gets removed.</span>
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4 mr-2" />
          {submitting ? "Posting…" : "Post comment"}
        </Button>
      </form>

      {/* Comments list */}
      {loading ? (
        <div className="text-center text-muted-foreground py-8">Loading comments…</div>
      ) : comments.length === 0 ? null : (
        <ol className="space-y-5 list-none pl-0">
          {comments.map((c) => (
            <li
              key={c.id}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                  {initials(c.author_name) || <User className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                    <span className="font-semibold text-brand-navy">{c.author_name}</span>
                    <span className="text-xs text-muted-foreground">{formatRelative(c.created_at)}</span>
                  </div>
                  <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap m-0">
                    {c.content}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default BlogComments;
