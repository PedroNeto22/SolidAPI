import { Router } from 'express';
import {
  createTaskController,
  deleteTaskByTaskIdAndUserIdController,
  getTasksByUserIdController,
} from '../index';
import authLogin from '../middlewares/authLogin';

const routes = Router();

routes.use(authLogin);

routes.post('/', (req, res) => {
  return createTaskController.handle(req, res);
});

routes.get('/', (req, res) => {
  return getTasksByUserIdController.handle(req, res);
});

routes.delete('/:taskId', (req, res) => {
  return deleteTaskByTaskIdAndUserIdController.handle(req, res);
});

export default routes;
