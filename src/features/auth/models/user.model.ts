export const ROLES = [
  "ADMIN",
  "SECRETARY",
  "DOCTOR",
  "CLINIC_MANAGER",
] as const;
export type Role = (typeof ROLES)[number];

export interface UserModel {
  email: string;
  name: string;
  role: Role;
}
