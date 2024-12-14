/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrHandler = (
  err: any,
  req: Request,
  res: Record<string, any>,
  next: NextFunction,
) => {
  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  });
};

export default globalErrHandler;
