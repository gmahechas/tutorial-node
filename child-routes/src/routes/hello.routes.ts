import { Router } from 'express';
import * as helloController from '../controllers/hello.controller';

const router = Router();

router.get('', helloController.hello);

export { router as helloRouter };