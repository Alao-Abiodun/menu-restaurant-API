import { IMenu } from '../types/menu.types'
import Menu from '../models/menu.model';

// create a menu class
export class MenuService {

    public static async getAllMenus(): Promise<IMenu[] | null> {
        try {
            const menus: IMenu[] = await Menu.find();
            return menus;
        } catch (error) {
            throw error;
        }
    }
    
    public static async createMenu(data: IMenu): Promise<IMenu | null> {
        try {
            const newMenu: IMenu = await Menu.create(data);
            return newMenu;
        } catch (error) {
            throw error;
        }
    }
}

export default MenuService;

