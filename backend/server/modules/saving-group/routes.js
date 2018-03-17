import { Router } from 'express';
import * as SavingGroupController from './controller';

const routes = new Router();

routes.post('/saving-group', SavingGroupController.createSavingGroup);
routes.get('/saving-group', SavingGroupController.getAllSavingGroups);

export default routes;
