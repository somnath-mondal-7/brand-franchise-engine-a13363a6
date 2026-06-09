import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { useMemo } from "react";

const Search = () => {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const q = params.get("q") || "";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Search{q ? `: ${q}` : ""} | FranchiseLeadsPro</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://www.franchiseleadspro.com/search${q ? `?q=${encodeURIComponent(q)}` : ""}`} />
      </Helmet>
      <IndiaNav />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Search</h1>
            {q ? (
              <p className="text-muted-foreground mb-8">You searched for: <strong>{q}</strong>. We don't have a public search yet. Please book a strategy call or contact us and we'll help you find exactly what you need.</p>
            ) : (
              <p className="text-muted-foreground mb-8">Enter a search term in the URL, e.g. /search?q=franchise+leads</p>
            )}
            <div className="space-x-4">
              <a className="underline text-primary" href="/">Go to homepage</a>
              <a className="underline text-primary" href="/contact">Contact us</a>
            </div>
          </div>
        </div>
      </main>
      <IndiaFooter />
    </div>
  );
};

export default Search;
