import { Schema, model } from 'mongoose';
import {
  TStudent,
  TUserName,
  TLocalGuardian,
  TGuardian,
  studentModel,
  studentMethods,
} from './student.interface';

const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: 'string',
    required: [true, 'this name part is required'],
    // validate: {
    //   validator:function(value: string) {
    //     const firstValueCapitalized =
    //       value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstValueCapitalized === value;
    //   },
    //   message: '{VALUE} is not capitalized',
    // },
  },
  middleName: { type: 'string' },
  lastName: { type: 'string', required: [true, 'this name part is required'] },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: 'string', required: true },
  fatherOccupation: { type: 'string', required: true },
  fatherContactNo: { type: 'string', required: true },
  motherName: { type: 'string', required: true },
  motherOccupation: { type: 'string', required: true },
  motherContactNo: { type: 'string', required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: 'string', required: true },
  occupation: { type: 'string', required: true },
  contactNo: { type: 'string', required: true },
  address: { type: 'string', required: true },
});

const studentSchema = new Schema<TStudent, studentModel, studentMethods>({
  id: {
    type: 'string',
    required: [true, 'this data is required'],
  },
  name: { type: UserNameSchema, required: [true, 'this data is required'] },
  gender: {
    type: 'string',
    enum: ['male', 'female'],
    required: [true, 'this data is required'],
  },
  dateOfBirth: {
    type: 'string',
    required: [true, 'date of birth is required'],
  },
  email: { type: 'string', required: [true, 'this data is required'] },
  contactNo: {
    type: 'string',
    trim: true,
    maxlength: [10, 'max lenth is longer then 10 characters'],
    required: [true, 'this data is required'],
  },
  emergencyContactNo: {
    type: 'string',
    required: [true, 'this data is required'],
  },
  bloodGroup: {
    type: 'string',
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is Incorrect',
    },
    required: true,
  },
  presentAddress: { type: 'string', required: [true, 'this data is required'] },
  permanentAddress: {
    type: 'string',
    required: [true, 'this data is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'this data is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'this data is required'],
  },
  profileImg: { type: 'string' },
  isActive: {
    type: 'string',
    enum: {
      values: ['active', 'blocked'],
      message: 'isActive is required',
    },
    required: true,
    default: 'active',
  },
});

//custom static method

studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await student.findOne({ id });
  return existingUser;
};

//custom instance method

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await student.findOne({ id });
//   return existingUser;
// };

export const student = model<TStudent, studentModel>('student', studentSchema);
