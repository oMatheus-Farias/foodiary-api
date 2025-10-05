import { z } from 'zod';

export const updateGoalSchema = z.object({
  calories: z.number().min(0),
  proteins: z.number().min(0),
  carbohydrates: z.number().min(0),
  fats: z.number().min(0),
});

export type UpdateGoalBody = z.infer<typeof updateGoalSchema>;
