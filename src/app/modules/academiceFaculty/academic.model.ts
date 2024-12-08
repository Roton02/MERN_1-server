import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchemaModel = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: true,
  },
});

export const academicFacultyModel = model<TAcademicFaculty>(
  'academicFaculty',
  academicFacultySchemaModel,
);
