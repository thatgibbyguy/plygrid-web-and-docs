import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function FormsPage() {
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Components</p>
        <h1 className="text-balance">Forms</h1>
        <p className="lead no-orphan">
          Styled inputs, selects, textareas, validation states, input groups,
          and layout options — all activated by wrapping in <code>.form</code>.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="forms"
      >
        <p className="text-xs font-semibold uppercase color-blue">Basics</p>
        <h2>Standard Form</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-60 phone-unit-100">
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
                <button className="btn btn-blue" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`<form class="form">
  <label>
    Email
    <input type="email" placeholder="you@example.com">
  </label>
  <label>
    Message
    <textarea></textarea>
  </label>
  <button class="btn btn-blue" type="submit">Send</button>
</form>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="input-sizes"
      >
        <p className="text-xs font-semibold uppercase color-blue">Sizes</p>
        <h2>Input Sizes</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Large Input
              <input
                type="text"
                className="input-big"
                placeholder="input-big / input-lg"
              />
            </label>
            <label>
              Default Input
              <input type="text" placeholder="Default size" />
            </label>
            <label>
              Small Input
              <input
                type="text"
                className="input-small"
                placeholder="input-small / input-sm"
              />
            </label>
            <label>
              Extra Small Input
              <input
                type="text"
                className="input-smaller"
                placeholder="input-smaller / input-xs"
              />
            </label>
          </form>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="input-states"
      >
        <p className="text-xs font-semibold uppercase color-blue">Validation</p>
        <h2>Input States</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Error State
              <input
                type="text"
                className="input-error"
                defaultValue="invalid@email"
              />
            </label>
            <label>
              Success State
              <input
                type="text"
                className="input-success"
                defaultValue="valid@email.com"
              />
            </label>
            <label>
              Gray / Neutral State
              <input
                type="text"
                className="input-gray"
                placeholder="Neutral input"
              />
            </label>
          </form>
        </div>

        <CodeBlock
          code={`<input type="text" class="input-error" value="Invalid">
<input type="text" class="input-success" value="Valid">
<input type="text" class="input-gray" placeholder="Neutral">`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="input-groups"
      >
        <p className="text-xs font-semibold uppercase color-blue">Groups</p>
        <h2>Input Groups</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-groups">
              <span className="input-prepend">$</span>
              <input type="text" placeholder="Amount" />
              <span className="input-append">.00</span>
            </div>
            <div className="bottom-margin-extra"></div>
            <div className="input-groups">
              <span className="input-prepend">https://</span>
              <input type="text" placeholder="example.com" />
            </div>
            <div className="bottom-margin-extra"></div>
            <div className="input-groups">
              <input type="text" placeholder="Search..." />
              <span className="input-append">
                <button className="btn btn-blue btn-sm">Go</button>
              </span>
            </div>
          </form>
        </div>

        <CodeBlock
          code={`<div class="input-groups">
  <span class="input-prepend">$</span>
  <input type="text" placeholder="Amount">
  <span class="input-append">.00</span>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="checkboxes"
      >
        <p className="text-xs font-semibold uppercase color-blue">Controls</p>
        <h2>Checkboxes & Radios</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="units-row">
              <div className="unit-50 phone-unit-100">
                <h4>Checkboxes</h4>
                <label>
                  <input type="checkbox" defaultChecked /> Grid System
                </label>
                <label>
                  <input type="checkbox" defaultChecked /> Typography
                </label>
                <label>
                  <input type="checkbox" /> Forms
                </label>
                <label>
                  <input type="checkbox" /> Navigation
                </label>
              </div>
              <div className="unit-50 phone-unit-100">
                <h4>Radio Buttons</h4>
                <label>
                  <input type="radio" name="plan" defaultChecked /> Starter
                </label>
                <label>
                  <input type="radio" name="plan" /> Professional
                </label>
                <label>
                  <input type="radio" name="plan" /> Enterprise
                </label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="form-layouts"
      >
        <p className="text-xs font-semibold uppercase color-blue">Layouts</p>
        <h2>Form Layouts</h2>

        <h3>Inline Form</h3>
        <div className="border border-radius padding">
          <form
            className="form form-inline"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button className="btn btn-blue" type="submit">
              Subscribe
            </button>
          </form>
        </div>

        <CodeBlock
          code={`<form class="form form-inline">
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <button class="btn btn-blue">Subscribe</button>
</form>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="form-reference"
      >
        <p className="text-xs font-semibold uppercase color-blue">Reference</p>
        <h2>Form Class Reference</h2>

        <h3>Layout</h3>
        <table className="table-stroked">
          <tbody>
            <tr><td><code>form</code></td><td>Base wrapper — enables styled inputs</td></tr>
            <tr><td><code>form-inline</code></td><td>Inline horizontal form</td></tr>
            <tr><td><code>form-inline-list</code></td><td>Inline form as list</td></tr>
            <tr><td><code>form-list</code></td><td>Vertical stacked form list</td></tr>
            <tr><td><code>form-desc</code></td><td>Help/description text below inputs</td></tr>
          </tbody>
        </table>

        <h3>Input Variants</h3>
        <table className="table-stroked">
          <tbody>
            <tr><td><code>input-search</code></td><td>Rounded pill-shaped search input</td></tr>
            <tr><td><code>input-on-black</code></td><td>Input for dark backgrounds</td></tr>
            <tr><td><code>select-outlined</code></td><td>Transparent select with visible border</td></tr>
            <tr><td><code>btn-append</code></td><td>Button appended to input group</td></tr>
          </tbody>
        </table>

        <h3>Autocomplete & Typeahead</h3>
        <table className="table-stroked">
          <tbody>
            <tr><td><code>autocomplete</code></td><td>Autocomplete dropdown container</td></tr>
            <tr><td><code>typeahead</code></td><td>Typeahead wrapper (alias: livesearch-container)</td></tr>
            <tr><td><code>typeahead-results</code></td><td>Results dropdown</td></tr>
            <tr><td><code>typeahead-empty</code></td><td>Empty results message</td></tr>
            <tr><td><code>filterbox</code></td><td>Filterable input wrapper</td></tr>
            <tr><td><code>filterbox-list</code></td><td>Filter dropdown list</td></tr>
          </tbody>
        </table>

        <h3>Multi-select</h3>
        <table className="table-stroked">
          <tbody>
            <tr><td><code>multiselect</code></td><td>Multi-select wrapper</td></tr>
            <tr><td><code>multiselect-tags</code></td><td>Tag container</td></tr>
            <tr><td><code>multiselect-tag</code></td><td>Individual tag</td></tr>
            <tr><td><code>multiselect-results</code></td><td>Results dropdown</td></tr>
          </tbody>
        </table>

        <h3>File Upload</h3>
        <table className="table-stroked">
          <tbody>
            <tr><td><code>tools-droparea</code></td><td>Drag-and-drop upload area</td></tr>
            <tr><td><code>tools-droparea-placeholder</code></td><td>Placeholder text</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="dialog">
        <p className="text-xs font-semibold uppercase color-blue">Modal</p>
        <h2>Dialog Element</h2>
        <p>Native HTML dialog element, styled automatically by ply.</p>

        <div className="border border-radius padding">
          <button
            className="btn btn-blue"
            onClick={() => {
              const dialog = document.getElementById(
                "demo-dialog",
              ) as HTMLDialogElement;
              dialog?.showModal();
            }}
          >
            Open Dialog
          </button>
          <dialog id="demo-dialog">
            <h3>Dialog Title</h3>
            <p>
              This is a native HTML dialog element styled by ply. No JavaScript
              framework needed for the styling.
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Your feedback
                <textarea rows={3} placeholder="Type here..."></textarea>
              </label>
            </form>
            <div className="btn-group align-right">
              <button
                className="btn btn-outline"
                onClick={() => {
                  const dialog = document.getElementById(
                    "demo-dialog",
                  ) as HTMLDialogElement;
                  dialog?.close();
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-blue"
                onClick={() => {
                  const dialog = document.getElementById(
                    "demo-dialog",
                  ) as HTMLDialogElement;
                  dialog?.close();
                }}
              >
                Submit
              </button>
            </div>
          </dialog>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Add <Link href="/docs/navigation">navigation</Link> to your layout, or
          display data with <Link href="/docs/tables">tables</Link>.
        </p>
      </section>
    </div>
  );
}
