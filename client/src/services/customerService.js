import api from "./api";

// Get All Customers
export const getCustomers = () => {
  return api.get("/customers");
};

// Get Single Customer
export const getCustomerById = (id) => {
  return api.get(`/customers/${id}`);
};

// Add Customer
export const addCustomer = (customer) => {
  return api.post("/customers", customer);
};

// Update Customer
export const updateCustomer = (id, customer) => {
  return api.put(`/customers/${id}`, customer);
};

// Delete Customer
export const deleteCustomer = (id) => {
  return api.delete(`/customers/${id}`);
};
