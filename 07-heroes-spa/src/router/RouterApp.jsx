import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "../auth/pages/ErrorPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DCPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/marvel"} />,
  },
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
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
]);

export const RouterApp = () => {
  return <RouterProvider router={router} />;
};
