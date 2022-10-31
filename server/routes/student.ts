import { Router } from 'express';
import { putStudentHealth, getStudentClasses } from '../controllers';
import { userAuth, studentAuth, parentAuth } from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/classes', userAuth, studentAuth, getStudentClasses);

export default studentRouter;