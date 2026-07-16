import api from "./api";

// Register User
export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
};

// Login User
export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};

// Get Logged-in User
export const getProfile = () => {
  return api.get("/auth/profile");
};
