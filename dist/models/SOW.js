"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const Client_1 = __importDefault(require("./Client"));
class SOW extends sequelize_1.Model {
}
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: Client_1.default,
            key: 'id',
        },
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    validFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    validUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOW',
});
// Association with Client
Client_1.default.hasMany(SOW, { foreignKey: 'customerId' });
SOW.belongsTo(Client_1.default, { foreignKey: 'customerId' });
exports.default = SOW;
//# sourceMappingURL=SOW.js.map