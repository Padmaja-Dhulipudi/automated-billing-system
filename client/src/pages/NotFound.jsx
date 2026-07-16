import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="display-1">404</h1>

      <h3>Page Not Found</h3>

      <Link to="/" className="btn btn-primary mt-3">
        Back to Login
      </Link>
    </div>
  );
}

export default NotFound;
