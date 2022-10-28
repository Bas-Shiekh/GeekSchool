import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const studentRelatedToParent = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const { studentId } = req.params;
    const data = await studentParentRelationQuery(id, studentId);
    const isRelated = data;
    if (!isRelated) {
      throw new CustomError(401, 'Unauthenticated');
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default studentRelatedToParent;
