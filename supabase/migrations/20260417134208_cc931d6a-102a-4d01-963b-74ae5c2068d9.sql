
DROP POLICY IF EXISTS "Service role can upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Service role can update blog images" ON storage.objects;

CREATE POLICY "Admins can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update blog images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));
