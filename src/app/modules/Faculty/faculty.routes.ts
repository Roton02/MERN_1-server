import express from 'express';
import { FacultyControllers } from './faculty.controller';
// import validation from '../../middleware/validateRequest';

const router = express.Router();

// router.get('/:id', FacultyControllers.getSingleFaculty);

// router.patch(
//   '/:id',
//   validation(updateFacultyValidationSchema),
//   FacultyControllers.updateFaculty,
// );

// router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculty);

export const FacultyRoutes = router;
