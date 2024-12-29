/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
// import StudentValidationZodSchema from '../student/student.validation';
import { userServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getUser = catchAsync(
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
const createFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, faculty: facultyData } = req.body;
    const result = await userServices.createFacultyIntroDB(
      password,
      facultyData,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Faculty create Successfully ',
      data: result,
    });
  },
);
const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await userServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
  getUser,
  createFaculty,
  createAdmin,
};
