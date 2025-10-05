import { Profile } from '@application/entities/Profile';
import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z.string().min(1, '"name" is required'),
  birthDate: z.iso
    .date({ message: '"birthDate" should be a valid date (YYYY-MM-DD)' })
    .transform((date) => new Date(date)),
  gender: z.enum(Profile.Gender, {
    message: `"gender" must be one of the following values: ${Object.values(Profile.Gender).join(
      ', '
    )}`,
  }),
  height: z.number().min(0, '"height" must be a positive number'),
  weight: z.number().min(0, '"weight" must be a positive number'),
});

export type UpdateProfileBody = z.infer<typeof updateProfileSchema>;
