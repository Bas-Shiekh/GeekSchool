import { Request, Response, NextFunction } from 'express';
import { updateGradPayloadValidate } from '../../utils/validation';
import { putAssignmentTeacherQuery } from '../../queries/class';

const putAssignmentTeacher = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { grade, studentId } = req.body;

    await updateGradPayloadValidate({ grade, studentId });

    console.log({ assignmentId, grade, studentId });

    const [, data]:any = await putAssignmentTeacherQuery(assignmentId, grade, studentId);
    res.status(201).json({ data, msg: 'updating successfully' });
  } catch (error) {
    next(error);
  }
};

export default putAssignmentTeacher;
