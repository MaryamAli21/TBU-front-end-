import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer";
import AdminHeader from "../components/common/headers/headerTwo";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
