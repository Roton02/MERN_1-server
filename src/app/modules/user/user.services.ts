import config from '../../config';
import { TStudent } from '../student/student.interface';
import { student } from '../student/student.model';
import { Tuser } from './user.interface';
import user from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await std.isUserExists(studentData.id)) {
  //   throw new Error('student is already exists ');
  // }
  const userData: Partial<Tuser> = {};
  //if have pass then use if hav'nt then use default pass
  userData.password = password || (config.default_password as string);
  //set role
  userData.role = 'student';
  //set generator id
  userData.id = '12a423';
  //create a student
  const newUser = await user.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const result = await student.create(studentData);
    return result;
  }
};

export const userServices = {
  createStudentIntoDB,
};
