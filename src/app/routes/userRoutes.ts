import { Router } from 'express';
import { createUserController } from '../index';

const routes = Router();

routes.post('/', createUserController.handle);

export default routes;
