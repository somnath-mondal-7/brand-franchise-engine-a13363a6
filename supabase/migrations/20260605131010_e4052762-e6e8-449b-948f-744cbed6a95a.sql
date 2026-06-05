
-- 1) Chat conversations: admin-only SELECT/UPDATE
DROP POLICY IF EXISTS "Anyone can view their own conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Authenticated users can update conversations" ON public.chat_conversations;

CREATE POLICY "Admins can view all conversations"
ON public.chat_conversations
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update conversations"
ON public.chat_conversations
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 2) Chat messages: admin-only SELECT
DROP POLICY IF EXISTS "Anyone can view messages in conversations" ON public.chat_messages;

CREATE POLICY "Admins can view all messages"
ON public.chat_messages
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 3) Blog comments: hide author_email via column-level grants
REVOKE SELECT ON public.blog_comments FROM anon, authenticated;
GRANT SELECT (id, post_id, author_name, content, is_approved, created_at, updated_at)
  ON public.blog_comments TO anon, authenticated;
GRANT INSERT ON public.blog_comments TO anon, authenticated;
GRANT UPDATE, DELETE ON public.blog_comments TO authenticated;
GRANT ALL ON public.blog_comments TO service_role;

-- 4) Storage: remove overly broad UPDATE policy on blog-attachments
DROP POLICY IF EXISTS "Authenticated users can update their blog attachments" ON storage.objects;

-- 5) Storage: add admin-only DELETE policy for blog-images
CREATE POLICY "Admins can delete blog images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));

-- 6) Revoke EXECUTE on trigger helper functions
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.set_published_at() FROM anon, authenticated, PUBLIC;
