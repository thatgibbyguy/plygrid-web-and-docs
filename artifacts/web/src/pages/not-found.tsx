import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="units-container padding-top--extra padding-bottom--extra">
      <div className="units-row centered-content">
        <div className="unit-50 phone-unit-100 text-center">
          <p className="text-5xl font-bold bottom-margin">404</p>
          <h1>Page Not Found</h1>
          <p className="bottom-margin--extra">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn btn-blue">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
