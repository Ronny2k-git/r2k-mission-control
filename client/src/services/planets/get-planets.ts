import { type Planet } from "../../../../common/types";
import { api } from "../api";

export async function getPlanets() {
  const response = await api.get<Planet[]>("/planets");

  return response.data;
}

{
  /* 
   Same request, but using Fetch()

   const response = await fetch("http://localhost:8000/planets");

   return response.json();
   */
}
