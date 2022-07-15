import { defaults, AppContext, useStore } from "../hooks";

export const AppProvider = ({ children }) => {
  const [accounts, setAccounts] = useStore([], "app");

  return (
    <AppContext.Provider value={{ ...defaults, accounts, setAccounts }}>
      {children}
    </AppContext.Provider>
  );
};
