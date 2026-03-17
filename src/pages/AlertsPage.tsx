import { useState } from "react";
import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function AlertsPage() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const dismiss = (id: string) =>
    setDismissed((prev) => ({ ...prev, [id]: true }));
  const resetAll = () => setDismissed({});

  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Components</p>
        <h1 className="text-balance">Alerts & Labels</h1>
        <p className="lead no-orphan">
          Notification banners in six colors, three styles (filled, outline,
          ghost), dismissible alerts, and inline status labels.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="alerts"
      >
        <p className="text-xs font-semibold uppercase color-blue">Alerts</p>
        <h2>Standard Alerts</h2>

        <div className="border border-radius padding">
          <div className="alert">
            <span className="alert-content">
              <strong>Default</strong> — A neutral notification message.
            </span>
          </div>
          <div className="alert alert-blue">
            <span className="alert-content">
              <strong>Information</strong> — Something you should know about.
            </span>
          </div>
          <div className="alert alert-green">
            <span className="alert-content">
              <strong>Success</strong> — Operation completed successfully.
            </span>
          </div>
          <div className="alert alert-yellow">
            <span className="alert-content">
              <strong>Warning</strong> — Proceed with caution.
            </span>
          </div>
          <div className="alert alert-red">
            <span className="alert-content">
              <strong>Error</strong> — Something went wrong.
            </span>
          </div>
          <div className="alert alert-black">
            <span className="alert-content">
              <strong>Neutral</strong> — A dark notification style.
            </span>
          </div>
        </div>

        <CodeBlock
          code={`<div class="alert alert-blue" role="status">
  <span class="alert-content">Info message here.</span>
</div>
<div class="alert alert-green" role="status">
  <span class="alert-content">Success!</span>
</div>
<div class="alert alert-red" role="alert">
  <span class="alert-content">Error occurred.</span>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="alert-outline"
      >
        <p className="text-xs font-semibold uppercase color-blue">Outline</p>
        <h2>Outlined Alerts</h2>
        <p>
          Tinted background with a full border using <code>alert-outline</code>.
        </p>

        <div className="border border-radius padding">
          <div className="alert alert-outline">
            <span className="alert-content">Default outlined alert.</span>
          </div>
          <div className="alert alert-blue alert-outline">
            <span className="alert-content">
              Outlined info alert with tinted background.
            </span>
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

        <CodeBlock
          code={`<div class="alert alert-blue alert-outline">
  <span class="alert-content">Outlined info alert.</span>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="alert-ghost"
      >
        <p className="text-xs font-semibold uppercase color-blue">Ghost</p>
        <h2>Ghost Alerts</h2>
        <p>
          Transparent background with border only using <code>alert-ghost</code>
          .
        </p>

        <div className="border border-radius padding">
          <div className="alert alert-blue alert-ghost">
            <span className="alert-content">
              Ghost info alert — transparent background.
            </span>
          </div>
          <div className="alert alert-green alert-ghost">
            <span className="alert-content">Ghost success alert.</span>
          </div>
          <div className="alert alert-red alert-ghost">
            <span className="alert-content">Ghost error alert.</span>
          </div>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="dismissible"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Interactive
        </p>
        <h2>Dismissible Alerts</h2>
        <p>
          Add an <code>alert-dismiss</code> button to make alerts closeable.
        </p>

        {Object.keys(dismissed).length > 0 && (
          <button
            className="btn btn-sm btn-outline bottom-margin"
            onClick={resetAll}
          >
            Reset all dismissed alerts
          </button>
        )}

        <div className="border border-radius padding">
          {!dismissed["d1"] && (
            <div className="alert alert-blue" role="alert">
              <span className="alert-content">
                <strong>Tip:</strong> Click the × to dismiss this alert.
              </span>
              <button
                className="alert-dismiss"
                aria-label="Dismiss"
                onClick={() => dismiss("d1")}
              ></button>
            </div>
          )}
          {!dismissed["d2"] && (
            <div className="alert alert-green" role="alert">
              <span className="alert-content">
                <strong>Saved!</strong> Your changes have been applied.
              </span>
              <button
                className="alert-dismiss"
                aria-label="Dismiss"
                onClick={() => dismiss("d2")}
              ></button>
            </div>
          )}
          {!dismissed["d3"] && (
            <div className="alert alert-yellow alert-outline" role="alert">
              <span className="alert-content">
                <strong>Notice:</strong> Your session expires in 5 minutes.
              </span>
              <button
                className="alert-dismiss"
                aria-label="Dismiss"
                onClick={() => dismiss("d3")}
              ></button>
            </div>
          )}
          {!dismissed["d4"] && (
            <div className="alert alert-red" role="alert">
              <span className="alert-content">
                <strong>Error:</strong> Failed to save. Please try again.
              </span>
              <button
                className="alert-dismiss"
                aria-label="Dismiss"
                onClick={() => dismiss("d4")}
              ></button>
            </div>
          )}
        </div>

        <CodeBlock
          code={`<div class="alert alert-blue" role="alert">
  <span class="alert-content">Dismissible alert.</span>
  <button class="alert-dismiss" aria-label="Dismiss"></button>
</div>`}
        />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="labels">
        <p className="text-xs font-semibold uppercase color-blue">Labels</p>
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

        <h3>Outlined Labels</h3>
        <div className="border border-radius padding bottom-margin">
          <span className="label label-outline">Outline</span>{" "}
          <span className="label label-outline label-blue">Blue</span>{" "}
          <span className="label label-outline label-red">Red</span>{" "}
          <span className="label label-outline label-green">Green</span>
        </div>

        <CodeBlock
          code={`<span class="label label-blue">Blue</span>
<span class="label label-outline">Outline</span>
<span class="label label-outline label-red">Red Outline</span>`}
        />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="badges">
        <p className="text-xs font-semibold uppercase color-blue">Badges</p>
        <h2>Badges</h2>

        <div className="border border-radius padding bottom-margin">
          <span className="badge">1</span>{" "}
          <span className="badge badge-blue">5</span>{" "}
          <span className="badge badge-red">99+</span>{" "}
          <span className="badge badge-green">3</span>{" "}
          <span className="badge badge-yellow">!</span>{" "}
          <span className="badge badge-black">0</span>{" "}
          <span className="badge badge-white">7</span>
        </div>

        <div className="border border-radius padding">
          <span className="badge badge-small badge-blue">sm</span>{" "}
          <span className="badge badge-small badge-red">sm</span>{" "}
          <span className="badge badge-small badge-green">sm</span>
        </div>

        <CodeBlock
          code={`<span class="badge badge-blue">5</span>
<span class="badge badge-red">99+</span>
<span class="badge badge-small badge-green">sm</span>`}
        />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="messages">
        <p className="text-xs font-semibold uppercase color-blue">Toast</p>
        <h2>Toast Messages</h2>
        <p className="no-orphan">
          Fixed-position toast notifications using <code>tools-message</code> (alias: <code>message</code>).
          Hidden by default — toggle display with JavaScript.
        </p>

        <table className="table-stroked">
          <tbody>
            <tr><td><code>tools-message</code> / <code>message</code></td><td>Base toast (fixed top-right)</td></tr>
            <tr><td><code>tools-message-blue</code> / <code>message-blue</code></td><td>Blue toast</td></tr>
            <tr><td><code>tools-message-red</code> / <code>message-red</code></td><td>Red toast</td></tr>
            <tr><td><code>tools-message-green</code> / <code>message-green</code></td><td>Green toast</td></tr>
            <tr><td><code>tools-message-yellow</code> / <code>message-yellow</code></td><td>Yellow toast</td></tr>
            <tr><td><code>tools-message-black</code> / <code>message-black</code></td><td>Black toast</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="alert-reference">
        <p className="text-xs font-semibold uppercase color-blue">Reference</p>
        <h2>Alert Class Reference</h2>
        <p className="no-orphan">
          All alert classes use the <code>tools-alert-*</code> prefix with shorter <code>alert-*</code> aliases.
        </p>

        <table className="table-stroked">
          <tbody>
            <tr><td><code>tools-alert</code> / <code>alert</code></td><td>Base alert</td></tr>
            <tr><td><code>tools-alert-blue</code> / <code>alert-blue</code></td><td>Blue/info</td></tr>
            <tr><td><code>tools-alert-red</code> / <code>alert-red</code></td><td>Red/error</td></tr>
            <tr><td><code>tools-alert-green</code> / <code>alert-green</code></td><td>Green/success</td></tr>
            <tr><td><code>tools-alert-yellow</code> / <code>alert-yellow</code></td><td>Yellow/warning</td></tr>
            <tr><td><code>tools-alert-black</code> / <code>alert-black</code></td><td>Black/neutral</td></tr>
            <tr><td><code>tools-alert-outline</code> / <code>alert-outline</code></td><td>Outlined variant</td></tr>
            <tr><td><code>tools-alert-ghost</code> / <code>alert-ghost</code></td><td>Ghost variant</td></tr>
            <tr><td><code>tools-alert-icon</code> / <code>alert-icon</code></td><td>Icon container</td></tr>
            <tr><td><code>tools-alert-content</code> / <code>alert-content</code></td><td>Content wrapper</td></tr>
            <tr><td><code>tools-alert-dismiss</code> / <code>alert-dismiss</code></td><td>Dismiss button</td></tr>
          </tbody>
        </table>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Explore <Link href="/docs/utilities">utility classes</Link> for
          spacing, display, and layout helpers, or learn about built-in{" "}
          <Link href="/docs/accessibility">accessibility</Link> features.
        </p>
      </section>
    </div>
  );
}
