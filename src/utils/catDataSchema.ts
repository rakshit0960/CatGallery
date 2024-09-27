import { z } from "zod";

export const CatSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  width: z.number(),
  height: z.number(),
});

export const CatsArraySchema = z.array(CatSchema);
