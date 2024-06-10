"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sowPaymentPlanController_1 = require("../controllers/sowPaymentPlanController");
const router = express_1.default.Router();
router.post('/', sowPaymentPlanController_1.createSOWPaymentPlan);
router.get('/:sowId', sowPaymentPlanController_1.getSOWPaymentPlans);
exports.default = router;
//# sourceMappingURL=sowPaymentPlanRoutes.js.map