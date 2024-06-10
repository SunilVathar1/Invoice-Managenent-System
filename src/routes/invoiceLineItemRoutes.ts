import express from 'express';
import { createInvoiceLineItem, getInvoiceLineItems } from '../controllers/invoiceLineItemController';

const router = express.Router();

router.post('/', createInvoiceLineItem);
router.get('/:InvoiceId', getInvoiceLineItems);

export default router;