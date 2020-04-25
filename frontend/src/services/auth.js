export const email = "email";

export const isAuthenticated = () => localStorage.getItem(email) !== null;

export const getToken = () => localStorage.getItem(email);

export const logout = () => {
  localStorage.clear();
};