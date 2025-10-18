import { useEffect, useState } from 'react';
import { generateBlogSitemapXml } from '@/utils/blogSitemapGenerator';

const BlogSitemap = () => {
  const [sitemapXml, setSitemapXml] = useState<string>('');

  useEffect(() => {
    const generateSitemap = async () => {
      const xml = await generateBlogSitemapXml();
      setSitemapXml(xml);
    };

    generateSitemap();
  }, []);

  useEffect(() => {
    if (sitemapXml) {
      // Set proper XML content type
      document.querySelector('meta[name="Content-Type"]')?.remove();
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'Content-Type');
      meta.setAttribute('content', 'application/xml; charset=utf-8');
      document.head.appendChild(meta);
    }
  }, [sitemapXml]);

  return (
    <pre style={{ 
      whiteSpace: 'pre-wrap', 
      wordWrap: 'break-word',
      fontFamily: 'monospace',
      fontSize: '12px',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      {sitemapXml || 'Generating sitemap...'}
    </pre>
  );
};

export default BlogSitemap;
