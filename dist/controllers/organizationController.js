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
exports.loginOrganization = exports.registerOrganization = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Organization_1 = __importDefault(require("../models/Organization"));
const authUtils_1 = require("../utils/authUtils");
const registerOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orgResitration = req.body;
    const { email, password } = orgResitration;
    try {
        const existingOrganization = yield Organization_1.default.findOne({ where: { email } });
        if (existingOrganization) {
            return res.json({ message: 'Organization with this email already exists' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        orgResitration.password = hashedPassword;
        const newOrganization = yield Organization_1.default.create(orgResitration);
        const token = (0, authUtils_1.generateToken)(newOrganization.displayName, newOrganization.email, newOrganization.password);
        return res.json({ organization: newOrganization, token });
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'Internal server error' });
    }
});
exports.registerOrganization = registerOrganization;
const loginOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const organization = yield Organization_1.default.findOne({ where: { email } });
        if (!organization) {
            return res.json({ message: 'Organization not found' });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, organization.password);
        if (!isPasswordValid) {
            return res.json({ message: 'Invalid password' });
        }
        const token = (0, authUtils_1.generateToken)(name, email, password);
        return res.json({ organization, token });
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'Internal server error' });
    }
});
exports.loginOrganization = loginOrganization;
//# sourceMappingURL=organizationController.js.map