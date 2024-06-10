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
exports.generateInvoices = void 0;
const sequelize_1 = require("sequelize");
const inv1_1 = __importDefault(require("../models/inv1"));
const SOWPaymentPlan_1 = __importDefault(require("../models/SOWPaymentPlan"));
const generateInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get the current date
        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));
        // Find all SOWPaymentPlans with a planned invoice date of today
        console.log([startOfDay, endOfDay]);
        const sowPaymentPlans = yield SOWPaymentPlan_1.default.findAll({
            where: {
                plannedInvoiceDate: {
                    [sequelize_1.Op.between]: [startOfDay, endOfDay]
                },
            },
        });
        console.log(sowPaymentPlans);
        // Create drafted invoices for each SOWPaymentPlan
        const draftedInvoices = yield Promise.all(sowPaymentPlans.map((sowPaymentPlan) => __awaiter(void 0, void 0, void 0, function* () {
            const invoice = yield inv1_1.default.create({
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
        })));
        console.log(draftedInvoices);
        res.json(draftedInvoices);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.generateInvoices = generateInvoices;
//# sourceMappingURL=invoiceController.js.map