import { createContext, useContext } from "react";

export const defaults = {
  title: "Pay Me Matic",
  description: "",
  chainId: 1,
  managerAddress: "",
  accounts: [
    {
      address: "",
      balance: 0,
      provider: null,
      connected: false,
    },
  ],
  reset(key) {},
};

export const AppContext = createContext(defaults);

export const useApp = () => useContext(AppContext);
