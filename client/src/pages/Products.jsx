function Products() {
  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>

        <button className="btn btn-success">
          Add Product
        </button>
      </div>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              No products available.
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Products;
