import express from 'express';
import { CourseValidations } from './courses.validation';
import { CourseControllers } from './courses.controller';
import validation from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-course',
  validation(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/:id', CourseControllers.getSingleCourse);

router.patch(
  '/:id',
  validation(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

router.delete('/:id', CourseControllers.deleteCourse);

router.put(
  '/:courseId/assign-faculties',
  validation(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);

router.delete(
  '/:courseId/remove-faculties',
  validation(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourse,
);

router.get('/', CourseControllers.getAllCourses);

export const CourseRoutes = router;
