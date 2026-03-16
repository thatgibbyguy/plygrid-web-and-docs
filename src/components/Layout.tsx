import { Link, useLocation } from "wouter";
import { useState, useEffect, type ReactNode } from "react";
import { Home, Sun, Moon, Monitor } from "lucide-react";
import TableOfContents from "./TableOfContents";
import Search from "./Search";

const sections = [
  { label: "Getting Started", items: [
    { path: "/get-started", label: "Get Started" },
  ]},
  { label: "Layout", items: [
    { path: "/grid", label: "Grid" },
  ]},
  { label: "Design", items: [
    { path: "/typography", label: "Typography" },
  ]},
  { label: "Components", items: [
    { path: "/controls", label: "Controls" },
    { path: "/navigation", label: "Navigation" },
    { path: "/tables", label: "Tables" },
  ]},
  { label: "Configuration", items: [
    { path: "/utilities", label: "Utilities" },
  ]},
];

const flatLinks = sections.flatMap((s) => s.items);

type ThemeMode = "" | "light" | "dark";
const themeOrder: ThemeMode[] = ["", "light", "dark"];
const themeIcons = {
  "": Monitor,
  light: Sun,
  dark: Moon,
};
const themeLabels = {
  "": "System",
  light: "Light",
  dark: "Dark",
};

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (document.documentElement.getAttribute("data-theme") || "") as ThemeMode;
    }
    return "";
  });
  const isHome = location === "/";

  const cycleTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const next = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(next);
  };

  const ThemeIcon = themeIcons[theme];

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavOpen(false);
  }, [location]);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <>
      <header className="navigation-fixed width-100">
        <nav className="navbar navbar-borderless hide-on-mobile">
          <ul style={{ alignItems: "center" }}>
            <li className={isHome ? "active" : ""}>
              <Link href="/" aria-label="Home">
                <Home size={16} />
              </Link>
            </li>
            <li className={location === "/get-started" || location === "/grid" || location === "/typography" ? "active" : ""}>
              <Link href="/get-started">Docs</Link>
            </li>
            <li className={location === "/controls" || location === "/navigation" || location === "/tables" ? "active" : ""}>
              <Link href="/controls">Components</Link>
            </li>
            <li className={location === "/utilities" ? "active" : ""}>
              <Link href="/utilities">Utilities</Link>
            </li>
            <li className="margin-left-auto display-flex gap-sm" style={{ alignItems: "center" }}>
              <Search />
              <button
                className="btn btn-ghost btn-smaller"
                onClick={cycleTheme}
                aria-label={`Theme: ${themeLabels[theme]}. Click to switch.`}
                title={themeLabels[theme]}
              >
                <ThemeIcon size={16} />
              </button>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-borderless hide-on-desktop">
          <ul>
            <li>
              <span
                className={`navigation-toggle display-inline-block${navOpen ? " navigation-toggle-show" : ""}`}
                onClick={() => setNavOpen(!navOpen)}
                role="button"
                tabIndex={0}
                aria-expanded={navOpen}
                aria-label="Toggle navigation"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setNavOpen(!navOpen);
                  }
                }}
              >
                <span>Menu</span>
              </span>
            </li>
            <li className="margin-left-auto display-flex gap-sm" style={{ alignItems: "center" }}>
              <Search />
              <button
                className="btn btn-ghost btn-smaller"
                onClick={cycleTheme}
                aria-label={`Theme: ${themeLabels[theme]}. Click to switch.`}
                title={themeLabels[theme]}
              >
                <ThemeIcon size={16} />
              </button>
            </li>
          </ul>
          {navOpen && (
            <nav className="nav-stacked">
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
          <main>{children}</main>
        ) : (
          <div className="doc-layout">
            <aside className="doc-sidebar hide-on-mobile">
              <nav className="doc-sidebar-inner no-link-style">
                <ul className="flat-list">
                  {flatLinks.map((item) => (
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
              </nav>
            </aside>
            <main className="doc-content">
              {children}
            </main>
            <aside className="doc-toc hide-on-mobile">
              <TableOfContents key={location} />
            </aside>
          </div>
        )}
      </div>

      <footer className="padding-top padding-bottom text-sm text-muted">
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
