export type MissionStatus = "upcoming" | "running" | "success" | "aborted";

export type MissionType = "exploration" | "research" | "cargo" | "crewed";

export type Mission = {
  id: number;
  name: string;
  rocket: string;
  target: string;
  startDate: Date;
  endDate: Date;
  type: MissionType;
  description?: string;
  status?: MissionStatus;
};
