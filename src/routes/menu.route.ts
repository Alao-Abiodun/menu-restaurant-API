import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const userRoute: Router = Router();

userRoute.get('/menus', MenuController.getAllMenus);
userRoute.post('/menus', MenuController.createMenu);

export default userRoute;