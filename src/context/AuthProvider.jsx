import { useState, useEffect, createContext } from "react";
import { isUserLoggedIn } from "../service/auth";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: isUserLoggedIn,
  });

  if (isLoading) {
    return 'Loading user...'
  }

  return (
    <AuthContext.Provider value={{ currentUser: data.user || null }}>
      {children}
    </AuthContext.Provider>
  );
};
