import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "70px" }}>{children}</div>
    </div>
  );
}

export default Layout;
