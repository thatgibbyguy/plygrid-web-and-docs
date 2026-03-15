import { Link } from "wouter";
import {
  Cpu, Accessibility, Feather,
  LayoutGrid, Type, ToggleLeft, Compass, Table2, Wrench,
  Zap, Keyboard, Puzzle
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="padding-top--extra padding-bottom--extra">
        <div className="units-container">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <h1 className="text-5xl font-bold text-balance">Ship faster. Ship accessible.</h1>
              <p className="text-xl text-secondary no-orphan">
                A semantic CSS framework that gives you responsive layouts, dark mode,
                and WCAG compliance on the first pass — so you can focus on what you're building.
              </p>

              <div className="padding-top">
                <Link href="/get-started" className="btn btn-blue">Get Started</Link>
                {" "}
                <a href="https://github.com/thatgibbyguy/ply" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="units-container">
        <section className="padding-bottom--extra padding-top--extra">
          <div className="units-row centered-content">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">~18KB</span>
                  <span className="text-xs uppercase text-muted">Gzipped</span>
                </div>
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">0</span>
                  <span className="text-xs uppercase text-muted">JavaScript</span>
                </div>
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">AA</span>
                  <span className="text-xs uppercase text-muted">WCAG Contrast</span>
                </div>
                <div className="unit-25 phone-unit-50 text-center bottom-margin">
                  <span className="text-3xl font-bold display--block">1</span>
                  <span className="text-xs uppercase text-muted">Link Tag</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="background-blue padding-top--extra padding-bottom--extra">
        <div className="units-container">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase text-inverse">AI-native</p>
              <h2 className="text-balance text-inverse">Built for humans and machines</h2>
              <p className="text-inverse no-orphan">
                ply ships with PLY.md — a complete class reference any coding agent
                can read. One file in your context window and your AI writes correct,
                accessible UI on the first try.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding text-center">
                    <span className="icon-badge bottom-margin">
                      <Cpu size={22} />
                    </span>
                    <h3 className="text-lg font-semibold">One-File Reference</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      PLY.md fits in a single LLM context window. Every class,
                      modifier, and responsive prefix — no doc-searching required.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding text-center">
                    <span className="icon-badge bottom-margin">
                      <Zap size={22} />
                    </span>
                    <h3 className="text-lg font-semibold">Obvious Names</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      <code>unit-50</code> = 50%. <code>btn-blue</code> = blue button.
                      No shorthand to memorize, no ambiguity to hallucinate.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding text-center">
                    <span className="icon-badge bottom-margin">
                      <Keyboard size={22} />
                    </span>
                    <h3 className="text-lg font-semibold">~200 Classes</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Small surface area means fewer wrong answers.
                      Humans and agents pick the right class on the first try.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="units-container">
        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Puzzle size={28} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Just CSS</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      No JavaScript runtime. Works with React, Vue, Svelte, or plain HTML.
                      Bring your own icons, charts, and framework.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Feather size={28} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">18KB Total</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      The entire framework gzipped. Dark mode, responsive grid,
                      typography, forms, and nav — nothing to tree-shake.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Accessibility size={28} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">WCAG AA Free</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Focus outlines, semantic markup, and contrast ratios
                      baked into the CSS. Ship compliant from your first div.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <h2 className="text-balance">Explore the docs</h2>
              <p className="text-secondary no-orphan">
                A complete design system in a single stylesheet.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra no-link-style">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/grid" className="display--block border border-radius padding cursor-finger">
                    <LayoutGrid size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Grid</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Ratio-based flexbox with responsive prefixes</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/typography" className="display--block border border-radius padding cursor-finger">
                    <Type size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Typography</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Type scale from text-xs to text-5xl</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/controls" className="display--block border border-radius padding cursor-finger">
                    <ToggleLeft size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Controls</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Buttons, forms, alerts, and labels</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/navigation" className="display--block border border-radius padding cursor-finger">
                    <Compass size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Navigation</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Navbar, pills, tabs, breadcrumbs</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/tables" className="display--block border border-radius padding cursor-finger">
                    <Table2 size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Tables</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Bordered, striped, and hoverable</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/utilities" className="display--block border border-radius padding cursor-finger">
                    <Wrench size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Utilities</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Spacing, display, theming, dark mode</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
