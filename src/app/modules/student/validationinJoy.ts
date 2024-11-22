import Joi from 'joi';

const UserNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.empty': 'First name is required',
      'string.pattern.base': '{#value} is not capitalized',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required',
  }),
});

// Guardian Schema
const GuardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'Father contact number is required',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'Mother contact number is required',
  }),
});

// Local Guardian Schema
const LocalGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local guardian name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Address is required',
  }),
});

// Student Schema
const StudentValidationJOiSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required',
  }),
  name: UserNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': '{#value} is not a valid gender',
  }),
  dateOfBirth: Joi.string().isoDate().required().messages({
    'string.empty': 'Date of birth is required',
    'string.isoDate': 'Date of birth must be a valid ISO date',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  contactNo: Joi.string().max(10).required().messages({
    'string.empty': 'Contact number is required',
    'string.length': 'Contact number must be 10 characters long',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddres: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: GuardianValidationSchema.required().messages({
    'any.required': 'Guardian details are required',
  }),
  localGuardian: LocalGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian details are required',
  }),
  profileImg: Joi.string().uri().optional().messages({
    'string.uri': 'Profile image must be a valid URI',
  }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .required()
    .default('active')
    .messages({
      'any.only': 'isActive must be either active or blocked',
    }),
});

export default StudentValidationJOiSchema;