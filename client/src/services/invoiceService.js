import api from "./api";

// Get All Invoices
export const getInvoices = () => {
  return api.get("/invoices");
};

// Get Single Invoice
export const getInvoiceById = (id) => {
  return api.get(`/invoices/${id}`);
};

// Create Invoice
export const createInvoice = (invoice) => {
  return api.post("/invoices", invoice);
};

// Update Invoice
export const updateInvoice = (id, invoice) => {
  return api.put(`/invoices/${id}`, invoice);
};

// Delete Invoice
export const deleteInvoice = (id) => {
  return api.delete(`/invoices/${id}`);
};
