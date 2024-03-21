import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserToken {
  id: string;
}

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

  const authToken = authorization.split(' ');

  if (authToken[1] === 'undefined') {
    return res.status(401).json({
      message: 'login required',
    });
  }

  const [, token] = authToken;

  const { id } = jwt.verify(token, process.env.SECRETE as string) as UserToken;

  req.userId = id;

  return next();
}
