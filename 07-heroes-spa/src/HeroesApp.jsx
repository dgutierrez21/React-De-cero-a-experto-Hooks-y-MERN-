import { AuthProvider } from "./auth/context/AuthProvider";
import { RouterApp } from "./router/RouterApp";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </>
  );
};
