"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../PostgresDB/pgConfig"));
const Organization_1 = __importDefault(require("./Organization"));
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    orgId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: Organization_1.default,
            key: 'id',
        },
    },
    MSAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    MSAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    LegalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ShortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    NDAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    AddressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    DisplayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IsNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    IsMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    MSASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Client',
});
// Association with Organization
Organization_1.default.hasMany(Client, { foreignKey: 'orgId' });
Client.belongsTo(Organization_1.default, { foreignKey: 'orgId' });
exports.default = Client;
//# sourceMappingURL=Client.js.map