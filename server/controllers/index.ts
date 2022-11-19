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
  getTests,
  addNewClass,
} from './class';

import {
  getParentStudent, getTeachersClasses, getReports, getStudentHealth,
} from './profiles';
import {
  putStudentHealth,
  getStudentClasses,
  getStudentTests,
  getStudentGrade,
  getStudentInfo,
  getIfStudentUserExists,
  postStudentReports,
} from './student';
import { getTeacherSchedule, getTeacherStudents, teacherInfo } from './teacher';
import getParentTeachers from './getParentTeachers';

import { addMessage, getAllMessage } from './chat';

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
  getTests,
  getClassGrades,
  getParentTeachers,
  getTeacherSchedule,
  putStudentHealth,
  getTeacherStudents,
  getStudentClasses,
  getParentStudent,
  getTeachersClasses,
  getStudentTests,
  teacherInfo,
  getReports,
  getStudentHealth,
  getStudentGrade,
  getStudentInfo,
  getIfStudentUserExists,
  postStudentReports,
  addMessage,
  getAllMessage,
  addNewClass,
};
