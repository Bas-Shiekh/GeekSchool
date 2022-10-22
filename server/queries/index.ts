import {
  classStats,
  getAnnouncementQuery,
  recommendedQueries,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  getClassQuestionsQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getStudentTasksQuery,
  getClassFeedbackQuery,
  deleteAssignmentQuery,
} from './class';
import { createUser, findUserByEmail } from './userQueries';

import loginQuery from './loginQuery';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  classStats,
  getAnnouncementQuery,
  getClassFeedbackQuery,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  getClassQuestionsQuery,
  recommendedQueries,
  loginQuery,
  deleteAssignmentQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getStudentTasksQuery,
};
