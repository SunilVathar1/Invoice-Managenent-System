import express from 'express';
import { getPayments, makePayment } from '../controllers/paymentController';

const router = express.Router();

router.post('/', makePayment);
router.get('/PaymentDetails', getPayments);

export default router;
