import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import app from './app';

// connect to mongodb
const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/menu';

(async () => {
    try {
        const db = await mongoose.connect(MONGO_URI);

        if (db) console.log('Connected to Database');

        mongoose.connection.on('error', (err) => {
            console.log("Error connecting to database", err)
        })

        mongoose.connection.on('disconnected', () => {
            console.log("Mongoose connection disconnected")
        })

        const port = process.env.PORT || 3000;

        app.listen(port, () => {
            console.log(`Restaurant service API is ready at  http://localhost:${port}`);
        })
    } catch (error) {
        process.exit(1);
    }
})()

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

process.on('uncaughtException', async (error) => {
    console.log('Uncaught Exception', error);
    await mongoose.connection.close();
    process.exit(1);
});

process.on('unhandledRejection', async (error) => {
    console.log('Unhandled Rejection', error);
    await mongoose.connection.close();
    process.exit(1);
});
