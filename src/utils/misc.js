export const debounce = (fn, waitTimeout = 1) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this, ...args), waitTimeout);
  };
};

export const sponsors = [
  { address: "0x0", handle: "demo" },
  { address: "elcharitas.eth", handle: "elcharitas" },
  { address: "0x0", handle: "demo1" },
];
