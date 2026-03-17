import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function TypographyPage() {
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Design</p>
        <h1 className="text-balance">Typography</h1>
        <p className="lead no-orphan">
          A complete type scale from 12px to 60px with weight, alignment, and
          line-height utilities. Semantic HTML elements are styled
          automatically.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="scale"
      >
        <p className="text-xs font-semibold uppercase color-blue">Scale</p>
        <h2>Text Sizes</h2>

        <div className="border border-radius padding">
          <p className="text-5xl font-bold no-margin bottom-margin">
            text-5xl — 60px
          </p>
          <p className="text-4xl font-bold no-margin bottom-margin">
            text-4xl — 48px
          </p>
          <p className="text-3xl font-bold no-margin bottom-margin">
            text-3xl — 36px
          </p>
          <p className="text-2xl font-bold no-margin bottom-margin">
            text-2xl — 30px
          </p>
          <p className="text-xl no-margin bottom-margin">text-xl — 24px</p>
          <p className="text-lg no-margin bottom-margin">text-lg — 18px</p>
          <p className="text-base no-margin bottom-margin">
            text-base — 16px (default)
          </p>
          <p className="text-sm no-margin bottom-margin">text-sm — 14px</p>
          <p className="text-xs no-margin">text-xs — 12px</p>
        </div>

        <CodeBlock
          code={`<p class="text-5xl font-bold">Heading</p>
<p class="text-base">Body text at 16px</p>
<p class="text-sm">Small text at 14px</p>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="headings"
      >
        <p className="text-xs font-semibold uppercase color-blue">Headings</p>
        <h2>Heading Elements & Classes</h2>
        <p>
          Native heading elements are styled automatically. Use <code>.h1</code>{" "}
          through <code>.h6</code> classes to apply heading styles to any
          element.
        </p>

        <h3>Lead Text</h3>
        <p className="no-orphan">
          Use <code>lead</code> (alias: <code>lead-subhead</code>) for introductory text with larger font size and relaxed line-height.
        </p>

        <h3>Heading Elements</h3>
        <div className="border border-radius padding" role="presentation">
          <p className="h1 no-top-margin">Heading 1</p>
          <p className="h2">Heading 2</p>
          <p className="h3">Heading 3</p>
          <p className="h4">Heading 4</p>
          <p className="h5">Heading 5</p>
          <p className="h6">Heading 6</p>
        </div>

        <div className="border border-radius padding">
          <p className="h1">Paragraph styled as H1</p>
          <p className="h3">Paragraph styled as H3</p>
          <span className="h5">Span styled as H5</span>
        </div>

        <CodeBlock
          code={`<p class="h1">Looks like an H1 but is a paragraph</p>
<span class="h3">Span with H3 styling</span>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="weights"
      >
        <p className="text-xs font-semibold uppercase color-blue">Weight</p>
        <h2>Font Weights</h2>

        <div className="border border-radius padding">
          <p className="font-normal text-xl">font-normal — 400</p>
          <p className="font-medium text-xl">font-medium — 500</p>
          <p className="font-semibold text-xl">font-semibold — 600</p>
          <p className="font-bold text-xl">font-bold — 700</p>
        </div>

        <CodeBlock
          code={`<p class="font-bold text-xl">Bold and extra large</p>
<p class="font-normal text-sm">Normal weight, small</p>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="styles"
      >
        <p className="text-xs font-semibold uppercase color-blue">Styles</p>
        <h2>Text Styles</h2>

        <div className="border border-radius padding">
          <p className="bold">Bold text</p>
          <p className="italic">Italic text</p>
          <p className="uppercase">Uppercase text</p>
          <p className="nowrap">No-wrap text (stays on one line)</p>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="alignment"
      >
        <p className="text-xs font-semibold uppercase color-blue">Alignment</p>
        <h2>Text Alignment</h2>

        <div className="border border-radius padding">
          <p className="text-left border-bottom padding-bottom">
            text-left — Aligned to the left
          </p>
          <p className="text-center border-bottom padding-bottom">
            text-center — Centered text (alias: text-centered)
          </p>
          <p className="text-right">text-right — Aligned to the right</p>
        </div>

        <CodeBlock
          code={`<p class="text-center">Centered paragraph</p>
<p class="text-right">Right-aligned text</p>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="line-height"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Line Height
        </p>
        <h2>Leading</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-50 phone-unit-100">
              <p className="leading-tight border padding bottom-margin">
                <strong>leading-tight (1.25)</strong>
                <br />
                The quick brown fox jumps over the lazy dog. Pack my box with
                five dozen liquor jugs.
              </p>
              <p className="leading-snug border padding">
                <strong>leading-snug (1.375)</strong>
                <br />
                The quick brown fox jumps over the lazy dog. Pack my box with
                five dozen liquor jugs.
              </p>
            </div>
            <div className="unit-50 phone-unit-100">
              <p className="leading-normal border padding bottom-margin">
                <strong>leading-normal (1.5)</strong>
                <br />
                The quick brown fox jumps over the lazy dog. Pack my box with
                five dozen liquor jugs.
              </p>
              <p className="leading-relaxed border padding">
                <strong>leading-relaxed (1.625)</strong>
                <br />
                The quick brown fox jumps over the lazy dog. Pack my box with
                five dozen liquor jugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="semantic"
      >
        <p className="text-xs font-semibold uppercase color-blue">Semantic</p>
        <h2>Native HTML Elements</h2>
        <p>These elements are styled automatically without classes.</p>

        <div className="border border-radius padding">
          <p>
            Regular paragraph with <a href="#">a link</a>,{" "}
            <strong>strong text</strong>, <em>emphasized text</em>, and{" "}
            <code>inline code</code>.
          </p>

          <blockquote>
            <p>
              This is a blockquote. It's styled automatically with a left border
              and indentation.
            </p>
          </blockquote>

          <hr />

          <ul>
            <li>Unordered list item one</li>
            <li>Unordered list item two</li>
            <li>Unordered list item three</li>
          </ul>

          <ol>
            <li>Ordered list item one</li>
            <li>Ordered list item two</li>
            <li>Ordered list item three</li>
          </ol>

          <dl>
            <dt>Definition Term</dt>
            <dd>Definition description goes here with supporting details.</dd>
            <dt>Another Term</dt>
            <dd>Another description with more information.</dd>
          </dl>

          <pre>
            <code>{`// Preformatted code block
function hello() {
  console.log("Hello, ply!");
}`}</code>
          </pre>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="font-tokens"
      >
        <p className="text-xs font-semibold uppercase color-blue">Theming</p>
        <h2>Typography Custom Properties</h2>
        <p className="no-orphan">
          Override font families across your entire theme with three CSS custom
          properties. These work the same way as color variables — one override
          propagates everywhere.
        </p>

        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Used by</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--ply-font-body</code></td>
              <td>System sans-serif stack</td>
              <td>Body text, form controls</td>
            </tr>
            <tr>
              <td><code>--ply-font-heading</code></td>
              <td>System sans-serif stack</td>
              <td>h1–h6, heading classes</td>
            </tr>
            <tr>
              <td><code>--ply-font-mono</code></td>
              <td>System monospace stack</td>
              <td>code, pre, kbd, samp</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`[data-theme="brand"] {
  --ply-font-body: "Palatino Linotype", Palatino, Georgia, serif;
  --ply-font-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --ply-font-mono: "Fira Code", "Source Code Pro", monospace;
}`}
        />
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="details">
        <p className="text-xs font-semibold uppercase color-blue">
          Interactive
        </p>
        <h2>Details & Summary</h2>
        <p>Styled accordion using native HTML elements.</p>

        <div className="border border-radius padding">
          <details>
            <summary>What is ply?</summary>
            <p>
              ply is a ratio-based CSS framework with dark mode, accessibility,
              and a small footprint. It's designed to be used by both humans and
              AI agents.
            </p>
          </details>
          <details>
            <summary>How do I install it?</summary>
            <p>
              Add a single link tag to your HTML head, or install via npm with{" "}
              <code>npm install plygrid</code>.
            </p>
          </details>
          <details>
            <summary>Does it require JavaScript?</summary>
            <p>
              No. ply is pure CSS. Zero JavaScript required. The entire
              framework is one stylesheet.
            </p>
          </details>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Learn the <Link href="/docs/grid">grid system</Link> for page layouts,
          or jump to <Link href="/docs/buttons">buttons</Link> for interactive
          components.
        </p>
      </section>
    </div>
  );
}
