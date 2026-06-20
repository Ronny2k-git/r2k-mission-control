export type MissionStatus = "upcoming" | "running" | "success" | "aborted";

export type MissionType = "exploration" | "research" | "cargo" | "crewed";

export type MissionCardInfoProps<T> = {
  title: string;
  key: keyof T;
  textColor: string;
  variant: string;
};

export type FilterType = "all" | "success" | "aborted";

export type Customer =
  | "NASA"
  | "ESA"
  | "JAXA"
  | "CSA"
  | "SpaceX"
  | "BlueOrigin"
  | "DARPA"
  | "Axiom";

export type MissionBase = {
  id: number;
  name: string;
  rocket: string;
  target: string;
  startDate: Date;
  endDate: Date;
  type: MissionType;
  description?: string | null;
};

export type MissionDB = MissionBase & {
  customers: Customer[];
  isAborted: boolean;
};

export type MissionResponse = MissionBase & {
  customers: Customer[];
  status: MissionStatus;
};

export type MissionSlim = Omit<MissionResponse, "customers">;

export type CreateMissionDTO = Omit<MissionDB, "id">;

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
};
