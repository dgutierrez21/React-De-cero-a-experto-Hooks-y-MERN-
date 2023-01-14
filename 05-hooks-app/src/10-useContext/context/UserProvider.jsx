import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   nombre: "Pedro Pedro",
//   id: 34,
//   email: "pedro@pedro.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
