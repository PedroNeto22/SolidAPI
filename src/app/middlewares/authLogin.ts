import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function authLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = authorization.split(' ')[1];

  const userData = jwt.verify(token, process.env.SECRETE as string);

  next();
}
