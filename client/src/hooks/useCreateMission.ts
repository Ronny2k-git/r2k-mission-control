import { useMutation } from "@tanstack/react-query";
import { createMission } from "../services/missions";

export function useCreateMission() {
  return useMutation({
    mutationKey: ["create-mission"],
    mutationFn: createMission,
  });
}
