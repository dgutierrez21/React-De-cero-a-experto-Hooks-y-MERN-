import { AboutPage } from "./src/10-useContext/AboutPage";
import ErrorPage from "./src/10-useContext/error-page";
import { HomePage } from "./src/10-useContext/HomePage";
import { LoginPage } from "./src/10-useContext/LoginPage";
import { MainApp } from "./src/10-useContext/MainApp";

export const routes = [
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
