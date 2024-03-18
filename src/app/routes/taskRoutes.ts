import { Router } from 'express';
import { createTaskController, getTasksByUserIdController } from '../index';

const routes = Router();

routes.post('/', (req, res) => {
  return createTaskController.handle(req, res);
});

routes.get('/:userId', (req, res) => {
  return getTasksByUserIdController.handle(req, res);
});

export default routes;
