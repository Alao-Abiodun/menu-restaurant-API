import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import menuRoute from './routes/menu.route';
import userRoute from './routes/user.route';



const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1', menuRoute);
app.use('/api/v1', userRoute);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome to the Restaurant Service API'
    })
})

export default app;