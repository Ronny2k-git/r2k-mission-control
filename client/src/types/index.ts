export type Mission = {
  id: number;
  date: string;
  mission: string;
  rocket: string;
  target: string;
  status?: "success" | "aborted" | "upcoming";
};

export type FilterType = "all" | "success" | "aborted";
