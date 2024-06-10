import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../PostgresDB/pgConfig';
import Organization from './Organization';

interface ClientAttributes {
  id: string;
  orgId: string;
  MSAValidFrom: Date;
  MSAValidUpto: Date;
  LegalName: string;
  NDASignedOn: Date;
  ShortName: string;
  NDAValidFrom: Date;
  NDAValidUpto: Date;
  AddressId: string;
  DisplayName: string;
  IsNDASigned: boolean;
  IsMSASigned: boolean;
  MSASignedOn: Date;
}

class Client extends Model<ClientAttributes> implements ClientAttributes {
   id!: string;
   orgId!: string;
   MSAValidFrom!: Date;
   MSAValidUpto!: Date;
   LegalName!: string;
   NDASignedOn!: Date;
   ShortName!: string;
   NDAValidFrom!: Date;
   NDAValidUpto!: Date;
   AddressId!: string;
   DisplayName!: string;
   IsNDASigned!: boolean;
   IsMSASigned!: boolean;
   MSASignedOn!: Date;


}

Client.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    orgId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Organization,
        key: 'id',
      },
    },
    MSAValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    MSAValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    LegalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NDASignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ShortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NDAValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    NDAValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    AddressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IsNDASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IsMSASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    MSASignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Client',
  }
);

// Association with Organization
Organization.hasMany(Client, { foreignKey: 'orgId' });
Client.belongsTo(Organization, { foreignKey: 'orgId' });

export default Client;
