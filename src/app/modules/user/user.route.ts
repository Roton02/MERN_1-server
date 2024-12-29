import express from 'express';
import { userControllers } from './user.controller';
import { StudentValidationZodSchemas } from '../student/student.validation';
import validation from '../../middleware/validateRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  validation(StudentValidationZodSchemas.CreateStudentValidationZodSchema),
  userControllers.createStudent,
);
router.post(
  '/create-faculty',
  validation(createFacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-admin',
  validation(createAdminValidationSchema),
  userControllers.createAdmin,
);


router.get('/AllUsers', userControllers.getUser);

export const userRouter = router;
