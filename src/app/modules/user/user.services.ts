import config from '../../config';
import { academicSemester } from '../academicSemester/academicModel';
import { TStudent } from '../student/student.interface';
import { student } from '../student/student.model';
import { Tuser } from './user.interface';
import user from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // if (await std.isUserExists(studentData.id)) {
  //   throw new Error('student is already exists ');
  // }
  const userData: Partial<Tuser> = {};
  //if have pass then use if hav'nt then use default pass
  userData.password = password || (config.default_password as string);
  //set role
  userData.role = 'student';
  //set generator id

  const admissionSemester = await academicSemester.findById(
    payload.admissionSemester,
  );

  // Check if `admissionSemester` exists
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  userData.id = await generateStudentId(admissionSemester);

  //create a student
  const newUser = await user.create(userData);
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const result = await student.create(payload);
    return result;
  }
};

export const userServices = {
  createStudentIntoDB,
};
