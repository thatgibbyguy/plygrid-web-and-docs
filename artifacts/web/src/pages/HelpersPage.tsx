import CodeBlock from "../components/CodeBlock";

export default function HelpersPage() {
  return (
    <div className="units-container">
      <section className="padding-top--extra padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase">Utilities</p>
        <h1>Helpers</h1>
        <p className="lead">
          A comprehensive set of utility classes for spacing, display, position, visibility, borders,
          width/height, colors, and more.
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
          <div className="unit-50 tablet-unit-100">
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
          <div className="unit-50 tablet-unit-100">
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
            <div className="unit-33 tablet-unit-100">
              <div className="padding border border-radius bottom-margin">
                <code>.padding</code>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100">
              <div className="padding-top padding-bottom border border-radius bottom-margin">
                <code>.padding-top .padding-bottom</code>
              </div>
            </div>
            <div className="unit-33 tablet-unit-100">
              <div className="margin border border-radius padding bottom-margin">
                <code>.margin</code>
              </div>
            </div>
          </div>
        </div>
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

        <p>
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

        <p>
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="colors">
        <p className="text-xs font-semibold uppercase">Colors</p>
        <h2>Color Utilities</h2>

        <div className="border border-radius padding">
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

      <section className="padding-top--extra padding-bottom--extra" id="misc">
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
    </div>
  );
}
