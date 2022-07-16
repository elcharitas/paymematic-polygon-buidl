export const debounce = (fn, waitTimeout = 1) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this, ...args), waitTimeout);
  };
};

export const sponsorBg = [
  "violet",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "red",
];

export const sponsors = [
  { address: "0x0", handle: "demo" },
  {
    address: "0x5B7E131d020D2dd72666EBFDd465c3a8e0f0Cd52",
    handle: "elcharitas",
  },
  { address: "0x0", handle: "demo1" },
];
