import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/second",
    element: <SecondPage />,
  },
  {
    path: "/third",
    element: <ThirdPage />,
  },
]);

// TODO: Add bootstrap with mice navbar and navigation
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
