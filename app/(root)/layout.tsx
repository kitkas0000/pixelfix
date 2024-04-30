import Mobilebar from "@/components/shared/Mobilebar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <Mobilebar />

      <div className="root-containter">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
