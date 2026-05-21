export type MissionStatus = "upcoming" | "running" | "success" | "aborted";

export type MissionType = "exploration" | "research" | "cargo" | "crewed";

export type Customer =
  | "NASA"
  | "ESA"
  | "JAXA"
  | "CSA"
  | "SpaceX"
  | "Blue Origin"
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
  description?: string;
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
