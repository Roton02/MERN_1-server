import express from 'express';
import { studentControllers } from './student.controller';
import validation from '../../middleware/validateRequest';
import { StudentValidationZodSchemas } from './student.validation';

const router = express.Router();

router.get('/', studentControllers.getStudentController);
router.get('/:id', studentControllers.getAStudentByStudentId);
router.patch(
  '/:id',
  validation(StudentValidationZodSchemas.UpdateStudentValidationZodSchema),
  studentControllers.UpdateStudent,
);
router.delete('/:id', studentControllers.deleteStudent);

export const studentRouter = router;
