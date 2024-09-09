import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/Root";
import Home from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
