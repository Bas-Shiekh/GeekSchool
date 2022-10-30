import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import {
  addNewAssignment,
  getStats,
  recommended,
  getAnnouncement,
  getClassQuestions,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  putAnswerQuestion,
  addNewFeedback,
  getClassStudents,
  postTest,
  getFeedback,
  getAllStudentWhoSubmitTasks,
  deleteStudentFromClass,
  getAssignments,
  deleteAssignment,
  postQuestion,
  getClassGrades,
  postRecommendation,
} from './class';

import getParentTeachers from './getParentTeachers';
import getTeacherStudents from './teacher';
import getStudentClasses from './student';
import { getParentStudent, getTeachersClasses } from './profiles';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  addNewAssignment,
  getFeedback,
  addNewFeedback,
  postQuestion,
  deleteStudentFromClass,
  getAllStudentWhoSubmitTasks,
  getStats,
  getAssignments,
  deleteAssignment,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  postTest,
  postRecommendation,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  getClassGrades,
  getParentTeachers,
  getTeacherStudents,
  getStudentClasses,
  getParentStudent,
  getTeachersClasses,
};
