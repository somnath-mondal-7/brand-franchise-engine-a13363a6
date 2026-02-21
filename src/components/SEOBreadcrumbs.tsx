import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const SEOBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbMap: Record<string, string> = {
    'about': 'About Us',
    'services': 'Our Services', 
    'blog': 'Blog',
    'testimonials': 'Client Testimonials',
    'contact': 'Contact Us',
    'legal-terms': 'Legal Terms',
    'privacy-policy': 'Privacy Policy',
    'refund-satisfaction-guarantee-policy': 'Refund Policy'
  };

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      const isLast = index === pathnames.length - 1;
      
      breadcrumbs.push({
        label: breadcrumbMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1),
        href: isLast ? undefined : currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": breadcrumb.label,
            "item": breadcrumb.href ? `https://www.franchiseleadspro.com${breadcrumb.href}` : undefined
          }))
        })}
      </script>

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="py-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />}
                {breadcrumb.href ? (
                  <Link 
                    to={breadcrumb.href}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{breadcrumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default SEOBreadcrumbs;