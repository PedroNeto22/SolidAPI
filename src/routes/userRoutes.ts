import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/', UserController.findByEmail);
routes.post('/', UserController.save);

export default routes;
