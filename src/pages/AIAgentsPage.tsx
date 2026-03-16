import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function AIAgentsPage() {
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">
          Getting Started
        </p>
        <h1 className="text-balance">AI Agents</h1>
        <p className="lead no-orphan">
          ply ships with machine-readable reference files so AI coding agents
          can generate correct, accessible markup without reading documentation.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="ply-md"
      >
        <p className="text-xs font-semibold uppercase color-blue">Markdown</p>
        <h2>PLY.md</h2>
        <p className="no-orphan">
          A single Markdown file containing every ply class, usage rule,
          anti-pattern, and copy-paste snippet. Designed to fit in one context
          window. Add it to your project root or paste it into your prompt.
        </p>

        <CodeBlock code={`cp node_modules/plygrid/PLY.md ./PLY.md`} />

        <p className="no-orphan">
          Your agent reads this once and knows the full framework — grid
          classes, button variants, form patterns, dark mode, accessibility, and
          theming.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="ply-json"
      >
        <p className="text-xs font-semibold uppercase color-blue">JSON</p>
        <h2>ply-classes.json</h2>
        <p className="no-orphan">
          A structured JSON file with every class, CSS custom property, and
          auto-styled semantic element. Perfect for programmatic tool use,
          search indexing, and validation.
        </p>

        <CodeBlock
          code={`cp node_modules/plygrid/ply-classes.json ./ply-classes.json`}
        />

        <p className="no-orphan">The JSON contains three sections:</p>

        <div className="units-row equal-height">
          <div className="unit-33 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">classes</h3>
              <p className="text-sm no-margin no-orphan">
                265+ classes with category, description, and usage examples.
              </p>
            </div>
          </div>
          <div className="unit-33 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">
                customProperties
              </h3>
              <p className="text-sm no-margin no-orphan">
                60 CSS custom properties organized by category (backgrounds,
                text, interactive, navigation).
              </p>
            </div>
          </div>
          <div className="unit-33 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">
                semanticElements
              </h3>
              <p className="text-sm no-margin no-orphan">
                13 HTML elements that ply auto-styles with no classes needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="claude-md"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Integration
        </p>
        <h2>CLAUDE.md / Cursor Rules</h2>
        <p className="no-orphan">
          For the best results, reference PLY.md in your AI project
          configuration. This tells the agent to use ply's classes instead of
          inventing custom CSS.
        </p>

        <h3>Claude Code</h3>
        <CodeBlock
          code={`# CLAUDE.md
See PLY.md for the ply CSS framework reference.
Use ply classes for all styling — do not use Tailwind, Bootstrap, or custom CSS
unless ply doesn't have what you need. Search ply-classes.json before writing
custom styles.`}
        />

        <h3>Cursor</h3>
        <CodeBlock
          code={`# .cursorrules
Use the ply CSS framework (see PLY.md) for all UI styling.
Always use ply classes before writing custom CSS.
Reference ply-classes.json for the complete class list.`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="tips"
      >
        <p className="text-xs font-semibold uppercase color-blue">Tips</p>
        <h2>Best Practices</h2>

        <div className="units-row equal-height">
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">
                Search before you write
              </h3>
              <p className="text-sm no-margin no-orphan">
                Tell your agent to check <code>ply-classes.json</code> before
                writing any custom CSS. Most common patterns already have a
                class.
              </p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">
                Use semantic HTML first
              </h3>
              <p className="text-sm no-margin no-orphan">
                ply auto-styles <code>&lt;nav&gt;</code>,{" "}
                <code>&lt;table&gt;</code>, <code>&lt;dialog&gt;</code>, and 10
                other elements. Start there.
              </p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">
                Use var(--ply-*) for colors
              </h3>
              <p className="text-sm no-margin no-orphan">
                Never hard-code color values. All colors use CSS custom
                properties that adapt to light mode, dark mode, and custom
                themes.
              </p>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <div className="border border-radius padding bottom-margin">
              <h3 className="text-lg font-semibold no-top-margin">
                Don't mix frameworks
              </h3>
              <p className="text-sm no-margin no-orphan">
                ply is standalone. Remove Tailwind, Bootstrap, or other CSS
                frameworks before using ply — they will conflict.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Explore <Link href="/docs/semantic-html">semantic HTML</Link> to see
          what ply styles for free, or dive into the{" "}
          <Link href="/docs/grid">grid system</Link> to start building layouts.
        </p>
      </section>
    </div>
  );
}
