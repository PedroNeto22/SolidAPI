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

  const [, token] = authToken;

  try {
    const { id } = jwt.verify(
      token,
      process.env.SECRETE as string,
    ) as UserToken;
    req.userId = id;
    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
