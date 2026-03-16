import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon } from "lucide-react";

interface SearchEntry {
  page: string;
  path: string;
  section?: string;
  sectionId?: string;
  text: string;
}

const searchData: SearchEntry[] = [
  // Get Started
  { page: "Get Started", path: "/get-started", text: "CDN Sass install npm dark mode AI agents" },
  { page: "Get Started", path: "/get-started", section: "CDN — Just the CSS", sectionId: "cdn", text: "CDN link tag prototype no build step stylesheet" },
  { page: "Get Started", path: "/get-started", section: "Sass — Build Your Own", sectionId: "sass", text: "Sass npm install variables mixins colors customize build" },
  { page: "Get Started", path: "/get-started", section: "Dark Mode", sectionId: "dark-mode", text: "dark mode light theme data-theme prefers-color-scheme toggle" },
  { page: "Get Started", path: "/get-started", section: "For AI Agents", sectionId: "ai-agents", text: "AI agent PLY.md ply-classes.json context window prompt" },

  // Grid
  { page: "Grid", path: "/grid", text: "grid flexbox layout units container row responsive" },
  { page: "Grid", path: "/grid", section: "Container, Row, and Units", sectionId: "basic", text: "units-container units-row unit basic layout" },
  { page: "Grid", path: "/grid", section: "All Available Widths", sectionId: "all-widths", text: "unit-10 unit-20 unit-25 unit-33 unit-50 unit-75 unit-100 widths" },
  { page: "Grid", path: "/grid", section: "Mixed Widths", sectionId: "mixed", text: "mixed widths combinations sidebar content" },
  { page: "Grid", path: "/grid", section: "Nested Grids", sectionId: "nested", text: "nested grids units-row inside unit" },
  { page: "Grid", path: "/grid", section: "Responsive Prefixes", sectionId: "responsive", text: "responsive phone tablet desktop breakpoint prefix" },
  { page: "Grid", path: "/grid", section: "Row & Unit Modifiers", sectionId: "modifiers", text: "reverse split centered stacked equal-height modifiers" },
  { page: "Grid", path: "/grid", section: "Push Units", sectionId: "offsets", text: "push offset margin-left unit-push" },
  { page: "Grid", path: "/grid", section: "Fill Width Container", sectionId: "fullwidth", text: "fill-width full browser width edge-to-edge" },

  // Typography
  { page: "Typography", path: "/typography", text: "typography type scale font size weight heading text" },
  { page: "Typography", path: "/typography", section: "Text Sizes", sectionId: "scale", text: "text-xs text-sm text-lg text-xl text-2xl text-5xl font size scale" },

  // Controls
  { page: "Controls", path: "/controls", text: "buttons forms alerts labels controls interactive" },
  { page: "Controls", path: "/controls", section: "Color Variants", sectionId: "button-colors", text: "btn btn-blue btn-red btn-green btn-yellow btn-black button color" },

  // Navigation
  { page: "Navigation", path: "/navigation", text: "navbar pills tabs breadcrumbs pagination navigation" },
  { page: "Navigation", path: "/navigation", section: "Navbar", sectionId: "navbar", text: "navbar horizontal nav menu bar" },

  // Tables
  { page: "Tables", path: "/tables", text: "table bordered striped hoverable data rows columns" },

  // Utilities
  { page: "Utilities", path: "/utilities", text: "utilities spacing display visibility borders helpers" },
  { page: "Utilities", path: "/utilities", section: "Display", sectionId: "display", text: "display-flex display-block display-none display-inline visibility" },
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  const results = query.length > 0
    ? searchData.filter((entry) => {
        const q = query.toLowerCase();
        return (
          entry.text.toLowerCase().includes(q) ||
          entry.page.toLowerCase().includes(q) ||
          (entry.section?.toLowerCase().includes(q) ?? false)
        );
      }).slice(0, 8)
    : [];

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const navigate = useCallback((entry: SearchEntry) => {
    const hash = entry.sectionId ? `#${entry.sectionId}` : "";
    setLocation(entry.path);
    close();
    if (entry.sectionId) {
      setTimeout(() => {
        document.getElementById(entry.sectionId!)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [setLocation, close]);

  // Cmd+K / Ctrl+K to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [close]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keyboard nav inside results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      navigate(results[selectedIndex]);
    }
  };

  return (
    <>
      <button
        className="btn btn-ghost btn-smaller"
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
        title="Search"
      >
        <SearchIcon size={16} />
      </button>

      {open && (
        <div className="search-overlay" onClick={close}>
          <div className="search-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-wrap">
              <SearchIcon size={16} className="search-input-icon" />
              <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
              />
            </div>
            {results.length > 0 && (
              <ul className="search-results flat-list">
                {results.map((entry, i) => (
                  <li key={`${entry.path}-${entry.sectionId || "root"}`}>
                    <button
                      className={`search-result-item ${i === selectedIndex ? "search-result-selected" : ""}`}
                      onClick={() => navigate(entry)}
                      onMouseEnter={() => setSelectedIndex(i)}
                    >
                      <span className="search-result-page text-xs text-secondary">{entry.page}</span>
                      <span className="search-result-title">{entry.section || entry.page}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {query.length > 0 && results.length === 0 && (
              <p className="text-secondary text-sm padding">No results for "{query}"</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
