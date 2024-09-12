import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/common/footer";
import AdminHeader from "../components/common/headers/AdminHeader";

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/admin/login");
    }
  },[]);
  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
