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
  CustomerId: string;
  InvoiceSentOn: Date;
  SOWPaymentPlanId: string;
  InvoiceVersionNo:number;
}

// interface InvoiceCreationAttributes extends Optional<InvoiceAttributes, 'id'> {}

class inv1 extends Model<InvoiceAttributes>implements InvoiceAttributes {
    id!: string;
    TotalInvoiceValue!: number;
    SOWId!: string;
    CustomerId!: string;
  Status!: string;
  InvoiceSentOn!: Date;
  SOWPaymentPlanId!: string;
  InvoiceVersionNo!:number;
}

inv1.init(
  {
      id: {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true,
      },
      SOWId: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      SOWPaymentPlanId:{
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
          type: DataTypes.DECIMAL,
          allowNull: false,
      },
      InvoiceVersionNo: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      InvoiceSentOn: {
        type: DataTypes.DATE,
      }
  },
  {
    sequelize,
    modelName: 'Invoice',
  }
);

// Define associations 
// Association with Client
inv1.belongsTo(SOW, { foreignKey: 'SOWId' });
inv1.belongsTo(SOWPaymentPlan, { foreignKey: 'SOWPaymentPlanId' });
inv1.belongsTo(Client, { foreignKey: 'CustomerId' });

export default inv1;