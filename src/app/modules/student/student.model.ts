import { Schema, model } from 'mongoose';
import {
  Student,
  UserName,
  LocalGuardian,
  Guardian,
} from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: { type: 'string', required: true },
  middleName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: 'string', required: true },
  fatherOccupation: { type: 'string', required: true },
  fatherContactNo: { type: 'string', required: true },
  motherName: { type: 'string', required: true },
  motherOccupation: { type: 'string', required: true },
  motherContactNo: { type: 'string', required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: 'string', required: true },
  occupation: { type: 'string', required: true },
  contactNo: { type: 'string', required: true },
  address: { type: 'string', required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: 'string', required: true },
  name: UserNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: 'string' },
  email: { type: 'string', required: true },
  contactNo: { type: 'string', required: true },
  emergencyContactNo: { type: 'string', required: true },
  bloogGroup: { type: 'string' },
  presentAddress: { type: 'string', required: true },
  permanentAddres: { type: 'string', required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: 'string' },
  isActive: { type: 'string', required: true },
});

export const studentModel = model<Student>('student', studentSchema);
