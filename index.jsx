import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Layout from "./components/CountryInfoComponents/Layout";
import Routers from "./components/Routers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routers />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:username",
        element: <Layout />,
      },
    ],
  },
]);

let root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
