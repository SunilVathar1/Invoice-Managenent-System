import express from 'express';
import { createSOW, getSOWs,getAllSOWs } from '../controllers/sowController';

const router = express.Router();

router.post('/createSOW', createSOW);
router.get('/:customerId', getSOWs);
router.get('/',getAllSOWs );

export default router;
