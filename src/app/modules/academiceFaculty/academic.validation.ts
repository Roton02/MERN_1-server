import { z } from 'zod';

const academicFacultyValidation = z.object({
  name: z.string({ invalid_type_error: 'Password must be a string' }),
});

export const academicFacultyValidations = {
  academicFacultyValidation,
};
