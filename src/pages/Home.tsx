import { Link } from "wouter";
import {
  LayoutGrid, Type, ToggleLeft, Compass, Table2, Wrench,
  Eye, Moon, Activity, Monitor, BookOpen, FileJson,
  ShieldCheck, Feather, Cpu,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="padding-top-extra padding-bottom-extra">
        <div className="units-container">
          <div className="units-row centered-content">
            <div className="unit-60 phone-unit-100 text-center">
              <h1 className="text-5xl font-bold text-balance">Compliant UI from the first prompt.</h1>
              <p className="text-xl text-secondary no-orphan">
                You or your AI writes ADA-compliant, accessible, WCAG 2.1+ interfaces out of the box.
                No training. No audits to fail.
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
        <section className="padding-bottom-extra padding-top-extra">
          <div className="units-row centered-content">
            <div className="unit-60 phone-unit-100">
              <div className="units-row">
                <div className="unit-33 phone-unit-100 text-center bottom-margin">
                  <ShieldCheck size={32} className="color-blue display-inline-block bottom-margin" />
                  <span className="text-2xl font-bold display-block">WCAG 2.1 AA</span>
                  <span className="text-xs uppercase text-muted">Every color, every mode</span>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin">
                  <Feather size={32} className="color-blue display-inline-block bottom-margin" />
                  <span className="text-2xl font-bold display-block">18KB</span>
                  <span className="text-xs uppercase text-muted">Gzipped, zero JavaScript</span>
                </div>
                <div className="unit-33 phone-unit-100 text-center bottom-margin">
                  <Cpu size={32} className="color-blue display-inline-block bottom-margin" />
                  <span className="text-2xl font-bold display-block">AI Ready</span>
                  <span className="text-xs uppercase text-muted">One file in context</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="units-container">
        <section className="bg-blue border-radius-xl padding-top-extra padding-bottom-extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase text-on-color">How it works</p>
              <h2 className="text-balance text-on-color">Two steps. No configuration.</h2>
            </div>
          </div>

          <div className="units-row centered-content padding-top-extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-50 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding text-center">
                    <span className="icon-badge bottom-margin">
                      <BookOpen size={22} />
                    </span>
                    <h3 className="text-lg font-semibold">Give your agent PLY.md</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      One Markdown file with every class, rule, and snippet.
                      Fits in a single context window. Your AI writes correct
                      markup immediately.
                    </p>
                  </div>
                </div>
                <div className="unit-50 phone-unit-100 bottom-margin">
                  <div className="background-white border-radius padding text-center">
                    <span className="icon-badge bottom-margin">
                      <FileJson size={22} />
                    </span>
                    <h3 className="text-lg font-semibold">The CSS handles the rest</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Contrast ratios, focus outlines, dark mode, reduced motion,
                      screen reader support — baked into the stylesheet.
                      Nothing to configure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="units-container">
        <section className="padding-top-extra padding-bottom-extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase">Compliance</p>
              <h2 className="text-balance">What you stop worrying about</h2>
              <p className="text-secondary no-orphan">
                Every feature below is on by default. No plugins, no overrides, no forgetting.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top-extra">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Eye size={28} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Color Contrast</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Every color combination passes WCAG AA.
                      Light mode, dark mode, high contrast.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Monitor size={28} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Focus Management</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Visible <code>:focus-visible</code> outlines on every
                      interactive element. Keyboard navigation works everywhere.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Moon size={28} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Dark Mode</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Respects <code>prefers-color-scheme</code> automatically.
                      Override with <code>data-theme</code> for manual control.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <Activity size={28} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Reduced Motion</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      All animations respect <code>prefers-reduced-motion</code>.
                      Disabled automatically for users who need it.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <LayoutGrid size={28} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Screen Readers</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      <code>sr-only</code> for hidden labels, skip links,
                      semantic HTML throughout. Built for assistive tech.
                    </p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <div className="border border-radius padding text-center">
                    <LayoutGrid size={28} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-lg font-semibold">Responsive</h3>
                    <p className="text-sm text-secondary no-orphan no-margin">
                      Ratio-based grid collapses cleanly at every breakpoint.
                      Seven responsive prefixes, zero media query writing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="units-row centered-content">
          <hr className="width-50" />
        </div>

        <section className="padding-top-extra padding-bottom-extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <p className="text-xs font-semibold uppercase">AI native</p>
              <h2 className="text-balance">One file. ~200 classes. No ambiguity.</h2>
              <p className="text-secondary no-orphan">
                <code>unit-50</code> = 50%. <code>btn-blue</code> = blue button.
                No shorthand to memorize, no abstraction to hallucinate.
                Your agent reads PLY.md once and builds correct UI from there.
              </p>
            </div>
          </div>
        </section>

        <div className="units-row centered-content">
          <hr className="width-20" />
        </div>

        <section className="padding-top-extra padding-bottom-extra">
          <div className="units-row centered-content">
            <div className="unit-50 phone-unit-100 text-center">
              <h2 className="text-balance">Explore the docs</h2>
              <p className="text-secondary no-orphan">
                Everything in one stylesheet. Nothing to configure.
              </p>
            </div>
          </div>

          <div className="units-row centered-content padding-top-extra no-link-style">
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/grid" className="display-block border border-radius padding cursor-finger">
                    <LayoutGrid size={20} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Grid</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Ratio-based flexbox with responsive prefixes</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/typography" className="display-block border border-radius padding cursor-finger">
                    <Type size={20} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Typography</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Type scale from text-xs to text-5xl</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/controls" className="display-block border border-radius padding cursor-finger">
                    <ToggleLeft size={20} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Controls</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Buttons, forms, alerts, and labels</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/navigation" className="display-block border border-radius padding cursor-finger">
                    <Compass size={20} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Navigation</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Navbar, pills, tabs, breadcrumbs</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/tables" className="display-block border border-radius padding cursor-finger">
                    <Table2 size={20} className="color-blue display-inline-block bottom-margin" />
                    <h3 className="text-base font-semibold">Tables</h3>
                    <p className="text-sm text-muted no-margin no-orphan">Bordered, striped, and hoverable</p>
                  </Link>
                </div>
                <div className="unit-33 phone-unit-100 bottom-margin">
                  <Link href="/utilities" className="display-block border border-radius padding cursor-finger">
                    <Wrench size={20} className="color-blue display-inline-block bottom-margin" />
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
