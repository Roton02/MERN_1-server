import express, { Application } from 'express';
import cors from 'cors';
import globalErrHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/router';
// const express = require('express')
const app: Application = express();

app.use(express.json());
app.use(cors());

//application route
app.use('/api/v1', router);

app.use(globalErrHandler);
app.use(notFound);

export default app;
