// controllers/paymentController.ts
import { Request, Response } from "express";
import Invoice from "../models/Invoice";
import Payment from "../models/Payment";

export const makePayment = async (req: Request, res: Response) => {
  const {
    id,
    paymentId,
    currency,
    ForEx,
    IndianAmount,
  } = req.body;

  console.log(req.body);
  

  try {
    let invoice = await Invoice.findByPk(id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    let total = invoice.TotalInvoiceValue;
    let remainingAmount = total - ForEx;
    let isFullPayment = remainingAmount === 0;

    console.log(total+"      "+remainingAmount+"     ");
    

    // Update invoice status and remaining amount
    if (isFullPayment) {
      invoice.Status = "PAID";
    } else {
      invoice.Status = "PARTIALLY PAID";
      invoice.TotalInvoiceValue = remainingAmount;
    }
    await invoice.save();

    // Record payment details
   let paymantDetails= await Payment.create({
      id: paymentId,
      PaymentDate: new Date(),
      ForEx: ForEx,
      Currency: currency,
      IndianAmount: IndianAmount,
      InvoiceId: id,
      isFullPayment: isFullPayment,
    });

    res.status(200).json({ message: "Payment Successful",details:paymantDetails,invoice:invoice});
  } catch (error) {
    console.error("Something went wrong while making the payment", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export async function getPayments(req: Request, res: Response) {
  const payments = await Payment.findAll();
  res.json(payments);
}

// Find the invoic
//     if (!invoice) {
//       return res.status(404).json({ error: 'Invoice not found' });
//     }

//     // Calculate the remaining amount to be paid
//     const paidAmount = invoice.reduce((sum, payment) => sum + payment.amount, 0);
//     const remainingAmount = invoice.totalAmount - paidAmount;

//     if (amount > remainingAmount) {
//       return res.status(400).json({ error: 'Payment amount exceeds the remaining amount' });
//     }

//     // Create a new payment
//     const payment = await Payment.create({
//       InvoiceId,
//       Amount,
//       status: 'PAID',
//     });

//     // Update the invoice status based on the paid amount
//     if (remainingAmount === 0) {
//       invoice.Status = 'PAID';
//     } else {
//       invoice.Status= 'PARTIALLY_PAID';
//     }
//     await invoice.save();

//     res.status(201).json({ payment, invoice });
//   } catch (error) {
//     console.error('Error making payment:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
