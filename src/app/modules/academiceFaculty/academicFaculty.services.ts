import { academicFacultyModel } from './academic.model';
import { TAcademicFaculty } from './academicFaculty.interface';

const createAcademicFacultyIntroDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyIntroDB,
};
