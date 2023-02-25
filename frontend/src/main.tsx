import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SillyCounterPage } from "./pages/SillyCounterPage";
import { SecondPage } from "./pages/SecondPage";
import { DashFirstPage } from "./pages/DashFirstPage";
import { Layout } from "./Layout";
import { DashSecondPage } from "./pages/DashSecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <SillyCounterPage />,
      },
      {
        path: "second",
        element: <SecondPage />,
      },
      {
        path: "third",
        element: <DashFirstPage />,
      },
      {
        path: "fourth",
        element: <DashSecondPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
