import express from 'express';
import { createClient, getClients } from '../controllers/clientController';

const router = express.Router();

router.post('/register',createClient)
router.get('/:clientId', getClients);


export default router;