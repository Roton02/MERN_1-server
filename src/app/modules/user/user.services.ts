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
import { generateFacultyId, generateStudentId } from './user.utils';
import { TFaculty } from '../Faculty/faculty.interface';
import { academicDepartment } from '../academiceDepartment/academiceDepartment.model';
import { Faculty } from '../Faculty/faculty.model';

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

const createFacultyIntroDB = async (password: string, payload: TFaculty) => {
  // console.log({ password }, { payload });
  const userData: Partial<Tuser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'faculty';

  const admissionSemester = await academicDepartment.findById(
    payload.academicDepartment,
  );
  if (!admissionSemester) {
    throw new AppError(404, 'academic department not found');
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await generateFacultyId();
    console.log(userData.id);

    const newUser = await user.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newFaculty = await Faculty.create(payload);
    if (!newFaculty) {
      throw new AppError(400, 'Failed to create user');
    }
    session.commitTransaction();
    session.endSession();
    return newFaculty;
  } catch (error: any) {
    console.log(error);
    session.abortTransaction();
    session.endSession();
    throw new AppError(404, 'Faculty creation failed ');
  }
};

export const userServices = {
  createStudentIntoDB,
  getUsers,
  createFacultyIntroDB,
};
