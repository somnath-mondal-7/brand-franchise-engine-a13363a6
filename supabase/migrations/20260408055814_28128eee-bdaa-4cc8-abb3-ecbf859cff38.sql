
-- Step 1: Create role-based access control
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS on user_roles: only admins can view
CREATE POLICY "Admins can view user roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Step 2: Fix blog_posts RLS - restrict management to admins only
DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;

CREATE POLICY "Only admins can manage blog posts"
ON blog_posts FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Step 3: Fix categories RLS - restrict management to admins only
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON categories;

CREATE POLICY "Only admins can manage categories"
ON categories FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Step 4: Fix contact_submissions RLS - restrict read/update to admins only
DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;

CREATE POLICY "Only admins can view contact submissions"
ON contact_submissions FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update contact submissions"
ON contact_submissions FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Step 5: Fix session_recordings RLS - restrict to admins only
DROP POLICY IF EXISTS "Authenticated users can view session recordings" ON session_recordings;

CREATE POLICY "Only admins can view session recordings"
ON session_recordings FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Step 6: Fix chat_conversations UPDATE policy - restrict to authenticated
DROP POLICY IF EXISTS "Anyone can update their own conversations" ON chat_conversations;

CREATE POLICY "Authenticated users can update conversations"
ON chat_conversations FOR UPDATE
TO authenticated
USING (true);

-- Step 7: Fix blog-attachments storage policies
DROP POLICY IF EXISTS "Authenticated users can upload blog attachments" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update/delete blog attachments" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update blog attachments" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete blog attachments" ON storage.objects;

CREATE POLICY "Only admins can upload blog attachments"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'blog-attachments' AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Only admins can update blog attachments"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'blog-attachments' AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Only admins can delete blog attachments"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'blog-attachments' AND public.has_role(auth.uid(), 'admin')
);
