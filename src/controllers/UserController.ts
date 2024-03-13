import { Request, Response } from 'express';
import userModel from '../entities/User';

class UserController {
  async save(req: Request, res: Response) {
    const { email, firstName, lastName } = req.body;

    if (!email || !firstName || !lastName) {
      return res.status(400).json({
        msg: 'All fields required',
      });
    }
    const user = await userModel.save(email, firstName, lastName);

    if (!user) {
      return res.status(400).json({
        msg: 'user already exists',
      });
    }

    return res.status(200).json(user);
  }

  async findByEmail(req: Request, res: Response) {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        msg: 'email is required',
      });
    }

    const user = await userModel.findByEmail(email);

    if (!user) {
      return res.status(400).json({
        msg: 'User dosent exists',
      });
    }

    return res.status(200).json(user);
  }
}

export default new UserController();
