import { Navigate } from "react-router-dom";

export function PrivateAuth({ children }) {
  const token = localStorage.getItem("userToken");
  return (!token) ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}