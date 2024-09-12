import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../App";
import AdminLayout from "../layout/admin";
import RootLayout from "../layout/root";
import NotFound from "../pages/404";
import About from "../pages/about";
import AdminHome from "../pages/admin/Home";
import Queries from "../pages/admin/Queries";
import Contact from "../pages/contact";
import Services from "../pages/services";
import TermsConditions from "../pages/terms-conditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Navigate to="inquiries" replace />, 
      },
      {
        path: "inquiries",
        element: <Queries />,
        index: true,
      },
      {
        path: "login",
        element: <AdminHome />,
        index: true,
      },
    ],
  },
]);
