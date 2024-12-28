import express from 'express';
    import cors from 'cors';
    import helmet from 'helmet';
    import rateLimit from 'express-rate-limit';
    import session from 'express-session';
    import redis from 'redis';
    import connectRedis from 'connect-redis';
    import { authRouter } from './routes/auth';
    import { casesRouter } from './routes/cases';
    import { documentsRouter } from './routes/documents';
    import { personsRouter } from './routes/persons';
    import { timelineRouter } from './routes/timeline';
    import { exportRouter } from './routes/export';

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();

    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100
      })
    );

    app.use(
      session({
        store: new RedisStore({ client: redisClient }),
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60000
        }
      })
    );

    app.use('/api/auth', authRouter);
    app.use('/api/cases', casesRouter);
    app.use('/api/documents', documentsRouter);
    app.use('/api/persons', personsRouter);
    app.use('/api/timeline', timelineRouter);
    app.use('/api/export', exportRouter);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
