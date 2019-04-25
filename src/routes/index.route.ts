import { Router } from 'express'
const router = Router();

import { renderIndex } from '../controllers/index.controller'

router.route('/')
    .get(renderIndex);

export default router;
