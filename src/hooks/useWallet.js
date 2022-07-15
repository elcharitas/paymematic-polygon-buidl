import { utils } from "ethers";
import { useSnackbar } from "react-simple-snackbar";

import { useApp } from "./useApp";

export function useWallet() {
  const { accounts, reset } = useApp();
  const [snackbar] = useSnackbar();

  const connectWallet = async () => {};

  const disconnectWallet = async () => {};

  return [connectWallet, disconnectWallet];
}
