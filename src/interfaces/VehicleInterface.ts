// https://www.npmjs.com/package/zod
import { z } from 'zod';

export const VehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
