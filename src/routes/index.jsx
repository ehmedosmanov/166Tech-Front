import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/Root";
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import OurMedia from "../pages/OurMedia";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "our-team",
        element: <OurTeam />, 
      },
      {
        path: "our-media",
        element: <OurMedia />, 
      },
    ],
  },
]);
