import { Request, Response } from 'express';
import MenuService from "../services/menu.services";
import { IMenu } from '../types/menu.types'

export default class MenuController {

    public static async getAllMenus(req: Request, res: Response): Promise<any> {
        try {
            const menus: IMenu[] | null = await MenuService.getAllMenus();
            res.status(200).json({
                message: 'Menus retrieved successfully',
                menus
            })
        } catch (error) {
            throw error;
        }
    }

    public static async createMenu(req: Request, res: Response): Promise<any> {
        try {
            const newMenu: IMenu | null = await MenuService.createMenu(req.body);
            res.status(200).json({
                message: 'Menu created successfully',
                newMenu
            })
        } catch (error) {
            throw error;
        }
    }

}
