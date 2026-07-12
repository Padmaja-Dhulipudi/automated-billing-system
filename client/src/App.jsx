import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/invoices" element={<Invoices />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
