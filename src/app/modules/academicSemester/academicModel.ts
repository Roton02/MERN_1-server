import { model, Schema } from 'mongoose';
import TAcademicSemester from './academicInterface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  AcademicSemesterMonths,
} from './academicSemester.const';
import { AppError } from '../../Error/AppError';

const AcademicSchemaModel = new Schema<TAcademicSemester>(
  {
    name: { type: String, required: true, enum: AcademicSemesterName },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: AcademicSemesterMonths,
      required: true,
    },
    endMonth: {
      type: String,
      enum: AcademicSemesterMonths,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

AcademicSchemaModel.pre('save', async function (next) {
  const isExistsemester = await academicSemester.findOne({
    name: this.name,
    year: this.year,
  });
  if (isExistsemester) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Semester is already exist');
  }
  next();
});

export const academicSemester = model<TAcademicSemester>(
  'academicSemester',
  AcademicSchemaModel,
);
