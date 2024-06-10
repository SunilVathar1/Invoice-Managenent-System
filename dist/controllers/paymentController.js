"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayments = exports.makePayment = void 0;
const Invoice_1 = __importDefault(require("../models/Invoice"));
const Payment_1 = __importDefault(require("../models/Payment"));
const makePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, paymentId, currency, ForEx, IndianAmount, } = req.body;
    console.log(req.body);
    try {
        let invoice = yield Invoice_1.default.findByPk(id);
        if (!invoice) {
            return res.status(404).json({ error: "Invoice not found" });
        }
        let total = invoice.TotalInvoiceValue;
        let remainingAmount = total - ForEx;
        let isFullPayment = remainingAmount === 0;
        console.log(total + "      " + remainingAmount + "     ");
        // Update invoice status and remaining amount
        if (isFullPayment) {
            invoice.Status = "PAID";
        }
        else {
            invoice.Status = "PARTIALLY PAID";
            invoice.TotalInvoiceValue = remainingAmount;
        }
        yield invoice.save();
        // Record payment details
        let paymantDetails = yield Payment_1.default.create({
            id: paymentId,
            PaymentDate: new Date(),
            ForEx: ForEx,
            Currency: currency,
            IndianAmount: IndianAmount,
            InvoiceId: id,
            isFullPayment: isFullPayment,
        });
        res.status(200).json({ message: "Payment Successful", details: paymantDetails, invoice: invoice });
    }
    catch (error) {
        console.error("Something went wrong while making the payment", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.makePayment = makePayment;
function getPayments(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payments = yield Payment_1.default.findAll();
        res.json(payments);
    });
}
exports.getPayments = getPayments;
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
//# sourceMappingURL=paymentController.js.map