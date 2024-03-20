import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type UserToken = {
  id: string;
};

export default function authLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'login required',
    });
  }

  const token = authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'login required',
    });
  }

  const { id } = jwt.verify(token, process.env.SECRETE as string) as UserToken;
}
