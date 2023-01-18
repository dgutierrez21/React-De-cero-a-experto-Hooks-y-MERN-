import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "123",
        name,
      },
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
