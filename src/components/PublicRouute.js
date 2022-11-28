import React from "react";
import { Route, Navigate } from "react-router-dom";
import useUserData from "../hooks/useUserData";

function PublicRoute({ component: Component, ...rest }) {
  const [user, setUser] = useUserData();
  return !user ? (
    <Route {...rest}>{(props) => <Component {...props}></Component>}</Route>
  ) : (
    <Navigate to="/" replace={true} />
  );
}

export default PublicRoute;
