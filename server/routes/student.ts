import { Router } from 'express';
import {
  putStudentHealth,
  getStudentClasses,
  getStudentTests,
  getStudentGrade,
  getStudentInfo,
  getIfStudentUserExists,
} from '../controllers';
import {
  userAuth,
  parentAuth,
  studentAndParent,
  studentAndParentAndTeacher,
} from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/:studentId/classes', userAuth, studentAndParentAndTeacher, getStudentClasses);
studentRouter.get('/:studentId/tests', userAuth, studentAndParent, getStudentTests);
studentRouter.get('/:studentId/grades', userAuth, studentAndParentAndTeacher, getStudentGrade);
studentRouter.get('/:studentId/info', userAuth, getStudentInfo); // ? studentInfoMiddleware,
studentRouter.post('/validate', getIfStudentUserExists);

export default studentRouter;
