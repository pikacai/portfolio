import React, { createContext, useContext, useState } from "react";


interface AppContextType {
  scrollPositionY: number;
  setScrollPositionY: React.Dispatch<React.SetStateAction<number>>;
}
const AppContext = createContext<AppContextType>({
  scrollPositionY: 0,
  setScrollPositionY: () => {}
});

const useAppContext = () => useContext(AppContext);

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  return (
    <AppContext.Provider value={{ scrollPositionY, setScrollPositionY }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider, useAppContext };
