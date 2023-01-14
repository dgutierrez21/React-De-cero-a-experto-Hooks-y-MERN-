import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>

      <NavBar />

      <hr />

      <Outlet />
    </>
  );
};
