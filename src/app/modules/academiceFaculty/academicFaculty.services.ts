import { academicFacultyModel } from './academic.model';
import { TAcademicFaculty } from './academicFaculty.interface';

const createAcademicFacultyIntroDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};
const getAllAcademicFacultyFromDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};
const getSingleAcademicFacultyFromDB = async (payload: string) => {
  const result = await academicFacultyModel.findById(payload);
  return result;
};
const updateAcademicFacultyIntroDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await academicFacultyModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyIntroDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntroDB,
};
