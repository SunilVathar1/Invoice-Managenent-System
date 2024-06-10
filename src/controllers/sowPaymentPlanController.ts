import { Request, Response } from 'express';
import SOWPaymentPlan from '../models/SOWPaymentPlan';

export const createSOWPaymentPlan = async (req: Request, res: Response) => {
  const paymentPlans = req.body;

  try {
    const newSOWPaymentPlan = await SOWPaymentPlan.bulkCreate(paymentPlans);
    return res.status(201).json(newSOWPaymentPlan);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSOWPaymentPlans = async (req: Request, res: Response) => {
  const { sowId } = req.params;

  try {
    const sowPaymentPlans = await SOWPaymentPlan.findAll({ where: { sowId } });
    return res.status(200).json(sowPaymentPlans);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
