import { utils, ethers } from "ethers";

export const parseAddress = (address) => utils.getAddress(address);

export const parseNumber = (number) =>
  ethers.BigNumber.from(utils.parseEther(input.value.toString()));

export const parseBytes = (string) => utils.toUtf8Bytes(string);

export const parseAbi = (abi) =>
  JSON.parse(new utils.Interface(abi).format(utils.FormatTypes.json));

export const formatBigNumber = (bigNum) =>
  utils.formatUnits(String(bigNum), "ether");

export const formatBytes = (bytes) => utils.toUtf8String(bytes);
