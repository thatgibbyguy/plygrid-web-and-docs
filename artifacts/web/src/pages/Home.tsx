import { Link } from "wouter";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const features = [
  {
    title: "Ratio-Based Grid",
    desc: "Think in percentages. unit-50 is 50%, unit-33 is 33%. Responsive prefixes for every breakpoint.",
    path: "/grid",
  },
  {
    title: "Typography Scale",
    desc: "From text-xs to text-5xl with font weight, line height, and alignment utilities.",
    path: "/typography",
  },
  {
    title: "Controls",
    desc: "Buttons, forms, alerts, and labels — six color variants, accessible inputs, dismissible notifications.",
    path: "/controls",
  },
  {
    title: "Navigation",
    desc: "Navbar, pills, tabs, stacked nav, breadcrumbs, and pagination — all semantic HTML.",
    path: "/navigation",
  },
  {
    title: "Data Tables",
    desc: "Bordered, striped, hoverable, and simple table variants with responsive containers.",
    path: "/tables",
  },
  {
    title: "Utilities",
    desc: "Spacing, display, visibility, borders, colors, dark mode, and CSS custom property theming.",
    path: "/utilities",
  },
];

export default function Home() {
  const [, navigate] = useLocation();
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
      <section className="layer-1 padding-top--extra padding-bottom--extra">
        <div className="units-container">
          <div className="units-row">
            <div className="unit-66 tablet-unit-100">
              <p className="text-xs font-semibold uppercase">CSS Framework / v1.0</p>
              <h1 className="text-5xl font-bold">ply</h1>
              <p className="lead">
                A ratio-based CSS framework built for AI agents, accessible by default, and small
                enough to ship anywhere. One stylesheet. ~18KB gzipped. No JavaScript, no build step,
                no configuration.
              </p>
              <div className="bottom-margin--extra">
                <Link href="/grid" className="btn btn-blue">Explore Components</Link>
                {" "}
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100 text-right">
              <div className="btn-group">
                <button
                  className={`btn btn-smaller ${theme === "" ? "btn-blue" : "btn-outline"}`}
                  onClick={() => setTheme("")}
                  aria-label="Auto theme"
                  title="Auto"
                >
                  <Monitor size={14} />
                </button>
                <button
                  className={`btn btn-smaller ${theme === "light" ? "btn-blue" : "btn-outline"}`}
                  onClick={() => setTheme("light")}
                  aria-label="Light theme"
                  title="Light"
                >
                  <Sun size={14} />
                </button>
                <button
                  className={`btn btn-smaller ${theme === "dark" ? "btn-blue" : "btn-outline"}`}
                  onClick={() => setTheme("dark")}
                  aria-label="Dark theme"
                  title="Dark"
                >
                  <Moon size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="units-row">
            <div className="unit-25 phone-unit-50">
              <div className="border border-radius padding text-center bottom-margin">
                <span className="text-2xl font-bold display--block">~18KB</span>
                <span className="text-xs uppercase">Gzipped</span>
              </div>
            </div>
            <div className="unit-25 phone-unit-50">
              <div className="border border-radius padding text-center bottom-margin">
                <span className="text-2xl font-bold display--block">0</span>
                <span className="text-xs uppercase">JavaScript</span>
              </div>
            </div>
            <div className="unit-25 phone-unit-50">
              <div className="border border-radius padding text-center bottom-margin">
                <span className="text-2xl font-bold display--block">AA</span>
                <span className="text-xs uppercase">WCAG Contrast</span>
              </div>
            </div>
            <div className="unit-25 phone-unit-50">
              <div className="border border-radius padding text-center bottom-margin">
                <span className="text-2xl font-bold display--block">1</span>
                <span className="text-xs uppercase">Link Tag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="units-container">
        <section className="padding-top--extra padding-bottom--extra border-bottom">
          <p className="text-xs font-semibold uppercase">Rationale</p>
          <h2>Why ply exists</h2>
          <p className="bottom-margin--extra">
            CSS frameworks were designed for humans reading documentation. But increasingly, the first
            consumer of your framework is an AI — a coding agent generating UI from a prompt. ply is
            designed for that world.
          </p>

          <div className="units-row">
            <div className="unit-33 tablet-unit-100">
              <div className="border border-radius padding bottom-margin">
                <h3 className="text-lg font-semibold no-top-margin">AI-Native</h3>
                <p className="text-sm no-margin">
                  Ships with PLY.md and ply-classes.json — a complete class reference any AI can read.
                  Class names are predictable: .alert-blue, .btn-sm, .unit-50.
                </p>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100">
              <div className="border border-radius padding bottom-margin">
                <h3 className="text-lg font-semibold no-top-margin">Accessible by Default</h3>
                <p className="text-sm no-margin">
                  :focus-visible outlines, prefers-reduced-motion, semantic HTML styling, and WCAG AA
                  contrast baked into the CSS itself.
                </p>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100">
              <div className="border border-radius padding bottom-margin">
                <h3 className="text-lg font-semibold no-top-margin">Small Footprint</h3>
                <p className="text-sm no-margin">
                  ~18KB gzipped (full), ~16KB (core). No JavaScript runtime, no build step,
                  no tree-shaking needed. Ship the whole thing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra border-bottom">
          <p className="text-xs font-semibold uppercase">Quick Start</p>
          <h2>One line of HTML</h2>
          <p className="bottom-margin--extra">
            Add a single link tag. That's the entire setup.
          </p>
          <pre>
            <code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">`}</code>
          </pre>
          <p className="text-sm">
            Or install via npm: <code>npm install plygrid</code>
          </p>
        </section>

        <section className="padding-top--extra padding-bottom--extra border-bottom">
          <p className="text-xs font-semibold uppercase">Bundles</p>
          <h2>Choose your size</h2>
          <p className="bottom-margin--extra">
            Four bundles from full-featured to helpers-only. Pick the one that fits.
          </p>

          <div className="units-row">
            <div className="unit-25 tablet-unit-50 phone-unit-100">
              <div className="border border-radius padding text-center bottom-margin">
                <p className="text-3xl font-bold no-margin">~18KB</p>
                <p className="text-sm bottom-margin">ply.min.css</p>
                <p className="text-xs no-margin">Everything</p>
              </div>
            </div>
            <div className="unit-25 tablet-unit-50 phone-unit-100">
              <div className="border border-radius padding text-center bottom-margin">
                <p className="text-3xl font-bold no-margin">~16KB</p>
                <p className="text-sm bottom-margin">ply-core.min.css</p>
                <p className="text-xs no-margin">Core features</p>
              </div>
            </div>
            <div className="unit-25 tablet-unit-50 phone-unit-100">
              <div className="border border-radius padding text-center bottom-margin">
                <p className="text-3xl font-bold no-margin">~5KB</p>
                <p className="text-sm bottom-margin">ply-essentials.min.css</p>
                <p className="text-xs no-margin">Grid + helpers</p>
              </div>
            </div>
            <div className="unit-25 tablet-unit-50 phone-unit-100">
              <div className="border border-radius padding text-center bottom-margin">
                <p className="text-3xl font-bold no-margin">~3KB</p>
                <p className="text-sm bottom-margin">ply-helpers.min.css</p>
                <p className="text-xs no-margin">Helpers only</p>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra">
          <p className="text-xs font-semibold uppercase">Components</p>
          <h2>Everything you need</h2>
          <p className="bottom-margin--extra">
            Explore every component and utility class in the framework.
          </p>

          <div className="units-row">
            {features.map((f) => (
              <div className="unit-33 tablet-unit-50 phone-unit-100" key={f.path}>
                <div
                  className="border border-radius padding bottom-margin cursor-finger"
                  onClick={() => navigate(f.path)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") navigate(f.path);
                  }}
                >
                  <h3 className="text-lg font-semibold no-top-margin">{f.title}</h3>
                  <p className="text-sm no-margin">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
