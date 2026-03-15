import CodeBlock from "../components/CodeBlock";

export default function GridPage() {
  return (
    <div className="units-container">
      <section className="showcase-section">
        <p className="section-label">Layout</p>
        <h1 className="page-title">Grid System</h1>
        <p className="page-subtitle">
          A ratio-based flexbox grid. Think in percentages — unit-50 is 50%, unit-33 is 33%.
          Responsive prefixes handle every breakpoint.
        </p>
      </section>

      <section className="showcase-section" id="basic">
        <p className="section-label">Basics</p>
        <h2>Container, Row, and Units</h2>
        <p>
          Wrap content in <code className="inline-code">units-container</code> (max-width 1200px, centered),
          then use <code className="inline-code">units-row</code> with <code className="inline-code">unit-*</code> children.
        </p>

        <div className="demo-box">
          <div className="units-row">
            <div className="unit-100">
              <div className="grid-demo-cell">unit-100</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-50">
              <div className="grid-demo-cell">unit-50</div>
            </div>
            <div className="unit-50">
              <div className="grid-demo-cell">unit-50</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-33">
              <div className="grid-demo-cell">unit-33</div>
            </div>
            <div className="unit-33">
              <div className="grid-demo-cell">unit-33</div>
            </div>
            <div className="unit-33">
              <div className="grid-demo-cell">unit-33</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-25">
              <div className="grid-demo-cell">unit-25</div>
            </div>
            <div className="unit-25">
              <div className="grid-demo-cell">unit-25</div>
            </div>
            <div className="unit-25">
              <div className="grid-demo-cell">unit-25</div>
            </div>
            <div className="unit-25">
              <div className="grid-demo-cell">unit-25</div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="units-container">
  <div class="units-row">
    <div class="unit-25">Sidebar</div>
    <div class="unit-75">Content</div>
  </div>
</div>`} />
      </section>

      <section className="showcase-section" id="all-widths">
        <p className="section-label">Widths</p>
        <h2>All Available Widths</h2>
        <p>Every ratio from 10% to 100% in logical increments.</p>

        <div className="demo-box">
          {[10, 20, 25, 30, 33, 35, 40, 50, 60, 65, 66, 70, 75, 80, 90, 100].map((w) => (
            <div className="units-row" key={w}>
              <div className={`unit-${w}`}>
                <div className="grid-demo-cell">unit-{w}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase-section" id="mixed">
        <p className="section-label">Combinations</p>
        <h2>Mixed Widths</h2>

        <div className="demo-box">
          <div className="units-row">
            <div className="unit-25">
              <div className="grid-demo-cell">25%</div>
            </div>
            <div className="unit-75">
              <div className="grid-demo-cell">75%</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-30">
              <div className="grid-demo-cell">30%</div>
            </div>
            <div className="unit-70">
              <div className="grid-demo-cell">70%</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-40">
              <div className="grid-demo-cell">40%</div>
            </div>
            <div className="unit-60">
              <div className="grid-demo-cell">60%</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-20">
              <div className="grid-demo-cell">20%</div>
            </div>
            <div className="unit-60">
              <div className="grid-demo-cell">60%</div>
            </div>
            <div className="unit-20">
              <div className="grid-demo-cell">20%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section" id="nested">
        <p className="section-label">Nesting</p>
        <h2>Nested Grids</h2>
        <p>
          Place a <code className="inline-code">units-row</code> inside any unit for complex layouts.
        </p>

        <div className="demo-box">
          <div className="units-row">
            <div className="unit-50">
              <div className="units-row">
                <div className="unit-50">
                  <div className="grid-demo-cell">Quarter A</div>
                </div>
                <div className="unit-50">
                  <div className="grid-demo-cell">Quarter B</div>
                </div>
              </div>
            </div>
            <div className="unit-50">
              <div className="grid-demo-cell" style={{ height: "100%" }}>Half</div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="units-row">
  <div class="unit-50">
    <div class="units-row">
      <div class="unit-50">Quarter A</div>
      <div class="unit-50">Quarter B</div>
    </div>
  </div>
  <div class="unit-50">Half</div>
</div>`} />
      </section>

      <section className="showcase-section" id="responsive">
        <p className="section-label">Responsive</p>
        <h2>Responsive Prefixes</h2>
        <p>Override the base width at specific breakpoints. Resize your browser to see the effect.</p>

        <table>
          <thead>
            <tr>
              <th>Prefix</th>
              <th>Breakpoint</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">x-large-screen-unit-*</code></td><td>≥ 1800px</td></tr>
            <tr><td><code className="inline-code">large-screen-unit-*</code></td><td>≥ 1400px</td></tr>
            <tr><td><code className="inline-code">small-desktop-unit-*</code></td><td>≤ 1024px</td></tr>
            <tr><td><code className="inline-code">tablet-unit-*</code></td><td>≤ 767px</td></tr>
            <tr><td><code className="inline-code">large-phone-unit-*</code></td><td>≤ 650px</td></tr>
            <tr><td><code className="inline-code">phone-unit-*</code></td><td>≤ 480px</td></tr>
            <tr><td><code className="inline-code">forever-unit-*</code></td><td>Never collapses</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <div className="demo-box">
          <div className="units-row">
            <div className="unit-25 tablet-unit-100">
              <div className="grid-demo-cell">Sidebar (stacks on tablet)</div>
            </div>
            <div className="unit-75 tablet-unit-100">
              <div className="grid-demo-cell">Content (stacks on tablet)</div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="units-row">
  <div class="unit-25 tablet-unit-100">Sidebar</div>
  <div class="unit-75 tablet-unit-100">Content</div>
</div>`} />
      </section>

      <section className="showcase-section" id="modifiers">
        <p className="section-label">Modifiers</p>
        <h2>Row & Unit Modifiers</h2>

        <h3>Row Modifiers</h3>
        <table>
          <thead>
            <tr><th>Class</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">reverse-direction</code></td><td>Reverse row order</td></tr>
            <tr><td><code className="inline-code">split</code></td><td>Remove gutters</td></tr>
            <tr><td><code className="inline-code">centered-content</code></td><td>Center children horizontally</td></tr>
            <tr><td><code className="inline-code">stacked</code></td><td>Remove bottom margin</td></tr>
          </tbody>
        </table>

        <div className="spacer-md" />

        <h3>Reversed Row</h3>
        <div className="demo-box">
          <div className="units-row reverse-direction">
            <div className="unit-33"><div className="grid-demo-cell">First</div></div>
            <div className="unit-33"><div className="grid-demo-cell">Second</div></div>
            <div className="unit-33"><div className="grid-demo-cell">Third</div></div>
          </div>
        </div>

        <h3>Centered Content</h3>
        <div className="demo-box">
          <div className="units-row centered-content">
            <div className="unit-30"><div className="grid-demo-cell">Centered 30%</div></div>
          </div>
        </div>

        <h3>Split (No Gutters)</h3>
        <div className="demo-box">
          <div className="units-row split">
            <div className="unit-33"><div className="grid-demo-cell">No gap</div></div>
            <div className="unit-33"><div className="grid-demo-cell">No gap</div></div>
            <div className="unit-33"><div className="grid-demo-cell">No gap</div></div>
          </div>
        </div>
      </section>

      <section className="showcase-section" id="offsets">
        <p className="section-label">Offsets</p>
        <h2>Push Units</h2>
        <p>
          Use <code className="inline-code">unit-push-*</code> to offset units with margin-left.
        </p>

        <div className="demo-box">
          <div className="units-row">
            <div className="unit-33 unit-push-33">
              <div className="grid-demo-cell">unit-33 push-33</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-50 unit-push-25">
              <div className="grid-demo-cell">unit-50 push-25</div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section" id="fullwidth">
        <p className="section-label">Full Width</p>
        <h2>Fill Width Container</h2>
        <p>
          Add <code className="inline-code">fill-width</code> to <code className="inline-code">units-container</code> for
          edge-to-edge layouts.
        </p>
        <CodeBlock code={`<div class="units-container fill-width">
  <div class="units-row">
    <div class="unit-100">Full browser width</div>
  </div>
</div>`} />
      </section>
    </div>
  );
}
