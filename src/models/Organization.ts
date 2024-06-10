import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../PostgresDB/pgConfig';
interface OrganizationAttributes {
  id: string;
  gstNo: string;
  panNo: string;
  legalOrganizationName: string;
  invoiceTemplateId: string;
  shortName: string;
  contactName: string;
  displayName: string;
  email: string;
  addressId: string;
  phone: string;
  password: string;
}


class Organization extends Model<OrganizationAttributes> implements OrganizationAttributes {
   id!: string;
   gstNo!: string;
   panNo!: string;
   legalOrganizationName!: string;
   invoiceTemplateId!: string;
   shortName!: string;
   contactName!: string;
   displayName!: string;
   email!: string;
   addressId!: string;
   phone!: string;
   password!: string;

}

Organization.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    gstNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    panNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legalOrganizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceTemplateId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    addressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Organization',
  }
);

export default Organization;