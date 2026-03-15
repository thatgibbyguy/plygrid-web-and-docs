import { useState } from "react";
import CodeBlock from "../components/CodeBlock";

export default function UtilitiesPage() {
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
      <section className="padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase">Configuration</p>
        <h1 className="text-balance">Utilities</h1>
        <p className="lead no-orphan">
          Helper classes for spacing, display, visibility, borders, and dimensions — plus
          dark mode toggling and full CSS custom property theming.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="display">
        <p className="text-xs font-semibold uppercase">Display</p>
        <h2>Display Utilities</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>CSS</th></tr>
          </thead>
          <tbody>
            <tr><td><code>display--flex</code></td><td>display: flex</td></tr>
            <tr><td><code>display--block</code></td><td>display: block</td></tr>
            <tr><td><code>display--inline-block</code></td><td>display: inline-block</td></tr>
            <tr><td><code>display--grid</code></td><td>display: grid</td></tr>
            <tr><td><code>display--none</code></td><td>display: none</td></tr>
            <tr><td><code>display--table</code></td><td>display: table</td></tr>
            <tr><td><code>display--table-cell</code></td><td>display: table-cell</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="position">
        <p className="text-xs font-semibold uppercase">Position</p>
        <h2>Position Utilities</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>CSS</th></tr>
          </thead>
          <tbody>
            <tr><td><code>fixed</code></td><td>position: fixed</td></tr>
            <tr><td><code>absolute</code></td><td>position: absolute</td></tr>
            <tr><td><code>relative</code></td><td>position: relative</td></tr>
            <tr><td><code>static</code></td><td>position: static</td></tr>
            <tr><td><code>sticky</code></td><td>position: sticky</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="spacing">
        <p className="text-xs font-semibold uppercase">Spacing</p>
        <h2>Margin & Padding</h2>

        <div className="units-row">
          <div className="unit-50 phone-unit-100">
            <h3>Margin</h3>
            <table className="table-stroked">
              <tbody>
                <tr><td><code>margin</code></td><td>All sides (0.75rem)</td></tr>
                <tr><td><code>margin-top</code></td><td>Top margin</td></tr>
                <tr><td><code>margin-bottom</code></td><td>Bottom margin</td></tr>
                <tr><td><code>margin-left</code></td><td>Left margin</td></tr>
                <tr><td><code>margin-right</code></td><td>Right margin</td></tr>
                <tr><td><code>margin-top--extra</code></td><td>Double top margin</td></tr>
                <tr><td><code>margin-bottom--extra</code></td><td>Double bottom margin</td></tr>
                <tr><td><code>no-margin</code></td><td>Remove all margins</td></tr>
                <tr><td><code>no-top-margin</code></td><td>Remove top margin</td></tr>
                <tr><td><code>no-bottom-margin</code></td><td>Remove bottom margin</td></tr>
              </tbody>
            </table>
          </div>
          <div className="unit-50 phone-unit-100">
            <h3>Padding</h3>
            <table className="table-stroked">
              <tbody>
                <tr><td><code>padding</code></td><td>All sides (0.75rem)</td></tr>
                <tr><td><code>padding-top</code></td><td>Top padding</td></tr>
                <tr><td><code>padding-bottom</code></td><td>Bottom padding</td></tr>
                <tr><td><code>padding-left</code></td><td>Left padding</td></tr>
                <tr><td><code>padding-right</code></td><td>Right padding</td></tr>
                <tr><td><code>padding-top--extra</code></td><td>Double top padding</td></tr>
                <tr><td><code>no-padding</code></td><td>Remove all padding</td></tr>
                <tr><td><code>no-spacing</code></td><td>Remove margin + padding</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3>Visual Demo</h3>
        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-33 phone-unit-100">
              <div className="padding border border-radius bottom-margin">
                <code>.padding</code>
              </div>
            </div>
            <div className="unit-33 phone-unit-100">
              <div className="padding-top padding-bottom border border-radius bottom-margin">
                <code>.padding-top .padding-bottom</code>
              </div>
            </div>
            <div className="unit-33 phone-unit-100">
              <div className="margin border border-radius padding bottom-margin">
                <code>.margin</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="gap">
        <p className="text-xs font-semibold uppercase">Gap</p>
        <h2>Gap Utilities</h2>
        <p className="no-orphan">
          Apply consistent spacing between flex or grid children without margin hacks.
        </p>

        <table>
          <thead>
            <tr><th>Class</th><th>Size</th></tr>
          </thead>
          <tbody>
            <tr><td><code>gap-xs</code></td><td>0.25rem</td></tr>
            <tr><td><code>gap-sm</code></td><td>0.5rem</td></tr>
            <tr><td><code>gap</code></td><td>0.75rem</td></tr>
            <tr><td><code>gap-lg</code></td><td>1.5rem</td></tr>
            <tr><td><code>gap-xl</code></td><td>2rem</td></tr>
          </tbody>
        </table>

        <h3>Visual Demo</h3>
        <div className="border border-radius padding">
          <p className="text-sm text-secondary">display--flex + gap-lg</p>
          <div className="display--flex gap-lg">
            <div className="border border-radius padding text-center text-sm">A</div>
            <div className="border border-radius padding text-center text-sm">B</div>
            <div className="border border-radius padding text-center text-sm">C</div>
          </div>
        </div>

        <CodeBlock code={`<div class="display--flex gap-lg">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="borders">
        <p className="text-xs font-semibold uppercase">Borders</p>
        <h2>Border Utilities</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-20 tablet-unit-50 phone-unit-100">
              <div className="border padding border-radius bottom-margin text-center">border</div>
            </div>
            <div className="unit-20 tablet-unit-50 phone-unit-100">
              <div className="border-top padding bottom-margin text-center">border-top</div>
            </div>
            <div className="unit-20 tablet-unit-50 phone-unit-100">
              <div className="border-bottom padding bottom-margin text-center">border-bottom</div>
            </div>
            <div className="unit-20 tablet-unit-50 phone-unit-100">
              <div className="border-left padding bottom-margin text-center">border-left</div>
            </div>
            <div className="unit-20 tablet-unit-50 phone-unit-100">
              <div className="border-right padding bottom-margin text-center">border-right</div>
            </div>
          </div>
        </div>

        <p>Other: <code>no-border</code>, <code>border-radius</code>, <code>circle</code></p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="width-height">
        <p className="text-xs font-semibold uppercase">Dimensions</p>
        <h2>Width & Height</h2>

        <p className="no-orphan">
          Percentage-based width classes from <code>width-10</code> to <code>width-100</code>.
          Responsive variants: <code>tablet-width-*</code>, <code>phone-width-*</code>,
          <code>small-desktop-width-*</code>, <code>large-phone-width-*</code>.
        </p>

        <div className="border border-radius padding">
          {[100, 80, 60, 40, 20].map((w) => (
            <div key={w} className={`width-${w} bottom-margin`}>
              <div className="border border-radius padding text-center text-sm">width-{w}</div>
            </div>
          ))}
        </div>

        <p className="no-orphan">
          Height utilities: <code>height-100</code> through <code>height-10</code>,
          plus <code>fill-height</code> and <code>fill-width</code>.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="visibility">
        <p className="text-xs font-semibold uppercase">Visibility</p>
        <h2>Show & Hide</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td><code>hide</code></td><td>display: none</td></tr>
            <tr><td><code>sr-only</code></td><td>Visually hidden, accessible to screen readers</td></tr>
            <tr><td><code>hide-on-desktop</code></td><td>Hidden on desktop, visible on mobile</td></tr>
            <tr><td><code>hide-on-mobile</code></td><td>Hidden on mobile, visible on desktop</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="text-colors">
        <p className="text-xs font-semibold uppercase">Colors</p>
        <h2>Text Color Utilities</h2>
        <p className="no-orphan">
          Theme-aware semantic text color classes that adapt to light and dark mode automatically.
        </p>

        <div className="border border-radius padding">
          <p className="text-primary">text-primary — Body text color (theme-aware)</p>
          <p className="text-secondary">text-secondary — Secondary/subdued text (theme-aware)</p>
          <p className="text-tertiary">text-tertiary — Muted/tertiary text (theme-aware)</p>
          <p className="text-muted">text-muted — Alias for text-tertiary</p>
          <p className="success">success — Green status text</p>
          <p className="error">error — Red status text</p>
        </div>

        <table>
          <thead>
            <tr><th>Class</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>text-primary</code></td><td>Body text color (theme-aware)</td></tr>
            <tr><td><code>text-secondary</code></td><td>Secondary/subdued text (theme-aware)</td></tr>
            <tr><td><code>text-tertiary</code></td><td>Muted/tertiary text (theme-aware)</td></tr>
            <tr><td><code>text-muted</code></td><td>Alias for text-tertiary</td></tr>
            <tr><td><code>text-inverse</code></td><td>Inverse text for dark backgrounds</td></tr>
            <tr><td><code>success</code></td><td>Green status text</td></tr>
            <tr><td><code>error</code></td><td>Red status text</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="text-wrap">
        <p className="text-xs font-semibold uppercase">Text Wrap</p>
        <h2>Text Wrap Utilities</h2>
        <p className="no-orphan">
          Control how text breaks across lines — prevent orphaned words or balance heading line lengths.
        </p>

        <table>
          <thead>
            <tr><th>Class</th><th>CSS</th><th>Use Case</th></tr>
          </thead>
          <tbody>
            <tr><td><code>no-orphan</code></td><td>text-wrap: pretty</td><td>Prevents orphaned words on paragraphs</td></tr>
            <tr><td><code>text-balance</code></td><td>text-wrap: balance</td><td>Balances line lengths for headings</td></tr>
            <tr><td><code>nowrap</code></td><td>white-space: nowrap</td><td>Prevents all wrapping</td></tr>
          </tbody>
        </table>

        <h3>Visual Demo</h3>
        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-50 phone-unit-100">
              <p className="text-sm text-secondary">Without text-balance</p>
              <h3>This heading demonstrates what happens without balanced text wrapping enabled</h3>
            </div>
            <div className="unit-50 phone-unit-100">
              <p className="text-sm text-secondary">With text-balance</p>
              <h3 className="text-balance">This heading demonstrates what happens with balanced text wrapping enabled</h3>
            </div>
          </div>
        </div>

        <CodeBlock code={`<h2 class="text-balance">Balanced heading text</h2>
<p class="no-orphan">Paragraph without orphaned words.</p>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="link-reset">
        <p className="text-xs font-semibold uppercase">Links</p>
        <h2>Link Reset</h2>
        <p className="no-orphan">
          Suppress link color and underline on all anchor elements inside a container.
          Useful for card grids and clickable containers.
        </p>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-50 phone-unit-100">
              <p className="text-sm text-secondary">Without no-link-style</p>
              <div className="border border-radius padding bottom-margin">
                <a href="#">This link has default styling</a>
              </div>
            </div>
            <div className="unit-50 phone-unit-100">
              <p className="text-sm text-secondary">With no-link-style</p>
              <div className="border border-radius padding bottom-margin no-link-style">
                <a href="#">This link has reset styling</a>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="no-link-style">
  <a href="/page" class="border border-radius padding display--block">
    <h3>Card Title</h3>
    <p>Card text renders as plain text, not link-blue.</p>
  </a>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="animation">
        <p className="text-xs font-semibold uppercase">Animation</p>
        <h2>Animation Utilities</h2>

        <div className="border border-radius padding">
          <div className="units-row align-middle">
            <div className="unit-25 tablet-unit-50 text-center">
              <div className="spinning border border-radius padding display--inline-block">⟳</div>
              <p className="text-sm">spinning</p>
            </div>
            <div className="unit-25 tablet-unit-50 text-center">
              <div className="fade-in border border-radius padding display--inline-block">
                fade-in
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="spinning">Loading spinner</div>
<div class="fade-in">Fades in on load</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="misc">
        <p className="text-xs font-semibold uppercase">Miscellaneous</p>
        <h2>Other Utilities</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td><code>clearfix</code></td><td>Clear floats</td></tr>
            <tr><td><code>flat-list</code></td><td>Remove list bullets and margin</td></tr>
            <tr><td><code>circle</code></td><td>border-radius: 100%</td></tr>
            <tr><td><code>border-radius</code></td><td>Standard border radius</td></tr>
            <tr><td><code>fill-width</code></td><td>100% width</td></tr>
            <tr><td><code>fill-height</code></td><td>100% height</td></tr>
            <tr><td><code>cursor-finger</code></td><td>Pointer cursor</td></tr>
          </tbody>
        </table>

        <h3>Flat List</h3>
        <div className="border border-radius padding">
          <ul className="flat-list">
            <li>Item one — no bullet</li>
            <li>Item two — no margin</li>
            <li>Item three — clean list</li>
          </ul>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="dark-mode">
        <p className="text-xs font-semibold uppercase">Dark Mode</p>
        <h2>Toggle Dark Mode</h2>
        <p className="no-orphan">
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
        <h2 className="text-balance">CSS Custom Properties</h2>
        <p className="no-orphan">
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
            <tr><td><code>--ply-nav-border</code></td><td>#161616</td><td>Nav border</td></tr>
            <tr><td><code>--ply-nav-hover</code></td><td>#e8e8e8</td><td>Nav hover</td></tr>
            <tr><td><code>--ply-nav-active-bg</code></td><td>transparent</td><td>Nav active background</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="custom-theme">
        <p className="text-xs font-semibold uppercase">Custom</p>
        <h2 className="text-balance">Creating a Custom Theme</h2>
        <p className="no-orphan">
          Define a new <code>data-theme</code> value and override the CSS custom properties.
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
        <p className="no-orphan">ply includes these accessibility features by default — no configuration needed.</p>

        <div className="units-row equal-height">
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Focus Visible</h3>
              <p className="text-sm no-margin no-orphan">All interactive elements show clear <code>:focus-visible</code> outlines for keyboard navigation.</p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Reduced Motion</h3>
              <p className="text-sm no-margin no-orphan">Animations respect <code>prefers-reduced-motion</code> — disabled automatically for users who prefer it.</p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Color Contrast</h3>
              <p className="text-sm no-margin no-orphan">All default color combinations meet WCAG AA contrast requirements out of the box.</p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">Screen Reader</h3>
              <p className="text-sm no-margin no-orphan">The <code>sr-only</code> class hides content visually while keeping it accessible to assistive technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra" id="ai">
        <p className="text-xs font-semibold uppercase">AI</p>
        <h2>AI Integration</h2>
        <p className="no-orphan">ply ships with machine-readable files so AI agents can use it without reading documentation.</p>

        <div className="units-row equal-height">
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">PLY.md</h3>
              <p className="text-sm no-margin no-orphan">Complete class reference, usage rules, anti-patterns, and copy-paste snippets in a Markdown format that AI agents parse natively.</p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">ply-classes.json</h3>
              <p className="text-sm no-margin no-orphan">Machine-readable JSON class map with categories, descriptions, and examples. Perfect for programmatic tool use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
