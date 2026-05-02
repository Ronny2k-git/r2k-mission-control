import { useSearchParams } from "react-router-dom";

export function useUpdateQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  function updateQuery(newParams: Record<string, string | number | null>) {
    const params = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    setSearchParams(params);
  }

  return updateQuery;
}
