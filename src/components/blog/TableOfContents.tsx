import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

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
      if (text && !/^table of contents/i.test(text)) {
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
      className="my-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
        <div className="p-2 rounded-lg bg-primary/10">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground m-0">
          What's Inside This Post
        </h2>
      </div>
      <ol className="space-y-3 list-none pl-0 m-0">
        {headings.map((h, i) => (
          <li
            key={h.id}
            className={h.level === 3 ? "pl-6" : ""}
          >
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`group flex items-start gap-3 text-base sm:text-lg leading-snug transition-all py-1 ${
                activeId === h.id
                  ? "text-primary font-semibold"
                  : "text-foreground/85 hover:text-primary"
              }`}
            >
              {h.level === 2 && (
                <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {i + 1}
                </span>
              )}
              <span className="flex-1 pt-0.5">{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
