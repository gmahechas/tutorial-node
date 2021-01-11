import { Router } from 'express';
import { helloRouter } from './hello.routes';

const router = Router();

export default [
  router.use('/hello', helloRouter)
];