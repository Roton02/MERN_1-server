/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import { ZodError, ZodIssue } from 'zod';
import config from '../config';
import { zodErrorHandler } from '../Error/zodErrorHandler';
import mongooseErrorsHandler from '../Error/mongooseErrorHandler';
import TerrorSources from '../interface/error';
import CastErrorHandler from '../Error/CastErrorHandler';
import DuplicateIDErrorHandler from '../Error/DuplicateIDErrorHandler';
import { AppError } from '../Error/AppError';

const globalErrHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode;
  let message = err.message || 'something went wrong';

  let errorSources: TerrorSources = [
    { path: '', message: 'something went wrong' },
  ];

  if (err instanceof ZodError) {
    // console.log('error from ZodError');
    const simplifiedError = zodErrorHandler(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

    // console.log(simplifiedError);}
  } else if (err.name === 'ValidationError') {
    const simplifiedError = mongooseErrorsHandler(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err.name === 'CastError') {
    const simplifiedError = CastErrorHandler(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err.code === 11000) {
    const simplifiedError = DuplicateIDErrorHandler(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err instanceof AppError) {
    const simplifiedError = DuplicateIDErrorHandler(err);
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    const simplifiedError = DuplicateIDErrorHandler(err);
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  }

  res.status(statusCode || 500).json({
    success: false,
    message: message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err.stack : '',
    error: err,
  });
};

export default globalErrHandler;
