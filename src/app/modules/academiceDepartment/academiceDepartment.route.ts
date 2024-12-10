import express from 'express';
import validation from '../../middleware/validateRequest';
import { academicDepartmentValidations } from './academicDepartment.validation';
import { academicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academicDepartment',
  validation(academicDepartmentValidations.createAcademicDepartmentValidation),
  academicDepartmentControllers.CreateAcademicDepartment,
);
router.patch(
  '/update-academicDepartment/:AcademicDepartmentId',
  validation(academicDepartmentValidations.updateAcademicDepartmentValidation),
  academicDepartmentControllers.updateAcademicDepartment,
);
router.get(
  '/get-All-academicDepartment/:AcademicDepartmentId',
  academicDepartmentControllers.getAllAcademicDepartment,
);
router.get(
  '/get-All-academicDepartment',
  academicDepartmentControllers.getSingleAcademicDepartment,
);

export const academicFacultiesRoute = router;
