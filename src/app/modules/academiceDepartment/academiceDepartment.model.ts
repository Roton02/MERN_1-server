import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchemaModel = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'academicFaculty',
  },
});

academicDepartmentSchemaModel.pre('save', async function (next) {
  const isExistDepartmentName = await academicDepartmentModel.findOne({
    name: this.name,
  });
  if (isExistDepartmentName) {
    throw new Error('Department name is Already exist ');
  }
  next();
});

// academicDepartmentSchemaModel.pre('findOne', async function (next) {
//   const query = this.getQuery();
//   const isExistDepartment = await academicDepartmentModel.findOne(query);
//   if (!isExistDepartment) {
//     throw new Error('Department is empty ');
//   }
//   next();
// });

// academicDepartmentSchemaModel.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery();
//   const isExistDepartment = await academicDepartmentModel.findOne({
//     _id: query._id,
//   });
//   if (!isExistDepartment) {
//     throw new Error('Department is Null');
//   }
//   next();
// });

export const academicDepartmentModel = model<TAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchemaModel,
);
