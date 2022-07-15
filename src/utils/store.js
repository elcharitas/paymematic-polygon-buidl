export const unlist = (key) => {
  if (typeof window !== "object") return null;
  localStorage.removeItem(key);
  return null;
};

export const store = (key, value = null) => {
  if (typeof window !== "object") return null;
  return value
    ? localStorage.setItem(key, JSON.stringify(value))
    : JSON.parse(localStorage.getItem(key));
};
