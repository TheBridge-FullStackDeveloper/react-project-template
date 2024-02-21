import { useState, useEffect, createContext } from "react";
import { isUserLoggedIn } from "../service/auth";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const { data } = useQuery({
    queryKey: ["currentUser"],
    queryFn: isUserLoggedIn,
  });

  useEffect(() => {
    if (data?.user) {
      setCurrentUser(data?.user);
    } else {
      setCurrentUser(null);
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
