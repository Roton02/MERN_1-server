import { TAcademicDepartment } from './academicDepartment.interface';
import { academicDepartmentModel } from './academiceDepartment.model';

const createAcademicDepartmentIntroDB = async (
  payload: TAcademicDepartment,
) => {
  const result = await academicDepartmentModel.create(payload);
  return result;
};
const getAllAcademicDepartmentFromDB = async () => {
  const result = await academicDepartmentModel
    .find()
    .populate('academicFaculty');
  return result;
};
const getSingleAcademicDepartmentFromDB = async (payload: string) => {
  const result = await academicDepartmentModel
    .findById(payload)
    .populate('academicFaculty');
  return result;
};
const updateAcademicDepartmentIntroDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await academicDepartmentModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentIntroDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntroDB,
};
