import { useState } from "react";
import CodeBlock from "../components/CodeBlock";

export default function ControlsPage() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const dismiss = (id: string) => setDismissed((prev) => ({ ...prev, [id]: true }));
  const resetAll = () => setDismissed({});

  return (
    <div className="units-container">
      <section className="padding-top--extra padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase">Interactive</p>
        <h1 className="text-balance">Controls</h1>
        <p className="lead no-orphan">
          Buttons, forms, alerts, and labels — everything interactive in ply. Six button
          colors, accessible form inputs, dismissible notifications, and inline status labels.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="button-colors">
        <p className="text-xs font-semibold uppercase">Buttons</p>
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

        <CodeBlock code={`<button class="btn">Default</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-black">Black</button>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="button-outline">
        <p className="text-xs font-semibold uppercase">Variants</p>
        <h2>Outline Buttons</h2>

        <div className="border border-radius padding">
          <button className="btn btn-outline">Outline</button>{" "}
          <button className="btn btn-outline bold">Outline Bold</button>
        </div>

        <CodeBlock code={`<button class="btn btn-outline">Outline</button>
<button class="btn btn-outline bold">Outline Bold</button>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="button-sizes">
        <p className="text-xs font-semibold uppercase">Sizes</p>
        <h2>Button Sizes</h2>

        <div className="border border-radius padding">
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
            <tr><td><code>btn-big</code></td><td><code>btn-lg</code></td><td>Large</td></tr>
            <tr><td>(default)</td><td>—</td><td>Normal</td></tr>
            <tr><td><code>btn-small</code></td><td><code>btn-sm</code></td><td>Small</td></tr>
            <tr><td><code>btn-smaller</code></td><td><code>btn-xs</code></td><td>Extra small</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="button-states">
        <p className="text-xs font-semibold uppercase">States</p>
        <h2>Active & Disabled</h2>

        <div className="border border-radius padding">
          <button className="btn btn-active">Active</button>{" "}
          <button className="btn btn-disabled">Disabled</button>{" "}
          <button className="btn btn-blue" disabled>Native Disabled</button>
        </div>

        <CodeBlock code={`<button class="btn btn-active">Active</button>
<button class="btn btn-disabled">Disabled</button>
<button class="btn" disabled>Native Disabled</button>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="button-shapes">
        <p className="text-xs font-semibold uppercase">Shapes</p>
        <h2>Square Buttons</h2>

        <div className="border border-radius padding">
          <button className="btn btn-blue btn-straight">Square Corners</button>{" "}
          <button className="btn btn-outline btn-straight">Outline Square</button>
        </div>

        <CodeBlock code={`<button class="btn btn-blue btn-straight">No border-radius</button>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="button-groups">
        <p className="text-xs font-semibold uppercase">Groups</p>
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
          <div className="bottom-margin--extra"></div>
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="forms">
        <p className="text-xs font-semibold uppercase">Forms</p>
        <h2>Standard Form</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-60 tablet-unit-100">
              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <label>
                  Full Name
                  <input type="text" placeholder="Jane Cooper" />
                </label>
                <label>
                  Email Address
                  <input type="email" placeholder="jane@example.com" />
                </label>
                <label>
                  Subject
                  <select>
                    <option value="">Choose a topic...</option>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feedback</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea rows={4} placeholder="Your message..."></textarea>
                </label>
                <button className="btn btn-blue" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <CodeBlock code={`<form class="form">
  <label>
    Email
    <input type="email" placeholder="you@example.com">
  </label>
  <label>
    Message
    <textarea></textarea>
  </label>
  <button class="btn btn-blue" type="submit">Send</button>
</form>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="input-sizes">
        <p className="text-xs font-semibold uppercase">Sizes</p>
        <h2>Input Sizes</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Large Input
              <input type="text" className="input-big" placeholder="input-big / input-lg" />
            </label>
            <label>
              Default Input
              <input type="text" placeholder="Default size" />
            </label>
            <label>
              Small Input
              <input type="text" className="input-small" placeholder="input-small / input-sm" />
            </label>
            <label>
              Extra Small Input
              <input type="text" className="input-smaller" placeholder="input-smaller / input-xs" />
            </label>
          </form>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="input-states">
        <p className="text-xs font-semibold uppercase">Validation</p>
        <h2>Input States</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Error State
              <input type="text" className="input-error" defaultValue="invalid@email" />
            </label>
            <label>
              Success State
              <input type="text" className="input-success" defaultValue="valid@email.com" />
            </label>
            <label>
              Gray / Neutral State
              <input type="text" className="input-gray" placeholder="Neutral input" />
            </label>
          </form>
        </div>

        <CodeBlock code={`<input type="text" class="input-error" value="Invalid">
<input type="text" class="input-success" value="Valid">
<input type="text" class="input-gray" placeholder="Neutral">`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="input-groups">
        <p className="text-xs font-semibold uppercase">Groups</p>
        <h2>Input Groups</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-groups">
              <span className="input-prepend">$</span>
              <input type="text" placeholder="Amount" />
              <span className="input-append">.00</span>
            </div>
            <div className="bottom-margin--extra"></div>
            <div className="input-groups">
              <span className="input-prepend">https://</span>
              <input type="text" placeholder="example.com" />
            </div>
            <div className="bottom-margin--extra"></div>
            <div className="input-groups">
              <input type="text" placeholder="Search..." />
              <span className="input-append">
                <button className="btn btn-blue btn-sm">Go</button>
              </span>
            </div>
          </form>
        </div>

        <CodeBlock code={`<div class="input-groups">
  <span class="input-prepend">$</span>
  <input type="text" placeholder="Amount">
  <span class="input-append">.00</span>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="checkboxes">
        <p className="text-xs font-semibold uppercase">Controls</p>
        <h2>Checkboxes & Radios</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="units-row">
              <div className="unit-50 tablet-unit-100">
                <h4>Checkboxes</h4>
                <label><input type="checkbox" defaultChecked /> Grid System</label>
                <label><input type="checkbox" defaultChecked /> Typography</label>
                <label><input type="checkbox" /> Forms</label>
                <label><input type="checkbox" /> Navigation</label>
              </div>
              <div className="unit-50 tablet-unit-100">
                <h4>Radio Buttons</h4>
                <label><input type="radio" name="plan" defaultChecked /> Starter</label>
                <label><input type="radio" name="plan" /> Professional</label>
                <label><input type="radio" name="plan" /> Enterprise</label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="form-layouts">
        <p className="text-xs font-semibold uppercase">Layouts</p>
        <h2>Form Layouts</h2>

        <h3>Inline Form</h3>
        <div className="border border-radius padding">
          <form className="form form-inline" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button className="btn btn-blue" type="submit">Subscribe</button>
          </form>
        </div>

        <CodeBlock code={`<form class="form form-inline">
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <button class="btn btn-blue">Subscribe</button>
</form>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="dialog">
        <p className="text-xs font-semibold uppercase">Modal</p>
        <h2>Dialog Element</h2>
        <p>Native HTML dialog element, styled automatically by ply.</p>

        <div className="border border-radius padding">
          <button
            className="btn btn-blue"
            onClick={() => {
              const dialog = document.getElementById("demo-dialog") as HTMLDialogElement;
              dialog?.showModal();
            }}
          >
            Open Dialog
          </button>
          <dialog id="demo-dialog">
            <h3>Dialog Title</h3>
            <p>This is a native HTML dialog element styled by ply. No JavaScript framework needed for the styling.</p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Your feedback
                <textarea rows={3} placeholder="Type here..."></textarea>
              </label>
            </form>
            <div className="btn-group align-right">
              <button className="btn btn-outline" onClick={() => {
                const dialog = document.getElementById("demo-dialog") as HTMLDialogElement;
                dialog?.close();
              }}>Cancel</button>
              <button className="btn btn-blue" onClick={() => {
                const dialog = document.getElementById("demo-dialog") as HTMLDialogElement;
                dialog?.close();
              }}>Submit</button>
            </div>
          </dialog>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="alerts">
        <p className="text-xs font-semibold uppercase">Alerts</p>
        <h2>Standard Alerts</h2>

        <div className="border border-radius padding">
          <div className="alert">
            <span className="alert-content"><strong>Default</strong> — A neutral notification message.</span>
          </div>
          <div className="alert alert-blue">
            <span className="alert-content"><strong>Information</strong> — Something you should know about.</span>
          </div>
          <div className="alert alert-green">
            <span className="alert-content"><strong>Success</strong> — Operation completed successfully.</span>
          </div>
          <div className="alert alert-yellow">
            <span className="alert-content"><strong>Warning</strong> — Proceed with caution.</span>
          </div>
          <div className="alert alert-red">
            <span className="alert-content"><strong>Error</strong> — Something went wrong.</span>
          </div>
          <div className="alert alert-black">
            <span className="alert-content"><strong>Neutral</strong> — A dark notification style.</span>
          </div>
        </div>

        <CodeBlock code={`<div class="alert alert-blue">
  <span class="alert-content">Info message here.</span>
</div>
<div class="alert alert-green">
  <span class="alert-content">Success!</span>
</div>
<div class="alert alert-red">
  <span class="alert-content">Error occurred.</span>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="alert-outline">
        <p className="text-xs font-semibold uppercase">Outline</p>
        <h2>Outlined Alerts</h2>
        <p>Tinted background with a full border using <code>alert-outline</code>.</p>

        <div className="border border-radius padding">
          <div className="alert alert-outline">
            <span className="alert-content">Default outlined alert.</span>
          </div>
          <div className="alert alert-blue alert-outline">
            <span className="alert-content">Outlined info alert with tinted background.</span>
          </div>
          <div className="alert alert-green alert-outline">
            <span className="alert-content">Outlined success alert.</span>
          </div>
          <div className="alert alert-yellow alert-outline">
            <span className="alert-content">Outlined warning alert.</span>
          </div>
          <div className="alert alert-red alert-outline">
            <span className="alert-content">Outlined error alert.</span>
          </div>
        </div>

        <CodeBlock code={`<div class="alert alert-blue alert-outline">
  <span class="alert-content">Outlined info alert.</span>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="alert-ghost">
        <p className="text-xs font-semibold uppercase">Ghost</p>
        <h2>Ghost Alerts</h2>
        <p>Transparent background with border only using <code>alert-ghost</code>.</p>

        <div className="border border-radius padding">
          <div className="alert alert-blue alert-ghost">
            <span className="alert-content">Ghost info alert — transparent background.</span>
          </div>
          <div className="alert alert-green alert-ghost">
            <span className="alert-content">Ghost success alert.</span>
          </div>
          <div className="alert alert-red alert-ghost">
            <span className="alert-content">Ghost error alert.</span>
          </div>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="dismissible">
        <p className="text-xs font-semibold uppercase">Interactive</p>
        <h2>Dismissible Alerts</h2>
        <p>
          Add an <code>alert-dismiss</code> button to make alerts closeable.
        </p>

        {Object.keys(dismissed).length > 0 && (
          <button className="btn btn-sm btn-outline bottom-margin" onClick={resetAll}>
            Reset all dismissed alerts
          </button>
        )}

        <div className="border border-radius padding">
          {!dismissed["d1"] && (
            <div className="alert alert-blue" role="alert">
              <span className="alert-content"><strong>Tip:</strong> Click the × to dismiss this alert.</span>
              <button className="alert-dismiss" aria-label="Dismiss" onClick={() => dismiss("d1")}></button>
            </div>
          )}
          {!dismissed["d2"] && (
            <div className="alert alert-green" role="alert">
              <span className="alert-content"><strong>Saved!</strong> Your changes have been applied.</span>
              <button className="alert-dismiss" aria-label="Dismiss" onClick={() => dismiss("d2")}></button>
            </div>
          )}
          {!dismissed["d3"] && (
            <div className="alert alert-yellow alert-outline" role="alert">
              <span className="alert-content"><strong>Notice:</strong> Your session expires in 5 minutes.</span>
              <button className="alert-dismiss" aria-label="Dismiss" onClick={() => dismiss("d3")}></button>
            </div>
          )}
          {!dismissed["d4"] && (
            <div className="alert alert-red" role="alert">
              <span className="alert-content"><strong>Error:</strong> Failed to save. Please try again.</span>
              <button className="alert-dismiss" aria-label="Dismiss" onClick={() => dismiss("d4")}></button>
            </div>
          )}
        </div>

        <CodeBlock code={`<div class="alert alert-blue" role="alert">
  <span class="alert-content">Dismissible alert.</span>
  <button class="alert-dismiss" aria-label="Dismiss"></button>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra" id="labels">
        <p className="text-xs font-semibold uppercase">Labels</p>
        <h2>Inline Labels & Status</h2>

        <div className="border border-radius padding bottom-margin">
          <span className="label">Default</span>{" "}
          <span className="label label-blue">Blue</span>{" "}
          <span className="label label-red">Red</span>{" "}
          <span className="label label-green">Green</span>{" "}
          <span className="label label-yellow">Yellow</span>{" "}
          <span className="label label-black">Black</span>{" "}
          <span className="label label-white">White</span>
        </div>

        <div className="border border-radius padding">
          <p><span className="success">Active</span> — The success class for status text.</p>
          <p><span className="error">Inactive</span> — The error class for status text.</p>
        </div>

        <CodeBlock code={`<span class="label label-blue">Blue</span>
<span class="label label-green">Green</span>
<span class="label label-red">Red</span>

<span class="success">Active</span>
<span class="error">Inactive</span>`} />
      </section>
    </div>
  );
}
