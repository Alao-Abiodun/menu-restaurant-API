import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import app from './app';

// connect to mongodb
const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/menu';

mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb');
}).on('error', (error) => {
    console.log(error);
}).on('disconnected', () => {
    console.log('Disconnected from mongodb');
}).on('close', () => {
    console.log('Connection to mongodb closed');
})

const PORT: string | number = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});