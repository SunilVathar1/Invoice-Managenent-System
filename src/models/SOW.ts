import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../PostgresDB/pgConfig';
import Client from './Client';

interface SOWAttributes {
  id: string;
  invoiceEmailAddresses: string[];
  customerId: string;
  customerPONumber: string;
  title: string;
  customerSONumber: string;
  validFrom: Date;
  validUpto: Date;
  totalValue: number;
  currency: string;
}

interface SOWCreationAttributes extends Optional<SOWAttributes, 'id'> {}

class SOW extends Model<SOWAttributes, SOWCreationAttributes> implements SOWAttributes {
   id!: string;
   invoiceEmailAddresses!: string[];
   customerId!: string;
   customerPONumber!: string;
   title!: string;
   customerSONumber!: string;
   validFrom!: Date;
   validUpto!: Date;
   totalValue!: number;
   currency!: string;
}

SOW.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceEmailAddresses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Client,
        key: 'id',
      },
    },
    customerPONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerSONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    validUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOW',
  }
);

// Association with Client
Client.hasMany(SOW, { foreignKey: 'customerId' });
SOW.belongsTo(Client, { foreignKey: 'customerId' });

export default SOW;
