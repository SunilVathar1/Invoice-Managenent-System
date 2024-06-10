import { Request, Response } from 'express';
import SOWPaymentPlanLineItem from '../models/SOWPaymentPlanLineItem';

export const createSOWPaymentPlanLineItem = async (req: Request, res: Response) => {
  // console.log(req.body);
  // return;
  const SOWPaymentPlanLineItems = req.body;
  // console.log(SOWPaymentPlanLineItems);
  
  try {
const newSOWPaymentPlanLineItem = await SOWPaymentPlanLineItem.bulkCreate({...SOWPaymentPlanLineItems}
);

    return res.json({newSOWPaymentPlanLineItem});
  } catch (error) {
    console.error(error);
    return res.json({ message: error });
  }
};

export const getSOWPaymentPlanLineItems = async (req: Request, res: Response) => {
  const { SOWPaymentPlanId } = req.params;

  try {
    const sowPaymentPlanLineItems = await SOWPaymentPlanLineItem.findAll({ where: { SOWPaymentPlanId } });
    return res.json(sowPaymentPlanLineItems);
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
  }
};
