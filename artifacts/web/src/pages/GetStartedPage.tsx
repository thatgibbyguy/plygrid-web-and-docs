import { Link } from "wouter";

export default function GetStartedPage() {
  return (
    <>
      <h1>Get Started</h1>
      <p className="text-secondary text-lg no-orphan">
        Two ways to use ply. Pick whichever fits your project.
      </p>

      <div className="units-row equal-height padding-top--extra">
        <div className="unit-50 phone-unit-100 bottom-margin">
          <div className="border border-radius padding">
            <p className="text-xs font-semibold uppercase color-blue no-margin">Prototype</p>
            <h2 className="text-xl font-semibold">CDN</h2>
            <p className="text-secondary no-orphan">
              One link tag. No install, no build step. Great for wireframing ideas
              and apps that need to support low bandwidth or offline mode.
            </p>
            <p className="text-sm">Add this to your <code>&lt;head&gt;</code>:</p>
            <pre><code>&lt;link rel="stylesheet"{"\n"}  href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css"&gt;</code></pre>
            <p className="text-sm text-secondary no-orphan">
              That's it. You now have the grid, typography, buttons, forms, tables,
              navigation, dark mode, and WCAG AA contrast.
            </p>
          </div>
        </div>
        <div className="unit-50 phone-unit-100 bottom-margin">
          <div className="border border-radius padding">
            <p className="text-xs font-semibold uppercase color-blue no-margin">Customize</p>
            <h2 className="text-xl font-semibold">Sass</h2>
            <p className="text-secondary no-orphan">
              Full access to color variables, mixins, and the ability to extend
              ply at the Sass level. For when you're building a real product.
            </p>
            <p className="text-sm">Install and import:</p>
            <pre><code>npm install plygrid</code></pre>
            <p className="text-sm">Then in your main stylesheet:</p>
            <pre><code>@use 'plygrid/src/scss/ply' as *;</code></pre>
            <p className="text-sm text-secondary no-orphan">
              This gives you all compiled classes plus Sass variables, color maps,
              and mixins you can override.
            </p>
          </div>
        </div>
      </div>

      <h2 className="padding-top--extra">For AI agents</h2>
      <p className="text-secondary no-orphan">
        If you're building with an AI coding agent, add <code>PLY.md</code> to your project root
        or paste it into your prompt. It's a single-file reference of every ply class, designed
        to fit in one context window.
      </p>
      <pre><code>cp node_modules/plygrid/PLY.md ./PLY.md</code></pre>
      <p className="text-sm text-secondary no-orphan">
        Your agent can also read <code>ply-classes.json</code> for a structured
        machine-readable format.
      </p>

      <h2 className="padding-top--extra">What you get</h2>
      <div className="units-row padding-top">
        <div className="unit-50 phone-unit-100">
          <ul>
            <li>Ratio-based flexbox grid with responsive prefixes</li>
            <li>Type scale from <code>text-xs</code> to <code>text-5xl</code></li>
            <li>Buttons, button groups, and form controls</li>
            <li>Navbar, pills, tabs, and breadcrumbs</li>
          </ul>
        </div>
        <div className="unit-50 phone-unit-100">
          <ul>
            <li>Bordered, striped, and hoverable tables</li>
            <li>Dark mode via <code>data-theme</code> attribute</li>
            <li>WCAG AA contrast ratios on all colors</li>
            <li>Print styles and reduced-motion support</li>
          </ul>
        </div>
      </div>

      <div className="padding-top--extra">
        <p className="text-secondary">
          Ready to build? Start with the{" "}
          <Link href="/grid">grid system</Link>, or explore{" "}
          <Link href="/controls">controls</Link> and{" "}
          <Link href="/typography">typography</Link>.
        </p>
      </div>
    </>
  );
}
