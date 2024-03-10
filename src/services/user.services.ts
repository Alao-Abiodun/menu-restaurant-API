import { IUser } from '../types/user.types';
import User from '../models/user.model';

// create a user class
export class UserService {
    
        public static async getAllUsers(): Promise<IUser[] | null> {
            try {
                const users: IUser[] = await User.find();
                return users;
            } catch (error) {
                throw error;
            }
        }
    
        public static async createUser(data: IUser): Promise<IUser | null> {
            try {
                const newUser: IUser = await User.create(data);
                return newUser;
            } catch (error) {
                throw error;
            }
        }

    }

export default UserService;