import { useState } from "react";
import CodeBlock from "../components/CodeBlock";

export default function ThemingPage() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "auto";
  });

  const applyTheme = (theme: string) => {
    setCurrentTheme(theme);
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  return (
    <div className="units-container">
      <section className="showcase-section">
        <p className="section-label">Customization</p>
        <h1 className="page-title">Dark Mode & Theming</h1>
        <p className="page-subtitle">
          ply auto-detects your OS color scheme. Force light or dark with a data attribute.
          Override any color via CSS custom properties.
        </p>
      </section>

      <section className="showcase-section" id="dark-mode">
        <p className="section-label">Dark Mode</p>
        <h2>Toggle Dark Mode</h2>
        <p>
          ply respects <code className="inline-code">prefers-color-scheme</code> automatically.
          Force a mode with <code className="inline-code">data-theme</code> on the html element.
        </p>

        <div className="demo-box">
          <p className="text-sm" style={{ marginBottom: "1rem", color: "var(--ply-color-muted)" }}>
            Current: <strong>{currentTheme}</strong>
          </p>
          <div className="btn-group">
            <button
              className={`btn ${currentTheme === "auto" ? "btn-blue" : ""}`}
              onClick={() => applyTheme("auto")}
            >
              Auto
            </button>
            <button
              className={`btn ${currentTheme === "light" ? "btn-blue" : ""}`}
              onClick={() => applyTheme("light")}
            >
              Light
            </button>
            <button
              className={`btn ${currentTheme === "dark" ? "btn-blue" : ""}`}
              onClick={() => applyTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>

        <CodeBlock code={`<!-- Auto (follows OS) -->
<html>

<!-- Force light -->
<html data-theme="light">

<!-- Force dark -->
<html data-theme="dark">

<!-- Toggle with JavaScript -->
<script>
document.documentElement.dataset.theme =
  document.documentElement.dataset.theme === 'dark'
    ? 'light' : 'dark';
</script>`} />
      </section>

      <section className="showcase-section" id="css-vars">
        <p className="section-label">Custom Properties</p>
        <h2>CSS Custom Properties</h2>
        <p>
          Override <code className="inline-code">--ply-*</code> variables to create any theme.
          All colors, backgrounds, borders, and component styles are customizable.
        </p>

        <h3>Backgrounds</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default (Light)</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">--ply-bg-body</code></td><td>#ffffff</td><td>Page background</td></tr>
            <tr><td><code className="inline-code">--ply-bg-surface</code></td><td>#ffffff</td><td>Card/surface background</td></tr>
            <tr><td><code className="inline-code">--ply-bg-surface-alt</code></td><td>#f4f4f4</td><td>Alternate surface</td></tr>
            <tr><td><code className="inline-code">--ply-bg-muted</code></td><td>#e0e0e0</td><td>Muted background</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <h3>Text Colors</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">--ply-color-body</code></td><td>#161616</td><td>Primary text</td></tr>
            <tr><td><code className="inline-code">--ply-color-headings</code></td><td>#161616</td><td>Heading text</td></tr>
            <tr><td><code className="inline-code">--ply-color-secondary</code></td><td>#525252</td><td>Secondary text</td></tr>
            <tr><td><code className="inline-code">--ply-color-muted</code></td><td>#6f6f6f</td><td>Muted text</td></tr>
            <tr><td><code className="inline-code">--ply-color-placeholder</code></td><td>#a8a8a8</td><td>Placeholder text</td></tr>
            <tr><td><code className="inline-code">--ply-color-text-inverse</code></td><td>#ffffff</td><td>Inverse (on dark bg)</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <h3>Borders</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">--ply-border-color</code></td><td>#e0e0e0</td><td>Default border</td></tr>
            <tr><td><code className="inline-code">--ply-border-strong</code></td><td>#8d8d8d</td><td>Strong/emphasis border</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <h3>Interactive</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">--ply-color-link</code></td><td>#0f62fe</td><td>Link color</td></tr>
            <tr><td><code className="inline-code">--ply-color-link-hover</code></td><td>#0043ce</td><td>Link hover</td></tr>
            <tr><td><code className="inline-code">--ply-color-focus</code></td><td>#0f62fe</td><td>Focus ring</td></tr>
            <tr><td><code className="inline-code">--ply-color-input-border</code></td><td>#8d8d8d</td><td>Input borders</td></tr>
            <tr><td><code className="inline-code">--ply-color-input-bg</code></td><td>#f4f4f4</td><td>Input background</td></tr>
            <tr><td><code className="inline-code">--ply-btn-default-bg</code></td><td>#393939</td><td>Default button bg</td></tr>
            <tr><td><code className="inline-code">--ply-btn-default-hover</code></td><td>#4c4c4c</td><td>Default button hover</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <h3>Navigation</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">--ply-nav-bg</code></td><td>#ffffff</td><td>Nav background</td></tr>
            <tr><td><code className="inline-code">--ply-nav-color</code></td><td>#161616</td><td>Nav text</td></tr>
            <tr><td><code className="inline-code">--ply-nav-border</code></td><td>#161616</td><td>Nav borders</td></tr>
            <tr><td><code className="inline-code">--ply-nav-hover</code></td><td>#e8e8e8</td><td>Nav hover bg</td></tr>
            <tr><td><code className="inline-code">--ply-nav-active-color</code></td><td>#525252</td><td>Nav active text</td></tr>
          </tbody>
        </table>
      </section>

      <section className="showcase-section" id="custom-theme">
        <p className="section-label">Custom</p>
        <h2>Creating a Custom Theme</h2>
        <p>
          Define a new <code className="inline-code">data-theme</code> value and override the
          CSS custom properties.
        </p>

        <CodeBlock code={`[data-theme="brand"] {
  --ply-bg-body: #fefce8;
  --ply-color-body: #1a1a1a;
  --ply-color-link: #b45309;
  --ply-btn-default-bg: #b45309;
  --ply-btn-default-hover: #92400e;
  --ply-border-color: #fbbf24;
  --ply-color-headings: #78350f;
  --ply-nav-bg: #fef3c7;
  --ply-nav-border: #f59e0b;
}

<html data-theme="brand">`} />
      </section>

      <section className="showcase-section" id="accessibility">
        <p className="section-label">A11y</p>
        <h2>Accessibility Features</h2>
        <p>ply includes these accessibility features by default — no configuration needed.</p>

        <div className="units-row">
          <div className="unit-50 tablet-unit-100">
            <div className="feature-card" style={{ marginBottom: "1rem" }}>
              <h3>Focus Visible</h3>
              <p>All interactive elements show clear <code className="inline-code">:focus-visible</code> outlines for keyboard navigation.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="feature-card" style={{ marginBottom: "1rem" }}>
              <h3>Reduced Motion</h3>
              <p>Animations respect <code className="inline-code">prefers-reduced-motion</code> — disabled automatically for users who prefer it.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="feature-card" style={{ marginBottom: "1rem" }}>
              <h3>Color Contrast</h3>
              <p>All default color combinations meet WCAG AA contrast requirements out of the box.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="feature-card" style={{ marginBottom: "1rem" }}>
              <h3>Screen Reader</h3>
              <p>The <code className="inline-code">sr-only</code> class hides content visually while keeping it accessible to assistive technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section" id="bundles">
        <p className="section-label">Bundles</p>
        <h2>Bundle Options</h2>
        <p>Choose the right bundle for your project size requirements.</p>

        <div className="units-row">
          <div className="unit-25 tablet-unit-50 phone-unit-100">
            <div className="border border-radius padding text-center" style={{ marginBottom: "1rem" }}>
              <p className="text-3xl font-bold">~18KB</p>
              <p className="text-sm">ply.min.css</p>
              <p className="text-xs" style={{ color: "var(--ply-color-muted)" }}>Everything</p>
            </div>
          </div>
          <div className="unit-25 tablet-unit-50 phone-unit-100">
            <div className="border border-radius padding text-center" style={{ marginBottom: "1rem" }}>
              <p className="text-3xl font-bold">~16KB</p>
              <p className="text-sm">ply-core.min.css</p>
              <p className="text-xs" style={{ color: "var(--ply-color-muted)" }}>Core features</p>
            </div>
          </div>
          <div className="unit-25 tablet-unit-50 phone-unit-100">
            <div className="border border-radius padding text-center" style={{ marginBottom: "1rem" }}>
              <p className="text-3xl font-bold">~5KB</p>
              <p className="text-sm">ply-essentials.min.css</p>
              <p className="text-xs" style={{ color: "var(--ply-color-muted)" }}>Grid + helpers</p>
            </div>
          </div>
          <div className="unit-25 tablet-unit-50 phone-unit-100">
            <div className="border border-radius padding text-center" style={{ marginBottom: "1rem" }}>
              <p className="text-3xl font-bold">~3KB</p>
              <p className="text-sm">ply-helpers.min.css</p>
              <p className="text-xs" style={{ color: "var(--ply-color-muted)" }}>Helpers only</p>
            </div>
          </div>
        </div>

        <CodeBlock code={`<!-- Full bundle -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">

<!-- Core (no labels, dropdowns, loaders, print) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply-core.min.css">

<!-- Essentials (grid + helpers only) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply-essentials.min.css">

<!-- Helpers only -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply-helpers.min.css">`} />
      </section>

      <section className="showcase-section" id="ai">
        <p className="section-label">AI</p>
        <h2>AI Integration</h2>
        <p>ply ships with machine-readable files so AI agents can use it without reading documentation.</p>

        <div className="units-row">
          <div className="unit-50 tablet-unit-100">
            <div className="feature-card" style={{ marginBottom: "1rem" }}>
              <h3>PLY.md</h3>
              <p>Complete class reference, usage rules, anti-patterns, and copy-paste snippets in a Markdown format that AI agents parse natively.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="feature-card" style={{ marginBottom: "1rem" }}>
              <h3>ply-classes.json</h3>
              <p>Machine-readable JSON class map with categories, descriptions, and examples. Perfect for programmatic tool use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
