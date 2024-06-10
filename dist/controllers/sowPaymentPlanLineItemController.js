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
exports.getSOWPaymentPlanLineItems = exports.createSOWPaymentPlanLineItem = void 0;
const SOWPaymentPlanLineItem_1 = __importDefault(require("../models/SOWPaymentPlanLineItem"));
const createSOWPaymentPlanLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    // return;
    const SOWPaymentPlanLineItems = req.body;
    // console.log(SOWPaymentPlanLineItems);
    try {
        const newSOWPaymentPlanLineItem = yield SOWPaymentPlanLineItem_1.default.bulkCreate(Object.assign({}, SOWPaymentPlanLineItems));
        return res.json({ newSOWPaymentPlanLineItem });
    }
    catch (error) {
        console.error(error);
        return res.json({ message: error });
    }
});
exports.createSOWPaymentPlanLineItem = createSOWPaymentPlanLineItem;
const getSOWPaymentPlanLineItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { SOWPaymentPlanId } = req.params;
    try {
        const sowPaymentPlanLineItems = yield SOWPaymentPlanLineItem_1.default.findAll({ where: { SOWPaymentPlanId } });
        return res.json(sowPaymentPlanLineItems);
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'Internal server error' });
    }
});
exports.getSOWPaymentPlanLineItems = getSOWPaymentPlanLineItems;
//# sourceMappingURL=sowPaymentPlanLineItemController.js.map