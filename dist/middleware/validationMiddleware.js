"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateClientId = exports.validateOrganizationRegistration = void 0;
const express_validator_1 = require("express-validator");
exports.validateOrganizationRegistration = [
    (0, express_validator_1.body)('id').notEmpty().withMessage('ID is required'),
    (0, express_validator_1.body)('gstNo').notEmpty().withMessage('GST number is required'),
    (0, express_validator_1.body)('panNo').notEmpty().withMessage('PAN number is required'),
    (0, express_validator_1.body)('legalOrganizationName').notEmpty().withMessage('Legal organization name is required'),
    // body('invoiceTemplateId').notEmpty().withMessage('Invoice template ID is required'),
    (0, express_validator_1.body)('shortName').notEmpty().withMessage('Short name is required'),
    (0, express_validator_1.body)('contactName').notEmpty().withMessage('Contact name is required'),
    (0, express_validator_1.body)('displayName').notEmpty().withMessage('Display name is required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
    (0, express_validator_1.body)('addressId').notEmpty().withMessage('Address ID is required'),
    (0, express_validator_1.body)('phone').notEmpty().withMessage('Phone number is required'),
    (0, express_validator_1.body)('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
exports.validateClientId = [
    (0, express_validator_1.param)('clientId').notEmpty().withMessage('Client ID is required'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
//# sourceMappingURL=validationMiddleware.js.map