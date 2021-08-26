import { FC, createContext, useState } from "react";

interface UserContextValue {}

export const UserContext = createContext<UserContextValue>({});

export const UserProvider: FC = (props) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
