import { useSnackbar } from "react-simple-snackbar";
import { provider, handleLogs, formatBigNumber, formatAddress } from "../utils";

import { useApp } from "./useApp";

export function useWallet() {
  const { chainId, setAccounts } = useApp();
  const [snackbar] = useSnackbar();

  const connectWallet = async () => {
    provider
      .ethers(chainId, handleLogs.bind({}, snackbar))
      .then(async (eth3) => {
        if (!eth3) return;
        const accountList = [];
        for await (const address of await eth3.listAccounts()) {
          accountList.push({
            hash: address,
            address: formatAddress(address),
            balance: formatBigNumber(await eth3.getBalance(address)),
            connected: Date.now(),
          });
        }
        setAccounts(accountList);
      });
  };

  const disconnectWallet = async () => {
    await provider.disconnect().then(() => {
      setAccounts([]);
      snackbar("Wallet has been disconnected");
    });
  };

  return [connectWallet, disconnectWallet];
}
