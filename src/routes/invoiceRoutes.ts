import express from 'express';
import { generateInvoices} from '../controllers/invoiceController';

const router = express.Router();

router.post('/generate', generateInvoices);
// router.get('/:customerId', getInvoices);

export default router;
