import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../PostgresDB/pgConfig';
import SOWPaymentPlan from './SOWPaymentPlan';

interface SOWPaymentPlanLineItemAttributes {
  id: string;
  SOWPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}



class SOWPaymentPlanLineItem extends Model<SOWPaymentPlanLineItemAttributes> implements SOWPaymentPlanLineItemAttributes {
  id!: string;
  SOWPaymentPlanId!: string;
  sowId!: string;
  orderId!: string;
  particular!: string;
  rate!: number;
  unit!: number;
  total!: number;
}

SOWPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    SOWPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOWPaymentPlanLineItem',
  }
);

// Association with SOWPaymentPlan
SOWPaymentPlan.hasMany(SOWPaymentPlanLineItem, { foreignKey: 'SOWPaymentPlanId' });
SOWPaymentPlanLineItem.belongsTo(SOWPaymentPlan, { foreignKey: 'SOWPaymentPlanId' });

export default SOWPaymentPlanLineItem;
