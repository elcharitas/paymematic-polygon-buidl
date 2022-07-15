import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { formatBigNumber } from "./formats";
import { managerAbi } from "./abi";

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
};

export const web3Modal = (
  chainId = process.env.NEXT_PUBLIC_CHAIN_ID,
  theme = "dark"
) => {
  return new Web3Modal({
    theme,
    network: Number(chainId),
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions,
  });
};

export const manager = async ({ chainId, sync = false }) => {
  const address = process.env.NEXT_PUBLIC_MANAGER;
  const eth3 = sync
    ? provider.ethersSync(process.env.NEXT_PUBLIC_RPC_NODE)
    : await provider.ethers(chainId, () => {});

  return new ethers.Contract(address, managerAbi, eth3);
};

export const provider = {
  chainId: null,
  instance: null,

  async connect(chainId, reject) {
    if (!this.instance) {
      this.instance = await web3Modal(chainId).connect().catch(reject);
    }
    this.chainId = String(chainId);
    return this.instance;
  },

  async disconnect() {
    web3Modal().clearCachedProvider();
    this.instance = null;
  },

  async ethers(chainId, reject) {
    return await this.connect(chainId, reject)
      .then((instance) => {
        if (!instance)
          return reject({
            message: "No available wallet instance. Try using a dApp browser",
          });
        if (formatBigNumber(instance.chainId, "wei") !== this.chainId)
          return reject({ message: "Required chain/network is not available" });
        return new ethers.providers.Web3Provider(instance, chainId);
      })
      .catch(reject);
  },

  ethersSync(rpcNode = null) {
    return new ethers.providers.JsonRpcProvider(rpcNode);
  },
};
