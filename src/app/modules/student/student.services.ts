import { student } from './student.model';

//get all student
const getAllStudentFromDB = async () => {
  const result = await student
    .find()
    .populate('admissionSemester')
    .populate({
      path: 'AcademicDepartment',
      populate: { path: 'academicFaculty' },
    });
  return result;
};

//get a student by studentId

const getAStudentByStudentId = async (studentId: string) => {
  const result = await student
    .findOne({ id: studentId })
    .populate('admissionSemester')
    .populate({
      path: 'AcademicDepartment',
      populate: { path: 'academicFaculty' },
    });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudentFromDB,
  getAStudentByStudentId,
  deleteStudentFromDB,
};
