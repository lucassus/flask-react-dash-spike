import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import {First} from "./pages/First";
import {Second} from "./pages/Second";


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "/second",
    element: <Second />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
)
