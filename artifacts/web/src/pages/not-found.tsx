import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="units-container" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="units-row centered-content" style={{ width: "100%" }}>
        <div className="unit-50 tablet-unit-100 text-center">
          <p className="text-5xl font-bold" style={{ marginBottom: "0.5rem" }}>404</p>
          <h1>Page Not Found</h1>
          <p style={{ color: "var(--ply-color-secondary)", marginBottom: "2rem" }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <button className="btn btn-blue">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
