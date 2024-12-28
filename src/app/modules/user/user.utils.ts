//generate a unique id  /// year , semester code  , 4 digit code

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
  return lastStudent?.id ? lastStudent.id : undefined;
};
const findLastFacultyId = async () => {
  const lastFaculty = await user
    .findOne(
      {
        role: 'faculty',
      },
      {
        id: 1,
        _id: -1,
      },
    )
    .sort({ createdAt: -1 })
    .lean();
  return lastFaculty?.id ? lastFaculty.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString(); //0000
  const lastStudent = await findLastStudentId(); //2030 03 0002
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  const lastSemesterCode = lastStudent?.substring(4, 6);
  const lastYear = lastStudent?.substring(0, 4);

  if (
    currentId &&
    currentSemesterCode === lastSemesterCode &&
    currentYear === lastYear
  ) {
    currentId = lastStudent?.substring(6) as string;
  }
  let increment = (Number(currentId) + 1).toString().padStart(4, '0');

  increment = `${payload.year}${payload.code}${increment}`;
  return increment;
};

export const generateFacultyId = async () => {
  let currentId = (0).toString();
  const lastFacultyId = await findLastFacultyId();
  if (lastFacultyId) {
    currentId = lastFacultyId.substring(2);
  }
  let increment = (Number(currentId) + 1).toString().padStart(4, '0');
  increment = `F-${increment}`;
  return increment;
};
