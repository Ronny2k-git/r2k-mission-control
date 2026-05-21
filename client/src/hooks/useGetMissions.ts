import { useQuery } from "@tanstack/react-query";
import { getMissions } from "../services/missions";

export function useGetMissions() {
  return useQuery({
    queryKey: ["missions"],
    queryFn: getMissions,
  });
}
