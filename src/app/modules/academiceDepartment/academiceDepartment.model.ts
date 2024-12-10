import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchemaModel = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'academicFaculty',
  },
});

export const academicDepartmentModel = model<TAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchemaModel,
);
