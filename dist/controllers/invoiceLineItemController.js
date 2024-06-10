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
exports.getInvoiceLineItems = exports.createInvoiceLineItem = void 0;
const InvoiceLineItem_1 = __importDefault(require("../models/InvoiceLineItem"));
const createInvoiceLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, InvoiceId, OrderNo, Particular, Rate, Unit, Total } = req.body;
    try {
        const newInvoiceLineItem = yield InvoiceLineItem_1.default.create({
            id,
            InvoiceId,
            OrderNo,
            Particular,
            Rate,
            Unit,
            Total,
        });
        return res.status(201).json(newInvoiceLineItem);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.createInvoiceLineItem = createInvoiceLineItem;
const getInvoiceLineItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { InvoiceId } = req.params;
    try {
        const invoiceLineItems = yield InvoiceLineItem_1.default.findAll({ where: { InvoiceId } });
        return res.status(200).json(invoiceLineItems);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getInvoiceLineItems = getInvoiceLineItems;
//# sourceMappingURL=invoiceLineItemController.js.map