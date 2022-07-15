export const unlist = (key) => {
  if (typeof window !== "object") return null;
  localStorage.removeItem(key);
  return null;
};

export const store = (key, value = null) => {
  if (typeof window !== "object") return null;
  return value ? localStorage.setItem(key, value) : localStorage.getItem(key);
};
