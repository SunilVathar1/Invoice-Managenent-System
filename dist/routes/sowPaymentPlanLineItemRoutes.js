"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sowPaymentPlanLineItemController_1 = require("../controllers/sowPaymentPlanLineItemController");
const router = express_1.default.Router();
router.post('/', sowPaymentPlanLineItemController_1.createSOWPaymentPlanLineItem);
router.get('/:SOWPaymentPlanId', sowPaymentPlanLineItemController_1.getSOWPaymentPlanLineItems);
exports.default = router;
//# sourceMappingURL=sowPaymentPlanLineItemRoutes.js.map