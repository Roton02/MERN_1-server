import express from 'express';
import validation from '../../middleware/validateRequest';
import { academicFacultyValidations } from './academic.validation';
import { academicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academicFaculty',
  validation(academicFacultyValidations.createAcademicFacultyValidation),
  academicFacultyControllers.CreateAcademicFaculty,
);

export const academicFacultiesRoute = router;
