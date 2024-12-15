import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.get('/', studentControllers.getStudentController);
router.get('/:studentId', studentControllers.getAStudentByStudentId);
router.delete('/:studentId', studentControllers.deleteStudent);

export const studentRouter = router;
