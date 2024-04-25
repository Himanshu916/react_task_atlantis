/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const INITIAL_STATE = {
  email: "",
  password: "",
  isAuthenticated: false,
};

function reducer(state, action) {
  console.log(action, "called");
  switch (action.type) {
    case "user/login":
      console.log(action);
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isAuthenticated: true,
      };

    case "user/logout":
      localStorage.clear();
      return INITIAL_STATE;

    default:
      return INITIAL_STATE;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    [],
    (initialValue = INITIAL_STATE) =>
      JSON.parse(localStorage.getItem("user")) || initialValue
  );
  console.log(state, "rendered");
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
