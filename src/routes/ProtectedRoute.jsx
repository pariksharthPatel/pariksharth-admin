import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const {
    isLogged,
    role: userRole,
    name,
    email,
  } = useSelector((state) => state.auth);
  console.log("role", role);
  if (userRole && userRole !== role) {
    return <Navigate to={"/unauthorized"} />;
  }
  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
