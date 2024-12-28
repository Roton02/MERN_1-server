import mongoose, { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { AppError } from '../../Error/AppError';

const academicDepartmentSchemaModel = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'academicFaculty',
  },
});

academicDepartmentSchemaModel.pre('save', async function (next) {
  const isExistDepartmentName = await academicDepartment.findOne({
    name: this.name,
  });
  if (isExistDepartmentName) {
    throw new AppError(400, 'Department name is Already exist ');
  }
  next();
});

academicDepartmentSchemaModel.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const id = new mongoose.Types.ObjectId(query._id);
  const isExistDepartment = await this.model.collection.findOne({
    _id: id,
  });
  if (!isExistDepartment) {
    throw new AppError(400, 'Department is emptyasadadad ');
  }
  next();
});

academicDepartmentSchemaModel.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const id = new mongoose.Types.ObjectId(query._id);
  const isExistDepartment = await this.model.collection.findOne({ _id: id });
  if (!isExistDepartment) {
    throw new AppError(400, "Department is does'nt exist");
  }
  next();
});

export const academicDepartment = model<TAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchemaModel,
);
