import { Request, Response } from 'express';
import InvoiceLineItem from '../models/InvoiceLineItem';

export const createInvoiceLineItem = async (req: Request, res: Response) => {
  const { id,InvoiceId, OrderNo, Particular, Rate, Unit, Total } = req.body;

  try {
    const newInvoiceLineItem = await InvoiceLineItem.create({
        id,
      InvoiceId,
      OrderNo,
      Particular,
      Rate,
      Unit,
      Total,
    });

    return res.status(201).json(newInvoiceLineItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getInvoiceLineItems = async (req: Request, res: Response) => {
  const { InvoiceId } = req.params;

  try {
    const invoiceLineItems = await InvoiceLineItem.findAll({ where: { InvoiceId } });
    return res.status(200).json(invoiceLineItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};