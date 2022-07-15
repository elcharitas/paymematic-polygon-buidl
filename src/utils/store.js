export const getStore = (key, defaults = null) =>
  typeof window === "object"
    ? JSON.parse(localStorage.getItem(key)) ?? defaults
    : defaults;

export const setStore = (key, value) =>
  typeof window === "object" &&
  localStorage.setItem(key, JSON.stringify(value));

export const store = (key, value = null) =>
  value !== null ? setStore(key, value) : getStore(key);

export const unstore = (key) =>
  typeof window === "object" && localStorage.removeItem(key);
