import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { CustomError } from './utils/customErrors.js';
import {fileURLToPath} from 'node:url';
import { dirname } from 'node:path';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mock.router.js'
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://doom660324:GeforceRTX3060@coderback.0bsn23o.mongodb.net/?retryWrites=true&w=majority&appName=coderback`)


const swaggerOptions = {
    definition:{
        openapi:'3.0.1',
        info:{
            title: 'Documentacion de api de users',
            description: 'Documentacion de api de users'
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}

app.use(express.json());

app.use(cookieParser());

const specs = swaggerJsDoc(swaggerOptions)

app.use('/apidocs',swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/mocks', mocksRouter);
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT,()=>console.log(`🎅 HO HO HO. Feliz navidad 🎄 Muchisimas gracias por lo aprendido en todo este tiempo profe dani!: Estas en el puerto: ${PORT}`))


export default app