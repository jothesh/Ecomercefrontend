import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Cardview from "./components/Cardview/Cardview";
import { ProductView } from "./components/Productview/ProductView";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  
  },
  {
    path: "card-view",
    element: <Cardview/>,
  },
  {
    path: "product-view",
    element: <ProductView/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)