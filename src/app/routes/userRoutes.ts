import { Router } from 'express';
import { createUserController, getUserByIdController } from '../index';

const routes = Router();

routes.post('/', (req, res) => {
  return createUserController.handle(req, res);
});

routes.get('/:id', (req, res) => {
  return getUserByIdController.handle(req, res);
});

export default routes;
