/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.services';
import sendResponse from '../../utils/sendResponse';

//get-AlL-Student
const getStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student retrieved Successfully ',
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
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Single Student retrieved Successfully ',
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
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student Delete Successfully ',
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
