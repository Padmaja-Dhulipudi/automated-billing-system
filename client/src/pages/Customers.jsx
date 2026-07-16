function Customers() {
  return (
    <>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customers</h2>

        <button className="btn btn-primary">
          Add Customer
        </button>
      </div>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              No customers found.
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Customers;
