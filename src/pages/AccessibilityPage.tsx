import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function AccessibilityPage() {
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Helpers</p>
        <h1 className="text-balance">Accessibility</h1>
        <p className="lead no-orphan">
          ply targets WCAG 2.1 AA compliance out of the box — focus indicators,
          reduced motion, high contrast, screen reader utilities, and semantic
          color contrast.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="focus-visible"
      >
        <p className="text-xs font-semibold uppercase color-blue">Focus</p>
        <h2>Focus Visible</h2>
        <p className="no-orphan">
          All interactive elements — buttons, links, inputs, nav items,
          dropdowns — show clear <code>:focus-visible</code> outlines for
          keyboard navigation. This happens automatically with no classes
          needed.
        </p>

        <div className="border border-radius padding">
          <p className="text-sm text-secondary bottom-margin">
            Tab through these elements to see focus rings:
          </p>
          <button className="btn btn-blue">Button</button>{" "}
          <button className="btn btn-outline">Outline</button>{" "}
          <a href="#focus-visible">Link</a>
          <form
            className="form"
            onSubmit={(e) => e.preventDefault()}
            style={{ marginTop: "0.75rem" }}
          >
            <input type="text" placeholder="Input field" aria-label="Example input field" />
          </form>
        </div>

        <p className="text-sm text-secondary no-orphan">
          Focus styles use <code>var(--ply-color-focus)</code> which you can
          customize via CSS custom properties.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="skip-link"
      >
        <p className="text-xs font-semibold uppercase color-blue">Navigation</p>
        <h2>Skip Link</h2>
        <p className="no-orphan">
          Add a skip link as the first focusable element inside{" "}
          <code>&lt;body&gt;</code> to let keyboard users jump past navigation
          to main content.
        </p>

        <CodeBlock
          code={`<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <nav class="navbar">...</nav>
  <main id="main">...</main>
</body>`}
        />

        <p className="text-sm text-secondary no-orphan">
          The <code>.skip-link</code> class hides the link visually until it
          receives focus, then positions it prominently at the top of the
          viewport.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="sr-only"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Screen Reader
        </p>
        <h2>Screen Reader Only</h2>
        <p className="no-orphan">
          The <code>.sr-only</code> class hides content visually while keeping
          it accessible to assistive technology. Use it for labels,
          descriptions, and announcements that sighted users don't need.
        </p>

        <CodeBlock
          code={`<button class="btn btn-blue">
  <svg>...</svg>
  <span class="sr-only">Close dialog</span>
</button>

<nav aria-label="Breadcrumb">
  <span class="sr-only">You are here:</span>
  ...
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="reduced-motion"
      >
        <p className="text-xs font-semibold uppercase color-blue">Motion</p>
        <h2>Reduced Motion</h2>
        <p className="no-orphan">
          ply respects <code>prefers-reduced-motion: reduce</code>{" "}
          automatically. All transitions and animations are disabled for users
          who prefer reduced motion. No configuration needed.
        </p>

        <div className="border border-radius padding">
          <div className="units-row equal-height">
            <div className="unit-50 phone-unit-100">
              <p className="text-sm text-secondary">Affected elements:</p>
              <ul>
                <li>Button hover/active transitions</li>
                <li>Link hover transitions</li>
                <li>
                  <code>.spinning</code> animation
                </li>
                <li>
                  <code>.fade-in</code> animation
                </li>
                <li>Dropdown open/close transitions</li>
              </ul>
            </div>
            <div className="unit-50 phone-unit-100">
              <p className="text-sm text-secondary">How it works:</p>
              <CodeBlock
                code={`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="high-contrast"
      >
        <p className="text-xs font-semibold uppercase color-blue">Contrast</p>
        <h2>High Contrast Mode</h2>
        <p className="no-orphan">
          ply supports <code>prefers-contrast: more</code> with enhanced borders
          and stronger color distinctions for users who need higher contrast.
        </p>

        <p className="text-sm text-secondary no-orphan">
          All default color combinations meet WCAG AA contrast requirements
          (4.5:1 for normal text, 3:1 for large text) in both light and dark
          modes.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="color-scheme"
      >
        <p className="text-xs font-semibold uppercase color-blue">Dark Mode</p>
        <h2>Automatic Color Scheme</h2>
        <p className="no-orphan">
          ply automatically adapts to <code>prefers-color-scheme: dark</code>.
          All colors use CSS custom properties that switch between light and
          dark palettes. Override with <code>data-theme="light"</code> or{" "}
          <code>data-theme="dark"</code> on <code>&lt;html&gt;</code>.
        </p>

        <p className="text-sm text-secondary no-orphan">
          See <a href="/docs/colors">Colors & Theming</a> for the full custom
          property reference and how to create custom themes.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Set up your <Link href="/docs/ai-agents">AI agent</Link> to generate
          correct ply markup, or go back to{" "}
          <Link href="/docs/installation">installation</Link> to review setup
          options.
        </p>
      </section>
    </div>
  );
}
