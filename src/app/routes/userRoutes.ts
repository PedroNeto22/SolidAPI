import { Router } from 'express';
import { createUserController, getUserByIdController } from '../index';
import authLogin from '../middlewares/authLogin';

const routes = Router();

routes.post('/', (req, res) => {
  return createUserController.handle(req, res);
});

routes.get('/:id', authLogin, (req, res) => {
  return getUserByIdController.handle(req, res);
});

export default routes;
