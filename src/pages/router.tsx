import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { DefaultRoot } from "./root/DefaultRoot";
import { About } from "./about/About";
import { NotFound } from "./NotFound";
import { Works } from "./works/Works";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: '/works',
        element: <Works />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
