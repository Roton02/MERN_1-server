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
router.patch(
  '/update-academicFaculty/:AcademicFacultyId',
  validation(academicFacultyValidations.updateAcademicFacultyValidation),
  academicFacultyControllers.updateAcademicFaculty,
);
router.get(
  '/get-All-academicFaculty/:AcademicFacultyId',
  academicFacultyControllers.getSingleAcademicFaculty,
);
router.get(
  '/get-All-academicFaculty',
  academicFacultyControllers.getAllAcademicFaculty,
);

export const academicFacultiesRoute = router;
