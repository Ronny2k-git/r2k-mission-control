import { useMutation, useQueryClient } from "@tanstack/react-query";
import { abortMission } from "../services/missions/abort-mission";

export function useAbortMission() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["abort-mission"],
    mutationFn: abortMission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["missions"] });
    },
  });
}
