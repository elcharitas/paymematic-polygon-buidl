import { createContext, useContext } from "react";

export const defaults = {
  title: "Pay Me Matic",
  description: "",
  chainId: 80001,
  managerAddress: "",
  accounts: [
    {
      address: "",
      balance: 0,
      provider: null,
      connected: false,
    },
  ],
  setAccounts(accounts) {},
};

export const AppContext = createContext(defaults);

export const useApp = () => useContext(AppContext);
