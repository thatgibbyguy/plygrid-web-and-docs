import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function GetStartedPage() {
  return (
    <>
      <section className="padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase">Getting Started</p>
        <h1 className="text-balance">Get Started</h1>
        <p className="lead no-orphan">
          Two ways to use ply. Pick whichever fits your project.
        </p>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="cdn">
        <p className="text-xs font-semibold uppercase">Prototype</p>
        <h2>CDN — Just the CSS</h2>
        <p className="no-orphan">
          One link tag. No install, no build step. You get the full grid, typography, buttons, forms,
          tables, navigation, dark mode, and WCAG AA contrast — all in one stylesheet.
        </p>
        <p className="text-sm">Add this to your <code>&lt;head&gt;</code>:</p>
        <CodeBlock code={`<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">`} />

        <h3>What's included</h3>
        <div className="units-row padding-top">
          <div className="unit-50 phone-unit-100">
            <ul>
              <li>Ratio-based flexbox grid (<code>unit-25</code>, <code>unit-50</code>, etc.)</li>
              <li>Responsive prefixes for every breakpoint</li>
              <li>Type scale from <code>text-xs</code> to <code>text-5xl</code></li>
              <li>Buttons, button groups, and form controls</li>
            </ul>
          </div>
          <div className="unit-50 phone-unit-100">
            <ul>
              <li>Navbar, pills, tabs, and breadcrumbs</li>
              <li>Bordered, striped, and hoverable tables</li>
              <li>Dark mode via <code>data-theme</code> attribute</li>
              <li>Print styles and reduced-motion support</li>
            </ul>
          </div>
        </div>

        <h3>How it works</h3>
        <p className="no-orphan">
          ply automatically styles semantic HTML elements — <code>&lt;nav&gt;</code>,{" "}
          <code>&lt;table&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;blockquote&gt;</code>,{" "}
          <code>&lt;details&gt;</code>, <code>&lt;dialog&gt;</code>, headings, and forms all get
          styled out of the box. Start with semantic HTML before reaching for classes.
        </p>
        <p className="no-orphan">
          For layout, wrap content in <code>units-container</code> for max-width centering,
          then use <code>units-row</code> with <code>unit-*</code> children. That's the entire
          grid model.
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">
  <title>My App</title>
</head>
<body>
  <nav class="navbar">
    <ul>
      <li class="active"><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>

  <div class="units-container">
    <div class="units-row">
      <div class="unit-25 phone-unit-100">
        <h3>Sidebar</h3>
        <p>This stacks on mobile.</p>
      </div>
      <div class="unit-75 phone-unit-100">
        <h1>Hello ply</h1>
        <p>Semantic HTML, styled automatically.</p>
        <button class="btn btn-blue">Get Started</button>
      </div>
    </div>
  </div>
</body>
</html>`} />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="sass">
        <p className="text-xs font-semibold uppercase">Customize</p>
        <h2>Sass — Build Your Own</h2>
        <p className="no-orphan">
          Install ply as a dependency and import the SCSS source. This gives you full access to
          the color palette, spacing variables, mixins, and the ability to extend ply at the Sass level.
        </p>

        <h3>Install</h3>
        <CodeBlock code={`npm install plygrid`} />

        <h3>Import</h3>
        <p className="text-sm">In your main stylesheet:</p>
        <CodeBlock code={`@use 'plygrid/src/scss/ply' as *;`} />
        <p className="text-sm text-secondary no-orphan">
          This gives you all compiled classes plus Sass variables, color maps, and mixins.
        </p>

        <h3>Use variables and mixins</h3>
        <p className="no-orphan">
          Import individual modules to access the full color palette, spacing scale,
          breakpoints, and utility mixins.
        </p>
        <CodeBlock code={`@use "plygrid/src/scss/components/colors" as colors;
@use "plygrid/src/scss/components/variables" as variables;
@use "plygrid/src/scss/components/mixins" as mixins;

.custom-card {
  background: colors.$color-blue-pastel;
  padding: variables.$base-spacing;
  border-radius: variables.$border-radius;
}

.custom-btn {
  @include mixins.button-variant(colors.$color-green, #fff);
}`} />

        <h3>Project structure</h3>
        <CodeBlock code={`src/
  scss/
    components/
      _colors.scss      — Full color palette, brand colors, dark/light/pastel variants
      _variables.scss   — Spacing, font sizes, breakpoints, border radius
      _mixins.scss      — Button generator, clearfix, gradients, animations
      _grid.scss        — Grid system (units-container, units-row, unit-*)
      _buttons.scss     — Button styles and variants
      _forms.scss       — Form controls and styling
      _navigation.scss  — Navbar, pills, tabs, breadcrumbs
      _tables.scss      — Table styling
      _helpers.scss     — Utility classes
    ply.scss            — Main entry point (imports everything)`} />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="dark-mode">
        <p className="text-xs font-semibold uppercase">Theming</p>
        <h2>Dark Mode</h2>
        <p className="no-orphan">
          ply automatically respects <code>prefers-color-scheme</code>. To manually control the theme,
          set the <code>data-theme</code> attribute on <code>&lt;html&gt;</code>.
        </p>
        <CodeBlock code={`<!-- Force light mode -->
<html data-theme="light">

<!-- Force dark mode -->
<html data-theme="dark">

<!-- Follow system preference (default) -->
<html>`} />
        <p className="text-sm text-secondary no-orphan">
          All ply colors use CSS custom properties (<code>var(--ply-*)</code>) that automatically
          adapt. Never hard-code color values — always use the provided variables or utility classes.
        </p>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="ai-agents">
        <p className="text-xs font-semibold uppercase">AI</p>
        <h2>For AI Agents</h2>
        <p className="text-secondary no-orphan">
          If you're building with an AI coding agent, add <code>PLY.md</code> to your project root
          or paste it into your prompt. It's a single-file reference of every ply class, designed
          to fit in one context window.
        </p>
        <CodeBlock code={`cp node_modules/plygrid/PLY.md ./PLY.md`} />
        <p className="text-sm text-secondary no-orphan">
          Your agent can also read <code>ply-classes.json</code> for a structured
          machine-readable format.
        </p>
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="next-steps">
        <p className="text-xs font-semibold uppercase">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Start with the <Link href="/grid">grid system</Link> to learn layouts,
          then explore <Link href="/controls">controls</Link> for buttons and forms,
          or <Link href="/typography">typography</Link> for the type scale.
        </p>
      </section>
    </>
  );
}
