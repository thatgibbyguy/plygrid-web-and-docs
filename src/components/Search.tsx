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
  grid: { path: "/docs/grid", label: "Grid" },
  typography: { path: "/docs/typography", label: "Typography" },
  buttons: { path: "/docs/buttons", label: "Buttons" },
  forms: { path: "/docs/forms", label: "Forms" },
  notifications: { path: "/docs/alerts", label: "Alerts" },
  navigation: { path: "/docs/navigation", label: "Navigation" },
  tables: { path: "/docs/tables", label: "Tables" },
  helpers: { path: "/docs/utilities", label: "Utilities" },
};

// Map class names to section IDs on their doc pages
// Order matters — first match wins
const sectionRules: Array<{ test: (name: string) => boolean; sectionId: string }> = [
  // Buttons
  { test: (n) => /^btn-(outline|o-)/.test(n), sectionId: "button-outline" },
  { test: (n) => /^btn-ghost/.test(n), sectionId: "button-ghost" },
  { test: (n) => /^btn-(big|small|lg|sm|xs|smaller)/.test(n), sectionId: "button-sizes" },
  { test: (n) => /^btn-(square|straight|single)/.test(n), sectionId: "button-shapes" },
  { test: (n) => /^btn-group/.test(n), sectionId: "button-groups" },
  { test: (n) => /^(btn|align-right|align-left|fill-width|rounded)/.test(n), sectionId: "button-colors" },
  // Grid
  { test: (n) => /^(push-|offset-|unit-push)/.test(n), sectionId: "offsets" },
  { test: (n) => /^(tablet-|phone-|desktop-)/.test(n), sectionId: "responsive" },
  { test: (n) => /^(equal-height|reverse|stacked|split|centered-content)/.test(n), sectionId: "modifiers" },
  { test: (n) => /^fullwidth/.test(n), sectionId: "fullwidth" },
  { test: (n) => /^blocks-/.test(n), sectionId: "blocks" },
  { test: (n) => /^block-first/.test(n), sectionId: "blocks" },
  { test: (n) => /^(units-|unit-|centered|fill-height)/.test(n), sectionId: "basic" },
  // Navigation
  { test: (n) => /^navbar-pills/.test(n), sectionId: "pills" },
  { test: (n) => /^nav-tabs/.test(n), sectionId: "tabs" },
  { test: (n) => /^nav-stacked/.test(n), sectionId: "stacked" },
  { test: (n) => /^nav-stats/.test(n), sectionId: "nav-reference" },
  { test: (n) => /^breadcrumbs/.test(n), sectionId: "breadcrumbs" },
  { test: (n) => /^pagination/.test(n), sectionId: "pagination" },
  { test: (n) => /^navbar-vertical/.test(n), sectionId: "vertical" },
  { test: (n) => /^navigation-(toggle|fixed)/.test(n), sectionId: "mobile-toggle" },
  { test: (n) => /^navbar/.test(n), sectionId: "navbar" },
  // Tables
  { test: (n) => /table.*bordered/.test(n), sectionId: "bordered" },
  { test: (n) => /table.*strip/.test(n), sectionId: "striped" },
  { test: (n) => /table.*hover/.test(n), sectionId: "hoverable" },
  { test: (n) => /table.*(simple|stroked)/.test(n), sectionId: "simple" },
  { test: (n) => /table.*flat/.test(n), sectionId: "flat" },
  { test: (n) => /table.*container/.test(n), sectionId: "responsive" },
  // Alerts
  { test: (n) => /^(alert|tools-alert).*outline/.test(n), sectionId: "alert-outline" },
  { test: (n) => /^(alert|tools-alert).*ghost/.test(n), sectionId: "alert-ghost" },
  { test: (n) => /^(alert|tools-alert).*(dismiss|icon|content)/.test(n), sectionId: "alert-reference" },
  { test: (n) => /^(label)/.test(n), sectionId: "labels" },
  { test: (n) => /^badge/.test(n), sectionId: "badges" },
  { test: (n) => /^(message|tools-message)/.test(n), sectionId: "messages" },
  { test: (n) => /^(alert|tools-alert)/.test(n), sectionId: "alerts" },
  // Forms
  { test: (n) => /^input-(big|small|lg|sm|xs)/.test(n), sectionId: "input-sizes" },
  { test: (n) => /^input-(error|success|gray)/.test(n), sectionId: "input-states" },
  { test: (n) => /^input-(groups|prepend|append)/.test(n), sectionId: "input-groups" },
  { test: (n) => /^(autocomplete|typeahead|filterbox|multiselect|tools-droparea|input-search|input-on-black|select-outlined|btn-append|form-desc|form-list|form-inline-list)/.test(n), sectionId: "form-reference" },
  { test: (n) => /^(form)/.test(n), sectionId: "forms" },
  // Typography
  { test: (n) => /^(text-xs|text-sm|text-lg|text-xl|text-base|text-2xl|text-3xl|text-4xl|text-5xl)$/.test(n), sectionId: "scale" },
  { test: (n) => /^(lead|lead-subhead)/.test(n), sectionId: "headings" },
  { test: (n) => /^font-(bold|semibold|medium|light|normal)/.test(n), sectionId: "weights" },
  { test: (n) => /^(italic|uppercase|lowercase|capitalize|underline|strikethrough|bold|nowrap)$/.test(n), sectionId: "styles" },
  { test: (n) => /^text-(left|center|right|justify|centered)/.test(n), sectionId: "alignment" },
  { test: (n) => /^leading-/.test(n), sectionId: "line-height" },
  { test: (n) => /^h[1-6]$/.test(n), sectionId: "headings" },
  // Utilities
  { test: (n) => /^(items-|justify-center|justify-start|justify-end|justify-between|justify-around)/.test(n), sectionId: "flex-alignment" },
  { test: (n) => /^(fully-centered|horizontally-centered|vertically-centered|align-center|align-middle|align-baseline|align-flex|align-stretch|justify-flex|justify-space)/.test(n), sectionId: "flex-alignment" },
  { test: (n) => /^display-/.test(n), sectionId: "display" },
  { test: (n) => /^(fixed|absolute|relative|static|sticky)$/.test(n), sectionId: "position" },
  { test: (n) => /^(margin|padding|no-margin|no-padding|no-spacing)/.test(n), sectionId: "spacing" },
  { test: (n) => /^gap/.test(n), sectionId: "gap" },
  { test: (n) => /^(border|no-border|rounded|circle)/.test(n), sectionId: "borders" },
  { test: (n) => /^(width-|height-)/.test(n), sectionId: "width-height" },
  { test: (n) => /^(hide|sr-only|skip-link|hide-on)/.test(n), sectionId: "visibility" },
  { test: (n) => /^(no-orphan|text-balance|text-wrap)/.test(n), sectionId: "text-wrap" },
  { test: (n) => /^no-link-style/.test(n), sectionId: "link-reset" },
  { test: (n) => /^(spinning|fade-in)/.test(n), sectionId: "animation" },
  { test: (n) => /^(text-primary|text-secondary|text-tertiary|text-muted|text-inverse|text-on-color|success|error)$/.test(n), sectionId: "text-color" },
  { test: (n) => /^color-(black|white|gray|blue|red|green|yellow)/.test(n), sectionId: "text-color" },
  { test: (n) => /^(bg-|background-)/.test(n), sectionId: "backgrounds" },
  { test: (n) => /^(layer-|shadow-)/.test(n), sectionId: "elevation" },
  { test: (n) => /^(sans|serif|mono|code)$/.test(n), sectionId: "font-family" },
  { test: (n) => /^cursor-/.test(n), sectionId: "cursors" },
  { test: (n) => /^(accordion|dropdown|caret|modal|tooltip|loader|flexible-embed)/.test(n), sectionId: "components" },
  { test: (n) => /^(clearfix|flat-list)/.test(n), sectionId: "misc" },
];

function classToSectionId(name: string): string | undefined {
  for (const rule of sectionRules) {
    if (rule.test(name)) return rule.sectionId;
  }
  return undefined;
}

// Map semantic element tags to section IDs on the semantic HTML page
const tagToSectionId: Record<string, string> = {
  nav: "nav", table: "table", code: "code", pre: "code",
  kbd: "kbd", blockquote: "blockquote", mark: "mark",
  details: "details", summary: "details", dialog: "dialog",
  progress: "progress", meter: "progress",
  h1: "headings", h2: "headings", h3: "headings",
  h4: "headings", h5: "headings", h6: "headings",
  form: "forms", input: "forms", select: "forms", textarea: "forms",
};

function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // Classes
  const classes = (classData as any).classes || {};
  for (const [name, info] of Object.entries(classes)) {
    const meta = info as any;
    const page = categoryToPage[meta.category] || { path: "/docs/utilities", label: "Utilities" };
    entries.push({
      label: name,
      detail: meta.description || "",
      path: page.path,
      sectionId: classToSectionId(name),
    });
  }

  // Custom properties
  const props = (classData as any).customProperties || {};
  for (const [group, vars] of Object.entries(props)) {
    for (const [name, desc] of Object.entries(vars as Record<string, string>)) {
      entries.push({
        label: name,
        detail: desc,
        path: "/docs/colors",
        sectionId: "css-vars",
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
      path: "/docs/semantic-html",
      sectionId: tagToSectionId[tag],
    });
  }

  // Static page entries
  entries.push(
    { label: "Installation", detail: "CDN Sass install npm dark mode AI agents how to get started", path: "/docs/installation" },
    { label: "Semantic HTML", detail: "auto-styled elements nav table code blockquote details dialog", path: "/docs/semantic-html" },
    { label: "Colors & Theming", detail: "color palette dark mode light custom theme CSS properties variables", path: "/docs/colors" },
    { label: "Typography", detail: "type scale font size weight heading text", path: "/docs/typography" },
    { label: "Grid", detail: "grid flexbox layout units container row responsive breakpoint", path: "/docs/grid" },
    { label: "Buttons", detail: "button color outline ghost sizes groups interactive", path: "/docs/buttons" },
    { label: "Forms", detail: "input select textarea checkbox radio validation inline", path: "/docs/forms" },
    { label: "Navigation", detail: "navbar pills tabs breadcrumbs pagination stacked", path: "/docs/navigation" },
    { label: "Tables", detail: "table bordered striped hoverable data responsive", path: "/docs/tables" },
    { label: "Alerts", detail: "alert notification message label dismissible badge", path: "/docs/alerts" },
    { label: "Utilities", detail: "spacing display visibility borders helpers gap flex animation", path: "/docs/utilities" },
    { label: "Accessibility", detail: "WCAG focus skip-link sr-only reduced-motion contrast a11y", path: "/docs/accessibility" },
    { label: "AI Agents", detail: "PLY.md ply-classes.json Claude Cursor AI coding agent machine-readable", path: "/docs/ai-agents" },
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
        className="btn btn-ghost btn-icon"
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
        <div className={`display-flex items-center gap-sm padding${results.length > 0 ? " border-bottom" : ""}`}>
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
