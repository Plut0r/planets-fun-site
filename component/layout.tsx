import React from "react";
import Header from "./header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
