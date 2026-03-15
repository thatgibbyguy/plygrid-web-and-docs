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
      <section className="padding-top--extra padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase">Customization</p>
        <h1>Dark Mode & Theming</h1>
        <p className="lead">
          ply auto-detects your OS color scheme. Force light or dark with a data attribute.
          Override any color via CSS custom properties.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="dark-mode">
        <p className="text-xs font-semibold uppercase">Dark Mode</p>
        <h2>Toggle Dark Mode</h2>
        <p>
          ply respects <code>prefers-color-scheme</code> automatically.
          Force a mode with <code>data-theme</code> on the html element.
        </p>

        <div className="border border-radius padding">
          <p className="text-sm bottom-margin">
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="css-vars">
        <p className="text-xs font-semibold uppercase">Custom Properties</p>
        <h2>CSS Custom Properties</h2>
        <p>
          Override <code>--ply-*</code> variables to create any theme.
          All colors, backgrounds, borders, and component styles are customizable.
        </p>

        <h3>Backgrounds</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default (Light)</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--ply-bg-body</code></td><td>#ffffff</td><td>Page background</td></tr>
            <tr><td><code>--ply-bg-surface</code></td><td>#ffffff</td><td>Card/surface background</td></tr>
            <tr><td><code>--ply-bg-surface-alt</code></td><td>#f4f4f4</td><td>Alternate surface</td></tr>
            <tr><td><code>--ply-bg-muted</code></td><td>#e0e0e0</td><td>Muted background</td></tr>
          </tbody>
        </table>

        <h3>Text Colors</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--ply-color-body</code></td><td>#161616</td><td>Primary text</td></tr>
            <tr><td><code>--ply-color-headings</code></td><td>#161616</td><td>Heading text</td></tr>
            <tr><td><code>--ply-color-secondary</code></td><td>#525252</td><td>Secondary text</td></tr>
            <tr><td><code>--ply-color-muted</code></td><td>#6f6f6f</td><td>Muted text</td></tr>
            <tr><td><code>--ply-color-placeholder</code></td><td>#a8a8a8</td><td>Placeholder text</td></tr>
            <tr><td><code>--ply-color-text-inverse</code></td><td>#ffffff</td><td>Inverse (on dark bg)</td></tr>
          </tbody>
        </table>

        <h3>Borders</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--ply-border-color</code></td><td>#e0e0e0</td><td>Default border</td></tr>
            <tr><td><code>--ply-border-strong</code></td><td>#8d8d8d</td><td>Strong/emphasis border</td></tr>
          </tbody>
        </table>

        <h3>Interactive</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--ply-color-link</code></td><td>#0f62fe</td><td>Link color</td></tr>
            <tr><td><code>--ply-color-link-hover</code></td><td>#0043ce</td><td>Link hover</td></tr>
            <tr><td><code>--ply-color-focus</code></td><td>#0f62fe</td><td>Focus ring</td></tr>
            <tr><td><code>--ply-color-input-border</code></td><td>#8d8d8d</td><td>Input borders</td></tr>
            <tr><td><code>--ply-color-input-bg</code></td><td>#f4f4f4</td><td>Input background</td></tr>
            <tr><td><code>--ply-btn-default-bg</code></td><td>#393939</td><td>Default button bg</td></tr>
            <tr><td><code>--ply-btn-default-hover</code></td><td>#4c4c4c</td><td>Default button hover</td></tr>
          </tbody>
        </table>

        <h3>Navigation</h3>
        <table className="table-stroked">
          <thead>
            <tr><th>Variable</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--ply-nav-bg</code></td><td>#ffffff</td><td>Nav background</td></tr>
            <tr><td><code>--ply-nav-color</code></td><td>#161616</td><td>Nav text</td></tr>
            <tr><td><code>--ply-nav-border</code></td><td>#161616</td><td>Nav borders</td></tr>
            <tr><td><code>--ply-nav-hover</code></td><td>#e8e8e8</td><td>Nav hover bg</td></tr>
            <tr><td><code>--ply-nav-active-color</code></td><td>#525252</td><td>Nav active text</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="custom-theme">
        <p className="text-xs font-semibold uppercase">Custom</p>
        <h2>Creating a Custom Theme</h2>
        <p>
          Define a new <code>data-theme</code> value and override the
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="accessibility">
        <p className="text-xs font-semibold uppercase">A11y</p>
        <h2>Accessibility Features</h2>
        <p>ply includes these accessibility features by default — no configuration needed.</p>

        <div className="units-row">
          <div className="unit-50 tablet-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Focus Visible</h3>
              <p className="text-sm no-margin">All interactive elements show clear <code>:focus-visible</code> outlines for keyboard navigation.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Reduced Motion</h3>
              <p className="text-sm no-margin">Animations respect <code>prefers-reduced-motion</code> — disabled automatically for users who prefer it.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Color Contrast</h3>
              <p className="text-sm no-margin">All default color combinations meet WCAG AA contrast requirements out of the box.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Screen Reader</h3>
              <p className="text-sm no-margin">The <code>sr-only</code> class hides content visually while keeping it accessible to assistive technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra" id="ai">
        <p className="text-xs font-semibold uppercase">AI</p>
        <h2>AI Integration</h2>
        <p>ply ships with machine-readable files so AI agents can use it without reading documentation.</p>

        <div className="units-row">
          <div className="unit-50 tablet-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">PLY.md</h3>
              <p className="text-sm no-margin">Complete class reference, usage rules, anti-patterns, and copy-paste snippets in a Markdown format that AI agents parse natively.</p>
            </div>
          </div>
          <div className="unit-50 tablet-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">ply-classes.json</h3>
              <p className="text-sm no-margin">Machine-readable JSON class map with categories, descriptions, and examples. Perfect for programmatic tool use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
