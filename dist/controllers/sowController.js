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
exports.getAllSOWs = exports.getSOWs = exports.createSOW = void 0;
const SOW_1 = __importDefault(require("../models/SOW"));
const createSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, invoiceEmailAddresses, customerId, customerPONumber, title, customerSONumber, totalValue, currency } = req.body;
    const { validFrom, validUpto } = req.body.validityPeriod;
    try {
        const newSOW = yield SOW_1.default.create({
            id,
            invoiceEmailAddresses,
            customerId,
            customerPONumber,
            title,
            customerSONumber,
            validFrom,
            validUpto,
            totalValue,
            currency,
        });
        return res.status(201).json(newSOW);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createSOW = createSOW;
const getSOWs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    try {
        const sows = yield SOW_1.default.findAll({ where: { customerId } });
        return res.status(200).json(sows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getSOWs = getSOWs;
const getAllSOWs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sows = yield SOW_1.default.findAll();
        return res.json(sows);
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'Internal server error' });
    }
});
exports.getAllSOWs = getAllSOWs;
//# sourceMappingURL=sowController.js.map