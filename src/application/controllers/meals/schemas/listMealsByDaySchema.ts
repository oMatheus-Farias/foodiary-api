import { z } from 'zod';

export const listMealsByDaySchema = z.object({
  date: z.iso
    .date({ message: '"date" should be a valid date (YYYY-MM-DD)' })
    .transform((date) => new Date(date)),
});
