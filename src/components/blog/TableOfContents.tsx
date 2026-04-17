import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

const extractHeadings = (markdown: string): TocItem[] => {
  const lines = markdown.split("\n");
  const items: TocItem[] = [];
  let inCodeFence = false;
  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;
    const m = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (m) {
      const text = m[2].replace(/[*_`[\]()]/g, "").trim();
      if (text && !text.startsWith("Table of Contents")) {
        items.push({ id: slugify(text), text, level: m[1].length });
      }
    }
  }
  return items;
};

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(content);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content, headings.length]);

  if (headings.length < 3) return null;

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border border-border bg-muted/40 p-5 mb-10"
    >
      <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        <List className="w-4 h-4" />
        In this article
      </div>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`block text-sm leading-snug transition-colors hover:text-primary ${
                activeId === h.id
                  ? "text-primary font-semibold"
                  : "text-foreground/80"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
