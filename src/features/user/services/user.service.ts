import axiosJwt from "@core/lib/axios";
import { z } from "zod";
import {
  UserSchema,
  CreateUserSchema,
  UpdateUserSchema,
  type User,
  type CreateUser,
  type UpdateUser,
} from "../schemas/user.schema";
import {
  genericResponseSchema,
  paginatedResponseSchema,
} from "@core/schemas/api.schema";
import type { GenericResponse } from "@core/schemas/api.schema";

const UserListResponseSchema = paginatedResponseSchema(UserSchema);
type UserListResponse = z.infer<typeof UserListResponseSchema>;

export const UserService = {
  async create(payload: CreateUser): Promise<User> {
    const parsedPayload = CreateUserSchema.parse(payload);
    const { data } = await axiosJwt.post("/user", parsedPayload);
    return UserSchema.parse(data);
  },

  async getAll(): Promise<UserListResponse> {
    const { data } = await axiosJwt.get("/user/find-all");
    return UserListResponseSchema.parse(data);
  },

  async getByUsername(username: string): Promise<User> {
    const { data } = await axiosJwt.get(`/user/find-by-username/${username}`);
    return UserSchema.parse(data);
  },

  async update(id: string, payload: UpdateUser) {
    const parsedPayload = UpdateUserSchema.parse(payload);
    const { data } = await axiosJwt.patch(`/user/${id}`, parsedPayload);
    return genericResponseSchema.parse(data);
  },

  async delete(id: string): Promise<GenericResponse> {
    const { data } = await axiosJwt.delete(`/user/${id}`);
    return genericResponseSchema.parse(data);
  },
};
