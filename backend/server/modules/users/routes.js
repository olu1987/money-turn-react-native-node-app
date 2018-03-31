import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.post('/create-user', UserController.createUser);
routes.get('/get-all-users', UserController.getAllUsers);

export default routes;
