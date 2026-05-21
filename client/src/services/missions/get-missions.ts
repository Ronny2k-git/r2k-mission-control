import type { MissionResponse } from "@common/types";
import { api } from "../api";

export async function getMissions() {
  const response = await api.get<MissionResponse[]>("/missions");

  return response.data;
}

{
  /* 
   Same request, but using Fetch()

   const response = await fetch("http://localhost:8000/missions");

   return response.json();
   */
}
