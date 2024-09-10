import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import AdminLayout from "../layout/admin";
import Home from "../App";
import About from "../pages/about";
import Contact from "../pages/contact";
import Faq from "../pages/faq";
import ServiceDetails from "../pages/service-details";
import Services from "../pages/services";
import TermsConditions from "../pages/terms-conditions";
import PrivacyPolicy from "../pages/privacy-policy";
import SearchResult from "../pages/search-result";
import Team from "../pages/team";
import Pricing from "../pages/pricing";
import Login from "../pages/login";
import NotFound from "../pages/404";
import Categories from "../pages/categories";
import AdminHome from "../pages/admin/Home";
import Queries from "../pages/admin/Queries";


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
        path: "/service-details",
        element: <ServiceDetails />,
      },
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
        path: "/faq",
        element: <Faq />,
      },

      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/categories",
        element: <Categories />,
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
        element: <Queries />,
        index:true
      },
    ],
  },
]);
