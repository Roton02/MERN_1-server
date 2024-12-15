/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
// import StudentValidationZodSchema from '../student/student.validation';
import { userServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, student } = req.body;
    const result = await userServices.createStudentIntoDB(password, student);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student create Successfully ',
      data: result,
    });
  },
);
const getStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userServices.getUsers();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student create Successfully ',
      data: result,
    });
  },
);

export const userControllers = {
  createStudent,
  getStudent,
};
