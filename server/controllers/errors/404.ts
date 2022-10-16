import { Request, Response } from 'express';

const notFound = (req: Request, res: Response) => (
  res.status(404).json({ message: 'Route is not found!' })
);

export default notFound;
