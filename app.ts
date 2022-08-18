import express from 'express';
import cors from 'cors';

import menuRoute from './routes/menu.route';
import userRoute from './routes/user.route';



const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/menus', menuRoute);
app.use('/api/v1/users', userRoute);

export default app;