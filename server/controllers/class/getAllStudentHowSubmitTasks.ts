import { Request, Response, NextFunction } from 'express';
import { getAllStudentWhoSubmitTasksQuery } from '../../queries/class';

const getAllStudentWhoSubmitTasks = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId, assignmentId } = req.params;
    console.log(classId, assignmentId);

    const data:any = await getAllStudentWhoSubmitTasksQuery(assignmentId);
    console.log('mmmmmmmmmmmmmmmmmmmmmmm');

    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getAllStudentWhoSubmitTasks;
