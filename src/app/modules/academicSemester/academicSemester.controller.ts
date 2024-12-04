/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
// import StudentValidationZodSchema from '../student/student.validation';

import { AcademicSemesterServices } from './academicSemester.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic semester is  create Successfully ',
      data: result,
    });
  },
);
const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.getAllAcademicSemesterFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic semester retrieved Successfully ',
      data: result,
    });
  },
);
const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
        req.params.semesterId as string,
      );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic semester retrieved Successfully ',
      data: result,
    });
  },
);
const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.updateAcademicSemesterIntroDB(
        req.params.semesterId,
        req.body,
      );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Update semester is  Successfully ',
      data: result,
    });
  },
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
