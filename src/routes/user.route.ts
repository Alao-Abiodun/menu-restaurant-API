import { Router } from 'express';

import UserController from '../controllers/user.controller';

const userRoute: Router = Router();

userRoute.get('/users', UserController.getAllUsers);
userRoute.post('/users', UserController.createUser);

export default userRoute;