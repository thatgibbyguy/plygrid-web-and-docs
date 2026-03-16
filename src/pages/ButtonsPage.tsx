import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function ButtonsPage() {
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Components</p>
        <h1 className="text-balance">Buttons</h1>
        <p className="lead no-orphan">
          Six color variants, outline and ghost styles, four sizes, button
          groups, and full keyboard accessibility out of the box.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="button-colors"
      >
        <p className="text-xs font-semibold uppercase color-blue">Colors</p>
        <h2>Color Variants</h2>

        <div className="border border-radius padding">
          <button className="btn">Default</button>{" "}
          <button className="btn btn-blue">Blue</button>{" "}
          <button className="btn btn-red">Red</button>{" "}
          <button className="btn btn-green">Green</button>{" "}
          <button className="btn btn-yellow">Yellow</button>{" "}
          <button className="btn btn-black">Black</button>{" "}
          <button className="btn btn-white">White</button>
        </div>

        <CodeBlock
          code={`<button class="btn">Default</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-black">Black</button>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="button-outline"
      >
        <p className="text-xs font-semibold uppercase color-blue">Variants</p>
        <h2>Outline Buttons</h2>

        <div className="border border-radius padding">
          <button className="btn btn-outline">Outline</button>{" "}
          <button className="btn btn-outline bold">Outline Bold</button>
        </div>

        <CodeBlock
          code={`<button class="btn btn-outline">Outline</button>
<button class="btn btn-outline bold">Outline Bold</button>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="button-ghost"
      >
        <p className="text-xs font-semibold uppercase color-blue">Variants</p>
        <h2>Ghost Buttons</h2>
        <p className="no-orphan">
          Transparent background with no border. Subtle hover background for
          low-emphasis actions.
        </p>

        <div className="border border-radius padding display-flex items-center gap-sm">
          <button className="btn btn-ghost">Ghost</button>{" "}
          <button className="btn btn-ghost btn-small">Ghost Small</button>{" "}
          <button className="btn btn-ghost btn-icon" aria-label="Icon button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>

        <CodeBlock code={`<button class="btn btn-ghost">Ghost</button>
<!-- Icon-only: equal padding, square shape -->
<button class="btn btn-ghost btn-icon" aria-label="Search">
  <svg>...</svg>
</button>`} />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="button-sizes"
      >
        <p className="text-xs font-semibold uppercase color-blue">Sizes</p>
        <h2>Button Sizes</h2>

        <div className="border border-radius padding">
          <button className="btn btn-blue btn-big">Large (btn-big)</button>{" "}
          <button className="btn btn-blue">Default</button>{" "}
          <button className="btn btn-blue btn-small">Small (btn-sm)</button>{" "}
          <button className="btn btn-blue btn-smaller">
            Extra Small (btn-xs)
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Alias</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>btn-big</code>
              </td>
              <td>
                <code>btn-lg</code>
              </td>
              <td>Large</td>
            </tr>
            <tr>
              <td>(default)</td>
              <td>—</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>
                <code>btn-small</code>
              </td>
              <td>
                <code>btn-sm</code>
              </td>
              <td>Small</td>
            </tr>
            <tr>
              <td>
                <code>btn-smaller</code>
              </td>
              <td>
                <code>btn-xs</code>
              </td>
              <td>Extra small</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="button-states"
      >
        <p className="text-xs font-semibold uppercase color-blue">States</p>
        <h2>Active & Disabled</h2>

        <div className="border border-radius padding">
          <button className="btn btn-active">Active</button>{" "}
          <button className="btn btn-disabled">Disabled</button>{" "}
          <button className="btn btn-blue" disabled>
            Native Disabled
          </button>
        </div>

        <CodeBlock
          code={`<button class="btn btn-active">Active</button>
<button class="btn btn-disabled">Disabled</button>
<button class="btn" disabled>Native Disabled</button>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="button-shapes"
      >
        <p className="text-xs font-semibold uppercase color-blue">Shapes</p>
        <h2>Square Buttons</h2>

        <div className="border border-radius padding">
          <button className="btn btn-blue btn-straight">Square Corners (btn-straight)</button>{" "}
          <button className="btn btn-outline btn-square">
            Alias: btn-square
          </button>
        </div>

        <h3>Single Button Container</h3>
        <div className="border border-radius padding">
          <div className="btn-single">
            <button className="btn btn-blue">Single Button</button>
          </div>
        </div>

        <CodeBlock
          code={`<button class="btn btn-blue btn-straight">No border-radius</button>
<button class="btn btn-square">Alias for btn-straight</button>

<div class="btn-single">
  <button class="btn btn-blue">Single Button</button>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="button-groups"
      >
        <p className="text-xs font-semibold uppercase color-blue">Groups</p>
        <h2>Button Groups</h2>

        <div className="border border-radius padding">
          <div className="btn-group">
            <button className="btn btn-blue">Save</button>
            <button className="btn">Cancel</button>
            <button className="btn btn-red">Delete</button>
          </div>
        </div>

        <h3>Aligned Groups</h3>
        <div className="border border-radius padding">
          <div className="btn-group align-left">
            <button className="btn btn-sm">Left</button>
            <button className="btn btn-sm">Aligned</button>
          </div>
          <div className="btn-group align-center">
            <button className="btn btn-sm">Center</button>
            <button className="btn btn-sm">Aligned</button>
          </div>
          <div className="btn-group align-right">
            <button className="btn btn-sm">Right</button>
            <button className="btn btn-sm">Aligned</button>
          </div>
        </div>

        <h3>Full Width & Rounded</h3>
        <div className="border border-radius padding">
          <div className="btn-group fill-width">
            <button className="btn btn-blue">Option A</button>
            <button className="btn">Option B</button>
            <button className="btn">Option C</button>
          </div>
          <div className="bottom-margin-extra"></div>
          <div className="btn-group rounded">
            <button className="btn btn-sm">Rounded</button>
            <button className="btn btn-sm">Group</button>
            <button className="btn btn-sm">Buttons</button>
          </div>
        </div>

        <CodeBlock
          code={`<div class="btn-group">
  <button class="btn btn-blue">Save</button>
  <button class="btn">Cancel</button>
</div>

<div class="btn-group fill-width">
  <button class="btn">Full</button>
  <button class="btn">Width</button>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Build <Link href="/docs/forms">forms</Link> with styled inputs and
          validation, or add <Link href="/docs/navigation">navigation</Link> to
          your layout.
        </p>
      </section>
    </div>
  );
}
