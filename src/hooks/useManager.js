import { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { manager } from "../utils";

const useManager = (
  method,
  args = [],
  { sync = true, skip = false, onReady, onError }
) => {
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
    if (!loading)
      mutate(method, ...args)
        .then(setResult)
        .catch(setError)
        .finally(() => setLoading(false));
    setLoading(true);
  }, [skip, ...args]);

  useEffect(() => {
    onReady && result && onReady(result, ...args);
  }, [result]);

  useEffect(() => {
    onError && error && onError(error);
  }, [error]);

  return { result, error, loading, mutate };
};

export { useManager };
