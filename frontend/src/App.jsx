import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./page/Layout";
import Home from "./page/home/Home";
import Categori from './page/Categori';
import Latest from './page/Latest';
import Blog from './page/Blog';
import Pages from './page/Pages';
import Contact from './page/Contact';
import Admin from './page/admin/Admin';
import Basket from "./page/basket/Basket";
import Wishlist from "./page/wishlist/Wishlist";
import Detail from "./page/detail/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catagori",
        element: <Categori />,
      },
      {
        path: "/latest",
        element: <Latest />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/productdetail/:id",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return <>
  <RouterProvider router={router} /></>;
}

export default App;
