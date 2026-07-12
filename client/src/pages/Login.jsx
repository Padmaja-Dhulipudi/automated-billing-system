import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f4f7fc" }}
    >
      <div
        className="card shadow-lg border-0"
        style={{ width: "420px", borderRadius: "15px" }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Automated Billing</h2>
            <p className="text-muted mb-0">
              Login to access your dashboard
            </p>
          </div>

          <form>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>

              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold"
            >
              Login
            </button>
          </form>

          <hr className="my-4" />

          <div className="text-center">
            <span className="text-muted">
              Don't have an account?{" "}
            </span>

            <Link
              to="/register"
              className="text-primary fw-semibold text-decoration-none"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
