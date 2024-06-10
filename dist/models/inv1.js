"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const SOW_1 = __importDefault(require("./SOW"));
const SOWPaymentPlan_1 = __importDefault(require("./SOWPaymentPlan"));
const Client_1 = __importDefault(require("./Client"));
// interface InvoiceCreationAttributes extends Optional<InvoiceAttributes, 'id'> {}
class inv1 extends sequelize_1.Model {
}
inv1.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    SOWId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SOWPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CustomerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TotalInvoiceValue: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    InvoiceVersionNo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    InvoiceSentOn: {
        type: sequelize_1.DataTypes.DATE,
    }
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Invoice',
});
// Define associations 
// Association with Client
inv1.belongsTo(SOW_1.default, { foreignKey: 'SOWId' });
inv1.belongsTo(SOWPaymentPlan_1.default, { foreignKey: 'SOWPaymentPlanId' });
inv1.belongsTo(Client_1.default, { foreignKey: 'CustomerId' });
exports.default = inv1;
//# sourceMappingURL=inv1.js.map