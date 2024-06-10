import express from 'express';
import { createSOWPaymentPlan, getSOWPaymentPlans } from '../controllers/sowPaymentPlanController';

const router = express.Router();

router.post('/', createSOWPaymentPlan);
router.get('/:sowId', getSOWPaymentPlans);

export default router;
