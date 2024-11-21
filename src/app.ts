import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
// const express = require('express')
const app: Application = express();


app.use(express.json());
app.use(cors());

//aplication route 
app.use('api/v1/students', studentRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
}
);

export default app;
