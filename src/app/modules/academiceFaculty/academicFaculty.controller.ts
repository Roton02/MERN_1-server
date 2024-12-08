/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { academicFacultyServices } from './academicFaculty.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const CreateAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicFacultyServices.createAcademicFacultyIntroDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Faculty create Successfully ',
      data: result,
    });
  },
);

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicFacultyServices.getAllAcademicFacultyFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Faculty retrieve Successfully ',
      data: result,
    });
  },
);
const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicFacultyServices.getSingleAcademicFacultyFromDB(
      req.params.AcademicFacultyId as string,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Faculty retrieved Successfully ',
      data: result,
    });
  },
);
const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicFacultyServices.updateAcademicFacultyIntroDB(
      req.params.AcademicFacultyId,
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Faculty Update Successfully ',
      data: result,
    });
  },
);
export const academicFacultyControllers = {
  CreateAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
