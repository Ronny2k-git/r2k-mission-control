import { format } from "date-fns";
import type { Mission } from "../types";

// Function used to calculate percentage and avoid repeating logic
export function calculatePercentage(value: number, total: number) {
  if (total <= 0) return 0;

  const percentage = (value / total) * 100;

  return Math.min(100, Math.max(0, Math.round(percentage)));
}

// Function used to scroll the page to the provided id
export function scrollToId(id: string, offset = 0) {
  const element = document.getElementById(id);
  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

// Function used to calculate the mission status
export function getMissionStatus(mission: Mission) {
  if (mission.status === "aborted") return "aborted";

  const now = new Date();
  const start = new Date(mission.startDate);
  const end = new Date(mission.endDate);

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "running";

  return "success";
}

// Function used to format dates as strings
export function formatDate(date: Date) {
  return format(date, "dd/MM/yyyy");
}
