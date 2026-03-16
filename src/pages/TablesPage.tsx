import CodeBlock from "../components/CodeBlock";

const sampleData = [
  { name: "Jane Cooper", email: "jane@example.com", role: "Admin", status: "Active" },
  { name: "John Smith", email: "john@example.com", role: "Editor", status: "Active" },
  { name: "Bob Johnson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
  { name: "Alice Williams", email: "alice@example.com", role: "Editor", status: "Active" },
  { name: "Charlie Brown", email: "charlie@example.com", role: "Viewer", status: "Pending" },
];

export default function TablesPage() {
  return (
    <div>
      <section className="padding-bottom-extra border-bottom">
        <p className="text-xs font-semibold uppercase">Data</p>
        <h1 className="text-balance">Tables</h1>
        <p className="lead no-orphan">
          Tables are styled automatically with semantic HTML. Add modifier classes for bordered, striped,
          hoverable, and simple variants.
        </p>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="default">
        <p className="text-xs font-semibold uppercase">Default</p>
        <h2>Standard Table</h2>

        <div className="border border-radius padding">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td><span className={row.status === "Active" ? "success" : row.status === "Inactive" ? "error" : ""}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="bordered">
        <p className="text-xs font-semibold uppercase">Bordered</p>
        <h2>Bordered Table</h2>

        <div className="border border-radius padding">
          <table className="table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.slice(0, 3).map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock code={`<table class="table-bordered">
  <thead>
    <tr><th>Name</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr><td>Jane</td><td>jane@example.com</td></tr>
  </tbody>
</table>`} />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="striped">
        <p className="text-xs font-semibold uppercase">Striped</p>
        <h2>Striped Table</h2>

        <div className="border border-radius padding">
          <table className="table-stripped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock code={`<table class="table-stripped">
  <!-- Alternating row backgrounds -->
</table>`} />
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="hoverable">
        <p className="text-xs font-semibold uppercase">Interactive</p>
        <h2>Hoverable Table</h2>
        <p>Hover over the rows to see the highlight effect.</p>

        <div className="border border-radius padding">
          <table className="table-hovered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="simple">
        <p className="text-xs font-semibold uppercase">Minimal</p>
        <h2>Simple & Stroked Tables</h2>

        <div className="units-row">
          <div className="unit-50 phone-unit-100">
            <h3>Simple (no borders, no left padding)</h3>
            <div className="border border-radius padding">
              <table className="table-simple">
                <tbody>
                  <tr><td>Grid System</td><td>16 widths</td></tr>
                  <tr><td>Buttons</td><td>6 colors</td></tr>
                  <tr><td>Alerts</td><td>5 variants</td></tr>
                  <tr><td>Navigation</td><td>6 types</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="unit-50 phone-unit-100">
            <h3>Stroked (bottom borders only)</h3>
            <div className="border border-radius padding">
              <table className="table-stroked">
                <tbody>
                  <tr><td>Typography</td><td>9 sizes</td></tr>
                  <tr><td>Helpers</td><td>50+ classes</td></tr>
                  <tr><td>Dark Mode</td><td>Built-in</td></tr>
                  <tr><td>Theming</td><td>CSS vars</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="flat">
        <p className="text-xs font-semibold uppercase">Flat</p>
        <h2>Flat Table</h2>
        <p>No borders and no padding with <code>table-flat</code>.</p>

        <div className="border border-radius padding">
          <table className="table-flat">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>AI-Native</td><td>Ships PLY.md and ply-classes.json</td></tr>
              <tr><td>Accessible</td><td>WCAG AA contrast by default</td></tr>
              <tr><td>Small</td><td>~18KB gzipped full bundle</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="padding-top-extra padding-bottom-extra border-bottom" id="responsive">
        <p className="text-xs font-semibold uppercase">Responsive</p>
        <h2>Responsive Table Container</h2>
        <p>
          Wrap tables in <code>table-container</code> for horizontal scrolling on small screens.
        </p>

        <div className="border border-radius padding">
          <div className="table-container">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>001</td><td>Jane Cooper</td><td>jane@example.com</td><td>Admin</td><td>Active</td><td>Engineering</td><td>New York</td><td>2023-01-15</td></tr>
                <tr><td>002</td><td>John Smith</td><td>john@example.com</td><td>Editor</td><td>Active</td><td>Design</td><td>London</td><td>2023-03-22</td></tr>
                <tr><td>003</td><td>Bob Johnson</td><td>bob@example.com</td><td>Viewer</td><td>Inactive</td><td>Marketing</td><td>Tokyo</td><td>2022-11-08</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <CodeBlock code={`<div class="table-container">
  <table class="table-bordered">
    <!-- Wide table with horizontal scroll -->
  </table>
</div>`} />
      </section>

      <section className="padding-top-extra padding-bottom-extra" id="combined">
        <p className="text-xs font-semibold uppercase">Combined</p>
        <h2>Combined Modifiers</h2>
        <p>Classes can be combined for richer table styles.</p>

        <div className="border border-radius padding">
          <table className="table-bordered table-stripped table-hovered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td><span className={row.status === "Active" ? "success" : row.status === "Inactive" ? "error" : ""}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock code={`<table class="table-bordered table-stripped table-hovered">
  <!-- Bordered + Striped + Hoverable -->
</table>`} />
      </section>
    </div>
  );
}
