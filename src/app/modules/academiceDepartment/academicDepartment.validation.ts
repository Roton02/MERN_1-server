import { z } from 'zod';

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be a string',
      required_error: 'name is required',
    }),
    academicFaculty: z.string(),
  }),
});
const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'name must be a string' }).optional(),
    academicFaculty: z.string(),
  }),
});

export const academicDepartmentValidations = {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
};
