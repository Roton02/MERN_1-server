import { TGenericResponseError } from '../interface/error';
import mongoose from 'mongoose';

const CastErrorHandler = (
  err: mongoose.Error.CastError,
): TGenericResponseError => {
  const errorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    success: false,
    message: 'Invalid ID',
    errorSources,
  };
};

export default CastErrorHandler;
