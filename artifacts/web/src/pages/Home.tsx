import { Link } from "wouter";
import {
  Cpu, Accessibility, Feather,
  LayoutGrid, Type, ToggleLeft, Compass, Table2, Wrench,
  Zap, Smartphone, Keyboard, Globe, Puzzle, BarChart3
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
                <Link href="/grid" className="btn btn-blue">Get Started</Link>
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

        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase color-blue">Built for speed</p>
              <h2 className="text-balance">Develop fast. Load fast.</h2>
              <p className="text-secondary no-orphan">
                Readable class names mean less time in the docs. Semantic HTML means
                tablet, phone, screen reader, and keyboard support is done on your first pass —
                not bolted on later.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Smartphone size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Multi-Modal First</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Responsive breakpoints, dark mode, reduced motion, and keyboard
                    navigation — all built in, not afterthoughts.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Accessibility size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Accessible by Default</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Focus-visible outlines, semantic markup, and WCAG AA contrast
                    baked into the CSS itself. Ship compliant from day one.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Feather size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Small Footprint</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    ~18KB gzipped. No JavaScript runtime. Perfect for low-bandwidth
                    connections and offline-capable apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase color-blue">Composable</p>
              <h2 className="text-balance">Bring your own everything</h2>
              <p className="text-secondary no-orphan">
                ply handles layout, typography, and controls. You pick the icon library,
                the charting library, the JS framework. It stays out of your way.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Puzzle size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Any Icon Library</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Lucide, Feather, Heroicons, Font Awesome — ply doesn't ship icons,
                    so you're never locked into one set.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <BarChart3 size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Any Data Library</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Recharts, D3, Chart.js — drop in any visualization library.
                    ply's grid gives it structure without fighting your styles.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Globe size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Any Framework</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    React, Vue, Svelte, plain HTML — ply is just CSS.
                    No JavaScript opinions, no framework coupling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--extra padding-bottom--extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase color-blue">AI-native</p>
              <h2 className="text-balance">Built for humans and machines</h2>
              <p className="text-secondary no-orphan">
                ply ships with PLY.md and ply-classes.json — a complete class reference
                any coding agent can read. The same readable names that help you
                also help AI generate correct UI on the first try.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row">
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Cpu size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Machine-Readable Docs</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    PLY.md is designed for LLM context windows. Every class, every
                    modifier, every responsive prefix — documented for agents.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Zap size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Semantic Names</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    <code>unit-50</code> means 50%. <code>btn-blue</code> means a blue button.
                    No shorthand to memorize, no ambiguity to resolve.
                  </p>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin padding">
                  <Keyboard size={28} className="color-blue display--inline-block bottom-margin" />
                  <h3 className="text-lg font-semibold">Predictable Output</h3>
                  <p className="text-sm text-secondary no-orphan no-margin">
                    Ratio-based classes produce consistent results whether
                    a human or an AI writes the markup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="background-blue padding-top--extra padding-bottom--extra">
        <div className="units-container">
          <div className="units-row centered-content">
            <div className="unit-80 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase text-inverse">Two paths, one framework</p>
              <h2 className="text-balance text-inverse">Start fast. Go deep.</h2>
              <p className="text-inverse no-orphan">
                Use the CDN for prototyping and lightweight apps. Switch to Sass when you need full control.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-50 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding">
                    <h3 className="text-lg font-semibold">CDN — Prototype</h3>
                    <p className="text-sm text-secondary no-orphan">
                      One link tag. No install, no build step. Great for wireframing ideas
                      and apps that need to support low bandwidth or offline mode.
                    </p>
                    <p className="no-orphan">
                      <code className="text-sm">{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plygrid@1/dist/css/ply.min.css">`}</code>
                    </p>
                  </div>
                </div>
                <div className="unit-50 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding">
                    <h3 className="text-lg font-semibold">Sass — Customize</h3>
                    <p className="text-sm text-secondary no-orphan">
                      Full access to color variables, mixins, and the ability to extend
                      ply at the Sass level. For when you're building a real product.
                    </p>
                    <p className="no-orphan">
                      <code className="text-sm">npm install plygrid</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-30 phone-unit-100">
              <hr className="text-inverse" />
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra">
            <div className="unit-50 phone-unit-100 text-center">
              <h3 className="text-balance text-inverse">Everything you need</h3>
              <p className="text-inverse no-orphan">
                A complete design system in a single stylesheet.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top--extra no-link-style">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/grid" className="display--block background-white border-radius padding cursor-finger">
                    <LayoutGrid size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Grid</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Ratio-based flexbox with responsive prefixes</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/typography" className="display--block background-white border-radius padding cursor-finger">
                    <Type size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Typography</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Type scale from text-xs to text-5xl</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/controls" className="display--block background-white border-radius padding cursor-finger">
                    <ToggleLeft size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Controls</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Buttons, forms, alerts, and labels</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/navigation" className="display--block background-white border-radius padding cursor-finger">
                    <Compass size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Navigation</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Navbar, pills, tabs, breadcrumbs</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/tables" className="display--block background-white border-radius padding cursor-finger">
                    <Table2 size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Tables</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Bordered, striped, and hoverable</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/utilities" className="display--block background-white border-radius padding cursor-finger">
                    <Wrench size={20} className="color-blue display--inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Utilities</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Spacing, display, theming, dark mode</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
