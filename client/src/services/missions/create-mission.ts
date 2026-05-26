import type { CreateMissionDTO, MissionResponse } from "@common/types";
import { api } from "../api";

export async function createMission(mission: CreateMissionDTO) {
  const response = await api.post<MissionResponse[]>("/missions", mission);

  return response.data;
}
