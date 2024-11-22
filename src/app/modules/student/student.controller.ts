import { Request, Response } from 'express';
import { studentService } from './student.services';
import StudentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const validateResult = StudentValidationSchema.parse(student);
    // console.log({error}, {value});
    const result = await studentService.createStudentIntoDB(validateResult);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};

//get-AlL-Student
const getStudentController = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get A student filtered by studentId
const getAStudentByStudentId = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await studentService.getAStudentByStudentId(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrive successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentControllers = {
  createStudent,
  getStudentController,
  getAStudentByStudentId,
};
