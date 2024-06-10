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
exports.getSOWPaymentPlans = exports.createSOWPaymentPlan = void 0;
const SOWPaymentPlan_1 = __importDefault(require("../models/SOWPaymentPlan"));
const createSOWPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentPlans = req.body;
    try {
        const newSOWPaymentPlan = yield SOWPaymentPlan_1.default.bulkCreate(paymentPlans);
        return res.status(201).json(newSOWPaymentPlan);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.createSOWPaymentPlan = createSOWPaymentPlan;
const getSOWPaymentPlans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sowId } = req.params;
    try {
        const sowPaymentPlans = yield SOWPaymentPlan_1.default.findAll({ where: { sowId } });
        return res.status(200).json(sowPaymentPlans);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getSOWPaymentPlans = getSOWPaymentPlans;
//# sourceMappingURL=sowPaymentPlanController.js.map