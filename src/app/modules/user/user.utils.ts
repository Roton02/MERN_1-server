//genarate a uniqe id  /// year , semester code  , 4 digit code

import TAcademicSemester from '../academicSemester/academicInterface';
import user from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await user
    .findOne(
      {
        role: 'student',
      },
      {
        id: 1,
        _id: -1,
      },
    )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  console.log();
  const currentId =
    (await findLastStudentId()) || (0).toString();
  let increment = (Number(currentId) + 1).toString().padStart(4, '0');

  increment = `${payload.year}${payload.code}${increment}`;
  return increment;
};
