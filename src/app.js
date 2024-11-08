import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { CustomError } from './utils/customErrors.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mock.router.js'

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://doom660324:GeforceRtx3060@coderback.0bsn23o.mongodb.net/?retryWrites=true&w=majority&appName=coderback`)

app.use(express.json());

app.use(cookieParser());
app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    res.status(500).json({ error: 'Something went wrong' });
});

app.use('/api/mocks', mocksRouter);
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
