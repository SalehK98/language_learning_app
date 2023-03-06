import React from "react";
import { useState, createContext } from "react";

export const MyLoginContext = createContext();

export default function LoginContext({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <MyLoginContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
      <div>{children}</div>
    </MyLoginContext.Provider>
  );
}
