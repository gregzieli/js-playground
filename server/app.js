import express, { json } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import routes from './routes';
import models, { connectDb } from './models';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(async (req, res, next) => {
    req.context = {
      models,
      me: await models.User.findByLogin ('User One')
    };
    next();
  });

app.use('/api/message', routes.message);
app.use('/api/session', routes.session);
app.use('/api/user', routes.user);

connectDb();

export default app;
