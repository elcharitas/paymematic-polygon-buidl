import { useImmer } from "use-immer";
import { defaults, AppContext } from "../hooks";

export const AppProvider = ({ children }) => {
  const [state, update] = useImmer({
    title: "",
    description: "",
    managerAddress: "",
    accounts: [],
  });

  const reset = (key) => {
    update((draft) => {
      draft[key] = defaults[key];
    });
  };

  return (
    <AppContext.Provider value={{ ...state, update, reset }}>
      {children}
    </AppContext.Provider>
  );
};
