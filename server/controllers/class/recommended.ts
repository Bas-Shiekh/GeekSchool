import { Request, Response, NextFunction } from 'express';
import { recommendedQueries } from '../../queries';

const recommended = async (req: Request, res: Response, next:NextFunction) => {
  console.log('here');
  try {
    const { classId } = req.params;
    const data:any = await recommendedQueries(Number(classId));
    res.json({ msg: 'Recommended data for this class', data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default recommended;
