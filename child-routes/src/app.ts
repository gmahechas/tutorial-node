import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import routes from './routes';

const app = express();
app.use(json());
app.use('/_rest', routes);

export { app };