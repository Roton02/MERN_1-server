"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = require("mongoose");
const UserNameSchema = new mongoose_1.Schema({
    firstName: { type: 'string', required: true },
    middleName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: 'string', required: true },
    fatherOccupation: { type: 'string', required: true },
    fatherContactNo: { type: 'string', required: true },
    motherName: { type: 'string', required: true },
    motherOccupation: { type: 'string', required: true },
    motherContactNo: { type: 'string', required: true },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: 'string', required: true },
    occupation: { type: 'string', required: true },
    contactNo: { type: 'string', required: true },
    address: { type: 'string', required: true },
});
const studentSchema = new mongoose_1.Schema({
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
exports.studentModel = (0, mongoose_1.model)('student', studentSchema);
