"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const Invoice_1 = __importDefault(require("./Invoice"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    InvoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PaymentDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    ForEx: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    IndianAmount: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Payment',
    timestamps: false
});
// Association with Invoice
Invoice_1.default.hasMany(Payment, { foreignKey: 'InvoiceId' });
Payment.belongsTo(Invoice_1.default, { foreignKey: 'InvoiceId' });
exports.default = Payment;
//# sourceMappingURL=Payment.js.map