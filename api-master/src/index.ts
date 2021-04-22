/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */
import Koa from 'koa';
import koaBody from 'koa-body';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import corss from 'cors'
import * as Sentry from '@sentry/node';
import chalk from 'chalk';
import mongoose from 'mongoose';
import userRoutes from "./routes/user.route";
import bodyParser from 'body-parser'
import router from './routes';
import { Server } from './classes/server';
import artifactRoutes from './routes/artifact.route';
import characterRoutes from './routes/character.route';
import enemyRoutes from './routes/enemy.route';
import nationRoutes from './routes/nation.route';
import weaponRoutes from './routes/weapon.route';
import authRoutes from './routes/auth.routes';
const server = new Server();

const sentryDsn = process.env.SENTRY_DSN;

// Check if Sentry
if (sentryDsn && sentryDsn.length > 0) {
  console.log(chalk.blue('[Sentry]'), 'Enabled Sentry error logging');
  Sentry.init({
    dsn: sentryDsn,
    tracesSampleRate: 0.5,
  });
}

(async () => {
  const app = new Koa();
  const port = process.env.PORT || 5000;

  app.use(koaBody());
  app.use(helmet());
  app.use(cors());

  app.use(router.routes());

  server.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  server.app.use(bodyParser.json({ limit: '5mb' }));



  server.app.use(corss({
    origin: true,
    credentials: true
  }))

  server.app.use('/user', userRoutes);
  server.app.use('/artifacts', artifactRoutes);
  server.app.use('/characters', characterRoutes);
  server.app.use('/enemies', enemyRoutes);
  server.app.use('/nations', nationRoutes);
  server.app.use('/weapons', weaponRoutes);
  server.app.use('/auth', authRoutes);

  server.start(() => {
    console.log("Server started on port " + server.port);
  });

  mongoose.connect('mongodb://localhost:27017/genshin',
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }, (err: any) => {
      if (err) {
        console.log("error", err);
        throw err;
      }
      else {
        console.log('Connected to DB');

      }
    });

  app.listen(port, () => {
    console.log(
      chalk.blue('[API]'),
      'Running on',
      chalk.yellow(`0.0.0.0:${port}`),
    );
  });
})();
