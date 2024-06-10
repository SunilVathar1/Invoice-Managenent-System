"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoiceLineItemController_1 = require("../controllers/invoiceLineItemController");
const router = express_1.default.Router();
router.post('/', invoiceLineItemController_1.createInvoiceLineItem);
router.get('/:InvoiceId', invoiceLineItemController_1.getInvoiceLineItems);
exports.default = router;
//# sourceMappingURL=invoiceLineItemRoutes.js.map