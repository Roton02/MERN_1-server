/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.services';

//get-AlL-Student
const getStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//get A student filtered by studentId
const getAStudentByStudentId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.id;
    const result = await studentService.getAStudentByStudentId(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrive successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await studentService.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student is retrive successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const studentControllers = {
  getStudentController,
  getAStudentByStudentId,
  deleteStudent,
};
