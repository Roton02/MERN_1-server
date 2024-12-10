/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicDepartmentServices } from './academiceDepartment.services';

const CreateAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicDepartmentServices.createAcademicDepartmentIntroDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Department create Successfully ',
      data: result,
    });
  },
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicDepartmentServices.getAllAcademicDepartmentFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Department retrieve Successfully ',
      data: result,
    });
  },
);
const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicDepartmentServices.getSingleAcademicDepartmentFromDB(
      req.params.AcademicDepartmentId as string,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Department retrieved Successfully ',
      data: result,
    });
  },
);
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicDepartmentServices.updateAcademicDepartmentIntroDB(
      req.params.AcademicDepartmentId,
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Department Update Successfully ',
      data: result,
    });
  },
);
export const academicDepartmentControllers = {
  CreateAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
