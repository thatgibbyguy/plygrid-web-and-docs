import CodeBlock from "../components/CodeBlock";

export default function NavigationPage() {
  return (
    <div className="units-container">
      <section className="padding-top--extra padding-bottom--extra border-bottom">
        <p className="text-xs font-semibold uppercase color-gray-50">Wayfinding</p>
        <h1>Navigation</h1>
        <p className="lead color-gray-60">
          Horizontal navbars, pill navigation, tabs, stacked vertical nav, breadcrumbs, and pagination.
          All built on semantic HTML.
        </p>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="navbar">
        <p className="text-xs font-semibold uppercase color-gray-50">Horizontal</p>
        <h2>Navbar</h2>

        <div className="border border-radius padding">
          <nav className="navbar">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>

        <CodeBlock code={`<nav class="navbar">
  <ul>
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`} />

        <h3>Navbar Alignment</h3>
        <div className="border border-radius padding">
          <p className="text-sm color-gray-50">Centered</p>
          <nav className="navbar navbar--centered">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="bottom-margin--extra"></div>
          <p className="text-sm color-gray-50">Right-aligned</p>
          <nav className="navbar navbar--right">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="pills">
        <p className="text-xs font-semibold uppercase color-gray-50">Pills</p>
        <h2>Pill Navigation</h2>

        <div className="border border-radius padding">
          <nav className="navbar-pills">
            <ul>
              <li className="active"><a href="#">All</a></li>
              <li><a href="#">Published</a></li>
              <li><a href="#">Drafts</a></li>
              <li><a href="#">Archived</a></li>
            </ul>
          </nav>
        </div>

        <CodeBlock code={`<nav class="navbar-pills">
  <ul>
    <li class="active"><a href="#">All</a></li>
    <li><a href="#">Published</a></li>
    <li><a href="#">Drafts</a></li>
  </ul>
</nav>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="tabs">
        <p className="text-xs font-semibold uppercase color-gray-50">Tabs</p>
        <h2>Tab Navigation</h2>

        <div className="border border-radius padding">
          <div className="nav-tabs">
            <ul>
              <li className="active"><a href="#">Overview</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logs</a></li>
            </ul>
          </div>
        </div>

        <CodeBlock code={`<div class="nav-tabs">
  <ul>
    <li class="active"><a href="#">Overview</a></li>
    <li><a href="#">Analytics</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="stacked">
        <p className="text-xs font-semibold uppercase color-gray-50">Vertical</p>
        <h2>Stacked Navigation</h2>

        <div className="border border-radius padding">
          <div className="units-row">
            <div className="unit-33">
              <nav className="nav-stacked">
                <ul>
                  <li className="active"><a href="#">Dashboard</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Users</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <CodeBlock code={`<nav class="nav-stacked">
  <ul>
    <li class="active"><a href="#">Dashboard</a></li>
    <li><a href="#">Analytics</a></li>
    <li><a href="#">Users</a></li>
  </ul>
</nav>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="breadcrumbs">
        <p className="text-xs font-semibold uppercase color-gray-50">Breadcrumbs</p>
        <h2>Breadcrumb Navigation</h2>

        <div className="border border-radius padding">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Category</a></li>
              <li className="active"><span>Widget Pro</span></li>
            </ul>
          </nav>
        </div>

        <CodeBlock code={`<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li class="active"><span>Current Page</span></li>
  </ul>
</nav>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra border-bottom" id="pagination">
        <p className="text-xs font-semibold uppercase color-gray-50">Pagination</p>
        <h2>Page Navigation</h2>

        <div className="border border-radius padding">
          <ul className="pagination">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>

        <CodeBlock code={`<ul class="pagination">
  <li><a href="#">&laquo;</a></li>
  <li><a href="#">1</a></li>
  <li class="active"><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">&raquo;</a></li>
</ul>`} />
      </section>

      <section className="padding-top--extra padding-bottom--extra" id="combined">
        <p className="text-xs font-semibold uppercase color-gray-50">Pattern</p>
        <h2>Dashboard Layout</h2>
        <p>Combining navbar with stacked sidebar navigation and content area.</p>

        <div className="border border-radius padding">
          <nav className="navbar">
            <ul>
              <li className="active"><a href="#">Dashboard</a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </nav>
          <div className="units-row margin-top--extra">
            <aside className="unit-20">
              <nav className="nav-stacked">
                <ul>
                  <li className="active"><a href="#">Overview</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Users</a></li>
                </ul>
              </nav>
            </aside>
            <main className="unit-80">
              <div className="units-row">
                <div className="unit-33">
                  <div className="border border-radius padding">
                    <h4 className="text-sm uppercase">Revenue</h4>
                    <p className="text-3xl font-bold">$12,340</p>
                  </div>
                </div>
                <div className="unit-33">
                  <div className="border border-radius padding">
                    <h4 className="text-sm uppercase">Users</h4>
                    <p className="text-3xl font-bold">1,234</p>
                  </div>
                </div>
                <div className="unit-33">
                  <div className="border border-radius padding">
                    <h4 className="text-sm uppercase">Orders</h4>
                    <p className="text-3xl font-bold">567</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
