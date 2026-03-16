import { useState } from "react";
import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function ColorsPage() {
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
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Design</p>
        <h1 className="text-balance">Colors & Theming</h1>
        <p className="lead no-orphan">
          Theme-aware text colors, automatic dark mode, 60 CSS custom
          properties, and the ability to create fully custom themes.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="text-colors"
      >
        <p className="text-xs font-semibold uppercase color-blue">Colors</p>
        <h2>Text Color Utilities</h2>
        <p className="no-orphan">
          Theme-aware semantic text color classes that adapt to light and dark
          mode automatically.
        </p>

        <div className="border border-radius padding">
          <p className="text-primary">
            text-primary — Body text color (theme-aware)
          </p>
          <p className="text-secondary">
            text-secondary — Secondary/subdued text (theme-aware)
          </p>
          <p className="text-tertiary">
            text-tertiary — Muted/tertiary text (theme-aware)
          </p>
          <p className="text-muted">text-muted — Alias for text-tertiary</p>
          <p className="success">success — Green status text</p>
          <p className="error">error — Red status text</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>text-primary</code>
              </td>
              <td>Body text color (theme-aware)</td>
            </tr>
            <tr>
              <td>
                <code>text-secondary</code>
              </td>
              <td>Secondary/subdued text (theme-aware)</td>
            </tr>
            <tr>
              <td>
                <code>text-tertiary</code>
              </td>
              <td>Muted/tertiary text (theme-aware)</td>
            </tr>
            <tr>
              <td>
                <code>text-muted</code>
              </td>
              <td>Alias for text-tertiary</td>
            </tr>
            <tr>
              <td>
                <code>text-inverse</code>
              </td>
              <td>Inverse text for dark backgrounds</td>
            </tr>
            <tr>
              <td>
                <code>success</code>
              </td>
              <td>Green status text</td>
            </tr>
            <tr>
              <td>
                <code>error</code>
              </td>
              <td>Red status text</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="dark-mode"
      >
        <p className="text-xs font-semibold uppercase color-blue">Dark Mode</p>
        <h2>Toggle Dark Mode</h2>
        <p className="no-orphan">
          ply respects <code>prefers-color-scheme</code> automatically. Force a
          mode with <code>data-theme</code> on the html element.
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

        <CodeBlock
          code={`<!-- Auto (follows OS) -->
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
</script>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="css-vars"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Custom Properties
        </p>
        <h2 className="text-balance">CSS Custom Properties</h2>
        <p className="no-orphan">
          Override <code>--ply-*</code> variables to create any theme. All
          colors, backgrounds, borders, and component styles are customizable.
        </p>

        <h3>Backgrounds</h3>
        <table className="table-stroked">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default (Light)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--ply-bg-body</code>
              </td>
              <td>#ffffff</td>
              <td>Page background</td>
            </tr>
            <tr>
              <td>
                <code>--ply-bg-surface</code>
              </td>
              <td>#ffffff</td>
              <td>Card/surface background</td>
            </tr>
            <tr>
              <td>
                <code>--ply-bg-surface-alt</code>
              </td>
              <td>#f4f4f4</td>
              <td>Alternate surface</td>
            </tr>
            <tr>
              <td>
                <code>--ply-bg-muted</code>
              </td>
              <td>#e0e0e0</td>
              <td>Muted background</td>
            </tr>
          </tbody>
        </table>

        <h3>Text Colors</h3>
        <table className="table-stroked">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--ply-color-body</code>
              </td>
              <td>#161616</td>
              <td>Primary text</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-headings</code>
              </td>
              <td>#161616</td>
              <td>Heading text</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-secondary</code>
              </td>
              <td>#525252</td>
              <td>Secondary text</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-muted</code>
              </td>
              <td>#6f6f6f</td>
              <td>Muted text</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-placeholder</code>
              </td>
              <td>#a8a8a8</td>
              <td>Placeholder text</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-text-inverse</code>
              </td>
              <td>#ffffff</td>
              <td>Inverse (on dark bg)</td>
            </tr>
          </tbody>
        </table>

        <h3>Interactive</h3>
        <table className="table-stroked">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--ply-color-link</code>
              </td>
              <td>#0f62fe</td>
              <td>Link color</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-link-hover</code>
              </td>
              <td>#0043ce</td>
              <td>Link hover</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-focus</code>
              </td>
              <td>#0f62fe</td>
              <td>Focus ring</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-input-border</code>
              </td>
              <td>#8d8d8d</td>
              <td>Input borders</td>
            </tr>
            <tr>
              <td>
                <code>--ply-color-input-bg</code>
              </td>
              <td>#f4f4f4</td>
              <td>Input background</td>
            </tr>
            <tr>
              <td>
                <code>--ply-btn-default-bg</code>
              </td>
              <td>#393939</td>
              <td>Default button bg</td>
            </tr>
            <tr>
              <td>
                <code>--ply-btn-default-hover</code>
              </td>
              <td>#4c4c4c</td>
              <td>Default button hover</td>
            </tr>
          </tbody>
        </table>

        <h3>Navigation</h3>
        <table className="table-stroked">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--ply-nav-bg</code>
              </td>
              <td>#ffffff</td>
              <td>Nav background</td>
            </tr>
            <tr>
              <td>
                <code>--ply-nav-color</code>
              </td>
              <td>#161616</td>
              <td>Nav text</td>
            </tr>
            <tr>
              <td>
                <code>--ply-nav-border</code>
              </td>
              <td>#161616</td>
              <td>Nav border</td>
            </tr>
            <tr>
              <td>
                <code>--ply-nav-hover</code>
              </td>
              <td>#e8e8e8</td>
              <td>Nav hover</td>
            </tr>
            <tr>
              <td>
                <code>--ply-nav-active-bg</code>
              </td>
              <td>transparent</td>
              <td>Nav active background</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="custom-theme"
      >
        <p className="text-xs font-semibold uppercase color-blue">Custom</p>
        <h2 className="text-balance">Creating a Custom Theme</h2>
        <p className="no-orphan">
          Define a new <code>data-theme</code> value and override the CSS custom
          properties. This lets you create any brand theme while keeping dark
          mode, accessibility, and all component styles working.
        </p>

        <CodeBlock
          code={`[data-theme="brand"] {
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

<html data-theme="brand">`}
        />

        <p className="no-orphan">
          You can override as many or as few properties as you need. Any
          property you don't override keeps its default value for the current
          light/dark mode.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Explore the <Link href="/docs/typography">type scale</Link> for text
          styling, or learn the <Link href="/docs/grid">grid system</Link> for
          page layouts.
        </p>
      </section>
    </div>
  );
}
