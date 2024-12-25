/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import mongoose from 'mongoose';
import config from '../../config';
import { AppError } from '../../Error/AppError';
import { academicSemester } from '../academicSemester/academicModel';
import { TStudent } from '../student/student.interface';
import { student } from '../student/student.model';
import { Tuser } from './user.interface';
import user from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<Tuser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  const admissionSemester = await academicSemester.findById(
    payload.admissionSemester,
  );
  if (!admissionSemester) {
    throw new AppError(404, 'Admission semester not found');
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    //create a student
    const newUser = await user.create([userData], { session });
    // console.log('newUser', newUser);
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create user');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    const newStudent = await student.create([payload], { session });
    // console.log('newStudent' ,newStudent);
    if (!newStudent.length) {
      throw new AppError(400, 'Failed to create student');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(404, 'student creation failed ');
  }
};
const getUsers = async () => {
  const result = await user.find();
  return result;
};

export const userServices = {
  createStudentIntoDB,
  getUsers,
};
