import { Link, useLocation } from "wouter";
import { useState, useEffect, type ReactNode } from "react";
import { Home, Sun, Moon } from "lucide-react";
import TableOfContents from "./TableOfContents";
import Search from "./Search";

const sections = [
  { label: "Getting Started", items: [
    { path: "/docs/installation", label: "Installation" },
    { path: "/docs/semantic-html", label: "Semantic HTML" },
    { path: "/docs/ai-agents", label: "AI Agents" },
  ]},
  { label: "Design", items: [
    { path: "/docs/colors", label: "Colors & Theming" },
    { path: "/docs/typography", label: "Typography" },
  ]},
  { label: "Layout", items: [
    { path: "/docs/grid", label: "Grid" },
  ]},
  { label: "Components", items: [
    { path: "/docs/buttons", label: "Buttons" },
    { path: "/docs/forms", label: "Forms" },
    { path: "/docs/navigation", label: "Navigation" },
    { path: "/docs/tables", label: "Tables" },
    { path: "/docs/alerts", label: "Alerts" },
  ]},
  { label: "Helpers", items: [
    { path: "/docs/utilities", label: "Utilities" },
    { path: "/docs/accessibility", label: "Accessibility" },
  ]},
  { label: "Compliance", items: [
    { path: "/docs/compliance", label: "Title II & WCAG" },
    { path: "/docs/vpat", label: "VPAT 2.5" },
  ]},
];

const flatLinks = sections.flatMap((s) => s.items);

type ThemeMode = "light" | "dark";
const themeIcons = {
  light: Sun,
  dark: Moon,
};
const themeLabels = {
  light: "Light",
  dark: "Dark",
};

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const stored = document.documentElement.getAttribute("data-theme");
      if (stored === "light" || stored === "dark") return stored;
      // Detect system preference for initial state
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });
  const isHome = location === "/";

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const ThemeIcon = themeIcons[theme];

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavOpen(false);
    // Update page title for WCAG 2.4.2
    const current = flatLinks.find((link) => link.path === location);
    document.title = current ? `${current.label} — ply` : "ply — CSS Framework";
    // Shift focus to main content after SPA navigation (WCAG 2.4.1)
    const main = document.getElementById("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
  }, [location]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Navbar active state helpers
  const isGettingStarted = ["/docs/installation", "/docs/semantic-html", "/docs/ai-agents", "/docs/colors", "/docs/typography", "/docs/grid"].includes(location);
  const isComponents = ["/docs/buttons", "/docs/forms", "/docs/navigation", "/docs/tables", "/docs/alerts"].includes(location);
  const isHelpers = ["/docs/utilities", "/docs/accessibility"].includes(location);
  const isCompliance = ["/docs/compliance"].includes(location);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="navigation-fixed width-100">
        <nav className="navbar navbar-borderless hide-on-mobile" aria-label="Main">
          <ul className="items-center">
            <li className={isHome ? "active" : ""}>
              <Link href="/" aria-label="Home">
                <Home size={16} aria-hidden="true" />
              </Link>
            </li>
            <li className={isGettingStarted ? "active" : ""}>
              <Link href="/docs/installation">Docs</Link>
            </li>
            <li className={isComponents ? "active" : ""}>
              <Link href="/docs/buttons">Components</Link>
            </li>
            <li className={isHelpers ? "active" : ""}>
              <Link href="/docs/utilities">Helpers</Link>
            </li>
            <li className={isCompliance ? "active" : ""}>
              <Link href="/docs/compliance">Compliance</Link>
            </li>
            <li className="margin-left-auto display-flex gap-sm items-center">
              <Search />
              <button
                className="btn btn-ghost btn-icon"
                onClick={toggleTheme}
                aria-label={`Theme: ${themeLabels[theme]}. Click to switch.`}
                title={themeLabels[theme]}
              >
                <ThemeIcon size={16} />
              </button>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-borderless hide-on-desktop" aria-label="Main">
          <ul>
            <li>
              <button
                className={`navigation-toggle display-inline-block${navOpen ? " navigation-toggle-show" : ""}`}
                onClick={() => setNavOpen(!navOpen)}
                aria-expanded={navOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation"
              >
                <span>Menu</span>
              </button>
            </li>
            <li className="margin-left-auto display-flex gap-sm items-center">
              <Search />
              <button
                className="btn btn-ghost btn-icon"
                onClick={toggleTheme}
                aria-label={`Theme: ${themeLabels[theme]}. Click to switch.`}
                title={themeLabels[theme]}
              >
                <ThemeIcon size={16} />
              </button>
            </li>
          </ul>
          {navOpen && (
            <nav className="nav-stacked" id="mobile-nav" aria-label="Documentation menu">
              <ul>
                {flatLinks.map((link) => (
                  <li key={link.path} className={location === link.path ? "active" : ""}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </nav>
      </header>

      <div className="padding-top-extra margin-top-extra">
        {isHome ? (
          <main id="main">{children}</main>
        ) : (
          <div className="doc-layout">
            <aside className="doc-sidebar hide-on-mobile" aria-label="Documentation navigation">
              <nav className="doc-sidebar-inner no-link-style" aria-label="Documentation">
                {sections.map((section) => (
                  <div key={section.label} className="bottom-margin">
                    <p className="text-xs font-semibold uppercase text-tertiary no-margin padding-left padding-bottom" style={{ paddingLeft: "0.75rem" }} role="presentation">
                      {section.label}
                    </p>
                    <ul className="flat-list">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            className={`doc-sidebar-link display-block text-sm ${location === item.path ? "font-semibold doc-sidebar-link-active" : "text-secondary"}`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>
            <main id="main" className="doc-content">
              {children}
            </main>
            <aside className="doc-toc hide-on-mobile" aria-label="Table of contents">
              <TableOfContents key={location} />
            </aside>
          </div>
        )}
      </div>

      <footer className="padding-top padding-bottom text-sm text-muted" aria-label="Site footer">
        <div className="units-container">
          <p className="text-center no-margin">
            <strong>ply</strong> · MIT License ·{" "}
            <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" · "}
            <a href="https://www.npmjs.com/package/plygrid" target="_blank" rel="noopener noreferrer">npm</a>
          </p>
        </div>
      </footer>
    </>
  );
}
