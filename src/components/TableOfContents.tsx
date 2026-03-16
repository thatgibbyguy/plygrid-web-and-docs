import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Scan for sections with IDs that contain h2 headings
  useEffect(() => {
    const scan = () => {
      const main = document.querySelector("main");
      if (!main) return;
      const sections = main.querySelectorAll("section[id]");
      const found: TocItem[] = [];
      sections.forEach((section) => {
        const h2 = section.querySelector("h2");
        const id = section.id;
        const text = h2?.textContent || "";
        if (id && text) {
          found.push({ id, text });
        }
      });
      setItems(found);
    };

    // Small delay to let the page render
    const timer = setTimeout(scan, 100);
    return () => clearTimeout(timer);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        // Observe the section if the ID is on a section, otherwise observe the heading
        const section = el.tagName === "SECTION" ? el : el.closest("section[id]") || el;
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="toc-sidebar no-link-style">
      <p className="text-xs font-semibold uppercase no-margin padding-bottom">On This Page</p>
      <ul className="flat-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`toc-link display-block text-sm ${
                activeId === item.id ? "font-semibold" : "text-secondary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                setActiveId(item.id);
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
