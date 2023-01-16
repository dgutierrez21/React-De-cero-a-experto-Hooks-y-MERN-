import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { DcPage, MarvelPage } from "../heroes/pages";
import { HeroesApp } from "../HeroesApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/marvel" />,
  },
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const RouterApp = () => {
  return <RouterProvider router={router} />;
};
