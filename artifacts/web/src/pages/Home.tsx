import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  Sun, Moon, Monitor,
  Cpu, Accessibility, Feather,
  LayoutGrid, Type, ToggleLeft, Compass, Table2, Wrench,
  Zap, FileCode, Palette
} from "lucide-react";

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
            <div className="unit-50 phone-unit-100 text-center">
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
                and small enough to ship anywhere.
              </p>

              <div className="padding-top">
                <Link href="/grid" className="btn btn-blue">Get Started</Link>
                {" "}
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="units-container">
        <section className="padding-bottom--extra padding-top--extra">
          <div className="units-row centered-content">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">~18KB</span>
                  <span className="text-xs uppercase text-muted">Gzipped</span>
                </div>
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">0</span>
                  <span className="text-xs uppercase text-muted">JavaScript</span>
                </div>
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">AA</span>
                  <span className="text-xs uppercase text-muted">WCAG Contrast</span>
                </div>
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">1</span>
                  <span className="text-xs uppercase text-muted">Link Tag</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase text-muted">Why ply</p>
              <h2 className="text-balance">Designed for a new world</h2>
              <p className="text-secondary no-orphan">
                CSS frameworks were built for humans reading docs. But increasingly,
                the first consumer is an AI generating UI from a prompt.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Cpu size={28} className="text-secondary" />
                  <h3 className="text-lg font-semibold">AI-Native</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Ships with PLY.md and ply-classes.json — a complete class reference
                    any coding agent can read and use correctly.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Accessibility size={28} className="text-secondary" />
                  <h3 className="text-lg font-semibold">Accessible by Default</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Focus-visible outlines, prefers-reduced-motion, semantic HTML,
                    and WCAG AA contrast baked into the CSS itself.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Feather size={28} className="text-secondary" />
                  <h3 className="text-lg font-semibold">Small Footprint</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    ~18KB gzipped. No JavaScript runtime. No build step.
                    No tree-shaking needed. Ship the whole thing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section className="background-blue padding-top--extra padding-bottom--extra">
        <div className="units-container">
          <div className="units-row centered-content">
            <div className="unit-80 phone-unit-100 text-center">
              <h2 className="text-balance text-inverse">One line. That's it.</h2>
              <p className="text-inverse no-orphan">
                Drop the CDN link into any HTML file — no install, no build step.
              </p>
              <p className="text-inverse no-orphan nowrap">
                <code className="text-inverse text-sm">{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">`}</code>
              </p>
              <p className="text-sm text-inverse no-orphan padding-top">
                Or <code className="text-inverse">npm install plygrid</code> for access to Sass source files, variables, and mixins.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-50 phone-unit-100 text-center">
              <h2 className="text-balance text-inverse">Everything you need</h2>
              <p className="text-inverse no-orphan">
                A complete design system in a single stylesheet.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra no-link-style">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/grid" className="display--block background-white border-radius padding cursor-finger">
                    <LayoutGrid size={20} className="text-muted" />
                    <h3 className="text-base font-semibold">Grid</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Ratio-based flexbox with responsive prefixes</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/typography" className="display--block background-white border-radius padding cursor-finger">
                    <Type size={20} className="text-muted" />
                    <h3 className="text-base font-semibold">Typography</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Type scale from text-xs to text-5xl</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/controls" className="display--block background-white border-radius padding cursor-finger">
                    <ToggleLeft size={20} className="text-muted" />
                    <h3 className="text-base font-semibold">Controls</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Buttons, forms, alerts, and labels</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/navigation" className="display--block background-white border-radius padding cursor-finger">
                    <Compass size={20} className="text-muted" />
                    <h3 className="text-base font-semibold">Navigation</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Navbar, pills, tabs, breadcrumbs</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/tables" className="display--block background-white border-radius padding cursor-finger">
                    <Table2 size={20} className="text-muted" />
                    <h3 className="text-base font-semibold">Tables</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Bordered, striped, and hoverable</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/utilities" className="display--block background-white border-radius padding cursor-finger">
                    <Wrench size={20} className="text-muted" />
                    <h3 className="text-base font-semibold">Utilities</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Spacing, display, theming, dark mode</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="units-container">

        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase text-muted">Built different</p>
              <h2 className="text-balance">Why not Tailwind?</h2>
              <p className="text-secondary no-orphan">
                Tailwind is powerful. But ply solves a different problem.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Zap size={28} className="text-secondary" />
                  <h3 className="text-lg font-semibold">No Build Step</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Drop a link tag in your HTML. Works in any environment —
                    no PostCSS, no purging, no config files.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <FileCode size={28} className="text-secondary" />
                  <h3 className="text-lg font-semibold">Readable Classes</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    <code>unit-50</code> means 50% width. <code>btn-blue</code> means a blue button.
                    No memorizing utility shorthand.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Palette size={28} className="text-secondary" />
                  <h3 className="text-lg font-semibold">Semantic Theming</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    CSS custom properties for every color, spacing value, and font size.
                    Dark mode is one attribute toggle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
