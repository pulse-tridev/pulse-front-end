export const ROLES = [
  "ADMIN",
  "SECRETARY",
  "DOCTOR",
  "CLINIC_MANAGER",
  "USER",
] as const;

export type Role = (typeof ROLES)[number];
