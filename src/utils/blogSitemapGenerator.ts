import { supabase } from '@/integrations/supabase/client';

const DOMAIN = 'https://www.franchiseleadspro.com';

export interface BlogSitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const generateBlogSitemapUrls = async (): Promise<BlogSitemapUrl[]> => {
  const urls: BlogSitemapUrl[] = [];

  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug, published_at, updated_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts for sitemap:', error);
      return urls;
    }

    if (posts) {
      posts.forEach(post => {
        const lastmod = post.updated_at || post.published_at;
        const formattedDate = new Date(lastmod).toISOString().split('T')[0];

        urls.push({
          loc: `${DOMAIN}/blog/${post.slug}`,
          lastmod: formattedDate,
          changefreq: 'weekly',
          priority: '0.8'
        });
      });
    }
  } catch (error) {
    console.error('Error generating blog sitemap URLs:', error);
  }

  return urls;
};

export const generateBlogSitemapXml = async (): Promise<string> => {
  const blogUrls = await generateBlogSitemapUrls();
  const currentDate = new Date().toISOString().split('T')[0];

  const urlsXml = blogUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${DOMAIN}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>${urlsXml}
</urlset>`;
};
