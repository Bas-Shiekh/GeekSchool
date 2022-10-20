import { createUser, findUserByEmail } from './userQueries';
import { getAnnouncementQuery, recommendedQueries } from './class';

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
  getAnnouncementQuery,
  recommendedQueries,
  loginQuery,
};
