import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/planets";

export function useGetPlanets() {
  return useQuery({
    queryKey: ["planets"],
    queryFn: getPlanets,
  });
}
