"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizationController_1 = require("../controllers/organizationController");
const router = express_1.default.Router();
router.post('/register', organizationController_1.registerOrganization);
router.post('/login', organizationController_1.loginOrganization);
// gettin this post route to render the ejs file
// router.get('/register', (req, res) => {
//   res.render('OrgRegister.ejs');
// });
// now it will render the login page
// router.get('login', (req, res) => {
//   res.render('OrgLogin.ejs');
// });
exports.default = router;
//# sourceMappingURL=organizationRoutes.js.map