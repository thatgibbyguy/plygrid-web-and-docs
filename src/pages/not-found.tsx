import { Link } from "wouter";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — ply";
  }, []);

  return (
    <div className="units-container padding-top-extra padding-bottom-extra">
      <div className="units-row centered-content">
        <div className="unit-50 phone-unit-100 text-center">
          <h1>
            <span className="text-5xl font-bold display-block bottom-margin">404</span>
            Page Not Found
          </h1>
          <p className="bottom-margin-extra">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn btn-blue">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
