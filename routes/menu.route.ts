import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const router: Router = Router();

router.get('/', MenuController.getAllMenus);
router.post('/', MenuController.createMenu);

export default router;