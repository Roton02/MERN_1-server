import { z } from 'zod';

// User Name Validation Schema
const UserNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});

// Guardian Schema
const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }),
});

// Local Guardian Schema
const LocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z.string().min(1, { message: 'Occupation is required' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
});

// Student Schema
const CreateStudentValidationZodSchema = z.object({
  body: z.object({
    password: z.string().max(20).min(8),
    student: z.object({
      name: UserNameValidationSchema,
      gender: z.enum(['male', 'female'], {
        invalid_type_error: 'Gender must be either male or female',
      }),
      dateOfBirth: z.string(),
      email: z
        .string()
        .email({ message: 'Email must be a valid email address' }),
      // .refine(async (email) => {
      //   const existingEmail = await student.findOne({ email: email });
      //   if (existingEmail) {
      //     throw new AppError(400 ,'email is exist already ');
      //   }
      // }),
      contactNo: z
        .string()
        .max(10, { message: 'Contact number must be 10 characters long' })
        .min(1, { message: 'Contact number is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
        invalid_type_error: 'Invalid blood group',
      }),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: GuardianValidationSchema,
      localGuardian: LocalGuardianValidationSchema,
      profileImg: z
        .string()
        .url({ message: 'Profile image must be a valid URI' })
        .optional(),
      AcademicDepartment: z.string(),
      admissionSemester: z.string(),
    }),
  }),
});

export const StudentValidationZodSchemas = {
  CreateStudentValidationZodSchema,
};
