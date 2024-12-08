import { Router } from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { academicFacultiesRoute } from '../modules/academiceFaculty/academicFaculty.route';

const router = Router();

const routers = [
  {
    path: '/students',
    router: studentRouter,
  },
  {
    path: '/users',
    router: userRouter,
  },
  {
    path: '/academic-semesters',
    router: AcademicSemesterRouter,
  },
  {
    path: '/academic-faculty',
    router: academicFacultiesRoute,
  },
];

routers.forEach((route) => router.use(route.path, route.router));

export default router;
