import CodeBlock from "../components/CodeBlock";

export default function GridPage() {
  return (
    <div>
      <section className="padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase">Layout</p>
        <h1 className="text-balance">Grid System</h1>
        <p className="lead no-orphan">
          A ratio-based flexbox grid. Think in percentages — unit-50 is 50%, unit-33 is 33%.
          Responsive prefixes handle every breakpoint.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="basic">
        <p className="text-xs font-semibold uppercase">Basics</p>
        <h2>Container, Row, and Units</h2>
        <p>
          Wrap content in <code>units-container</code> (max-width 1200px, centered),
          then use <code>units-row</code> with <code>unit-*</code> children.
        </p>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-100">
              <div className="border border-radius padding text-center text-sm">unit-100</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-50">
              <div className="border border-radius padding text-center text-sm">unit-50</div>
            </div>
            <div className="unit-50">
              <div className="border border-radius padding text-center text-sm">unit-50</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-33">
              <div className="border border-radius padding text-center text-sm">unit-33</div>
            </div>
            <div className="unit-33">
              <div className="border border-radius padding text-center text-sm">unit-33</div>
            </div>
            <div className="unit-33">
              <div className="border border-radius padding text-center text-sm">unit-33</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-25">
              <div className="border border-radius padding text-center text-sm">unit-25</div>
            </div>
            <div className="unit-25">
              <div className="border border-radius padding text-center text-sm">unit-25</div>
            </div>
            <div className="unit-25">
              <div className="border border-radius padding text-center text-sm">unit-25</div>
            </div>
            <div className="unit-25">
              <div className="border border-radius padding text-center text-sm">unit-25</div>
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="all-widths">
        <p className="text-xs font-semibold uppercase">Widths</p>
        <h2>All Available Widths</h2>
        <p>Every ratio from 10% to 100% in logical increments.</p>

        <div className="border border-radius padding">
          {[10, 20, 25, 30, 33, 35, 40, 50, 60, 65, 66, 70, 75, 80, 90, 100].map((w) => (
            <div className="units-row" key={w}>
              <div className={`unit-${w}`}>
                <div className="border border-radius padding text-center text-sm">unit-{w}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="mixed">
        <p className="text-xs font-semibold uppercase">Combinations</p>
        <h2>Mixed Widths</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-25">
              <div className="border border-radius padding text-center text-sm">25%</div>
            </div>
            <div className="unit-75">
              <div className="border border-radius padding text-center text-sm">75%</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-30">
              <div className="border border-radius padding text-center text-sm">30%</div>
            </div>
            <div className="unit-70">
              <div className="border border-radius padding text-center text-sm">70%</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-40">
              <div className="border border-radius padding text-center text-sm">40%</div>
            </div>
            <div className="unit-60">
              <div className="border border-radius padding text-center text-sm">60%</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-20">
              <div className="border border-radius padding text-center text-sm">20%</div>
            </div>
            <div className="unit-60">
              <div className="border border-radius padding text-center text-sm">60%</div>
            </div>
            <div className="unit-20">
              <div className="border border-radius padding text-center text-sm">20%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="nested">
        <p className="text-xs font-semibold uppercase">Nesting</p>
        <h2>Nested Grids</h2>
        <p>
          Place a <code>units-row</code> inside any unit for complex layouts.
        </p>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-50">
              <div className="units-row">
                <div className="unit-50">
                  <div className="border border-radius padding text-center text-sm">Quarter A</div>
                </div>
                <div className="unit-50">
                  <div className="border border-radius padding text-center text-sm">Quarter B</div>
                </div>
              </div>
            </div>
            <div className="unit-50">
              <div className="border border-radius padding text-center text-sm fill-height">Half</div>
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="responsive">
        <p className="text-xs font-semibold uppercase">Responsive</p>
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
            <tr><td><code>x-large-screen-unit-*</code></td><td>≥ 1800px</td></tr>
            <tr><td><code>large-screen-unit-*</code></td><td>≥ 1400px</td></tr>
            <tr><td><code>small-desktop-unit-*</code></td><td>≤ 1024px</td></tr>
            <tr><td><code>tablet-unit-*</code></td><td>≤ 767px</td></tr>
            <tr><td><code>large-phone-unit-*</code></td><td>≤ 650px</td></tr>
            <tr><td><code>phone-unit-*</code></td><td>≤ 480px</td></tr>
            <tr><td><code>forever-unit-*</code></td><td>Never collapses</td></tr>
          </tbody>
        </table>

        <div className="border border-radius padding margin-top--extra">
          <div className="units-row">
            <div className="unit-25 phone-unit-100">
              <div className="border border-radius padding text-center text-sm">Sidebar (stacks on tablet)</div>
            </div>
            <div className="unit-75 phone-unit-100">
              <div className="border border-radius padding text-center text-sm">Content (stacks on tablet)</div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="units-row">
  <div class="unit-25 phone-unit-100">Sidebar</div>
  <div class="unit-75 phone-unit-100">Content</div>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="modifiers">
        <p className="text-xs font-semibold uppercase">Modifiers</p>
        <h2>Row & Unit Modifiers</h2>

        <h3>Row Modifiers</h3>
        <table>
          <thead>
            <tr><th>Class</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td><code>reverse-direction</code></td><td>Reverse row order</td></tr>
            <tr><td><code>split</code></td><td>Remove gutters</td></tr>
            <tr><td><code>centered-content</code></td><td>Center children horizontally</td></tr>
            <tr><td><code>stacked</code></td><td>Remove bottom margin</td></tr>
            <tr><td><code>equal-height</code></td><td>Stretch all children to same height</td></tr>
          </tbody>
        </table>

        <h3>Reversed Row</h3>
        <div className="border border-radius padding">
          <div className="units-row reverse-direction">
            <div className="unit-33"><div className="border border-radius padding text-center text-sm">First</div></div>
            <div className="unit-33"><div className="border border-radius padding text-center text-sm">Second</div></div>
            <div className="unit-33"><div className="border border-radius padding text-center text-sm">Third</div></div>
          </div>
        </div>

        <h3>Centered Content</h3>
        <div className="border border-radius padding">
          <div className="units-row centered-content">
            <div className="unit-30"><div className="border border-radius padding text-center text-sm">Centered 30%</div></div>
          </div>
        </div>

        <h3>Split (No Gutters)</h3>
        <div className="border border-radius padding">
          <div className="units-row split">
            <div className="unit-33"><div className="border border-radius padding text-center text-sm">No gap</div></div>
            <div className="unit-33"><div className="border border-radius padding text-center text-sm">No gap</div></div>
            <div className="unit-33"><div className="border border-radius padding text-center text-sm">No gap</div></div>
          </div>
        </div>

        <h3>Equal Height</h3>
        <div className="border border-radius padding">
          <div className="units-row equal-height">
            <div className="unit-33 phone-unit-100">
              <div className="border border-radius padding text-center text-sm">
                <p className="no-margin">Short card</p>
              </div>
            </div>
            <div className="unit-33 phone-unit-100">
              <div className="border border-radius padding text-center text-sm">
                <p className="no-margin">Taller card with more content to demonstrate how equal-height stretches siblings</p>
              </div>
            </div>
            <div className="unit-33 phone-unit-100">
              <div className="border border-radius padding text-center text-sm">
                <p className="no-margin">Medium card</p>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`<div class="units-row equal-height">
  <div class="unit-33">Short</div>
  <div class="unit-33">Taller content here</div>
  <div class="unit-33">Medium</div>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="offsets">
        <p className="text-xs font-semibold uppercase">Offsets</p>
        <h2>Push Units</h2>
        <p>
          Use <code>unit-push-*</code> to offset units with margin-left.
        </p>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-33 unit-push-33">
              <div className="border border-radius padding text-center text-sm">unit-33 push-33</div>
            </div>
          </div>
          <div className="units-row">
            <div className="unit-50 unit-push-25">
              <div className="border border-radius padding text-center text-sm">unit-50 push-25</div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra" id="fullwidth">
        <p className="text-xs font-semibold uppercase">Full Width</p>
        <h2>Fill Width Container</h2>
        <p>
          Add <code>fill-width</code> to <code>units-container</code> for
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
