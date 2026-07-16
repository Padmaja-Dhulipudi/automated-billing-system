function Dashboard() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5>Total Customers</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5>Total Products</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5>Total Invoices</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5>Total Revenue</h5>
              <h2>$0</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
