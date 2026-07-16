import api from "./api";

// Get All Products
export const getProducts = () => {
  return api.get("/products");
};

// Get Single Product
export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

// Add Product
export const addProduct = (product) => {
  return api.post("/products", product);
};

// Update Product
export const updateProduct = (id, product) => {
  return api.put(`/products/${id}`, product);
};

// Delete Product
export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
