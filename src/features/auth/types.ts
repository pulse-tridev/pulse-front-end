import { Role } from "@core/constants/roles";

export interface AuthUser {
  email: string;
  name: string;
  role: Role;
}
