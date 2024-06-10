"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const SOW_1 = __importDefault(require("./SOW"));
const Client_1 = __importDefault(require("./Client"));
class SOWPaymentPlan extends sequelize_1.Model {
}
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: SOW_1.default,
            key: 'id',
        },
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: Client_1.default,
            key: 'id',
        },
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOWPaymentPlan',
});
// Associations
SOW_1.default.hasMany(SOWPaymentPlan, { foreignKey: 'sowId' });
SOWPaymentPlan.belongsTo(SOW_1.default, { foreignKey: 'sowId' });
Client_1.default.hasMany(SOWPaymentPlan, { foreignKey: 'customerId' });
SOWPaymentPlan.belongsTo(Client_1.default, { foreignKey: 'customerId' });
exports.default = SOWPaymentPlan;
//# sourceMappingURL=SOWPaymentPlan.js.map