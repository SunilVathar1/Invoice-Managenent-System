"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const creaditionals_1 = __importDefault(require("../commons/creaditionals"));
const generateToken = (organizationName, organizationEmail, organizationPassword) => {
    return jsonwebtoken_1.default.sign({ organizationName, organizationEmail, organizationPassword }, creaditionals_1.default.secreat_key, {
        expiresIn: "1h",
    });
};
exports.generateToken = generateToken;
//# sourceMappingURL=authUtils.js.map