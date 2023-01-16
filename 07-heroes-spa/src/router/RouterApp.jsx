import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },

  {
    path: "/",
    element: <Navigate to="marvel" />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childHeroesRoutes,
  },
]);

export const RouterApp = () => {
  return <RouterProvider router={router} />;
};
