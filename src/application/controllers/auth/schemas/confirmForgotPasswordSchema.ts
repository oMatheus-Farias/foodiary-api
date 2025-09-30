import { z } from 'zod';

export const confirmForgotPasswordSchema = z.object({
  email: z.email({ message: '"email" is not valid' }),
  confirmationCode: z.string().min(1, '"confirmationCode" is required'),
  password: z.string().min(8, '"password" must be at least 8 characters long'),
});

export type ConfirmForgotPasswordBody = z.infer<typeof confirmForgotPasswordSchema>;
