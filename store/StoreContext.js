import { createContext, useState } from "react";

const storeContextDefaultValues = {
  users: [],
  setUsers: () => {},
  topCollections: [],
  setTopCollections: () => {},
  topGames: [],
  setTopGames: () => {},
};

export const StoreContext = createContext(storeContextDefaultValues);

export function AppWrapper({ children }) {
  const [users, setUsers] = useState([]);
  const [topCollections, setTopCollections] = useState([]);
  const [topGames, setTopGames] = useState([]);

  const sharedContext = {
    users,
    setUsers,
    topCollections,
    setTopCollections,
    topGames,
    setTopGames,
  };

  return (
    <StoreContext.Provider value={sharedContext}>
      {children}
    </StoreContext.Provider>
  );
}
