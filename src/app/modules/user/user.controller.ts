/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
// import StudentValidationZodSchema from '../student/student.validation';
import { userServices } from './user.services';

const createStudent = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const { password, student } = req.body;

    //   const validateResult = StudentValidationZodSchema.parse(student);
    // console.log({error}, {value});
    const result = await userServices.createStudentIntoDB(password, student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};


export const userControllers = {
    createStudent
}