import { UserContext } from "./UserContext";

const user = {
  nombre: "Pedro Pedro",
  id: 34,
  email: "pedro@pedro.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ mensaje: "Hola Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
