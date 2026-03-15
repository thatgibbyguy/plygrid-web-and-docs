import { Link, useLocation } from "wouter";
import { useState, useEffect, type ReactNode } from "react";

const navLinks = [
  { path: "/grid", label: "Grid" },
  { path: "/typography", label: "Typography" },
  { path: "/buttons", label: "Buttons" },
  { path: "/forms", label: "Forms" },
  { path: "/navigation", label: "Navigation" },
  { path: "/alerts", label: "Alerts" },
  { path: "/tables", label: "Tables" },
  { path: "/helpers", label: "Helpers" },
  { path: "/theming", label: "Theming" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "";
    }
    return "";
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header className="navigation-fixed" style={{ width: "100%" }}>
        <div className="units-row" style={{ margin: 0, alignItems: "center" }}>
          <div className="unit-auto" style={{ padding: 0 }}>
            <nav className="navbar navbar--left">
              <ul>
                <li className={location === "/" ? "active" : ""}>
                  <Link href="/" style={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: "1rem" }}>
                    ply
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.path} className={location === link.path ? "active" : ""}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div style={{ padding: "0 1rem", flexShrink: 0 }}>
            <div className="form-inline">
              <select
                className="input-sm select-outlined"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                aria-label="Choose theme"
              >
                <option value="">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: "3.5rem" }}>{children}</main>

      <footer className="footer">
        <div className="units-container">
          <div className="units-row">
            <div className="unit-50 tablet-unit-100">
              <p>
                <strong>ply</strong> — A ratio-based, AI-ready CSS framework.
              </p>
              <p>MIT License. Built for humans and machines.</p>
            </div>
            <div className="unit-50 tablet-unit-100 text-right">
              <p>~18KB gzipped. No JavaScript. No build step.</p>
              <p>
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {" · "}
                <a href="https://www.npmjs.com/package/plygrid" target="_blank" rel="noopener noreferrer">
                  npm
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
