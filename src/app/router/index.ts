import { Router } from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';

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
];

routers.forEach((route) => router.use(route.path, route.router));

export default router;
