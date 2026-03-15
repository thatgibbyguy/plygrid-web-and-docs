import { useState } from "react";
import CodeBlock from "../components/CodeBlock";

export default function AlertsPage() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});

  const dismiss = (id: string) => setDismissed((prev) => ({ ...prev, [id]: true }));
  const resetAll = () => setDismissed({});

  return (
    <div className="units-container">
      <section className="showcase-section">
        <p className="section-label">Feedback</p>
        <h1 className="page-title">Alerts & Notifications</h1>
        <p className="page-subtitle">
          Five color variants with solid, outline, and ghost styles. Dismissible with an accessible close button.
        </p>
      </section>

      <section className="showcase-section" id="solid">
        <p className="section-label">Solid</p>
        <h2>Standard Alerts</h2>

        <div className="demo-box">
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

      <section className="showcase-section" id="outline">
        <p className="section-label">Outline</p>
        <h2>Outlined Alerts</h2>
        <p>Tinted background with a full border using <code className="inline-code">alert-outline</code>.</p>

        <div className="demo-box">
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

      <section className="showcase-section" id="ghost">
        <p className="section-label">Ghost</p>
        <h2>Ghost Alerts</h2>
        <p>Transparent background with border only using <code className="inline-code">alert-ghost</code>.</p>

        <div className="demo-box">
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

      <section className="showcase-section" id="dismissible">
        <p className="section-label">Interactive</p>
        <h2>Dismissible Alerts</h2>
        <p>
          Add an <code className="inline-code">alert-dismiss</code> button to make alerts closeable.
        </p>

        {Object.keys(dismissed).length > 0 && (
          <button className="btn btn-sm btn-outline" onClick={resetAll} style={{ marginBottom: "1rem" }}>
            Reset all dismissed alerts
          </button>
        )}

        <div className="demo-box">
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

      <section className="showcase-section" id="labels">
        <p className="section-label">Labels</p>
        <h2>Inline Labels</h2>

        <div className="demo-box">
          <span className="label">Default</span>{" "}
          <span className="label label-blue">Blue</span>{" "}
          <span className="label label-red">Red</span>{" "}
          <span className="label label-green">Green</span>{" "}
          <span className="label label-yellow">Yellow</span>{" "}
          <span className="label label-black">Black</span>{" "}
          <span className="label label-white">White</span>
        </div>

        <CodeBlock code={`<span class="label label-blue">Blue</span>
<span class="label label-green">Green</span>
<span class="label label-red">Red</span>`} />
      </section>

      <section className="showcase-section" id="status">
        <p className="section-label">Status</p>
        <h2>Success & Error Text</h2>

        <div className="demo-box">
          <p><span className="success">Active</span> — The success class for status text.</p>
          <p><span className="error">Inactive</span> — The error class for status text.</p>
        </div>
      </section>
    </div>
  );
}
