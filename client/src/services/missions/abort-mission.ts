import { api } from "../api";

export async function abortMission(id: number) {
  const response = await api.patch(`/missions/${id}/abort`);

  return response.data;
}
