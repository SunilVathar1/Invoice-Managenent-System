// // controllers/invoiceController.ts
import { Request, Response } from 'express';
import { Op } from 'sequelize';
import SOW from '../models/SOW';
import {getAllSOWs } from '../controllers/sowController';
import Invoice from '../models/Invoice';
import inv1 from '../models/inv1';
import SOWPaymentPlan from '../models/SOWPaymentPlan';

export const generateInvoices = async (req: Request, res: Response) => {
  try {
    // Get the current date
const today = new Date();
const startOfDay = new Date(today.setHours(0, 0, 0, 0));
const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    // Find all SOWPaymentPlans with a planned invoice date of today
    // console.log([startOfDay, endOfDay]);
    const sowPaymentPlans = await SOWPaymentPlan.findAll({
      where: {
        plannedInvoiceDate: {
          [Op.between]: [startOfDay, endOfDay]
        },
      },
    });
    console.log(sowPaymentPlans);
    
    // Create drafted invoices for each SOWPaymentPlan
    const draftedInvoices = await Promise.all(
      sowPaymentPlans.map(async (sowPaymentPlan) => {
        const invoice = await inv1.create({
          id: sowPaymentPlan.id,
          TotalInvoiceValue: sowPaymentPlan.totalActualAmount,
          SOWId: sowPaymentPlan.sowId,
          Status: 'DRAFTED',
          SOWPaymentPlanId: sowPaymentPlan.id,
          InvoiceSentOn: today,
          CustomerId: sowPaymentPlan.customerId,
          InvoiceVersionNo: 1,
        });
        return invoice;
      })
    );
    console.log(draftedInvoices);
    
    res.json(draftedInvoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};