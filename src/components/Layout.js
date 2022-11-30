import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ width: "70%", margin: "80px auto" }}>{children}</div>
    </div>
  );
}

export default Layout;
