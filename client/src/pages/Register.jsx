import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f4f7fc" }}
    >
      <div
        className="card shadow-lg border-0"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Create Account</h2>
            <p className="text-muted">
              Register to use the Billing System
            </p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
