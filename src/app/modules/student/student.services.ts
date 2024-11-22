import { Student } from './student.interface';
import { studentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

//get all student
const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

//get a student by studentId

const getAStudentByStudentId = async (studentId: string) => {
  const result = await studentModel.findOne({ id: studentId });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getAStudentByStudentId,
};
