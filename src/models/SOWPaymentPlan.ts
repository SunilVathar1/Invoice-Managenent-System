import { DataTypes, Model } from 'sequelize';
import sequelize  from '../PostgresDB/pgConfig';
import SOW from './SOW';
import Client from './Client';

interface SOWPaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

class SOWPaymentPlan extends Model<SOWPaymentPlanAttributes> implements SOWPaymentPlanAttributes {
   id!: string;
   sowId!: string;
   customerId!: string;
   plannedInvoiceDate!: Date;
   totalActualAmount!: number;
 
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Client,
        key: 'id',
      },
    },
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOWPaymentPlan',
  }
);

// Associations
SOW.hasMany(SOWPaymentPlan, { foreignKey: 'sowId' });
SOWPaymentPlan.belongsTo(SOW, { foreignKey: 'sowId' });

Client.hasMany(SOWPaymentPlan, { foreignKey: 'customerId' });
SOWPaymentPlan.belongsTo(Client, { foreignKey: 'customerId' });

export default SOWPaymentPlan;
