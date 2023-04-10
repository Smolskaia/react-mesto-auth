// HOC— этим компонентом защитите роут /,
//чтобы на него не смогли перейти неавторизованные пользователи
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, element: Component, ...props }) {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate
      to="/sign-in"
      replace
    />
  );
}

export default ProtectedRoute;
