import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import ScrollToTop from "../components/ScrollToTop";
import ContactUs from "../pages/ContactUs";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },{path:'my-cart', element:<Cart/>}
    ],
  },
]);
