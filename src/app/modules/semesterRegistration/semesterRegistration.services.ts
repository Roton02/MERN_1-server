import { academicSemester } from './../academicSemester/academicModel';
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import mongoose from 'mongoose';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import queryBuilder from '../../QueryBuilder/QueryBuilder';
import { AppError } from '../../Error/AppError';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  //    * Step1: Check if there any registered semester that is already 'UPCOMING'|'ONGOING'
  //    * Step2: Check if the semester is exist
  const academicsemester = payload.academicSemester;
  const isAcademicSemesterExists =
    await academicSemester.findById(academicsemester);
  if (!isAcademicSemesterExists) {
    throw new AppError(404, 'Academic semester not found')
  }

    const isAcademicSemesterAlreadyExists = await SemesterRegistration.findOne(academicsemester)
    if(isAcademicSemesterAlreadyExists){
        throw new AppError(400, 'Semester is already registered')
    }

  //    * Step3: Check if the semester is already registered!
  //    * Step4: Create the semester registration

  //check if there any registered semester that is already 'UPCOMING'|'ONGOING'

  // check if the semester is exist

  // check if the semester is already registered!

  const result = await SemesterRegistration.create(payload);
  return result;
};

const getAllSemesterRegistrationsFromDB = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistrationQuery = new queryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await semesterRegistrationQuery.queryModel;
  return result;
};

const getSingleSemesterRegistrationsFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);

  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  /**
   * Step1: Check if the semester is exist
   * Step2: Check if the requested registered semester is exists
   * Step3: If the requested semester registration is ended, we will not update anything
   * Step4: If the requested semester registration is 'UPCOMING', we will let update everything.
   * Step5: If the requested semester registration is 'ONGOING', we will not update anything  except status to 'ENDED'
   * Step6: If the requested semester registration is 'ENDED' , we will not update anything
   *
   * UPCOMING --> ONGOING --> ENDED
   *
   */

  // check if the requested registered semester is exists
  // check if the semester is already registered!

  //if the requested semester registration is ended , we will not update anything

  // UPCOMING --> ONGOING --> ENDED

  const result = await SemesterRegistration.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteSemesterRegistrationFromDB = async (id: string) => {
  /** 
  * Step1: Delete associated offered courses.
  * Step2: Delete semester registraton when the status is 
  'UPCOMING'.
  **/
  //   // checking if the semester registration is exist
  //   const isSemesterRegistrationExists = await SemesterRegistration.findById(id);
  //   if (!isSemesterRegistrationExists) {
  //     throw new AppError(
  //       httpStatus.NOT_FOUND,
  //       'This registered semester is not found !',
  //     );
  //   }
  //   // checking if the status is still "UPCOMING"
  //   const semesterRegistrationStatus = isSemesterRegistrationExists.status;
  //   if (semesterRegistrationStatus !== 'UPCOMING') {
  //     throw new AppError(
  //       httpStatus.BAD_REQUEST,
  //       `You can not update as the registered semester is ${semesterRegistrationStatus}`,
  //     );
  //   }
  //   const session = await mongoose.startSession();
  //   //deleting associated offered courses
  //   try {
  //     session.startTransaction();
  //     const deletedOfferedCourse = await OfferedCourse.deleteMany(
  //       {
  //         semesterRegistration: id,
  //       },
  //       {
  //         session,
  //       },
  //     );
  //     if (!deletedOfferedCourse) {
  //       throw new AppError(
  //         httpStatus.BAD_REQUEST,
  //         'Failed to delete semester registration !',
  //       );
  //     }
  //     const deletedSemisterRegistration =
  //       await SemesterRegistration.findByIdAndDelete(id, {
  //         session,
  //         new: true,
  //       });
  //     if (!deletedSemisterRegistration) {
  //       throw new AppError(
  //         httpStatus.BAD_REQUEST,
  //         'Failed to delete semester registration !',
  //       );
  //     }
  //     await session.commitTransaction();
  //     await session.endSession();
  //     return null;
  //   } catch (err: any) {
  //     await session.abortTransaction();
  //     await session.endSession();
  //     throw new Error(err);
  //   }
};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
  deleteSemesterRegistrationFromDB,
};
