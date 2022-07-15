export const etherScanUrl = (address) =>
  `https://etherscan.io/address/${address}`;

export const formatAddress = (address) =>
  address.substring(0, 6) + "..." + address.substring(address.length - 4);