import { ReactNode } from "react";
import { Link } from "react-router-dom";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import CTASection from "@/components/CTASection";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProgrammaticPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  meta?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  showGlobalCta?: boolean;
}

const ProgrammaticPageShell = ({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  meta,
  actions,
  aside,
  children,
  showGlobalCta = true,
}: ProgrammaticPageShellProps) => {
  return (
    <>
      <IndiaNav />

      <main className="pt-16 bg-background">
        <section className="relative overflow-hidden border-b border-border bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24">
            <div className="max-w-6xl mx-auto">
              {breadcrumbs.length > 0 && (
                <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                      <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                        {item.href && !isLast ? (
                          <Link to={item.href} className="hover:text-foreground transition-colors">
                            {item.label}
                          </Link>
                        ) : (
                          <span className={isLast ? "text-foreground" : undefined}>{item.label}</span>
                        )}
                        {!isLast && <span aria-hidden="true">/</span>}
                      </span>
                    );
                  })}
                </nav>
              )}

              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
                <div className="space-y-6">
                  <span className="inline-flex min-h-[40px] items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {eyebrow}
                  </span>

                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                      {title}
                    </h1>
                    <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                      {description}
                    </p>
                  </div>

                  {meta && <div>{meta}</div>}
                  {actions && <div>{actions}</div>}
                </div>

                {aside && (
                  <aside className="rounded-2xl border border-border bg-card p-6 shadow-card lg:p-7">
                    {aside}
                  </aside>
                )}
              </div>
            </div>
          </div>
        </section>

        {children}
        {showGlobalCta && <CTASection />}
      </main>

      <IndiaFooter />
    </>
  );
};

export default ProgrammaticPageShell;