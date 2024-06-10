import jwt from 'jsonwebtoken';
import creaditionals from '../commons/creaditionals';

export const generateToken = (organizationName: string,organizationEmail:string,organizationPassword:string) => {
  return jwt.sign({organizationName,organizationEmail,organizationPassword}, creaditionals.secreat_key, {
    expiresIn: "1h",
  });
};
