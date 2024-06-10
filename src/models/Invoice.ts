import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../PostgresDB/pgConfig';
import SOW from './SOW';
import SOWPaymentPlan from './SOWPaymentPlan';
import Client from './Client';

interface InvoiceAttributes {
  id: string;
  TotalInvoiceValue: number;
  SOWId: string;
  Status: string;
  SOWPaymentPlanId: string;
  InvoiceSentOn: Date;
  CustomerId: string;
  InvoiceVersionNo: number;
  // InvoiceAmount: number;
  // InvoiceTaxAmount: number;
  // PaymentReceivedOn:Date;
}

// interface InvoiceCreationAttributes extends Optional<InvoiceAttributes, 'id'> {}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
   id!: string;
   TotalInvoiceValue!: number;
   SOWId!: string;
   Status!: string;
   SOWPaymentPlanId!: string;
   InvoiceSentOn!: Date;
   CustomerId!: string;
   InvoiceVersionNo!: number;
   InvoiceAmount!: number;
   InvoiceTaxAmount!: number;
   PaymentReceivedOn?: Date;
   SOW?: SOW;
   SOWPaymentPlan?: SOWPaymentPlan;
   Client?: Client;
}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    SOWId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CustomerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TotalInvoiceValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SOWPaymentPlanId:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    InvoiceSentOn: {
      type:DataTypes.STRING,
      allowNull:false
    },
    InvoiceVersionNo:{
      type:DataTypes.INTEGER,
      allowNull:false,
    } ,
  },
  {
    sequelize,
    modelName: "Invoice",
  }
);

// Define associations 
Invoice.belongsTo(SOW, { foreignKey: 'SOWId' });
Invoice.belongsTo(SOWPaymentPlan, { foreignKey: 'SOWPaymentPlanId' });
Invoice.belongsTo(Client, { foreignKey: 'CustomerId' });

export default Invoice;