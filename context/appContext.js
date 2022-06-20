import React, { createContext, useContext, useMemo, useState } from "react";

const App = createContext();

export default function AppContext({ children }) {
  const [user, setUser] = useState('Nome do Usuario');

  
  return (
    <App.Provider value={{ user, setUser }}>
      {children}
    </App.Provider>
  );
}

export function useApp() {
  return useContext(App);
}
