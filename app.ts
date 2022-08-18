import express from 'express';
import cors from 'cors';

import router from './routes/menu.route';



const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/menus', router);

export default app;