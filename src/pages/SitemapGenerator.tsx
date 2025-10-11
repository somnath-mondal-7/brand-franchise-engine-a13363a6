import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { generateSitemapXml } from '@/utils/sitemapGenerator';
import { Download, CheckCircle, AlertCircle } from 'lucide-react';

const SitemapGenerator = () => {
  const [status, setStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [urlCount, setUrlCount] = useState<number>(0);

  const generateAndDownload = () => {
    try {
      setStatus('generating');
      
      // Generate the sitemap
      const sitemapXml = generateSitemapXml();
      const count = (sitemapXml.match(/<url>/g) || []).length;
      setUrlCount(count);
      
      // Create blob and download
      const blob = new Blob([sitemapXml], { type: 'application/xml' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setStatus('success');
    } catch (error) {
      console.error('Sitemap generation error:', error);
      setStatus('error');
    }
  };

  const copyToClipboard = () => {
    const sitemapXml = generateSitemapXml();
    navigator.clipboard.writeText(sitemapXml);
    alert('Sitemap XML copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-2">Sitemap Generator</h1>
          <p className="text-muted-foreground mb-8">
            Generate your complete sitemap with all 10,000+ SEO-optimized pages
          </p>

          <div className="space-y-4">
            <Button 
              onClick={generateAndDownload}
              disabled={status === 'generating'}
              size="lg"
              className="w-full"
            >
              <Download className="mr-2 h-5 w-5" />
              {status === 'generating' ? 'Generating...' : 'Generate & Download Sitemap'}
            </Button>

            <Button 
              onClick={copyToClipboard}
              variant="outline"
              size="lg"
              className="w-full"
            >
              Copy XML to Clipboard
            </Button>
          </div>

          {status === 'success' && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-700 dark:text-green-400">Success!</h3>
                <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                  Generated sitemap with {urlCount.toLocaleString()} URLs
                </p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-700 dark:text-red-400">Error</h3>
                <p className="text-sm text-red-600 dark:text-red-500 mt-1">
                  Failed to generate sitemap. Check console for details.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-3">📝 Next Steps:</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Click "Generate & Download Sitemap" above</li>
              <li>Upload the downloaded sitemap.xml to your <code className="px-1 py-0.5 bg-background rounded text-xs">/public</code> folder</li>
              <li>Click "Publish" to deploy your site</li>
              <li>Go to Google Search Console → Sitemaps</li>
              <li>The sitemap will auto-update (same URL: https://www.franchiseleadshq.com/sitemap.xml)</li>
              <li>Google will discover all new pages within 24-48 hours</li>
            </ol>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 Pro Tip</h3>
            <p className="text-sm text-blue-600 dark:text-blue-500">
              After deploying, use "Request Indexing" in Google Search Console for your most important pages to speed up discovery.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SitemapGenerator;
