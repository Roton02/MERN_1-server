import express from 'express';
import { academicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validation from '../../middleware/validateRequest';

const router = express.Router();

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemester);

router.post(
  '/create-academic-semester',

  AcademicSemesterControllers.createAcademicSemester,
);
router.patch(
  '/update-academic-semester/:semesterId',
  validation(
    academicSemesterValidation.updateAcademicSemesterValidationZodSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

export const AcademicSemesterRouter = router;
