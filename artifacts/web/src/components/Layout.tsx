import { Link, useLocation } from "wouter";
import { useState, useEffect, type ReactNode } from "react";
import { Home, Sun, Moon, Monitor } from "lucide-react";

const sections = [
  { label: "Getting Started", items: [
    { path: "/", label: "Introduction" },
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

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "";
    }
    return "";
  });
  const isHome = location === "/";

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
        <div className="hide-on-mobile">
        <div className="units-row no-margin align-middle">
          <div className="unit-auto no-padding">
            <nav className="navbar navbar--borderless">
              <ul>
                <li className={isHome ? "active" : ""}>
                  <Link href="/" aria-label="Home">
                    <Home size={16} />
                  </Link>
                </li>
                <li className={location === "/grid" || location === "/typography" ? "active" : ""}>
                  <Link href="/grid">Docs</Link>
                </li>
                <li className={location === "/controls" || location === "/navigation" || location === "/tables" ? "active" : ""}>
                  <Link href="/controls">Components</Link>
                </li>
                <li className={location === "/utilities" ? "active" : ""}>
                  <Link href="/utilities">Utilities</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="unit-auto no-padding padding-right">
            <div className="btn-group">
              <button
                className={`btn btn-smaller ${theme === "" ? "btn-blue" : ""}`}
                onClick={() => setTheme("")}
                aria-label="Auto theme"
                title="System"
              >
                <Monitor size={14} />
              </button>
              <button
                className={`btn btn-smaller ${theme === "light" ? "btn-blue" : ""}`}
                onClick={() => setTheme("light")}
                aria-label="Light theme"
                title="Light"
              >
                <Sun size={14} />
              </button>
              <button
                className={`btn btn-smaller ${theme === "dark" ? "btn-blue" : ""}`}
                onClick={() => setTheme("dark")}
                aria-label="Dark theme"
                title="Dark"
              >
                <Moon size={14} />
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="hide-on-desktop">
          <div className="units-row no-margin align-middle">
            <div className="phone-unit-50 no-padding">
              <div
                className={`navigation-toggle${navOpen ? " navigation-toggle-show" : ""}`}
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
              </div>
            </div>
            <div className="phone-unit-50 no-padding text-right padding-right">
              <div className="btn-group">
                <button
                  className={`btn btn-smaller ${theme === "" ? "btn-blue" : ""}`}
                  onClick={() => setTheme("")}
                  aria-label="Auto theme"
                >
                  <Monitor size={14} />
                </button>
                <button
                  className={`btn btn-smaller ${theme === "light" ? "btn-blue" : ""}`}
                  onClick={() => setTheme("light")}
                  aria-label="Light theme"
                >
                  <Sun size={14} />
                </button>
                <button
                  className={`btn btn-smaller ${theme === "dark" ? "btn-blue" : ""}`}
                  onClick={() => setTheme("dark")}
                  aria-label="Dark theme"
                >
                  <Moon size={14} />
                </button>
              </div>
            </div>
          </div>
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
        </div>
      </header>

      <div className="padding-top--extra margin-top--extra">
        {isHome ? (
          <main>{children}</main>
        ) : (
          <div className="units-container">
            <div className="units-row">
              <aside className="unit-20 phone-unit-100 hide-on-mobile">
                <nav className="padding-right no-link-style">
                  {sections.map((section) => (
                    <div key={section.label} className="bottom-margin">
                      <p className="text-xs font-semibold uppercase no-margin padding-bottom">{section.label}</p>
                      <ul className="flat-list">
                        {section.items.map((item) => (
                          <li key={item.path}>
                            <Link
                              href={item.path}
                              className={`display--block padding-left padding-top padding-bottom text-sm ${location === item.path ? "font-semibold" : "text-secondary"}`}
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
              <main className="unit-80 phone-unit-100">
                {children}
              </main>
            </div>
          </div>
        )}
      </div>

      <footer className="padding-top--extra padding-bottom--extra text-sm">
        <div className="units-container">
          <div className="units-row">
            <div className="unit-50 phone-unit-100">
              <p className="no-orphan">
                <strong>ply</strong> — A ratio-based, AI-ready CSS framework.
              </p>
              <p>MIT License. Built for humans and machines.</p>
            </div>
            <div className="unit-50 phone-unit-100 text-right">
              <p>~18KB gzipped. No JavaScript. No build step.</p>
              <p>
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer">GitHub</a>
                {" · "}
                <a href="https://www.npmjs.com/package/plygrid" target="_blank" rel="noopener noreferrer">npm</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
