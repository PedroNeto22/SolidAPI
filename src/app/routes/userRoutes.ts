import { Router } from 'express';
import createUserController from '../index';

const routes = Router();

routes.post('/', (req, res) => {
  return createUserController.handle(req, res);
});

export default routes;
