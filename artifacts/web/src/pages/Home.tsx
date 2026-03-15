import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function Home() {
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

  return (
    <>
      <section className="padding-top--extra padding-bottom--extra">
        <div className="units-container">
          <div className="units-row centered-content">
            <div className="unit-66 phone-unit-100 text-center">
              <div className="btn-group align-center bottom-margin">
                <button
                  className={`btn btn-smaller ${theme === "" ? "btn-blue" : ""}`}
                  onClick={() => setTheme("")}
                  aria-label="Auto theme"
                  title="Auto"
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

              <h1 className="text-5xl font-bold text-balance">Build interfaces with ply</h1>
              <p className="text-xl text-secondary no-orphan">
                A ratio-based CSS framework built for AI agents, accessible by default,
                and small enough to ship anywhere. Open source. ~18KB gzipped.
              </p>

              <div className="padding-top">
                <Link href="/grid" className="btn btn-blue">Get Started</Link>
                {" "}
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="units-container">
        <section className="padding-top--extra padding-bottom--extra border-top">
          <div className="units-row">
            <div className="unit-25 phone-unit-50">
              <div className="text-center bottom-margin">
                <span className="text-3xl font-bold display--block">~18KB</span>
                <span className="text-xs uppercase text-secondary">Gzipped</span>
              </div>
            </div>
            <div className="unit-25 phone-unit-50">
              <div className="text-center bottom-margin">
                <span className="text-3xl font-bold display--block">0</span>
                <span className="text-xs uppercase text-secondary">JavaScript</span>
              </div>
            </div>
            <div className="unit-25 phone-unit-50">
              <div className="text-center bottom-margin">
                <span className="text-3xl font-bold display--block">AA</span>
                <span className="text-xs uppercase text-secondary">WCAG Contrast</span>
              </div>
            </div>
            <div className="unit-25 phone-unit-50">
              <div className="text-center bottom-margin">
                <span className="text-3xl font-bold display--block">1</span>
                <span className="text-xs uppercase text-secondary">Link Tag</span>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra border-top">
          <div className="units-row centered-content">
            <div className="unit-60 phone-unit-100 text-center">
              <h2 className="text-balance">Why ply exists</h2>
              <p className="text-secondary no-orphan">
                CSS frameworks were designed for humans reading documentation. But increasingly,
                the first consumer of your framework is an AI — a coding agent generating UI
                from a prompt. ply is designed for that world.
              </p>
            </div>
          </div>

          <div className="units-row equal-height padding-top--extra">
            <div className="unit-33 phone-unit-100">
              <div className="border border-radius padding bottom-margin">
                <h3 className="text-lg font-semibold no-top-margin">AI-Native</h3>
                <p className="text-sm text-secondary no-margin no-orphan">
                  Ships with PLY.md and ply-classes.json — a complete class reference any AI can read.
                  Class names are predictable: .alert-blue, .btn-sm, .unit-50.
                </p>
              </div>
            </div>
            <div className="unit-33 phone-unit-100">
              <div className="border border-radius padding bottom-margin">
                <h3 className="text-lg font-semibold no-top-margin">Accessible by Default</h3>
                <p className="text-sm text-secondary no-margin no-orphan">
                  :focus-visible outlines, prefers-reduced-motion, semantic HTML styling, and WCAG AA
                  contrast baked into the CSS itself.
                </p>
              </div>
            </div>
            <div className="unit-33 phone-unit-100">
              <div className="border border-radius padding bottom-margin">
                <h3 className="text-lg font-semibold no-top-margin">Small Footprint</h3>
                <p className="text-sm text-secondary no-margin no-orphan">
                  ~18KB gzipped (full), ~16KB (core). No JavaScript runtime, no build step,
                  no tree-shaking needed. Ship the whole thing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra border-top">
          <div className="units-row centered-content">
            <div className="unit-60 phone-unit-100 text-center">
              <h2 className="text-balance">Quick Start</h2>
              <p className="text-secondary no-orphan">
                Add a single link tag. That's the entire setup.
              </p>
            </div>
          </div>
          <div className="padding-top">
            <pre>
              <code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">`}</code>
            </pre>
            <p className="text-sm text-secondary">
              Or install via npm: <code>npm install plygrid</code>
            </p>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra border-top">
          <div className="units-row centered-content">
            <div className="unit-60 phone-unit-100 text-center">
              <h2 className="text-balance">Everything you need</h2>
              <p className="text-secondary no-orphan">
                Explore every component and utility class in the framework.
              </p>
            </div>
          </div>

          <div className="units-row equal-height no-link-style padding-top--extra">
            <div className="unit-33 tablet-unit-50 phone-unit-100">
              <Link href="/grid" className="border border-radius padding bottom-margin display--block cursor-finger">
                <h3 className="text-lg font-semibold no-top-margin">Grid</h3>
                <p className="text-sm text-secondary no-margin no-orphan">Ratio-based flexbox grid with responsive prefixes for every breakpoint.</p>
              </Link>
            </div>
            <div className="unit-33 tablet-unit-50 phone-unit-100">
              <Link href="/typography" className="border border-radius padding bottom-margin display--block cursor-finger">
                <h3 className="text-lg font-semibold no-top-margin">Typography</h3>
                <p className="text-sm text-secondary no-margin no-orphan">Type scale from text-xs to text-5xl with weight, alignment, and leading.</p>
              </Link>
            </div>
            <div className="unit-33 tablet-unit-50 phone-unit-100">
              <Link href="/controls" className="border border-radius padding bottom-margin display--block cursor-finger">
                <h3 className="text-lg font-semibold no-top-margin">Controls</h3>
                <p className="text-sm text-secondary no-margin no-orphan">Buttons, forms, alerts, and labels — six color variants with accessible inputs.</p>
              </Link>
            </div>
            <div className="unit-33 tablet-unit-50 phone-unit-100">
              <Link href="/navigation" className="border border-radius padding bottom-margin display--block cursor-finger">
                <h3 className="text-lg font-semibold no-top-margin">Navigation</h3>
                <p className="text-sm text-secondary no-margin no-orphan">Navbar, pills, tabs, stacked nav, breadcrumbs, and pagination.</p>
              </Link>
            </div>
            <div className="unit-33 tablet-unit-50 phone-unit-100">
              <Link href="/tables" className="border border-radius padding bottom-margin display--block cursor-finger">
                <h3 className="text-lg font-semibold no-top-margin">Tables</h3>
                <p className="text-sm text-secondary no-margin no-orphan">Bordered, striped, hoverable, and simple table variants.</p>
              </Link>
            </div>
            <div className="unit-33 tablet-unit-50 phone-unit-100">
              <Link href="/utilities" className="border border-radius padding bottom-margin display--block cursor-finger">
                <h3 className="text-lg font-semibold no-top-margin">Utilities</h3>
                <p className="text-sm text-secondary no-margin no-orphan">Spacing, display, visibility, dark mode, and CSS custom property theming.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
