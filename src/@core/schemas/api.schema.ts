import { z } from "zod";

export const genericResponseSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
});
export type GenericResponse = z.infer<typeof genericResponseSchema>;

export const paginatedResponseSchema = <S extends z.ZodTypeAny>(item: S) =>
  z.object({
    data: z.array(item),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    totalItems: z.number(),
  });
