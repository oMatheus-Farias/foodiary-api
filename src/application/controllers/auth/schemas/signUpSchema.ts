import { Profile } from '@application/entities/Profile';
import { z } from 'zod';

export const signUpSchema = z.object({
  account: z.object({
    email: z.email({ message: '"email" is not valid' }),
    password: z.string().min(8, '"password" must be at least 8 characters long'),
  }),
  profile: z.object({
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
    activityLevel: z.enum(Profile.ActivityLevel, {
      message: `"activityLevel" must be one of the following values: ${Object.values(
        Profile.ActivityLevel
      ).join(', ')}`,
    }),
    goal: z.enum(Profile.Goal, {
      message: `"goal" must be one of the following values: ${Object.values(Profile.Goal).join(
        ', '
      )}`,
    }),
  }),
});

export type SignUpBody = z.infer<typeof signUpSchema>;
