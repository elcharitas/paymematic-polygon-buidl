import { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { manager } from "../utils";

const useManager = (method, args = [], { sync = true, skip = false }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbar] = useSnackbar();

  const mutate = async (method, ...args) => {
    const contract = await manager({
      sync,
      logger: (e) => snackbar(e.message),
    });
    return contract[method](...args);
  };

  useEffect(() => {
    if (skip) return;
    setLoading(true);
    mutate(method, ...args)
      .then((res) => {
        setResult(res);
        setLoading(false);
      })
      .catch(setError);
  }, [skip]);

  return { result, error, loading, mutate };
};

export { useManager };
