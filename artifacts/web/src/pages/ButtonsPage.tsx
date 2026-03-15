import CodeBlock from "../components/CodeBlock";

export default function ButtonsPage() {
  return (
    <div className="units-container">
      <section className="showcase-section">
        <p className="section-label">Interactive</p>
        <h1 className="page-title">Buttons</h1>
        <p className="page-subtitle">
          Six color variants, four sizes, outline and active states, button groups, and full-width options.
          All accessible with proper focus states.
        </p>
      </section>

      <section className="showcase-section" id="colors">
        <p className="section-label">Colors</p>
        <h2>Color Variants</h2>

        <div className="demo-box">
          <button className="btn">Default</button>{" "}
          <button className="btn btn-blue">Blue</button>{" "}
          <button className="btn btn-red">Red</button>{" "}
          <button className="btn btn-green">Green</button>{" "}
          <button className="btn btn-yellow">Yellow</button>{" "}
          <button className="btn btn-black">Black</button>{" "}
          <button className="btn btn-white">White</button>
        </div>

        <CodeBlock code={`<button class="btn">Default</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-black">Black</button>`} />
      </section>

      <section className="showcase-section" id="outline">
        <p className="section-label">Variants</p>
        <h2>Outline Buttons</h2>

        <div className="demo-box">
          <button className="btn btn-outline">Outline</button>{" "}
          <button className="btn btn-outline bold">Outline Bold</button>
        </div>

        <CodeBlock code={`<button class="btn btn-outline">Outline</button>
<button class="btn btn-outline bold">Outline Bold</button>`} />
      </section>

      <section className="showcase-section" id="sizes">
        <p className="section-label">Sizes</p>
        <h2>Button Sizes</h2>

        <div className="demo-box">
          <button className="btn btn-blue btn-big">Large (btn-big)</button>{" "}
          <button className="btn btn-blue">Default</button>{" "}
          <button className="btn btn-blue btn-small">Small (btn-sm)</button>{" "}
          <button className="btn btn-blue btn-smaller">Extra Small (btn-xs)</button>
        </div>

        <table>
          <thead>
            <tr><th>Class</th><th>Alias</th><th>Size</th></tr>
          </thead>
          <tbody>
            <tr><td><code className="inline-code">btn-big</code></td><td><code className="inline-code">btn-lg</code></td><td>Large</td></tr>
            <tr><td>(default)</td><td>—</td><td>Normal</td></tr>
            <tr><td><code className="inline-code">btn-small</code></td><td><code className="inline-code">btn-sm</code></td><td>Small</td></tr>
            <tr><td><code className="inline-code">btn-smaller</code></td><td><code className="inline-code">btn-xs</code></td><td>Extra small</td></tr>
          </tbody>
        </table>
      </section>

      <section className="showcase-section" id="states">
        <p className="section-label">States</p>
        <h2>Active & Disabled</h2>

        <div className="demo-box">
          <button className="btn btn-active">Active</button>{" "}
          <button className="btn btn-disabled">Disabled</button>{" "}
          <button className="btn btn-blue" disabled>Native Disabled</button>
        </div>

        <CodeBlock code={`<button class="btn btn-active">Active</button>
<button class="btn btn-disabled">Disabled</button>
<button class="btn" disabled>Native Disabled</button>`} />
      </section>

      <section className="showcase-section" id="shapes">
        <p className="section-label">Shapes</p>
        <h2>Square / Straight Buttons</h2>

        <div className="demo-box">
          <button className="btn btn-blue btn-straight">Square Corners</button>{" "}
          <button className="btn btn-outline btn-straight">Outline Square</button>
        </div>

        <CodeBlock code={`<button class="btn btn-blue btn-straight">No border-radius</button>`} />
      </section>

      <section className="showcase-section" id="groups">
        <p className="section-label">Groups</p>
        <h2>Button Groups</h2>

        <div className="demo-box">
          <div className="btn-group">
            <button className="btn btn-blue">Save</button>
            <button className="btn">Cancel</button>
            <button className="btn btn-red">Delete</button>
          </div>
        </div>

        <div className="spacer-md" />

        <h3>Aligned Groups</h3>
        <div className="demo-box">
          <div className="btn-group align-left">
            <button className="btn btn-sm">Left</button>
            <button className="btn btn-sm">Aligned</button>
          </div>
          <div className="spacer-sm" />
          <div className="btn-group align-center">
            <button className="btn btn-sm">Center</button>
            <button className="btn btn-sm">Aligned</button>
          </div>
          <div className="spacer-sm" />
          <div className="btn-group align-right">
            <button className="btn btn-sm">Right</button>
            <button className="btn btn-sm">Aligned</button>
          </div>
        </div>

        <div className="spacer-md" />

        <h3>Full Width & Rounded</h3>
        <div className="demo-box">
          <div className="btn-group fill-width">
            <button className="btn btn-blue">Option A</button>
            <button className="btn">Option B</button>
            <button className="btn">Option C</button>
          </div>
          <div className="spacer-md" />
          <div className="btn-group rounded">
            <button className="btn btn-sm">Rounded</button>
            <button className="btn btn-sm">Group</button>
            <button className="btn btn-sm">Buttons</button>
          </div>
        </div>

        <CodeBlock code={`<div class="btn-group">
  <button class="btn btn-blue">Save</button>
  <button class="btn">Cancel</button>
</div>

<div class="btn-group fill-width">
  <button class="btn">Full</button>
  <button class="btn">Width</button>
</div>`} />
      </section>

      <section className="showcase-section" id="full-width">
        <p className="section-label">Layout</p>
        <h2>Full Width Buttons</h2>

        <div className="demo-box">
          <div className="units-row">
            <div className="unit-50 tablet-unit-100">
              <button className="btn btn-blue width-100">Full Width Primary</button>
              <div className="spacer-sm" />
              <button className="btn btn-outline width-100">Full Width Outline</button>
            </div>
          </div>
        </div>

        <CodeBlock code={`<button class="btn btn-blue width-100">Full Width</button>`} />
      </section>
    </div>
  );
}
