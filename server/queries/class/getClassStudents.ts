import { ClassStudent, Student, User } from '../../models';

const getClassStudentsQuery = (classId: string) => ClassStudent.findAll(
  {
    raw: true,
    nest: false,
    attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'class_id', 'student_id'] },
    where: { class_id: classId },
    include: [{
      model: Student,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt', 'user_id', 'parent_id', 'User.id'],
      },
      include: [{
        model: User,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password'],
        },
      }],
    }],
  },
);

export default getClassStudentsQuery;
