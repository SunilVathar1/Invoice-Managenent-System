"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const SOWPaymentPlan_1 = __importDefault(require("./SOWPaymentPlan"));
class SOWPaymentPlanLineItem extends sequelize_1.Model {
}
SOWPaymentPlanLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    SOWPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: SOWPaymentPlan_1.default,
            key: 'id',
        },
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOWPaymentPlanLineItem',
});
// Association with SOWPaymentPlan
SOWPaymentPlan_1.default.hasMany(SOWPaymentPlanLineItem, { foreignKey: 'SOWPaymentPlanId' });
SOWPaymentPlanLineItem.belongsTo(SOWPaymentPlan_1.default, { foreignKey: 'SOWPaymentPlanId' });
exports.default = SOWPaymentPlanLineItem;
//# sourceMappingURL=SOWPaymentPlanLineItem.js.map