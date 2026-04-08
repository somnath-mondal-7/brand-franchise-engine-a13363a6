
-- Add admin role for the founder
INSERT INTO public.user_roles (user_id, role)
VALUES ('d6ec0ad2-65ad-4d62-9fd8-6dc09647df3c', 'admin');

-- Add to admin_users table
INSERT INTO public.admin_users (user_id, email, role)
VALUES ('d6ec0ad2-65ad-4d62-9fd8-6dc09647df3c', 'iamsomnath@franchiseleadspro.com', 'admin');
