import CodeBlock from "../components/CodeBlock";

export default function FormsPage() {
  return (
    <div className="units-container">
      <section className="padding-top--extra padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase color-gray-50">Input</p>
        <h1>Forms</h1>
        <p className="lead color-gray-60">
          Wrap your form in a <code>.form</code> class to enable ply styling.
          Inputs, selects, textareas, checkboxes, and radios are all covered.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="basic">
        <p className="text-xs font-semibold uppercase color-gray-50">Basics</p>
        <h2>Standard Form</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-60">
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="sizes">
        <p className="text-xs font-semibold uppercase color-gray-50">Sizes</p>
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="states">
        <p className="text-xs font-semibold uppercase color-gray-50">Validation</p>
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
        <p className="text-xs font-semibold uppercase color-gray-50">Groups</p>
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

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="select">
        <p className="text-xs font-semibold uppercase color-gray-50">Select</p>
        <h2>Select Elements</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="units-row">
              <div className="unit-50">
                <label>
                  Default Select
                  <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </label>
              </div>
              <div className="unit-50">
                <label>
                  Outlined Select
                  <select className="select-outlined">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="checkboxes">
        <p className="text-xs font-semibold uppercase color-gray-50">Controls</p>
        <h2>Checkboxes & Radios</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="units-row">
              <div className="unit-50">
                <h4>Checkboxes</h4>
                <label><input type="checkbox" defaultChecked /> Grid System</label>
                <label><input type="checkbox" defaultChecked /> Typography</label>
                <label><input type="checkbox" /> Forms</label>
                <label><input type="checkbox" /> Navigation</label>
              </div>
              <div className="unit-50">
                <h4>Radio Buttons</h4>
                <label><input type="radio" name="plan" defaultChecked /> Starter</label>
                <label><input type="radio" name="plan" /> Professional</label>
                <label><input type="radio" name="plan" /> Enterprise</label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="types">
        <p className="text-xs font-semibold uppercase color-gray-50">Input Types</p>
        <h2>All Input Types</h2>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="units-row">
              <div className="unit-50">
                <label>Text<input type="text" placeholder="Text input" /></label>
                <label>Password<input type="password" placeholder="Password" /></label>
                <label>Number<input type="number" placeholder="42" /></label>
                <label>Date<input type="date" /></label>
                <label>Time<input type="time" /></label>
              </div>
              <div className="unit-50">
                <label>URL<input type="url" placeholder="https://example.com" /></label>
                <label>Tel<input type="tel" placeholder="+1 (555) 000-0000" /></label>
                <label>Search<input type="search" placeholder="Search..." /></label>
                <label>Color<input type="color" defaultValue="#0f62fe" /></label>
                <label>Range<input type="range" min="0" max="100" defaultValue={50} /></label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="progress">
        <p className="text-xs font-semibold uppercase color-gray-50">Progress</p>
        <h2>Progress & Meter</h2>

        <div className="border border-radius padding">
          <label>Progress (70%)</label>
          <progress value={70} max={100}></progress>
          <div className="bottom-margin--extra"></div>
          <label>Meter (0.6)</label>
          <meter min={0} max={1} value={0.6}></meter>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="layouts">
        <p className="text-xs font-semibold uppercase color-gray-50">Layouts</p>
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

      <section className="padding-top--extra padding-bottom--extra" id="dialog">
        <p className="text-xs font-semibold uppercase color-gray-50">Modal</p>
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
    </div>
  );
}
