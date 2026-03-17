import { Link } from "wouter";
import CodeBlock from "../components/CodeBlock";

export default function NavigationPage() {
  return (
    <div>
      <section className="padding-top-extra padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase color-blue">Wayfinding</p>
        <h1 className="text-balance">Navigation</h1>
        <p className="lead no-orphan">
          Horizontal navbars, pill navigation, tabs, stacked vertical nav,
          breadcrumbs, and pagination. All built on semantic HTML.
        </p>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="navbar"
      >
        <p className="text-xs font-semibold uppercase color-blue">Horizontal</p>
        <h2>Navbar</h2>

        <div className="border border-radius padding">
          <nav className="navbar">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <CodeBlock
          code={`<nav class="navbar">
  <ul>
    <li class="active"><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`}
        />

        <h3>Navbar Alignment</h3>
        <div className="border border-radius padding">
          <p className="text-sm text-secondary">Left-aligned (default)</p>
          <nav className="navbar navbar-left">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="bottom-margin-extra"></div>
          <p className="text-sm text-secondary">Centered</p>
          <nav className="navbar navbar-centered">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="bottom-margin-extra"></div>
          <p className="text-sm text-secondary">Right-aligned</p>
          <nav className="navbar navbar-right">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="navbar-borders"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Border Variants
        </p>
        <h2>Navbar Border Styles</h2>
        <p className="no-orphan">
          Control the border weight, remove it entirely, or apply a color
          accent.
        </p>

        <h3>Thick Border</h3>
        <div className="border border-radius padding bottom-margin">
          <nav className="navbar navbar-thick">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <h3>Borderless</h3>
        <div className="border border-radius padding bottom-margin">
          <nav className="navbar navbar-borderless">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <h3>Colored Borders</h3>
        <div className="border border-radius padding">
          <p className="text-sm text-secondary">Blue</p>
          <nav className="navbar navbar-border-blue">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="bottom-margin-extra"></div>
          <p className="text-sm text-secondary">Green</p>
          <nav className="navbar navbar-border-green">
            <ul>
              <li className="active">
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
            </ul>
          </nav>
          <div className="bottom-margin-extra"></div>
          <p className="text-sm text-secondary">Red</p>
          <nav className="navbar navbar-border-red">
            <ul>
              <li className="active">
                <a href="#">Alerts</a>
              </li>
              <li>
                <a href="#">Incidents</a>
              </li>
              <li>
                <a href="#">Logs</a>
              </li>
            </ul>
          </nav>
          <div className="bottom-margin-extra"></div>
          <p className="text-sm text-secondary">Yellow</p>
          <nav className="navbar navbar-border-yellow">
            <ul>
              <li className="active">
                <a href="#">Warnings</a>
              </li>
              <li>
                <a href="#">Notices</a>
              </li>
              <li>
                <a href="#">Queue</a>
              </li>
            </ul>
          </nav>
        </div>

        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>navbar-thick</code>
              </td>
              <td>Bold 2px border</td>
            </tr>
            <tr>
              <td>
                <code>navbar-borderless</code>
              </td>
              <td>No border, active uses background highlight</td>
            </tr>
            <tr>
              <td>
                <code>navbar-border-blue</code>
              </td>
              <td>Blue bottom border</td>
            </tr>
            <tr>
              <td>
                <code>navbar-border-green</code>
              </td>
              <td>Green bottom border</td>
            </tr>
            <tr>
              <td>
                <code>navbar-border-red</code>
              </td>
              <td>Red bottom border</td>
            </tr>
            <tr>
              <td>
                <code>navbar-border-yellow</code>
              </td>
              <td>Yellow bottom border</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`<nav class="navbar navbar-thick">...</nav>
<nav class="navbar navbar-borderless">...</nav>
<nav class="navbar navbar-border-blue">...</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="navbar-mobile"
      >
        <p className="text-xs font-semibold uppercase color-blue">Mobile</p>
        <h2>Mobile Overflow</h2>
        <p className="no-orphan">
          By default, navbars scroll horizontally on mobile. Use{" "}
          <code>navbar-stack</code> to wrap items instead.
        </p>

        <div className="border border-radius padding">
          <nav className="navbar navbar-stack">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <CodeBlock
          code={`<nav class="navbar navbar-stack">
  <ul>
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="pills"
      >
        <p className="text-xs font-semibold uppercase color-blue">Pills</p>
        <h2>Pill Navigation</h2>

        <div className="border border-radius padding">
          <nav className="navbar-pills">
            <ul>
              <li className="active">
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Published</a>
              </li>
              <li>
                <a href="#">Drafts</a>
              </li>
              <li>
                <a href="#">Archived</a>
              </li>
            </ul>
          </nav>
        </div>

        <CodeBlock
          code={`<nav class="navbar-pills">
  <ul>
    <li class="active"><a href="#">All</a></li>
    <li><a href="#">Published</a></li>
    <li><a href="#">Drafts</a></li>
  </ul>
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="tabs"
      >
        <p className="text-xs font-semibold uppercase color-blue">Tabs</p>
        <h2>Tab Navigation</h2>

        <div className="border border-radius padding">
          <div className="nav-tabs">
            <ul>
              <li className="active">
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Logs</a>
              </li>
            </ul>
          </div>
        </div>

        <CodeBlock
          code={`<div class="nav-tabs">
  <ul>
    <li class="active"><a href="#">Overview</a></li>
    <li><a href="#">Analytics</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="stacked"
      >
        <p className="text-xs font-semibold uppercase color-blue">Vertical</p>
        <h2>Stacked Navigation</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-33 phone-unit-100">
              <nav className="nav-stacked">
                <ul>
                  <li className="active">
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <a href="#">Analytics</a>
                  </li>
                  <li>
                    <a href="#">Users</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`<nav class="nav-stacked">
  <ul>
    <li class="active"><a href="#">Dashboard</a></li>
    <li><a href="#">Analytics</a></li>
    <li><a href="#">Users</a></li>
  </ul>
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="breadcrumbs"
      >
        <p className="text-xs font-semibold uppercase color-blue">
          Breadcrumbs
        </p>
        <h2>Breadcrumb Navigation</h2>

        <div className="border border-radius padding">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li className="active">
                <span>Widget Pro</span>
              </li>
            </ul>
          </nav>
        </div>

        <CodeBlock
          code={`<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li class="active"><span>Current Page</span></li>
  </ul>
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="pagination"
      >
        <p className="text-xs font-semibold uppercase color-blue">Pagination</p>
        <h2>Page Navigation</h2>

        <div className="border border-radius padding">
          <nav aria-label="Pagination">
            <ul className="pagination">
              <li>
                <a href="#" aria-label="Previous page">&laquo;</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#" aria-current="page">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" aria-label="Next page">&raquo;</a>
              </li>
            </ul>
          </nav>
        </div>

        <CodeBlock
          code={`<nav aria-label="Pagination">
  <ul class="pagination">
    <li><a href="#" aria-label="Previous page">&laquo;</a></li>
    <li><a href="#">1</a></li>
    <li class="active"><a href="#" aria-current="page">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#" aria-label="Next page">&raquo;</a></li>
  </ul>
</nav>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="vertical"
      >
        <p className="text-xs font-semibold uppercase color-blue">Vertical</p>
        <h2>Vertical Navbar</h2>
        <p className="no-orphan">
          Use <code>navbar-vertical</code> for a sidebar-style navbar with a left
          border instead of bottom border.
        </p>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-33 phone-unit-100">
              <nav className="navbar navbar-vertical">
                <ul>
                  <li className="active"><a href="#">Dashboard</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Settings</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="mobile-toggle"
      >
        <p className="text-xs font-semibold uppercase color-blue">Mobile</p>
        <h2>Navigation Toggle</h2>
        <p className="no-orphan">
          Mobile hamburger menu toggle for showing/hiding navigation.
        </p>

        <table className="table-stroked">
          <tbody>
            <tr><td><code>navigation-toggle</code></td><td>Hamburger toggle button</td></tr>
            <tr><td><code>navigation-toggle-solid</code></td><td>Solid background variant</td></tr>
            <tr><td><code>navigation-fixed</code></td><td>Fixed position (top: 0)</td></tr>
          </tbody>
        </table>

        <CodeBlock
          code={`<span class="navigation-toggle">
  <span>Menu</span>
</span>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra border-bottom"
        id="nav-reference"
      >
        <p className="text-xs font-semibold uppercase color-blue">Reference</p>
        <h2>Navigation Reference</h2>

        <table className="table-stroked">
          <tbody>
            <tr><td><code>navbar</code></td><td>Horizontal navigation bar</td></tr>
            <tr><td><code>navbar-centered</code></td><td>Center-aligned items</td></tr>
            <tr><td><code>navbar-left</code></td><td>Left-aligned items</td></tr>
            <tr><td><code>navbar-right</code></td><td>Right-aligned items</td></tr>
            <tr><td><code>navbar-vertical</code></td><td>Vertical sidebar layout</td></tr>
            <tr><td><code>navbar-stack</code></td><td>Wrap items on mobile</td></tr>
            <tr><td><code>navbar-pills</code></td><td>Pill-style navigation</td></tr>
            <tr><td><code>nav-stacked</code></td><td>Stacked vertical list</td></tr>
            <tr><td><code>nav-tabs</code></td><td>Tab navigation</td></tr>
            <tr><td><code>nav-stats</code></td><td>Navigation with stats/badges</td></tr>
            <tr><td><code>breadcrumbs</code></td><td>Breadcrumb navigation</td></tr>
            <tr><td><code>breadcrumbs-path</code></td><td>Path-style separators</td></tr>
            <tr><td><code>pagination</code></td><td>Page navigation</td></tr>
          </tbody>
        </table>
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="combined">
        <p className="text-xs font-semibold uppercase color-blue">Pattern</p>
        <h2>Dashboard Layout</h2>
        <p className="no-orphan">
          Combining navbar with stacked sidebar navigation and content area.
        </p>

        <div className="border border-radius padding">
          <nav className="navbar navbar-border-blue">
            <ul>
              <li className="active">
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
          <div className="units-row margin-top-extra">
            <aside className="unit-20 phone-unit-100">
              <nav className="nav-stacked">
                <ul>
                  <li className="active">
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Analytics</a>
                  </li>
                  <li>
                    <a href="#">Users</a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="unit-80 phone-unit-100">
              <div className="units-row equal-height">
                <div className="unit-33 phone-unit-100">
                  <div className="border border-radius padding">
                    <p className="h4 text-sm uppercase">Revenue</p>
                    <p className="text-3xl font-bold">$12,340</p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100">
                  <div className="border border-radius padding">
                    <p className="h4 text-sm uppercase">Users</p>
                    <p className="text-3xl font-bold">1,234</p>
                  </div>
                </div>
                <div className="unit-33 phone-unit-100">
                  <div className="border border-radius padding">
                    <p className="h4 text-sm uppercase">Orders</p>
                    <p className="text-3xl font-bold">567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`<nav class="navbar navbar-border-blue">
  <ul>
    <li class="active"><a href="#">Dashboard</a></li>
    <li><a href="#">Reports</a></li>
  </ul>
</nav>
<div class="units-row margin-top-extra">
  <aside class="unit-20 phone-unit-100">
    <nav class="nav-stacked">
      <ul>
        <li class="active"><a href="#">Overview</a></li>
        <li><a href="#">Analytics</a></li>
      </ul>
    </nav>
  </aside>
  <div class="unit-80 phone-unit-100">
    <!-- Content area -->
  </div>
</div>`}
        />
      </section>

      <section
        className="padding-top-extra padding-bottom-extra"
        id="next-steps"
      >
        <p className="text-xs font-semibold uppercase color-blue">Next</p>
        <h2>Next Steps</h2>
        <p className="text-secondary no-orphan">
          Display data with <Link href="/docs/tables">tables</Link>, or add
          feedback with <Link href="/docs/alerts">alerts & labels</Link>.
        </p>
      </section>
    </div>
  );
}
