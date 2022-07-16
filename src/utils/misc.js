export const debounce = (fn, waitTimeout = 1) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this, ...args), waitTimeout);
  };
};
