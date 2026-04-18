
-- Comments table for blog posts
CREATE TABLE public.blog_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL CHECK (char_length(author_name) BETWEEN 1 AND 80),
  author_email TEXT NOT NULL CHECK (char_length(author_email) BETWEEN 3 AND 255),
  content TEXT NOT NULL CHECK (char_length(content) BETWEEN 1 AND 2000),
  is_approved BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_blog_comments_post ON public.blog_comments(post_id, created_at DESC);

ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Public can read only approved comments. Email column is filtered out by a view below.
CREATE POLICY "Anyone can view approved comments"
  ON public.blog_comments
  FOR SELECT
  USING (is_approved = true);

-- Anyone can insert; we set is_approved server-side defaults but accept the default true.
CREATE POLICY "Anyone can post a comment"
  ON public.blog_comments
  FOR INSERT
  WITH CHECK (true);

-- Admins full management
CREATE POLICY "Admins can update comments"
  ON public.blog_comments
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete comments"
  ON public.blog_comments
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all comments incl. unapproved"
  ON public.blog_comments
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- updated_at trigger
CREATE TRIGGER trg_blog_comments_updated_at
  BEFORE UPDATE ON public.blog_comments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Public-safe view that hides the email column from non-admin readers
CREATE OR REPLACE VIEW public.blog_comments_public AS
  SELECT id, post_id, author_name, content, created_at
  FROM public.blog_comments
  WHERE is_approved = true;

GRANT SELECT ON public.blog_comments_public TO anon, authenticated;
