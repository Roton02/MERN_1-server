import { z } from 'zod';

const createAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be a string',
      required_error: 'name is required',
    }),
  }),
});
const updateAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'name must be a string' }).optional(),
  }),
});

export const academicFacultyValidations = {
  createAcademicFacultyValidation,
  updateAcademicFacultyValidation,
};
