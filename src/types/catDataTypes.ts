import { z } from "zod";
import { CatsArraySchema, CatSchema } from "../utils/catDataSchema";

export type Cat = z.infer<typeof CatSchema>;
export type CatsArray = z.infer<typeof CatsArraySchema>;