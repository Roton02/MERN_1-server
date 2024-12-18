/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { startSession } from 'mongoose';
import { student } from './student.model';
import { AppError } from '../../Error/AppError';
import user from '../user/user.model';

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
  const session = await startSession();
  try {
    session.startTransaction();
    const isDeletedStudent = await student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!isDeletedStudent) {
      throw new AppError(400, 'student is filed to  deleted ');
    }
    const isDeletedUser = await user.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!isDeletedUser) {
      throw new AppError(400, 'user is failed to delete ');
    }
    await session.commitTransaction();
    await session.endSession();
    return isDeletedUser;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(404, "does'nt delete ");
  }
};

export const studentService = {
  getAllStudentFromDB,
  getAStudentByStudentId,
  deleteStudentFromDB,
};
