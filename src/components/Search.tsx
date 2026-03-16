import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon } from "lucide-react";
import classData from "plygrid/ply-classes.json";

interface SearchEntry {
  label: string;
  detail: string;
  path: string;
  sectionId?: string;
}

// Map categories to doc pages
const categoryToPage: Record<string, { path: string; label: string }> = {
  grid: { path: "/grid", label: "Grid" },
  typography: { path: "/typography", label: "Typography" },
  buttons: { path: "/controls", label: "Controls" },
  forms: { path: "/controls", label: "Controls" },
  notifications: { path: "/controls", label: "Controls" },
  navigation: { path: "/navigation", label: "Navigation" },
  tables: { path: "/tables", label: "Tables" },
  helpers: { path: "/utilities", label: "Utilities" },
};

function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // Classes
  const classes = (classData as any).classes || {};
  for (const [name, info] of Object.entries(classes)) {
    const meta = info as any;
    const page = categoryToPage[meta.category] || { path: "/utilities", label: "Utilities" };
    entries.push({
      label: name,
      detail: meta.description || "",
      path: page.path,
    });
  }

  // Custom properties
  const props = (classData as any).customProperties || {};
  for (const [group, vars] of Object.entries(props)) {
    for (const [name, desc] of Object.entries(vars as Record<string, string>)) {
      entries.push({
        label: name,
        detail: desc,
        path: "/utilities",
      });
    }
  }

  // Semantic elements
  const elements = (classData as any).semanticElements || {};
  for (const [tag, info] of Object.entries(elements)) {
    const meta = info as any;
    entries.push({
      label: `<${tag}>`,
      detail: `${meta.styling} ${meta.tip}`,
      path: "/get-started",
    });
  }

  // Static page entries
  entries.push(
    { label: "Get Started", detail: "CDN Sass install npm dark mode AI agents how to", path: "/get-started" },
    { label: "Grid", detail: "grid flexbox layout units container row responsive breakpoint", path: "/grid" },
    { label: "Typography", detail: "type scale font size weight heading text", path: "/typography" },
    { label: "Controls", detail: "buttons forms alerts labels interactive", path: "/controls" },
    { label: "Navigation", detail: "navbar pills tabs breadcrumbs pagination", path: "/navigation" },
    { label: "Tables", detail: "table bordered striped hoverable data", path: "/tables" },
    { label: "Utilities", detail: "spacing display visibility borders helpers gap flex", path: "/utilities" },
  );

  return entries;
}

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results = query.length > 0
    ? searchIndex.filter((entry) => {
        const q = query.toLowerCase();
        return (
          entry.label.toLowerCase().includes(q) ||
          entry.detail.toLowerCase().includes(q)
        );
      }).slice(0, 10)
    : [];

  const close = useCallback(() => {
    dialogRef.current?.close();
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const navigate = useCallback((entry: SearchEntry) => {
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
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Open/close dialog and focus input
  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
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

      <dialog
        ref={dialogRef}
        className="search-dialog bg-glass"
        onClose={() => {
          setOpen(false);
          setQuery("");
          setSelectedIndex(0);
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="display-flex gap-sm padding" style={{ alignItems: "center", borderBottom: "1px solid var(--ply-border-color)" }}>
          <SearchIcon size={16} className="text-secondary" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search classes, properties, elements..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        {results.length > 0 && (
          <ul className="flat-list padding-sm">
            {results.map((entry, i) => (
              <li key={`${entry.path}-${entry.label}`}>
                <button
                  className={`search-result-item ${i === selectedIndex ? "search-result-selected" : ""}`}
                  onClick={() => navigate(entry)}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  <span className="text-sm font-semibold">{entry.label}</span>
                  <span className="text-xs text-secondary" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }}>{entry.detail}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query.length > 0 && results.length === 0 && (
          <p className="text-secondary text-sm padding">No results for "{query}"</p>
        )}
      </dialog>
    </>
  );
}
