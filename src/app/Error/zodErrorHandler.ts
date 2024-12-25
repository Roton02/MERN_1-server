import { ZodError, ZodIssue } from 'zod';
import TerrorSources, { TGenericResponseError } from '../interface/error';



export const zodErrorHandler = (err: ZodError): TGenericResponseError => {
  console.log('error fro  zod error handler');
  const errorSources: TerrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    success: false,
    message: 'Validation Error',
    errorSources,
  };
};
