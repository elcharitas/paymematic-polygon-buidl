import { useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import { defaults, AppContext } from "../hooks";
import { getStore, setStore } from "../utils";

export const AppProvider = ({ children }) => {
  const [state, setState] = useImmer({
    accounts: [],
  });

  const store = useMemo(
    () =>
      getStore("app", {
        accounts: [],
      }),
    [state]
  );

  const update = (fn) => {
    setState(fn);
    setStore("app", state);
  };

  const reset = (key) => {
    update((draft) => {
      draft[key] = defaults[key];
    });
  };

  useEffect(
    () =>
      setState((draft) => {
        Object.entries(getStore("app")).forEach(([key, value]) => {
          draft[key] = value;
        });
      }),
    []
  );

  return (
    <AppContext.Provider value={{ ...defaults, ...store, update, reset }}>
      {children}
    </AppContext.Provider>
  );
};
