import { Link } from "wouter";

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
    title: "Buttons & Groups",
    desc: "Six color variants, four sizes, outline/active/disabled states, and button groups.",
    path: "/buttons",
  },
  {
    title: "Form Controls",
    desc: "Inputs, selects, textareas, checkboxes, radios — all styled with a single .form wrapper.",
    path: "/forms",
  },
  {
    title: "Navigation",
    desc: "Navbar, pills, tabs, stacked nav, breadcrumbs, and pagination — all semantic HTML.",
    path: "/navigation",
  },
  {
    title: "Alerts & Toasts",
    desc: "Five color variants with solid, outline, and ghost styles. Dismissible notifications.",
    path: "/alerts",
  },
  {
    title: "Data Tables",
    desc: "Bordered, striped, hoverable, and simple table variants with responsive containers.",
    path: "/tables",
  },
  {
    title: "Helper Utilities",
    desc: "Spacing, display, position, visibility, borders, width/height, and color utilities.",
    path: "/helpers",
  },
  {
    title: "Dark Mode & Theming",
    desc: "Auto-detect OS preference or force light/dark. Full CSS custom property theming.",
    path: "/theming",
  },
];

export default function Home() {
  return (
    <>
      <div className="units-container">
        <section className="showcase-hero">
          <div className="units-row">
            <div className="unit-60 tablet-unit-100">
              <p className="section-label">CSS Framework / v1.0</p>
              <h1>ply</h1>
              <p className="lead">
                A ratio-based CSS framework built for AI agents, accessible by default, and small
                enough to ship anywhere. One stylesheet. ~18KB gzipped. No JavaScript, no build step,
                no configuration.
              </p>
              <div>
                <Link href="/grid">
                  <button className="btn btn-blue">Explore Components</button>
                </Link>
                {" "}
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline">GitHub</button>
                </a>
              </div>
              <div className="stat-grid">
                <div className="stat-item">
                  <span className="stat-value">~18KB</span>
                  <span className="stat-label">Gzipped</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">0</span>
                  <span className="stat-label">JavaScript</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">AA</span>
                  <span className="stat-label">WCAG Contrast</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">1</span>
                  <span className="stat-label">Link Tag</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <p className="section-label">Rationale</p>
          <h2>Why ply exists</h2>
          <p style={{ maxWidth: 650, color: "var(--ply-color-secondary)" }}>
            CSS frameworks were designed for humans reading documentation. But increasingly, the first
            consumer of your framework is an AI — a coding agent generating UI from a prompt. ply is
            designed for that world.
          </p>

          <div className="spacer-md" />

          <div className="units-row">
            <div className="unit-33 tablet-unit-100">
              <div className="feature-card">
                <h3>AI-Native</h3>
                <p>
                  Ships with PLY.md and ply-classes.json — a complete class reference any AI can read.
                  Class names are predictable: .alert-blue, .btn-sm, .unit-50.
                </p>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100">
              <div className="feature-card">
                <h3>Accessible by Default</h3>
                <p>
                  :focus-visible outlines, prefers-reduced-motion, semantic HTML styling, and WCAG AA
                  contrast baked into the CSS itself.
                </p>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100">
              <div className="feature-card">
                <h3>Small Footprint</h3>
                <p>
                  ~18KB gzipped (full), ~16KB (core). No JavaScript runtime, no build step,
                  no tree-shaking needed. Ship the whole thing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <p className="section-label">Quick Start</p>
          <h2>One line of HTML</h2>
          <p style={{ color: "var(--ply-color-secondary)" }}>
            Add a single link tag. That's the entire setup.
          </p>
          <pre className="code-preview">
{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">`}
          </pre>
          <div className="spacer-sm" />
          <p style={{ color: "var(--ply-color-muted)", fontSize: "0.9rem" }}>
            Or install via npm: <code className="inline-code">npm install plygrid</code>
          </p>
        </section>

        <section className="showcase-section">
          <p className="section-label">Components</p>
          <h2>Everything you need</h2>
          <p style={{ maxWidth: 550, color: "var(--ply-color-secondary)", marginBottom: "2rem" }}>
            Explore every component and utility class in the framework.
          </p>

          <div className="units-row">
            {features.map((f) => (
              <div className="unit-33 tablet-unit-50 phone-unit-100" key={f.path}>
                <Link href={f.path} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="feature-card" style={{ marginBottom: "1rem", cursor: "pointer" }}>
                    <h3>{f.title} →</h3>
                    <p>{f.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <p className="section-label">Bundles</p>
          <h2>Choose your size</h2>
          <div className="spacer-sm" />
          <table>
            <thead>
              <tr>
                <th>Bundle</th>
                <th>Includes</th>
                <th>Size (gzip)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code className="inline-code">ply.min.css</code></td>
                <td>Everything</td>
                <td>~18KB</td>
              </tr>
              <tr>
                <td><code className="inline-code">ply-core.min.css</code></td>
                <td>Grid, buttons, forms, nav, alerts, tables, typography, helpers</td>
                <td>~16KB</td>
              </tr>
              <tr>
                <td><code className="inline-code">ply-essentials.min.css</code></td>
                <td>Grid + helpers only</td>
                <td>~5KB</td>
              </tr>
              <tr>
                <td><code className="inline-code">ply-helpers.min.css</code></td>
                <td>Helper utilities only</td>
                <td>~3KB</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
