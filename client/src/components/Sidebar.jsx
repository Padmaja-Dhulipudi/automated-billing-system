import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h4 className="mb-4">Menu</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/customers">
            Customers
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/products">
            Products
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/invoices">
            Invoices
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;