import CodeBlock from "../components/CodeBlock";

export default function HelpersPage() {
  return (
    <div className="units-container">
      <section className="showcase-section">
        <p className="section-label">Utilities</p>
        <h1 className="page-title">Helpers</h1>
        <p className="page-subtitle">
          A comprehensive set of utility classes for spacing, display, position, visibility, borders,
          width/height, colors, and more.
        </p>
      </section>

      <section className="showcase-section" id="display">
        <p className="section-label">Display</p>
        <h2>Display Utilities</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>CSS</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">display--flex</code></td><td>display: flex</td></tr>
            <tr><td><code className="inline-code">display--block</code></td><td>display: block</td></tr>
            <tr><td><code className="inline-code">display--inline-block</code></td><td>display: inline-block</td></tr>
            <tr><td><code className="inline-code">display--grid</code></td><td>display: grid</td></tr>
            <tr><td><code className="inline-code">display--none</code></td><td>display: none</td></tr>
            <tr><td><code className="inline-code">display--table</code></td><td>display: table</td></tr>
            <tr><td><code className="inline-code">display--table-cell</code></td><td>display: table-cell</td></tr>
          </tbody>
        </table>
      </section>

      <section className="showcase-section" id="position">
        <p className="section-label">Position</p>
        <h2>Position Utilities</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>CSS</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">fixed</code></td><td>position: fixed</td></tr>
            <tr><td><code className="inline-code">absolute</code></td><td>position: absolute</td></tr>
            <tr><td><code className="inline-code">relative</code></td><td>position: relative</td></tr>
            <tr><td><code className="inline-code">static</code></td><td>position: static</td></tr>
            <tr><td><code className="inline-code">sticky</code></td><td>position: sticky</td></tr>
          </tbody>
        </table>
      </section>

      <section className="showcase-section" id="spacing">
        <p className="section-label">Spacing</p>
        <h2>Margin & Padding</h2>

        <div className="units-row">
          <div className="unit-50 tablet-unit-100">
            <h3>Margin</h3>
            <table className="table-stroked">
              <tbody>
                <tr><td><code className="inline-code">margin</code></td><td>All sides (0.75rem)</td></tr>
                <tr><td><code className="inline-code">margin-top</code></td><td>Top margin</td></tr>
                <tr><td><code className="inline-code">margin-bottom</code></td><td>Bottom margin</td></tr>
                <tr><td><code className="inline-code">margin-left</code></td><td>Left margin</td></tr>
                <tr><td><code className="inline-code">margin-right</code></td><td>Right margin</td></tr>
                <tr><td><code className="inline-code">margin-top--extra</code></td><td>Double top margin</td></tr>
                <tr><td><code className="inline-code">margin-bottom--extra</code></td><td>Double bottom margin</td></tr>
                <tr><td><code className="inline-code">no-margin</code></td><td>Remove all margins</td></tr>
                <tr><td><code className="inline-code">no-top-margin</code></td><td>Remove top margin</td></tr>
                <tr><td><code className="inline-code">no-bottom-margin</code></td><td>Remove bottom margin</td></tr>
              </tbody>
            </table>
          </div>
          <div className="unit-50 tablet-unit-100">
            <h3>Padding</h3>
            <table className="table-stroked">
              <tbody>
                <tr><td><code className="inline-code">padding</code></td><td>All sides (0.75rem)</td></tr>
                <tr><td><code className="inline-code">padding-top</code></td><td>Top padding</td></tr>
                <tr><td><code className="inline-code">padding-bottom</code></td><td>Bottom padding</td></tr>
                <tr><td><code className="inline-code">padding-left</code></td><td>Left padding</td></tr>
                <tr><td><code className="inline-code">padding-right</code></td><td>Right padding</td></tr>
                <tr><td><code className="inline-code">padding-top--extra</code></td><td>Double top padding</td></tr>
                <tr><td><code className="inline-code">no-padding</code></td><td>Remove all padding</td></tr>
                <tr><td><code className="inline-code">no-spacing</code></td><td>Remove margin + padding</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="spacer-md" />

        <h3>Visual Demo</h3>
        <div className="demo-box">
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div className="padding border border-radius" style={{ background: "var(--showcase-code-bg)" }}>
              <code className="inline-code">.padding</code>
            </div>
            <div className="padding-top padding-bottom border border-radius" style={{ background: "var(--showcase-code-bg)" }}>
              <code className="inline-code">.padding-top .padding-bottom</code>
            </div>
            <div className="margin border border-radius padding" style={{ background: "var(--showcase-code-bg)" }}>
              <code className="inline-code">.margin</code>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section" id="borders">
        <p className="section-label">Borders</p>
        <h2>Border Utilities</h2>

        <div className="demo-box">
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div className="border padding border-radius">border</div>
            <div className="border-top padding">border-top</div>
            <div className="border-bottom padding">border-bottom</div>
            <div className="border-left padding">border-left</div>
            <div className="border-right padding">border-right</div>
          </div>
        </div>

        <p>Other: <code className="inline-code">no-border</code>, <code className="inline-code">border-radius</code>, <code className="inline-code">circle</code></p>
      </section>

      <section className="showcase-section" id="width-height">
        <p className="section-label">Dimensions</p>
        <h2>Width & Height</h2>

        <p>
          Percentage-based width classes from <code className="inline-code">width-10</code> to <code className="inline-code">width-100</code>.
          Responsive variants: <code className="inline-code">tablet-width-*</code>, <code className="inline-code">phone-width-*</code>,
          <code className="inline-code">small-desktop-width-*</code>, <code className="inline-code">large-phone-width-*</code>.
        </p>

        <div className="demo-box">
          {[100, 80, 60, 40, 20].map((w) => (
            <div key={w} className={`width-${w} padding-top padding-bottom`} style={{ marginBottom: "0.5rem" }}>
              <div className="grid-demo-cell">width-{w}</div>
            </div>
          ))}
        </div>

        <p>
          Height utilities: <code className="inline-code">height-100</code> through <code className="inline-code">height-10</code>,
          plus <code className="inline-code">fill-height</code> and <code className="inline-code">fill-width</code>.
        </p>
      </section>

      <section className="showcase-section" id="visibility">
        <p className="section-label">Visibility</p>
        <h2>Show & Hide</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">hide</code></td><td>display: none</td></tr>
            <tr><td><code className="inline-code">sr-only</code></td><td>Visually hidden, accessible to screen readers</td></tr>
            <tr><td><code className="inline-code">hide-on-desktop</code></td><td>Hidden on desktop, visible on mobile</td></tr>
            <tr><td><code className="inline-code">hide-on-mobile</code></td><td>Hidden on mobile, visible on desktop</td></tr>
          </tbody>
        </table>
      </section>

      <section className="showcase-section" id="colors">
        <p className="section-label">Colors</p>
        <h2>Color Utilities</h2>

        <div className="demo-box">
          <p className="color-black">color-black — Full black text</p>
          <p className="color-gray-90">color-gray-90 — 90% opacity</p>
          <p className="color-gray-80">color-gray-80 — 80% opacity</p>
          <p className="color-gray-70">color-gray-70 — 70% opacity</p>
          <p className="color-gray-60">color-gray-60 — 60% opacity</p>
          <p className="color-gray-50">color-gray-50 — 50% opacity</p>
          <p className="color-gray-40">color-gray-40 — 40% opacity</p>
          <p className="color-gray-30">color-gray-30 — 30% opacity</p>
        </div>
      </section>

      <section className="showcase-section" id="animation">
        <p className="section-label">Animation</p>
        <h2>Animation Utilities</h2>

        <div className="demo-box">
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div>
              <div className="spinning" style={{ width: 40, height: 40, border: "3px solid var(--ply-border-color)", borderTop: "3px solid var(--showcase-accent)", borderRadius: "50%" }}></div>
              <p className="text-sm" style={{ marginTop: "0.5rem" }}>spinning</p>
            </div>
            <div>
              <div className="fade-in border border-radius padding">
                fade-in
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="spinning">Loading spinner</div>
<div class="fade-in">Fades in on load</div>`} />
      </section>

      <section className="showcase-section" id="misc">
        <p className="section-label">Miscellaneous</p>
        <h2>Other Utilities</h2>

        <table>
          <thead>
            <tr><th>Class</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">clearfix</code></td><td>Clear floats</td></tr>
            <tr><td><code className="inline-code">flat-list</code></td><td>Remove list bullets and margin</td></tr>
            <tr><td><code className="inline-code">circle</code></td><td>border-radius: 100%</td></tr>
            <tr><td><code className="inline-code">border-radius</code></td><td>Standard border radius</td></tr>
            <tr><td><code className="inline-code">fill-width</code></td><td>100% width</td></tr>
            <tr><td><code className="inline-code">fill-height</code></td><td>100% height</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <h3>Flat List</h3>
        <div className="demo-box">
          <ul className="flat-list">
            <li>Item one — no bullet</li>
            <li>Item two — no margin</li>
            <li>Item three — clean list</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
