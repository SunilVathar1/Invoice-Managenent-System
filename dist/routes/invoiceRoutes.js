"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoiceController_1 = require("../controllers/invoiceController");
const router = express_1.default.Router();
router.post('/generate', invoiceController_1.generateInvoices);
// router.get('/:customerId', getInvoices);
exports.default = router;
//# sourceMappingURL=invoiceRoutes.js.map