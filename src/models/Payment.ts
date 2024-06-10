import { DataTypes, Model } from 'sequelize';
import sequelize from '../PostgresDB/pgConfig';
import Invoice from './Invoice';

interface PaymentAttributes {
  id :number
PaymentDate:Date
ForEx:number
Currency:string
IndianAmount:boolean
InvoiceId:string
isFullPayment:boolean
}
class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    public id!: number;
    public PaymentDate!: Date;
    public ForEx!: number;
    public Currency!: string;
    public IndianAmount!: boolean;
    public InvoiceId!: string;
    public isFullPayment!: boolean;
}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    InvoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PaymentDate:{
      type:DataTypes.DATE,
      allowNull:false
    },
    ForEx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Currency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IndianAmount:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    isFullPayment:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  },
  {
    sequelize,
    modelName: 'Payment',
    timestamps:false
  }
);

// Association with Invoice
Invoice.hasMany(Payment, { foreignKey: 'InvoiceId' });
Payment.belongsTo(Invoice, { foreignKey: 'InvoiceId' });

export default Payment;
