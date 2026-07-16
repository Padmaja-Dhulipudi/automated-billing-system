function Invoices() {
  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Invoices</h2>

        <button className="btn btn-primary">
          Create Invoice
        </button>
      </div>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Invoice No.</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              No invoices available.
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Invoices;
