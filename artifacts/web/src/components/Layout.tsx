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
      <header className="navigation-fixed width-100">
        <div className="units-row no-margin align-middle">
          <div className="unit-auto no-padding">
            <nav className="navbar navbar--left">
              <ul>
                <li className={location === "/" ? "active" : ""}>
                  <Link href="/" className="font-bold">
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
          <div className="unit-auto padding-left padding-right">
            <div className="form-inline">
              <select
                className="input-xs select-outlined"
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

      <main className="padding-top--extra margin-top--extra">{children}</main>

      <footer className="border-top padding-top--extra padding-bottom--extra text-sm">
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
