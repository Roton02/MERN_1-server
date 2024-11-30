import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be a string' })
    .max(20, { message: 'password max length is 20 character' }).optional(),
});

export const UserValidation = {
  userValidationSchema,
};
