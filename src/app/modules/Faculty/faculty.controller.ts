/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { facultyServices } from './faculty.services';

const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await facultyServices.getSingleFacultyFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faculty is retrieved successfully',
    data: result,
  });
});

const getAllFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const result = await facultyServices.getAllFacultyFromDB(query);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Faculty All retrieved Successfully ',
      data: result,
    });
  },
);

const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { faculty } = req.body;
  const result = await facultyServices.updateFacultyIntoDB(id, faculty);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faculty is updated successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await facultyServices.deleteFacultyFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faculty is deleted successfully',
    data: result,
  });
});
export const FacultyControllers = {
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
