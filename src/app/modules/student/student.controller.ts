import { Request, Response } from 'express';
import { studentService } from './student.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

//get-AlL-Student
const getStudentController = catchAsync(async (req: Request, res: Response) => {
  const result = await studentService.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student retrieved Successfully ',
    data: result,
  });
});

//get A student filtered by studentId
const getAStudentByStudentId = catchAsync(
  async (req: Request, res: Response) => {
    const studentId = req.params.id;
    const result = await studentService.getAStudentByStudentId(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Single Student retrieved Successfully ',
      data: result,
    });
  },
);

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await studentService.deleteStudentFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student Delete Successfully ',
    data: result,
  });
});

export const studentControllers = {
  getStudentController,
  getAStudentByStudentId,
  deleteStudent,
};
