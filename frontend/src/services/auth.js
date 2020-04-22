export const email = "email";

export const isAuthenticated = () => localStorage.getItem(email) !== null;

export const getToken = () => localStorage.getItem(email);

export const login = (token) => {
  localStorage.setItem(email, token);
};

export const logout = () => {
  localStorage.removeItem(email);
};