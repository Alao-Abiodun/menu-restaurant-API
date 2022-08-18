import { Request, Response } from 'express';
import UserService from '../services/user.services';
import { IUser } from '../types/user.types';

export default class UserController {
    
        public static async getAllUsers(req: Request, res: Response): Promise<any> {
            try {
                const users: IUser[] | null = await UserService.getAllUsers();
                res.status(200).json({
                    message: 'Users retrieved successfully',
                    users
                })
            } catch (error) {
                throw error;
            }
        }
    
        public static async createUser(req: Request, res: Response): Promise<any> {
            try {
                const newUser: IUser | null = await UserService.createUser(req.body);
                res.status(200).json({
                    message: 'User created successfully',
                    newUser
                })
            } catch (error) {
                throw error;
            }
        }
    
    }
