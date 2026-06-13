
-- Remove the public SELECT policy that exposes author_email to anonymous users
DROP POLICY IF EXISTS "Anyone can view approved comments" ON public.blog_comments;

-- Ensure a safe public view exists that excludes author_email
CREATE OR REPLACE VIEW public.blog_comments_public
WITH (security_invoker = true) AS
SELECT id, post_id, author_name, content, created_at
FROM public.blog_comments
WHERE is_approved = true;

GRANT SELECT ON public.blog_comments_public TO anon, authenticated;
