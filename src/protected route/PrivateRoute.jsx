import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // Check if user is logged in (you can change this to context or global state)
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
  return storedUser ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
