"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sowController_1 = require("../controllers/sowController");
const router = express_1.default.Router();
router.post('/createSOW', sowController_1.createSOW);
router.get('/:customerId', sowController_1.getSOWs);
router.get('/', sowController_1.getAllSOWs);
exports.default = router;
//# sourceMappingURL=sowRoutes.js.map