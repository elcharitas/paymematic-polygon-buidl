import { createContext, useContext } from "react";
import { managerAbi } from "../utils";

export const defaults = {
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  description: "Accept payments with ease",
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
  managerAddress: process.env.NEXT_PUBLIC_MANAGER,
  managerAbi,
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
