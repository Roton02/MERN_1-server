import express, { Application } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { userRouter } from './app/modules/user/user.route';
import globalErrHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
// const express = require('express')
const app: Application = express();

app.use(express.json());
app.use(cors());

//aplication route
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/users', userRouter);

app.use(globalErrHandler);
app.use(notFound);

export default app;
