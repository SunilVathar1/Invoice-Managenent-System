"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const Invoice_1 = __importDefault(require("./Invoice"));
class InvoiceLineItem extends sequelize_1.Model {
}
InvoiceLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    InvoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: Invoice_1.default,
            key: 'id',
        },
    },
    OrderNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    Unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'InvoiceLineItem',
});
// Association with Invoice
Invoice_1.default.hasMany(InvoiceLineItem, { foreignKey: 'InvoiceId' });
InvoiceLineItem.belongsTo(Invoice_1.default, { foreignKey: 'InvoiceId' });
exports.default = InvoiceLineItem;
//# sourceMappingURL=InvoiceLineItem.js.map