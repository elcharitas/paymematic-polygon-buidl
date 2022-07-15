import { useImmer } from "use-immer";
import { defaults, AppContext } from "../hooks";

export const AppProvider = ({ children }) => {
  const [state, update] = useImmer({
    accounts: [],
  });

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
