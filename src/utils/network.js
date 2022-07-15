import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { formatBigNumber } from "./formats";

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
};

export const web3Modal = (chainId = 4, theme = "dark") => {
  return new Web3Modal({
    theme,
    network: chainId,
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions,
  });
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
        if (formatBigNumber(instance.chainId, "wei") !== this.chainId)
          return reject({ message: "Wrong chainId" });
        return new ethers.providers.Web3Provider(instance, chainId);
      })
      .catch(reject);
  },

  ethersSync(rpcNode = null) {
    return new ethers.providers.JsonRpcProvider(rpcNode);
  },
};
