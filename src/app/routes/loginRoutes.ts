import { Router } from 'express';
import { loginUserController } from '..';

const routes = Router();

routes.post('/', (req, res) => {
  return loginUserController.handle(req, res);
});

export default routes;
