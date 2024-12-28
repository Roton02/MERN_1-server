import { TAcademicDepartment } from './academicDepartment.interface';
import { academicDepartment } from './academiceDepartment.model';

const createAcademicDepartmentIntroDB = async (
  payload: TAcademicDepartment,
) => {
  const result = await academicDepartment.create(payload);
  console.log(result);
  return result;
};
const getAllAcademicDepartmentFromDB = async () => {
  const result = await academicDepartment.find().populate('academicFaculty');
  return result;
};
const getSingleAcademicDepartmentFromDB = async (payload: string) => {
  console.log(payload);
  const result = await academicDepartment
    .findOneAndUpdate({ _id: payload })
    .populate('academicFaculty');
  return result;
};
const updateAcademicDepartmentIntroDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await academicDepartment.findByIdAndUpdate(id, payload, {
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
