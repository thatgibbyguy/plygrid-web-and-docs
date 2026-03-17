import { useRef } from "react";
import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function SemanticHtmlPage() {
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">
          Getting Started
        </p>
        <h1 className="text-balance">Semantic HTML</h1>
        <p className="lead no-orphan">
          ply automatically styles 13 semantic HTML elements — no classes
          needed. Start with native elements before reaching for custom markup.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="headings"
      >
        <p className="text-xs font-semibold uppercase color-blue">Text</p>
        <h2>Headings</h2>
        <p className="no-orphan">
          All heading levels are styled with a consistent type scale, weight,
          and line-height.
        </p>

        <div className="border border-radius padding" role="presentation">
          <p className="h1 no-top-margin">Heading 1</p>
          <p className="h2">Heading 2</p>
          <p className="h3">Heading 3</p>
          <p className="h4">Heading 4</p>
          <p className="h5">Heading 5</p>
          <p className="h6">Heading 6</p>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="nav"
      >
        <p className="text-xs font-semibold uppercase color-blue">Navigation</p>
        <h2>&lt;nav&gt;</h2>
        <p className="no-orphan">
          Wrap a <code>&lt;ul&gt;</code> inside{" "}
          <code>&lt;nav class="navbar"&gt;</code> for a horizontal navigation
          bar. ply handles active states, hover effects, and responsive
          collapse.
        </p>

        <div className="border border-radius padding">
          <nav className="navbar">
            <ul>
              <li className="active">
                <a href="#nav">Home</a>
              </li>
              <li>
                <a href="#nav">About</a>
              </li>
              <li>
                <a href="#nav">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <CodeBlock
          code={`<nav class="navbar">
  <ul>
    <li class="active"><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="table"
      >
        <p className="text-xs font-semibold uppercase color-blue">Data</p>
        <h2>&lt;table&gt;</h2>
        <p className="no-orphan">
          Tables are styled automatically — borders, padding, header styling,
          and striped rows all come free.
        </p>

        <div className="border border-radius padding">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>Engineer</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>Designer</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>PM</td>
                <td>Away</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="code"
      >
        <p className="text-xs font-semibold uppercase color-blue">Code</p>
        <h2>&lt;code&gt; & &lt;pre&gt;</h2>
        <p className="no-orphan">
          Inline <code>&lt;code&gt;</code> gets a subtle background and
          monospace font. Block <code>&lt;pre&gt;</code> elements get padding,
          border-radius, and horizontal scroll.
        </p>

        <div className="border border-radius padding">
          <p>
            Inline: <code>const x = 42;</code>
          </p>
          <pre>
            <code>{`function greet(name) {
  return \`Hello, \${name}!\`;
}`}</code>
          </pre>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="kbd"
      >
        <p className="text-xs font-semibold uppercase color-blue">Keyboard</p>
        <h2>&lt;kbd&gt;</h2>
        <p className="no-orphan">
          Keyboard input elements get a raised, bordered appearance.
        </p>

        <div className="border border-radius padding">
          <p>
            Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open search.
          </p>
          <p>
            Use <kbd>Tab</kbd> to navigate, <kbd>Enter</kbd> to select.
          </p>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="blockquote"
      >
        <p className="text-xs font-semibold uppercase color-blue">Quote</p>
        <h2>&lt;blockquote&gt;</h2>
        <p className="no-orphan">
          Block quotes get a left border accent and italic styling.
        </p>

        <div className="border border-radius padding">
          <blockquote>
            <p>
              Start with semantic HTML before reaching for classes. ply gives
              you a lot for free.
            </p>
          </blockquote>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="mark"
      >
        <p className="text-xs font-semibold uppercase color-blue">Highlight</p>
        <h2>&lt;mark&gt;</h2>
        <p className="no-orphan">
          The <code>&lt;mark&gt;</code> element highlights text with a
          theme-aware background.
        </p>

        <div className="border border-radius padding">
          <p>
            You can <mark>highlight important text</mark> with the mark element.
          </p>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="details"
      >
        <p className="text-xs font-semibold uppercase color-blue">Disclosure</p>
        <h2>&lt;details&gt; & &lt;summary&gt;</h2>
        <p className="no-orphan">
          Native disclosure widgets with styled toggle indicators.
        </p>

        <div className="border border-radius padding">
          <details>
            <summary>Click to expand</summary>
            <p>
              This content is hidden by default and revealed when the user
              clicks the summary. No JavaScript needed.
            </p>
          </details>
          <details>
            <summary>Another expandable section</summary>
            <p>
              You can have multiple details elements. Each toggles
              independently.
            </p>
          </details>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="dialog"
      >
        <p className="text-xs font-semibold uppercase color-blue">Modal</p>
        <h2>&lt;dialog&gt;</h2>
        <p className="no-orphan">
          Native HTML dialog element with automatic backdrop, centering, and
          styling.
        </p>

        <div className="border border-radius padding">
          <button
            ref={dialogTriggerRef}
            className="btn btn-blue"
            onClick={() => {
              const dialog = document.getElementById(
                "semantic-dialog",
              ) as HTMLDialogElement;
              dialog?.showModal();
            }}
          >
            Open Dialog
          </button>
          <dialog id="semantic-dialog" aria-labelledby="semantic-dialog-title">
            <h3 id="semantic-dialog-title">Native Dialog</h3>
            <p>
              This dialog is styled automatically by ply. Use{" "}
              <code>.showModal()</code> to open it.
            </p>
            <div className="btn-group align-right">
              <button
                className="btn btn-outline"
                onClick={() => {
                  const dialog = document.getElementById(
                    "semantic-dialog",
                  ) as HTMLDialogElement;
                  dialog?.close();
                  setTimeout(() => dialogTriggerRef.current?.focus(), 0);
                }}
              >
                Close
              </button>
            </div>
          </dialog>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="progress"
      >
        <p className="text-xs font-semibold uppercase color-blue">Indicators</p>
        <h2>&lt;progress&gt; & &lt;meter&gt;</h2>
        <p className="no-orphan">
          Progress bars and meter elements are styled with theme-aware colors.
        </p>

        <div className="border border-radius padding">
          <label className="display-block bottom-margin">
            Progress (70%)
            <progress value={70} max={100}></progress>
          </label>
          <label className="display-block bottom-margin">
            Meter (low)
            <meter
              value={0.2}
              min={0}
              max={1}
              low={0.3}
              high={0.7}
              optimum={0.8}
            ></meter>
          </label>
          <label className="display-block">
            Meter (high)
            <meter
              value={0.9}
              min={0}
              max={1}
              low={0.3}
              high={0.7}
              optimum={0.8}
            ></meter>
          </label>
        </div>
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="forms">
        <p className="text-xs font-semibold uppercase color-blue">Input</p>
        <h2>Form Elements</h2>
        <p className="no-orphan">
          Inputs, selects, textareas, checkboxes, and radio buttons are all
          styled when wrapped in a <code>.form</code> container. Labels
          automatically stack with their inputs.
        </p>

        <div className="border border-radius padding">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Text input
              <input type="text" placeholder="Styled automatically" />
            </label>
            <label>
              Select
              <select>
                <option>Option one</option>
                <option>Option two</option>
              </select>
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Checkbox
            </label>
          </form>
        </div>

        <p className="text-sm text-secondary no-orphan">
          See <Link href="/docs/forms">Forms</Link> for the full forms reference
          including sizes, validation states, and input groups.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Customize the look with{" "}
          <Link href="/docs/colors">Colors & Theming</Link>, or explore the{" "}
          <Link href="/docs/grid">grid system</Link> for page layouts.
        </p>
      </section>
    </div>
  );
}
