import { Request, Response } from 'express';
import { studentService } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  const student = req.body;
  const result = await studentService.createStudentIntoDB(student);
  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
};

export const studentControllers = {
  createStudent,
};
