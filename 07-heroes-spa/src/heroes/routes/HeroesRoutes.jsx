import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui/components";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages";

export const childHeroesRoutes = [
  {
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DcPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "hero",
    element: <HeroPage />,
  },
  {
    path: "hero/:id",
    element: <HeroPage />,
  },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
