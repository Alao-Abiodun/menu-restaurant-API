import { Router } from 'express';

import UserController from '../controllers/user.controller';

const userRoute: Router = Router();

userRoute.get('/', UserController.getAllUsers);
userRoute.post('/', UserController.createUser);

export default userRoute;