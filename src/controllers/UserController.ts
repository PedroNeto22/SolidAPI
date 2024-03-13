import { Request, Response } from 'express';
import user from '../models/User';

class UserController {
  save(req: Request, res: Response) {
    const { email, firstName, lastName } = req.body;

    if (!email || !email || !lastName) {
      return res.status(400).json({
        msg: 'all fields required',
      });
    }

    const userData = user.save(email, firstName, lastName);

    return res.status(200).json(userData);
  }
}
export default new UserController();
