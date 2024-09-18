import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Products from "./components/body/products/Products";
import ProductDetails from "./components/body/product-details/ProductDetails";
import Checkout from "./components/body/checkout/Checkout";

const Layout = () => {
  return (
    <div className="flex flex-col pl-4 m-5 bg-blue-100 border-2 rounded-lg border-red-950">
      <div><Header /></div>
      <div><Navbar /></div>
      <div className="flex"><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/product-details",
        Component: ProductDetails,
      },
      {
        path: "/checkout",
        Component: Checkout
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
