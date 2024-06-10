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
exports.getClients = exports.createClient = void 0;
const Client_1 = __importDefault(require("../models/Client"));
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientDetails = req.body;
    try {
        const newClient = yield Client_1.default.create(clientDetails);
        return res.json(newClient);
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'Internal server error' });
    }
});
exports.createClient = createClient;
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = req.params;
    try {
        const clients = yield Client_1.default.findOne(clientId);
        return res.json(clients);
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'Internal server error' });
    }
});
exports.getClients = getClients;
//# sourceMappingURL=clientController.js.map