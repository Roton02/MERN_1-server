import mongoose from 'mongoose';
import TerrorSources, { TGenericResponseError } from '../interface/error';

const mongooseErrorsHandler = (
  err: mongoose.Error.ValidationError,
): TGenericResponseError => {
  console.log('error from mongoose');
  const errorSources: TerrorSources = Object.values(err.errors).map(
    (err: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: err.path,
        message: err.message,
      };
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    success: false,
    message: 'Validation Error',
    errorSources,
  };
};

export default mongooseErrorsHandler;
