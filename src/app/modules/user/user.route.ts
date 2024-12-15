import express from 'express';
import { userControllers } from './user.controller';
import { StudentValidationZodSchemas } from '../student/student.validation';
import validation from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validation(StudentValidationZodSchemas.CreateStudentValidationZodSchema),
  userControllers.createStudent, 
);

router.get('/AllUsers',userControllers.getStudent )

export const userRouter = router;
