import { DataTypes, Model } from 'sequelize';
import  sequelize  from '../PostgresDB/pgConfig';
import Invoice from './Invoice';

interface InvoiceLineItemAttributes {
  id: string;
  InvoiceId: string;
  OrderNo: string;
  Particular: string;
  Rate: number;
  Unit: number;
  Total: number;
}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes> implements InvoiceLineItemAttributes {
   id!: string;
   InvoiceId!: string;
   OrderNo!: string;
   Particular!: string;
   Rate!: number;
   Unit!: number;
   Total!: number;

}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    InvoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Invoice,
        key: 'id',
      },
    },
    OrderNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'InvoiceLineItem',
  }
);

// Association with Invoice
Invoice.hasMany(InvoiceLineItem, { foreignKey: 'InvoiceId' });
InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'InvoiceId' });

export default InvoiceLineItem;
