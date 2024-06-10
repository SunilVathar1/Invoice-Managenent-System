import { Request, Response } from 'express';
import SOW from '../models/SOW';

export const createSOW = async (req: Request, res: Response) => {
  const { id,invoiceEmailAddresses, customerId, customerPONumber, title, customerSONumber,totalValue, currency } = req.body;
  const { validFrom, validUpto } =req.body.validityPeriod;

  try {
    const newSOW = await SOW.create({
      id,
      invoiceEmailAddresses,
      customerId,
      customerPONumber,
      title,
      customerSONumber,
      validFrom,
      validUpto,
      totalValue,
      currency,
    });

    return res.status(201).json(newSOW);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSOWs = async (req: Request, res: Response) => {
  const { customerId } = req.params;

  try {
    const sows = await SOW.findAll({ where: { customerId } });
    return res.status(200).json(sows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const getAllSOWs = async (req: Request, res: Response) => {
  try {
    const sows = await SOW.findAll();
    return res.json(sows);
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
  }
};