import { Router } from 'express';
import { createTaskController } from '../index';

const routes = Router();

routes.post('/', (req, res) => {
  return createTaskController.handle(req, res);
});

export default routes;
