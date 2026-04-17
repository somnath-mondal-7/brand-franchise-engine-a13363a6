
-- Create public storage bucket for AI-generated blog images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  10485760,
  ARRAY['image/png', 'image/jpeg', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public read access
CREATE POLICY "Public read blog images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow service role / authenticated to upload (edge function uses service role which bypasses RLS, but add policy for safety)
CREATE POLICY "Service role can upload blog images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Service role can update blog images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'blog-images');
