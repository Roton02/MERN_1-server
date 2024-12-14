import { AppError } from '../../Error/AppError';
import TAcademicSemester from './academicInterface';
import { academicSemester } from './academicModel';
import { academicSemesterNameCode } from './academicSemester.const';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCode[payload.name] !== payload.code) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semester  code is wrong ');
  }

  const result = await academicSemester.create(payload);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await academicSemester.find();
  return result;
};
const getSingleAcademicSemesterFromDB = async (payload: string) => {
  const result = await academicSemester.findById(payload);
  return result;
};
const updateAcademicSemesterIntroDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCode[payload.name] !== payload.code
  ) {
    throw new AppError(404, 'Invalid semester code ');
  }
  const result = await academicSemester.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntroDB,
};
