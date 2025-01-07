import { Router } from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { academicFacultiesRoute } from '../modules/academiceFaculty/academicFaculty.route';
import { academicDepartmentRoute } from '../modules/academiceDepartment/academiceDepartment.route';
import { FacultyRoutes } from '../modules/Faculty/faculty.routes';
import { AdminRoutes } from '../modules/Admin/admin.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.router';

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
  {
    path: '/academic-department',
    router: academicDepartmentRoute,
  },
  
  {
    path: '/Faculty',
    router: FacultyRoutes,
  },
  {
    path: '/Admin',
    router: AdminRoutes,
  },
  {
    path: '/semester/register',
    router: semesterRegistrationRoutes,
  },
  
];

routers.forEach((route) => router.use(route.path, route.router));

export default router;
