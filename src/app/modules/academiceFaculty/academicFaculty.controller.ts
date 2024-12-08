/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { academicFacultyServices } from './academicFaculty.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const CreateAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await academicFacultyServices.createAcademicFacultyIntroDB(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Faculty create Successfully ',
      data: result,
    });
  },
);

export const academicFacultyControllers = {
  CreateAcademicFaculty,
};
