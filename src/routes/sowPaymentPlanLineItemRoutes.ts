import express from 'express';
import { createSOWPaymentPlanLineItem, getSOWPaymentPlanLineItems } from '../controllers/sowPaymentPlanLineItemController';

const router = express.Router();

router.post('/', createSOWPaymentPlanLineItem);
router.get('/:SOWPaymentPlanId', getSOWPaymentPlanLineItems);

export default router;
