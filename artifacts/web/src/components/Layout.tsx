import { Link, useLocation } from "wouter";
import { useState, useEffect, type ReactNode } from "react";
import { Home } from "lucide-react";

const navLinks = [
  { path: "/grid", label: "Grid" },
  { path: "/typography", label: "Typography" },
  { path: "/controls", label: "Controls" },
  { path: "/navigation", label: "Navigation" },
  { path: "/tables", label: "Tables" },
  { path: "/utilities", label: "Utilities" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavOpen(false);
  }, [location]);

  return (
    <>
      <header className="navigation-fixed width-100">
        <nav className="navbar navbar--borderless">
          <ul className="hide-on-mobile">
            <li className={location === "/" ? "active" : ""}>
              <Link href="/" aria-label="Home">
                <Home size={16} />
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.path} className={location === link.path ? "active" : ""}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hide-on-desktop">
          <div className="units-row no-margin align-middle">
            <div className="unit-auto no-padding">
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
            <div className="unit-auto no-padding">
              <Link href="/" className="padding display--inline-block" aria-label="Home">
                <Home size={16} />
              </Link>
            </div>
          </div>
          {navOpen && (
            <nav className="nav-stacked">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.path} className={location === link.path ? "active" : ""}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      <main className="padding-top--extra margin-top--extra">{children}</main>

      <footer className="border-top padding-top--extra padding-bottom--extra text-sm">
        <div className="units-container">
          <div className="units-row">
            <div className="unit-50 tablet-unit-100">
              <p className="no-orphan">
                <strong>ply</strong> — A ratio-based, AI-ready CSS framework.
              </p>
              <p>MIT License. Built for humans and machines.</p>
            </div>
            <div className="unit-50 tablet-unit-100 text-right">
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
