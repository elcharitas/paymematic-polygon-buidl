import { v4 } from "uuid";
import { useState, useEffect } from "react";
import { getStore, setStore } from "../utils";

export const useStore = (initialValue, key = v4()) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(getStore(key, state));
  }, []);

  const updateState = (state) => {
    setState(state);
    setStore(key, state);
  };

  return [state, updateState];
};
