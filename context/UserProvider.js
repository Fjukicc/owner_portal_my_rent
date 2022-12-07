import { createContext, useState } from "react";

export const UserContext = createContext("Login");

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({
    name: "Andro",
    surname: "Jukic",
    userId: null,
  });

  return (
    <>
      <UserContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
