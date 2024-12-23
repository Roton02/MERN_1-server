import express from 'express';
import { studentControllers } from './student.controller';
import validation from '../../middleware/validateRequest';
import { StudentValidationZodSchemas } from './student.validation';

const router = express.Router();

router.get('/', studentControllers.getStudentController);
router.get('/:studentId', studentControllers.getAStudentByStudentId);
router.patch(
  '/:studentId',
  validation(StudentValidationZodSchemas.UpdateStudentValidationZodSchema),
  studentControllers.UpdateStudent,
);
router.delete('/:studentId', studentControllers.deleteStudent);

export const studentRouter = router;
