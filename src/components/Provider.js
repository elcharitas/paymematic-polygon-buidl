import { useImmer } from "use-immer";
import { defaults, AppContext } from "../hooks";
import { store } from "../utils";

export const AppProvider = ({ children }) => {
  const [state, setState] = useImmer(
    store("app") || {
      accounts: [],
    }
  );

  const update = (fn) => {
    setState(fn);
    store("app", state);
  };

  const reset = (key) => {
    update((draft) => {
      draft[key] = defaults[key];
    });
  };

  return (
    <AppContext.Provider value={{ ...defaults, ...state, update, reset }}>
      {children}
    </AppContext.Provider>
  );
};
