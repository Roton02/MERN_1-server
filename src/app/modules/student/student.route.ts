import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControllers.createStudent);
router.get('/', studentControllers.getStudentController);
router.get('/:id', studentControllers.getAStudentByStudentId);
router.delete('/:id', studentControllers.deleteStudent);

export const studentRouter = router;
