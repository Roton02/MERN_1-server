import { TStudent } from './student.interface';
import { student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await student.create(studentData);
  // return result;
  const std = new student(studentData);
  if (await std.isUserExists(studentData.id)) {
    throw new Error('student is already exists ');
  }
  const result = await std.save();
  return result;
};

//get all student
const getAllStudentFromDB = async () => {
  const result = await student.find();
  return result;
};

//get a student by studentId

const getAStudentByStudentId = async (studentId: string) => {
  const result = await student.findOne({ id: studentId });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getAStudentByStudentId,
  deleteStudentFromDB,
};
