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

  if (headings.length < 2) return null;

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
      className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5"
    >
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="w-4 h-4 text-primary" />
        <h3 className="text-xs font-semibold uppercase tracking-wide text-primary m-0">
          In this post
        </h3>
      </div>
      <ol className="space-y-1.5 list-none pl-0 m-0">
        {headings.map((h, i) => (
          <li key={h.id} className={h.level === 3 ? "pl-5" : ""}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`group flex items-start gap-2.5 text-sm leading-snug transition-colors py-0.5 ${
                activeId === h.id
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {h.level === 2 && (
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 text-primary text-[11px] font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {i + 1}
                </span>
              )}
              <span className="flex-1">{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
