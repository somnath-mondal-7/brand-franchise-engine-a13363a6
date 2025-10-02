-- Create storage bucket for blog attachments
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-attachments',
  'blog-attachments',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
);

-- Create storage policies for blog attachments
CREATE POLICY "Anyone can view blog attachments"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-attachments');

CREATE POLICY "Authenticated users can upload blog attachments"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'blog-attachments' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can update their blog attachments"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'blog-attachments'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can delete blog attachments"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'blog-attachments'
  AND auth.role() = 'authenticated'
);

-- Add attachments column to blog_posts table
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS attachments jsonb DEFAULT '[]'::jsonb;

COMMENT ON COLUMN blog_posts.attachments IS 'Array of attachment objects with name, url, type, size';