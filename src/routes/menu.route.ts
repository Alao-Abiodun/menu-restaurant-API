import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const userRoute: Router = Router();

userRoute.get('/', MenuController.getAllMenus);
userRoute.post('/', MenuController.createMenu);

export default userRoute;