import { manager } from "../utils";

const useManager = (method, args = [], { sync = false, skip = false }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mutate = async (method, ...args) => {
    const contract = await manager({ sync });
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
  }, [method, args]);

  return { result, error, loading, mutate };
};

export { useManager };
